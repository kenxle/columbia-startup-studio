# Weekly Update — Apr 21, 2026

**Team:** LLmao
**Product:** [rekindled.social](https://rekindled.social)

## What we built last week

- **Bought and migrated to a new domain — `rekindled.social`.** Why: `rekindledapp.netlify.app` is fine for a prototype but it works against the brand. A clean domain matters now that we're driving paid + earned traffic, and it makes the product something we'd be willing to put in front of investors and demo-day judges.
- **Major feature + UI changes from user-testing stage 2 feedback.** Worked through the priority list in `20260402/user_testing.md` — feed de-duplication, sign-out, profile picture upload, avatar generator, duplicate group-name prevention, and a UI polish pass against the style guide. Why: every item came from multiple independent sessions, and these fixes were what stood between the concept (which lands) and the execution (which had been undercutting trust).
- **Demo prep.** Built the live demo flow + supporting assets for class. Why: demo day is around the corner; the team that can tell its story cleanly in 5 minutes wins the room.

## What we're building this week

- **Continued onboarding work** — tightening the flow further, tying the social-context capture into early matching signals.
- **Bug-fix bake-off.** Anything regression-y from last week's UI overhaul gets hunted down and squashed. We don't want to ship new surface area while old surface area is unstable.

## Current user count

Per `/api/metrics`. GA4 dashboard for the last 7 days (Apr 14–21) shows on the order of ~17 active users and ~13 new users. Numbers are still small, but the *quality* of sessions has gone up since the UI work shipped — fewer sessions ending in confusion or rage-clicks.

## Biggest blocker

**Density, still.** Even with the migration and the polish, cold-start hasn't been solved. The Columbia-campus atomic-network push is the highest-leverage thing left we haven't fully executed; everything else (paid, content, referrals) compounds off it.
