# Weekly Update — Apr 14, 2026

**Team:** LLmao
**Product:** [rekindled.social](https://rekindled.social)

## What we built last week

- **Stage-2 user testing on the live app.** Recruited testers, ran sessions, and synthesized the results in `20260402/user_testing.md`. Why: we needed real-stranger feedback on the swipe + match flow before pushing more traffic at the funnel — driving more users into a broken feed would have wasted ad spend.
- **Worked on user onboarding.** Started reshaping the onboarding flow based on what we saw in user testing — the current flow leans too hard on profile data we never use, and skips the "what brings you here" social context that the synthesis says is the strongest predictor of intent. Why: onboarding is where conversion drops, so it's where compounding pays off most.

## What we're building this week

- **Onboarding rework — finish.** Cut filler fields, surface social-context capture, and shorten the path to the swipe feed. Goal: median onboarding time under 2 minutes.
- **Top-priority fixes from user testing:** expand + de-dupe the event feed, ship a sign-out button, fix profile picture upload, fix the avatar generator, prevent duplicate group names. Why: every one of these came up in multiple independent sessions. We said we'd act on patterns, not vibes.

## Current user count

Per `/api/metrics` at `rekindledapp.netlify.app/api/metrics`. Active users (last 7 days, GA4): on the order of ~15–20. We're treating this as the cold-start floor we have to grow off of, not a number to be proud of.

## Biggest blocker

**Cold-start density.** Even with the bug fixes, the swipe feed feels empty because we don't have enough overlapping users right-swiping the same events. The atomic-network play (in-person Columbia onboarding session) is the unblocker — until that ships, no amount of UI polish will make groups form.
