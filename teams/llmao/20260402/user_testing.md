# Rekindled — User Testing Synthesis

**Team:** LLmao
**Sessions:** Stage-2 user-testing sessions on the live app (`rekindled.social`)
**Compensation:** $10/session for strangers; verbal consent for friends-of-friends.

---

## What we observed

A consistent pattern of issues that fell into two buckets: **product-feels-unfinished** (UI / polish / bugs) and **content-too-thin** (the feed runs out fast and starts repeating).

Specifically, across sessions:

- **Feed exhaustion.** The events list is small. Most users hit the bottom of the feed within a minute or two of swiping.
- **Repeats.** Events the user had already seen — and in some cases already swiped on — surfaced again in the feed. Users called this out unprompted.
- **Identity / dead-ends in the app.**
  - No sign-out button. Users assumed they were "stuck" once logged in.
  - Profile picture upload didn't work. Users tried, failed, and either gave up or thought the app was broken.
  - Avatar generator produced inconsistent / off-brand images.
- **Group naming collisions.** Users created groups with the same name and got confused about which one was theirs.
- **General UI polish.** Multiple users (including ones who were positive on the concept) said the UI didn't *feel* appealing — that the experience was rough enough to undercut the calm, deliberate brand position we set in `../20260224/brand-position.md`.

The takeaway across sessions: the *concept* lands; the *execution* is what's holding back conversion and trust right now.

## What we're changing

The product changes we're committing to this week, in priority order:

1. **Expand and de-duplicate the event feed.** Pull a larger pool of events and add a server-side filter so users never see an event they've already swiped on or attended. (Owner: Maanas. This is the single biggest lift to the swipe experience.)
2. **Ship a sign-out button.** Account menu, top-right. Trivial fix, high friction-removal. (Owner: Rahul.)
3. **Fix profile picture upload.** Working file upload + image storage; show clear error states. Until it's reliable, hide the entry point. (Owner: Rahul.)
4. **Fix the avatar generator.** Replace with deterministic on-brand defaults so the avatar isn't the first impression of the brand. (Owner: Vinamra.)
5. **Prevent duplicate group names.** Server-side uniqueness check + inline error on the create-group form. (Owner: Maanas.)
6. **UI polish pass.** Bring the app surface in line with the style guide (`../20260226/style_guide.md`) — spacing, typography hierarchy, button states, card treatments. (Owner: Vinamra + Nikhil. Continuous through the week.)

## Why

User testing is the only feedback channel that reliably told us what a stranger sees in the first 60 seconds. Every issue above showed up in **multiple independent sessions** — that's the pattern threshold we said we'd act on. The content fixes (1) protect the swipe loop; the UI/auth fixes (2–4, 6) protect the brand promise; the group-name fix (5) protects the multi-user experience once cold-start kicks in.

We will re-test once these ship and report results in the next weekly update.
