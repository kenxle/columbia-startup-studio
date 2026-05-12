# Analytics Snapshot — The Birds (Circles)

**Date:** April 16, 2026
**Status:** TEMPLATE — every section below requires real data captured from the team's GA4 + Amplitude dashboards. Do not submit until each `TODO:` is replaced with actual numbers and screenshots.

> The spec (`assignments/20260416_analytics-snapshot.md`) requires three components: dashboard screenshots, the funnel with real numbers, and a 1-page written analysis using the format "numbers + insight + action."

---

## 1. Dashboards (Screenshots)

### GA4 — Acquisition Overview

TODO: Embed screenshot showing traffic sources, sessions, users for the reporting period.

`![GA4 acquisition](./screenshots/ga4_acquisition.png)`

### Amplitude — Event Segmentation

TODO: Embed screenshot showing the funnel events firing (page_view → signup_started → signup_completed → first_circle_action).

`![Amplitude events](./screenshots/amplitude_events.png)`

---

## 2. Funnel with Actual Numbers

Critical path: visitor → signup → completed onboarding → first "I'm Going" tap → first "I'm Here" confirm.

| Step | Event | Count | Conversion from previous |
|---|---|---|---|
| 1 | Landing page view | TODO | — |
| 2 | Sign-up started | TODO | TODO% |
| 3 | Sign-up completed (SSO verified) | TODO | TODO% |
| 4 | First Circle action (`I'm Going` or `Created Circle`) | TODO | TODO% |
| 5 | First `I'm Here` confirmation | TODO | TODO% |

**Channel split (where the traffic came from):**

| Channel | Visitors | Signups | Signup rate |
|---|---|---|---|
| TODO (e.g., Reddit r/columbia) | TODO | TODO | TODO% |
| TODO (e.g., Instagram DMs) | TODO | TODO | TODO% |
| TODO (e.g., Direct / word of mouth) | TODO | TODO | TODO% |

---

## 3. Written Analysis (≤ 1 page)

### Where is our biggest drop-off?

TODO: Name the specific step (e.g., "Between sign-up completed and first Circle action — we lose X out of Y users").

### What do we think is causing it?

TODO: Cite what user testing (`20260402/user_testing.md`) showed about this specific step. Numbers + qualitative insight, not speculation.

### What will we do about it?

TODO: One concrete product change shipping this week. Format: "We're cutting / adding / changing X this week because Y."

---

## Format reminder

The format we are following (from the assignment spec):

> "We drove 45 visitors from Reddit and 12 from Instagram DMs. Of the 45 Reddit visitors, 18 signed up (40%) ... Reddit is clearly our stronger channel. Of the 20 total signups, 8 completed onboarding (40%). The biggest drop-off is between account creation and completing their first [action] ... Based on our user testing, the setup form is too long. We're cutting it from 5 fields to 2 this week."

**Numbers + insight + action.** No hand-waving.
