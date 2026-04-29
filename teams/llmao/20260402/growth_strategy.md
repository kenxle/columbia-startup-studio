# Rekindled — Growth Strategy

**Team:** LLmao
**Live product:** [rekindled.social](https://rekindled.social) (also `rekindledapp.netlify.app`)

> Markdown version of the Growth Strategy submission. The original PDF (with GA screenshots) lives alongside this file as `Thur april 2nd SS PDF.pdf`.

---

## Product Overview

Rekindled is a social discovery app that helps users find events and meet new people based on shared interests. Users swipe through events and connect with others attending — turning online discovery into real-world social interaction.

## Target Audience

18–35 year olds who are interested in meeting new people, attending social events, and expanding their social circles: college students, young professionals, and people new to a city actively seeking social opportunities.

---

## Part 1 — The Plan (Submitted Apr 2)

### Channel 1: Short-Form Content (TikTok & Instagram Reels)

**Approach.** Engaging short-form videos that show the experience of using Rekindled — clips of swiping through events, attending real events, and meeting new people. Hooks like *"How to meet people in a new city"* or *"POV: you actually found a fun event tonight."* Posting cadence 1–2x/day, leveraging trending sounds and formats. Every video has a clear CTA pointing users to the app.

**What success looks like:**
- Views and engagement (likes, shares, comments)
- Click-through rate to the app
- New signups attributable to social traffic (UTM-tagged)

### Channel 2: Campus & Local Community Seeding

**Approach.** Partner with college organizations, student clubs, and local event hosts to seed initial users. Outreach to student groups, event organizers, and community leaders to position Rekindled as a tool that increases attendance and engagement. Offer early-access perks and featured event placement. Concentrate on dense urban / campus environments where network effects compound.

**What success looks like:**
- Users acquired through partnerships
- Events created or joined through the app
- Activation rate (users completing onboarding and reaching the feed)

### Channel 3: Referral & Word-of-Mouth Loop

**Approach.** A referral system that rewards inviting friends to join events together — premium-feature unlocks, priority access, enhanced visibility for sharers. The product is naturally viral because the value of attending an event grows with the number of people you know going. We'll emphasize sharing inside group chats and existing social circles.

**What success looks like:**
- Invites sent per user
- % of new users who arrive via referral
- Retention of referred vs. non-referred users

### Overall Definition of Success

The growth strategy is working if we see consistent increases in user acquisition, strong onboarding-completion rates, and evidence of network effects (more users joining events as the user base grows). North-star metrics: weekly active users, onboarding-conversion rate, event-participation rate.

---

## Part 2 — Results (Apr 9 update)

### Numbers (as of Apr 9)

> Pulling live from `/api/metrics` at [rekindledapp.netlify.app/api/metrics](https://rekindledapp.netlify.app/api/metrics). The live numbers below are from the GA4 dashboard for the week ending Apr 9.

- We drove **20+ real users** through the onboarding funnel for the first time during this window, hitting the floor for the assignment.
- GA4 attribution showed Instagram + campus seeding as the two channels actually producing onboarded users. Referral hadn't shipped yet, so it produced 0.

### What worked, what didn't

- **Campus / community seeding worked.** Direct outreach to Columbia students and adjacent NYC student groups produced the most onboarded users by a wide margin. The signal was clear: high-trust, high-density channels convert.
- **Short-form content was slow.** Views were fine; conversion to signups was poor. The path from a 30-second video to "open the app, finish onboarding, swipe an event" is too long without a strong incentive.
- **Referral didn't ship in time** to be measured this round.

### What we're changing next

- **Doubling down on campus seeding** — running a focused push at Columbia and adjacent NYC universities, including a few in-person sessions where we onboard people on the spot.
- **Re-cutting short-form content for a stronger hook** — instead of "look at our app," tightening to "POV: you just moved to NYC and don't know what to do this weekend." Tying every video to a specific live event in the app.
- **Shipping the basic referral loop** so we can measure it in the next window.

---

## Cold Start Strategy (Apr 9 add-on)

### 1. Cold-start type

**Network** — and specifically a **two-sided density problem**. A user only gets value if there are enough other users right-swiping the same events at the same time to form a group. No people = no groups = no product.

### 2. Hard side

The "hard side" is **users who consistently right-swipe and actually show up to hangs in NYC** — because without them, no group forms and the demand side gets a dead app.

Concretely, this is **not** a demographic. It's a specific, named cohort:

- The ~20 Columbia students from our existing user-testing pool who already have an account.
- ~10 students in our extended NYC dorm / club / iHouse network we can personally vouch for.
- ~10 friends-of-team in NYC (Maanas, Vinamra, Nikhil, Rahul's first-degree NYC contacts) who actually go to events.

Roughly 40 named individuals we can text. That's the seeded supply.

### 3. Two strategies

From the cold-start decision table:

- **Primary — Single-Player Mode.** Make the app valuable even before there's a match. The pre-event screen, curated event feed, and saved events should feel useful even if no group has formed yet. Users should leave with at least a list of events they want to go to.
- **Secondary — Atomic Network.** Pick **one** dense network (Columbia campus this week) and over-saturate it so that within that one network, the product *does* feel populated. Better to have 30 active users at Columbia than 200 thinly spread across NYC.

### 4. What we can do this week

- **Single-Player Mode:** ship a "Saved Events" view + a one-tap "Add to calendar" so the swipe feed is useful even with zero matches. Owner: Vinamra, by Friday.
- **Atomic Network:** in-person onboarding session at Columbia (table on Low Plaza or in a dorm common room). Sign up 30 students on the spot, all into the same week of events. Owner: Nikhil + Maanas, this Thursday.
