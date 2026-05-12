# STYLE_GUIDE.md — Circles

**Purpose:** Define the visual identity for Circles so every page, screen, and asset feels cohesive. This document is also an AI onboarding doc: when handed to a code agent alongside `BRAND_POSITION.md`, the agent generates consistent, on-brand output.

> Originally drafted in `20260224/style-guide.md`. Re-filed here per the Week 6 (Feb 26) spec, which requires `STYLE_GUIDE.md` to live in `20260226/`.

---

## 1. Visual Tone

**Overall feel:** Calm, lightweight infrastructure for real-world plans — modern, simple, and sleek so students can see who's going and tap "I'm Going" without thinking.

**What it is:** Minimal, quietly confident, real-world-first, low-friction, non-performative.

**What it is not:** Not feed-like, not playful or noisy, not corporate, not event-poster hype, not chat-centric.

---

## 2. Color Palette

| Name | Hex | Role |
|------|-----|------|
| **Primary (Columbia Blue)** | `#B9D9EB` | Primary accent — main brand color for buttons, key actions, and links |
| **Secondary (Deep Columbia Blue)** | `#1D4F91` | Supporting accent — hover/active states, important highlights, emphasis text |
| **Accent (Slate)** | `#64748B` | Selective emphasis — tags, pills, subtle icons, secondary labels |
| **Background** | `#F5F7FA` | Page canvas, app background, and card backgrounds (with white as inner surfaces) |
| **Text** | `#111827` | Primary body text and headings |
| **Error** | `#DC2626` | Error states, alerts, destructive actions |

### Color Rules

- **Use Columbia Blue as the hero:** Primary buttons, key CTAs, and active "I'm Going" states should use the primary Columbia blue (`#B9D9EB`) paired with dark text or the deeper secondary blue for outlines/accents.
- **Use deep blue for contrast-heavy elements:** When you need strong contrast (e.g., small text on a solid background), use the secondary deep blue (`#1D4F91`) rather than the lighter primary.
- **Keep the canvas quiet:** Default backgrounds should be very light (`#F5F7FA` or white) so circles and CTAs stand out; avoid large blocks of saturated color.
- **Limit accent usage:** Use the slate accent (`#64748B`) for subtle UI elements (icons, tags, helper labels) so it never competes with the primary for attention.
- **Respect accessibility:** Ensure text on Columbia blue or deep blue backgrounds meets at least WCAG AA contrast (4.5:1 for body text).
- **Avoid rainbows:** Do not introduce additional bright brand colors; the palette should feel calm and focused around blues, neutrals, and a single red for errors.

---

## 3. Typography

**Heading font:** Space Grotesk (or similar geometric grotesk; fall back to system sans-serif)
**Body font:** Inter, system sans-serif

### Type Scale

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| H1 | 2.25rem | Bold | Page title, hero headline (e.g., "See who's down", "Default to going") |
| H2 | 1.75rem | Bold | Section titles (e.g., "How Circle Works", "Why Columbia Students Use Circle") |
| H3 | 1.375rem | Semibold | Subsection headers, card titles (e.g., "Live circles", "Low-friction plans") |
| Body | 1rem | Regular | Paragraph text, explanations, objections and responses |
| Small | 0.875rem | Regular | Captions, helper text, labels, timestamps (e.g., "Tonight · 7:30pm · Morningside Heights") |

### Typography Rules

- **Keep headlines short and declarative:** Prefer simple phrases like "See who's down" over long, multi-line sentences.
- **Write for scanning:** Break body text into short paragraphs and use bullets to surface key ideas.
- **Use bold sparingly:** Reserve bold for structural emphasis (key phrases like "I'm Going" or "No threads. No feeds."), not for decoration.
- **Avoid shouting:** Minimize all-caps; when used, keep them short and spaced out (letter-spacing) so they still feel calm.
- **Align with calm infrastructure:** Avoid playful display fonts or script type; typography should feel steady and utilitarian.

