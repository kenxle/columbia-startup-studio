# Rekindled — MVP Feature List

**Team:** LLmao
**Date:** February 2026

The five core features required for a functional v1 of Rekindled. These are scoped from the full MVP specification (`../20260303/Rekindled_MVP_Spec.pdf`) — the things we need on demo day, not a wishlist.

---

## 1. Onboarding + Social Context Capture

A short signup flow that captures the minimum information needed to match a user.

- Name, age, city
- Interest selection (3–5 activity categories)
- Social context — "What brings you here?" (new city / post-breakup / expanding circle / social reset)

This is the data the matching engine needs and the first place we communicate brand tone.

## 2. Event Discovery (Swipe Feed)

A card-based feed of upcoming activities/events.

- Each card: activity name, vibe tag (chill/social/energetic), group size, date/time, location
- Swipe right = interested, swipe left = pass
- Save/bookmark events for later

This is the user's daily loop and the primary engagement surface.

## 3. Matching Engine

The mechanism that turns swipes into groups.

- When 6+ users right-swipe the same event, form a group (cap 8)
- Prefer age proximity (±3 years) and overlapping interests
- Tiebreaker: earlier swipe timestamp

This is the core promise. Without it, swiping does nothing.

## 4. Pre-Event Transparency Screen

The screen the user sees once they're matched, before the event.

- The activity, vibe, group size, and norms
- Attendee preview (first names + short bios; no photos in MVP)
- Confirm / decline attendance

This is the "don't walk in blind" promise made concrete. It's also our biggest differentiator versus Meetup and dating apps.

## 5. Email Waitlist + Early-Access Capture

A working email capture on the landing page that feeds into the database.

- Single field, single CTA
- Confirmation + next steps (city, social context)
- Powers our demand-gen tests and our user-count metric

This is what we measure against in synthetic testing and demand gen.

---

## Out of Scope for MVP

- Native mobile app (web-responsive only)
- Profile photos
- Push notifications (email only)
- Payments / pricing tier
- Group chat (post-MVP)
- Public reviews of hangs

Each of these will go through the feature-forge process (brief → architecture → plan → implement) once the core five are validated.
