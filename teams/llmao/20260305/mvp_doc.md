# Rekindled — MVP Doc

**Team:** LLmao (Maanas Karthikeyan Senthil Kumar · Vinamra Vashishth · Nikhil Chagam · Rahul Kumar Singh)
**Date:** March 5, 2026
**Demo:** March 12, 2026

> Full technical specification lives at `../20260303/Rekindled_MVP_Spec.pdf`. This doc is the short version we promised to keep on hand during the build sprint.

---

## 1. Core Flow

User → action → value, in one path:

1. User signs up (name, age, city, 3–5 interests, social context: new city / breakup / expanding circle / reset).
2. User swipes through a card-based feed of upcoming activities (yoga, museums, board games, climbing, etc.).
3. When 6+ users right-swipe the same event, Rekindled forms a small group (cap 8) matched on shared interest + age proximity.
4. Each matched user gets a pre-event screen: the activity, the vibe, the group size, the norms, and a preview of attendees (first names + short bios).
5. User confirms attendance and shows up to a hang where they already know the format and the people aren't strangers.

If we can't demo this loop in 5 minutes, we've over-scoped. So we won't.

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Language | TypeScript |
| Frontend | React 18 + Next.js + Tailwind CSS + Framer Motion |
| Backend | Node.js + Express |
| Database | PostgreSQL via Supabase |
| ORM | Prisma |
| Auth | Supabase Auth (email + Google OAuth) |
| Hosting | Vercel (frontend) + Supabase (DB/Auth); API on Railway/Render |
| Email | SendGrid (or Resend) for match notifications + waitlist confirmations |
| Analytics | PostHog (in-product), GA4 (acquisition) |

Mobile native (React Native) is a stretch goal post-MVP. Web-responsive only for demo.

## 3. Team Roles

| Person | UNI | Primary role |
|---|---|---|
| Maanas Karthikeyan Senthil Kumar | ms7492 | Backend + matching engine + data model |
| Vinamra Vashishth | vv2418 | Frontend (app prototype: swipe feed, pre-event screen) + deploy/CI |
| Nikhil Chagam | nc3244 | Landing page redesign + demand gen (ads, copy, analytics) |
| Rahul Kumar Singh | rs4777 | Onboarding flow, auth, group / chat scaffolding, post-event feedback |

"Everyone builds" is not the plan. Demand gen is owned, not shared.

## 4. What's Faked (WoZ / Concierge)

Faking the hard parts is intentional — we want to validate the loop before building the engine for real.

- **Events catalogue** — for the demo, the event feed is **manually curated by us**. We pick 15–20 real public NYC events from Eventbrite/Meetup/Resy each week and load them into the DB. No third-party API integration in MVP.
- **Group formation** — the algorithm is real (right-swipes → group), but if a group doesn't fill organically, we **manually nudge and seed** users into it from the waitlist. The user experience looks automated; the back end is concierge.
- **Norms / "vibe tags"** — each event's `chill / social / energetic` tag is hand-set by us, not inferred.
- **Attendee bios** — generated from the onboarding context fields. No profile editor in MVP.
- **Notifications** — email only. No push. "You've been matched into a hang!" is a SendGrid template.
- **Safety / moderation** — post-event flagging exists in the schema, but review is manual (one of us looks at flags and decides).
- **Analytics** — GA4 + PostHog cover acquisition and product events. We don't have cohort tooling yet; cohort analysis is a spreadsheet.

The point of faking these is to learn whether the *experience* works. We'll automate whichever pieces survive the next two weeks.

## 5. Demand Gen Status

**What's running:**
- Live landing page at `rekindled.social` (also deployed copy at `rekindledapp.netlify.app`) with email waitlist + clear CTA.
- Synthetic testing on copy across 6 versions complete (`teams/llmao/20260224/synthetic_testing/`); winning copy is V6.
- Meta Ads campaign drafted using the demand test plan in `../20260226/demand_test_plan.md` — A/B on "Don't walk in blind" vs. "New here? Find your people." Launching this week with ~$200 over 5 days.

**Numbers (as of March 5):**
- Waitlist signups so far: small (early — pre-paid-traffic). Will report exact numbers in the next standup.
- Synthetic testing reach across 6 rounds: 100s of simulated user reactions; iterated copy 6×.
- Organic landing-page traffic: low — most visits to date have come from the synthetic testing pipeline and team referrals. Demand gen is the next push.

We will report concrete acquisition + funnel numbers from the live ad test in the Week 7 → Week 9 updates.
