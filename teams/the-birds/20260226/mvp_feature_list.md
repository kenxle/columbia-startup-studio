# MVP Feature List — The Birds (Circles)

**Date:** February 26, 2026
**Source:** Derived from `20260305/mvp_doc.md` (Core Flow + What's Faked sections).

These are the 5 core features required for a functional v1 of Circles — not a roadmap, not a wishlist. Anything not on this list is either faked, cut, or deferred.

---

## 1. Verified SSO Sign-In (`.columbia.edu` / `.barnard.edu`)

**What:** Strict Supabase Auth gated to Columbia / Barnard email addresses.
**Why it's core:** Trust is the entire moat. Without verified-only access, the "small, dense, in-real-life" promise collapses.
**Faked?** No — built end-to-end for the MVP.

---

## 2. Pulse Feed (Live Activity View)

**What:** Real-time heatmap-style feed of currently open Circles around campus (e.g., "Alex J. is at Butler 301", "Coffee run at Joe's, 7:30pm").
**Why it's core:** This is the discovery surface. If a student opens the app and sees nothing, they churn.
**Faked?** Partially — manually seeded "Shadow Circles" backfill the feed daily until organic density is reached.

---

## 3. "I'm Going" Action (Create / Join a Circle)

**What:** One-tap action that either opens a new Circle (location + activity) or joins an existing one.
**Why it's core:** This is the entire intent layer. Replaces the group-chat coordination loop with a single tap.
**Faked?** No — built end-to-end.

---

## 4. "I'm Here" Confirmation

**What:** One-tap arrival button that notifies everyone in the Circle that the user has arrived at the location.
**Why it's core:** Eliminates the "where are you?" text fatigue and closes the coordination loop.
**Faked?** No — built end-to-end, but room-level granularity only (no passive GPS tracking).

---

## 5. Circle Detail View (Who's Going / Already There)

**What:** Per-Circle view showing the activity, time, location, list of members who tapped "I'm Going", and who has confirmed "I'm Here".
**Why it's core:** The social proof that makes someone else tap "I'm Going". Without it, the Pulse feed is just a directory.
**Faked?** No.

---

## What's Explicitly Out of the MVP

| Cut Feature | Why It's Cut |
|---|---|
| **DMs / Chat threads** | The product is the *anti-chat*. Adding messaging undoes the core thesis. |
| **Passive location tracking** | Privacy creep; we use Active-State only ("I'm Here"). |
| **Social feed / photo posting** | Drifts toward performative social. Not what students said they wanted. |
| **Push notifications beyond Circle events** | Out of scope for v1; reduces install friction. |
| **Cross-school expansion** | Density first. Morningside Heights only until ~1,000 verified users. |

---

## Build Ownership (cross-reference with `20260305/mvp_doc.md`)

| Feature | Primary Owner |
|---|---|
| SSO Sign-In | Geonsik (BE) |
| Pulse Feed | Geonsik (BE) + Arjun (UI) |
| "I'm Going" action | Arjun (UI) + Geonsik (BE) |
| "I'm Here" confirmation | In Keun (Workflow) + Geonsik |
| Circle Detail View | Arjun (UI) |
| QA across all flows | Alessandro |
