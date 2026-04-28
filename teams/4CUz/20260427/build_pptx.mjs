import fs from "node:fs/promises";
import path from "node:path";

const { Presentation, PresentationFile } = await import("@oai/artifact-tool");

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const HERE = path.resolve(path.dirname(new URL(import.meta.url).pathname));

const SLIDE_W = 1280;
const SLIDE_H = 720;

const COLORS = {
  bg: "FFFFFF",
  text: "111111",
  muted: "6B7280",
  light: "E5E7EB",
  accent: "111111",
  panel: "F5F6F8",
};

const FONT = {
  title: "Aptos Display",
  body: "Aptos",
  mono: "Menlo",
};

function parseSlides(raw) {
  return raw
    .split("\\f")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.split("\n").map((l) => l.trimEnd()));
}

function isLikelyBullets(lines) {
  return lines.some((l) => l.startsWith("- ") || l.startsWith("* ") || l.includes(": "));
}

function normalizeBullets(lines) {
  const out = [];
  for (const line of lines) {
    if (!line.trim()) continue;
    if (line.startsWith("- ") || line.startsWith("* ")) out.push(line.slice(2));
    else out.push(line);
  }
  return out;
}

function addChrome(slide, { pageNum, totalPages, footerRight } = {}) {
  slide.background.fill = COLORS.bg;

  const topPad = 48;
  const sidePad = 72;

  // Thin top rule (Uber-style minimal chrome).
  slide.shapes.add({
    geometry: "rect",
    position: { left: sidePad, top: topPad - 18, width: SLIDE_W - sidePad * 2, height: 2 },
    fill: { color: COLORS.light },
    line: { width: 0 },
  });

  // Footer.
  slide.shapes.add({
    geometry: "rect",
    position: { left: sidePad, top: SLIDE_H - 52, width: SLIDE_W - sidePad * 2, height: 1 },
    fill: { color: COLORS.light },
    line: { width: 0 },
  });

  const footer = slide.shapes.add({
    geometry: "rect",
    position: { left: sidePad, top: SLIDE_H - 44, width: SLIDE_W - sidePad * 2, height: 24 },
    fill: { color: COLORS.bg },
    line: { width: 0 },
  });

  footer.text = `${pageNum ?? ""}${totalPages ? ` / ${totalPages}` : ""}`;
  footer.text.typeface = FONT.body;
  footer.text.fontSize = 14;
  footer.text.color = COLORS.muted;
  footer.text.alignment = "left";
  footer.text.verticalAlignment = "middle";

  if (footerRight) {
    const right = slide.shapes.add({
      geometry: "rect",
      position: { left: sidePad, top: SLIDE_H - 44, width: SLIDE_W - sidePad * 2, height: 24 },
      fill: { color: COLORS.bg },
      line: { width: 0 },
    });
    right.text = footerRight;
    right.text.typeface = FONT.body;
    right.text.fontSize = 14;
    right.text.color = COLORS.muted;
    right.text.alignment = "right";
    right.text.verticalAlignment = "middle";
  }
}

function addTitle(slide, title) {
  const x = 72;
  const y = 78;
  const w = 860;
  const h = 90;
  const box = slide.shapes.add({
    geometry: "rect",
    position: { left: x, top: y, width: w, height: h },
    fill: { color: COLORS.bg },
    line: { width: 0 },
  });
  box.text = title;
  box.text.typeface = FONT.title;
  box.text.fontSize = 44;
  box.text.bold = true;
  box.text.color = COLORS.text;
  box.text.alignment = "left";
  box.text.verticalAlignment = "top";
  return { x, y: y + 86 };
}

function addBody(slide, lines, { top, withVisual } = {}) {
  const sidePad = 72;
  const leftW = withVisual ? 700 : SLIDE_W - sidePad * 2;

  const body = slide.shapes.add({
    geometry: "rect",
    position: { left: sidePad, top, width: leftW, height: SLIDE_H - top - 96 },
    fill: { color: COLORS.bg },
    line: { width: 0 },
  });

  const bullets = normalizeBullets(lines);
  const text = bullets.join("\n");
  body.text = text;
  body.text.typeface = FONT.body;
  body.text.fontSize = 24;
  body.text.color = COLORS.text;
  body.text.alignment = "left";
  body.text.verticalAlignment = "top";
  body.text.lineSpacingMultiple = 1.15;
  body.text.insets = { left: 0, right: 0, top: 0, bottom: 0 };

  if (withVisual) {
    const panel = slide.shapes.add({
      geometry: "roundRect",
      position: { left: sidePad + leftW + 36, top, width: 360, height: 360 },
      fill: { color: COLORS.panel },
      line: { color: COLORS.light, width: 1 },
      adjustmentList: [{ name: "adj", formula: "val 18000" }],
    });
    panel.text = "Visual / GIF\n(placeholder)";
    panel.text.typeface = FONT.body;
    panel.text.fontSize = 18;
    panel.text.color = COLORS.muted;
    panel.text.alignment = "center";
    panel.text.verticalAlignment = "middle";
  }
}