---

## 4. Component Patterns

### Buttons

| Type | Style | Usage |
|------|-------|-------|
| **Primary CTA** | Filled button with Columbia blue background (`#B9D9EB`), dark text (`#111827`), medium border radius (8px–10px), subtle shadow on hover | Main actions: "I'm Going", "See who's down", "Join circle", "Get Early Access" |
| **Secondary** | Outline button with 1px border in deep blue (`#1D4F91`), transparent or very light background, text in deep blue, same radius as primary | Secondary actions: "Learn more", "View details", "Share link" |
| **Tertiary / Text** | Text-only or minimally underlined link in deep blue, no border, no background except on hover | Low-priority actions: "Skip for now", "Edit preferences" |

Button behavior:

- **Hover:** Slight darkening of background or border (e.g., primary moves slightly toward `#A3CDE6`), and subtle shadow to indicate interactivity.
- **Active:** Slight inset or opacity reduction to signal tap, while keeping legibility high.
- **Disabled:** Lower opacity and no shadow; text remains readable but clearly non-interactive.

### Cards (Live Circles / Activities)

- **Background:** White (`#FFFFFF`) on the light page background (`#F5F7FA`) to create clean, simple tiles.
- **Border:** 1px solid very light gray (`#E5E7EB`) or soft shadow (small blur, low opacity) — never heavy or dramatic.
- **Border radius:** 12px to keep it modern, simple, and friendly without feeling playful.
- **Padding:** At least 16–20px inside each card to keep content feeling breathable.
- **Content layout:**
  - Top: activity title (H3 style), e.g., "Late-night Joe's pizza"
  - Middle: metadata row (time, location, count of people going) using small text and accent color for icons.
  - Bottom: primary action ("I'm Going") or state indicator ("You're going") plus avatars of people who joined.

### Form Inputs

- **Shape:** Rounded rectangles with 8px radius to match buttons and cards.
- **Default state:** 1px border in light gray (`#D1D5DB`), white background, text in primary text color (`#111827`).
- **Focus state:** Clear focus ring or border highlight in deep blue (`#1D4F91`); avoid glow effects or aggressive shadows.
- **Placeholder text:** Muted gray (`#9CA3AF`), always less prominent than entered text.
- **Error state:** Border and helper text in error red (`#DC2626`); keep the message direct and calm ("Please add your Columbia email.").
- **Labels:** Small (0.875rem) text above fields; avoid floating labels to keep the UI simple and predictable.

---

## 5. Imagery & Icons

**Icon style:** Simple, line-based icons with rounded strokes (Lucide/Heroicons-style). Use minimal detail and consistent stroke width; icons should feel like supportive scaffolding, not decorative illustrations.

**Photography/illustration style:**
- Real, candid campus-life moments with small groups (2–5 students) in authentic settings (libraries, cafes, streets around campus) rather than staged crowds.
- When using UI mockups, keep them clean and minimal: lots of white space, the Columbia blue palette, and focused on the "I'm Going" interaction and visible circles.

**What to avoid:**
- Stock photos that feel staged, overly polished, or abstract "startup" imagery.
- Screenshots or visuals that resemble infinite feeds, endless scrolling, or heavy notification UIs.
- Loud gradients, neon colors, or meme-style graphics that compete with the calm, infrastructural tone.

---

## Implementation Notes

- **CSS framework:** Tailwind CSS or a lightweight utility-first system; define a small design token set for colors, radii (8px/12px), spacing, and typography.
- **Deployment:** Optimized for static deployment (Vercel) with fast initial load and minimal client-side JavaScript.
- **Responsive:** Mobile-first design; start at 375px width and ensure the primary CTA is always visible without scrolling on key screens.
- **Interaction density:** Keep each screen focused on a single primary action; avoid complex multi-step forms or dense layouts.
- **State hierarchy:** Visually emphasize real-world commitment (who's going, when, where) over any in-app metrics.
