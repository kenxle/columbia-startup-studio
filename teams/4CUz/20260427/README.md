# 2026-04-27 — Pitch Deck Draft 1 (Tripable)

This folder contains source text used to generate the two required PDFs for `assignments/20260428_pitch-deck-draft.md`.

- `pitch_draft1_live.txt`: 10–12 slide *live* pitch draft (low text per slide).
- `pitch_draft1_leavebehind.txt`: 15–20 slide *leave-behind* pitch draft (more detail).
- `build_pptx.mjs`: builds styled `.pptx` versions from the `.txt` sources.
- `build_pdfs.py`: builds a simple text-only `.pdf` version from the `.txt` sources.

Generate PDFs (no external deps):

```sh
python3 teams/4CUz/20260427/build_pdfs.py
```

Generate styled PowerPoints:

```sh
/Users/ton/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node teams/4CUz/20260427/build_pptx.mjs
```

Notes:
- Numbers in market sizing / traction are draft placeholders where we don’t yet have validated data in-repo.