function wantsVisual(title) {
  const t = title.toLowerCase();
  return (
    t.includes("product") ||
    t.includes("competition") ||
    t.includes("traction") ||
    t.includes("market size") ||
    t.includes("business model")
  );
}

function buildDeck({ title, srcTxt, outPptx }) {
  return (async () => {
    const raw = await fs.readFile(srcTxt, "utf-8");
    const slides = parseSlides(raw);

    const presentation = Presentation.create({ slideSize: { width: SLIDE_W, height: SLIDE_H } });
    presentation.theme.colorScheme = {
      name: "TripableMinimal",
      themeColors: {
        bg1: COLORS.bg,
        tx1: COLORS.text,
        accent1: COLORS.accent,
        accent2: COLORS.muted,
        bg2: COLORS.panel,
        tx2: COLORS.muted,
      },
    };

    const total = slides.length;

    slides.forEach((lines, idx) => {
      const slide = presentation.slides.add();
      addChrome(slide, {
        pageNum: idx + 1,
        totalPages: total,
        footerRight: "tripable.pro",
      });

      const slideTitle = lines[0] ?? "";
      const bodyLines = lines.slice(1).filter((l) => l.trim().length > 0);

      // Cover slide special case (more Uber-like: big wordmark + 1-line tagline).
      if (idx === 0) {
        slide.background.fill = COLORS.bg;

        const brand = slide.shapes.add({
          geometry: "rect",
          position: { left: 72, top: 180, width: 900, height: 140 },
          fill: { color: COLORS.bg },
          line: { width: 0 },
        });
        brand.text = slideTitle || title;
        brand.text.typeface = FONT.title;
        brand.text.fontSize = 72;
        brand.text.bold = true;
        brand.text.color = COLORS.text;
        brand.text.alignment = "left";
        brand.text.verticalAlignment = "top";

        slide.shapes.add({
          geometry: "rect",
          position: { left: 72, top: 330, width: 520, height: 6 },
          fill: { color: COLORS.accent },
          line: { width: 0 },
        });

        const tagline = slide.shapes.add({
          geometry: "rect",
          position: { left: 72, top: 360, width: 900, height: 120 },
          fill: { color: COLORS.bg },
          line: { width: 0 },
        });
        tagline.text = bodyLines.join("\n");
        tagline.text.typeface = FONT.body;
        tagline.text.fontSize = 28;
        tagline.text.color = COLORS.text;
        tagline.text.alignment = "left";
        tagline.text.verticalAlignment = "top";
        tagline.text.lineSpacingMultiple = 1.15;

        // Footer override: team + URL in cover.
        const coverFooter = slide.shapes.add({
          geometry: "rect",
          position: { left: 72, top: SLIDE_H - 90, width: SLIDE_W - 144, height: 40 },
          fill: { color: COLORS.bg },
          line: { width: 0 },
        });
        coverFooter.text = "4CUz  •  tripable.pro";
        coverFooter.text.typeface = FONT.body;
        coverFooter.text.fontSize = 18;
        coverFooter.text.color = COLORS.muted;
        coverFooter.text.alignment = "left";
        coverFooter.text.verticalAlignment = "middle";
        return;
      }

      const { y: contentTop } = addTitle(slide, slideTitle);
      addBody(slide, bodyLines.length ? bodyLines : [""], {
        top: contentTop + 10,
        withVisual: wantsVisual(slideTitle) && isLikelyBullets(bodyLines),
      });
    });

    const pptxBlob = await PresentationFile.exportPptx(presentation);
    await pptxBlob.save(outPptx);
  })();
}

await buildDeck({
  title: "Tripable — Live Pitch",
  srcTxt: path.join(HERE, "pitch_draft1_live.txt"),
  outPptx: path.join(ROOT, "pitch_draft1_live.pptx"),
});

await buildDeck({
  title: "Tripable — Leave-behind",
  srcTxt: path.join(HERE, "pitch_draft1_leavebehind.txt"),
  outPptx: path.join(ROOT, "pitch_draft1_leavebehind.pptx"),
});
