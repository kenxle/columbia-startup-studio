# Rekindled — Demand Test Plan

**Team:** LLmao
**Date:** February 2026
**Test window:** ~5 days, ~$200 total budget

---

## Audience

**Primary audience:** 22–30 year olds in NYC who recently moved to the city or are rebuilding their social circle after a transition (move, breakup, new program, post-grad social reset).

**Targeting (Meta Ads):**
- Location: New York, NY (25-mile radius)
- Age: 22–30
- Interests: Eventbrite, Meetup, Bumble BFF, yoga studios, Time Out NY, group fitness, museum memberships, Resy, board game cafés
- Behaviors: "Recently moved" / new movers, frequent travelers (proxy for transition)
- Exclusion: people who have already engaged with our page

**Why this audience:** synthesis showed transition moments drive demand and that activity-first users actively avoid swipe-based dating apps. NYC is dense enough to seed a city-specific cohort and is where the founding team can support events.

---

## Two Angles (A/B)

We are testing two messaging frames against the same audience. Both point to the same landing page; the only variable is the ad creative + copy.

### Angle A — "Don't walk in blind" (Anxiety-reduction)

- **Headline:** Don't walk in blind.
- **Subhead:** Activity-based hangs in NYC — see the people, the vibe, and the format before you commit.
- **CTA:** Get early access
- **Visual:** Calm, editorial photo of a small group at a non-bar activity (yoga / museum / café).
- **Hypothesis:** the strongest pull is *predictability*, not novelty. People in transition want to know what they're walking into.

### Angle B — "New here? Find your people" (Transition-framed)

- **Headline:** New to NYC? Find your people through what you actually like doing.
- **Subhead:** Curated small-group hangs around real activities — yoga, museums, board games, climbing. No swiping.
- **CTA:** Get early access
- **Visual:** Group of 6–8 doing an activity together; warm-toned.
- **Hypothesis:** explicit transition-targeting will out-convert generic "meet people" copy because it names the exact moment the user is in.

Both angles use canonical brand language from `../20260224/brand-position.md` (calm, grounded, confident; no hype, no "rebound" framing).

---

## Budget

| Item | Budget |
|------|--------|
| Meta Ads (Instagram + Facebook feed/stories) | ~$200 over 5 days (~$40/day) |
| Split | 50/50 across Angle A and Angle B |

We expect ~5,000–8,000 impressions per angle at this spend in NYC.

## Success Threshold

**Committed before launch (so results aren't rationalized):**

- **Landing-page conversion (visit → email):** ≥ 5% on at least one angle
- **Total signups across both angles:** ≥ 30
- **Cost per signup:** ≤ $7
- **Statistical-ish gut check:** the winning angle must out-convert the losing angle by ≥ 30% to count as a real signal at this budget

If neither angle clears 5% conversion at ≤ $7/signup, the demand isn't there at this targeting and we re-cut the audience before re-testing.

---

## Pre-Flight Checklist

- [x] Conversion works end-to-end (waitlist form fires, thank-you state shown)
- [x] UTMs on every ad link (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content` for angle)
- [x] Simple creative ready (1 static image per angle; 1 short video for Angle A as stretch)
- [x] Naming convention: `LLmao_Rekindled_AngleA_2026-02` / `LLmao_Rekindled_AngleB_2026-02`
- [x] Pixel installed on landing page; "Lead" event firing on email submit
- [x] Daily-spend cap set on each ad set so we don't blow the budget early

---

## What We Report Back

After the 5-day window we'll publish:

- Impressions, clicks, CTR, landing-page sessions, signups, conversion rate per angle
- Winner + how decisively it won (or whether neither cleared the threshold)
- One paragraph: what we'd change in the next test
