#!/usr/bin/env python3
"""
Build `pitch_draft1_live.pdf` and `pitch_draft1_leavebehind.pdf` from the
text sources in this folder.

We write a tiny, dependency-free PDF generator (Type1 Helvetica + text only),
so we can reliably get 10–12 and 15–20 “slides” as separate PDF pages without
needing LaTeX/Pandoc/Chromium.
"""

from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
HERE = Path(__file__).resolve().parent


def _slides(src_text: str) -> list[str]:
    # Slides are separated by a literal "\f" marker.
    parts = [s.strip("\n") for s in src_text.split("\\f")]
    return [s for s in parts if s.strip()]


def _pdf_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def _build_simple_text_pdf(pages: list[list[str]]) -> bytes:
    """
    Minimal PDF:
    - letter landscape media box (792 x 612)
    - built-in Helvetica Type1 font
    - one content stream per page (text only)
    """

    objects: list[bytes] = []

    def add_obj(payload: str) -> int:
        objects.append(payload.encode("utf-8"))
        return len(objects)  # 1-based object ids

    font_obj = add_obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

    content_obj_ids: list[int] = []
    page_obj_ids: list[int] = []

    # Build per-page content streams first.
    for page_lines in pages:
        # Start near top-left; use a fixed leading.
        x = 54
        y = 560
        leading = 26
        font_size = 22

        stream_lines = [
            "BT",
            f"/F1 {font_size} Tf",
            f"{leading} TL",
            f"{x} {y} Td",
        ]
        for raw in page_lines:
            stream_lines.append(f"({_pdf_escape(raw)}) Tj")
            stream_lines.append("T*")
        stream_lines.append("ET")

        stream = "\n".join(stream_lines).encode("utf-8")
        content_obj_ids.append(
            add_obj(f"<< /Length {len(stream)} >>\nstream\n{stream.decode('utf-8')}\nendstream")
        )

    # Pages tree placeholder (filled after page objects exist).
    # We'll add page objects now, then the pages tree, then the catalog.
    # Page objects need a parent id; we don't know it yet, so we’ll create the
    # pages tree first, then update isn’t possible in PDF. Instead, we create
    # the pages tree at the end and reference it via a forward object number.
    #
    # Strategy: reserve an object id for /Pages by inserting a temporary object,
    # then create page objects referencing it, then overwrite that reserved slot.
    pages_tree_placeholder_id = add_obj("<< >>")  # will be replaced

    for content_id in content_obj_ids:
        page_obj_ids.append(
            add_obj(
                "\n".join(
                    [
                        "<< /Type /Page",
                        f"/Parent {pages_tree_placeholder_id} 0 R",
                        "/MediaBox [0 0 792 612]",
                        f"/Resources << /Font << /F1 {font_obj} 0 R >> >>",
                        f"/Contents {content_id} 0 R",
                        ">>",
                    ]
                )
            )
        )

    kids = " ".join(f"{pid} 0 R" for pid in page_obj_ids)
    pages_tree_payload = f"<< /Type /Pages /Kids [ {kids} ] /Count {len(page_obj_ids)} >>"
    objects[pages_tree_placeholder_id - 1] = pages_tree_payload.encode("utf-8")

    catalog_obj = add_obj(f"<< /Type /Catalog /Pages {pages_tree_placeholder_id} 0 R >>")

    # Build xref table
    out = bytearray()
    out.extend(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    offsets = [0]
    for i, obj in enumerate(objects, start=1):
        offsets.append(len(out))
        out.extend(f"{i} 0 obj\n".encode("utf-8"))
        out.extend(obj)
        out.extend(b"\nendobj\n")

    xref_start = len(out)
    out.extend(f"xref\n0 {len(objects)+1}\n".encode("utf-8"))
    out.extend(b"0000000000 65535 f \n")
    for off in offsets[1:]:
        out.extend(f"{off:010d} 00000 n \n".encode("utf-8"))

    out.extend(
        (
            "trailer\n"
            f"<< /Size {len(objects)+1} /Root {catalog_obj} 0 R >>\n"
            "startxref\n"
            f"{xref_start}\n"
            "%%EOF\n"
        ).encode("utf-8")
    )
    return bytes(out)


def build_pdf(src_txt: Path, out_pdf: Path) -> None:
    slides = _slides(src_txt.read_text(encoding="utf-8"))
    pages = [slide.splitlines() for slide in slides]
    out_pdf.parent.mkdir(parents=True, exist_ok=True)
    out_pdf.write_bytes(_build_simple_text_pdf(pages))


def main() -> int:
    build_pdf(HERE / "pitch_draft1_live.txt", ROOT / "pitch_draft1_live.pdf")
    build_pdf(HERE / "pitch_draft1_leavebehind.txt", ROOT / "pitch_draft1_leavebehind.pdf")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
