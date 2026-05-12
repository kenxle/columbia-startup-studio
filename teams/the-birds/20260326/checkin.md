# Check-in — Peer Review Learnings + Product Roadmap

**Team:** The Birds
**Product:** Circles
**Date:** March 26, 2026
**Demo Day:** May 12, 2026

> Reorganized from `product_roadmap.md` into the assignment's required Part 1 (Peer Review Learnings) / Part 2 (Roadmap) structure. All substantive content is preserved from the original document.

---

## Part 1 — Peer Review Learnings

### What worked when people used our product

- The core UI concept for the "Pulse" feed and the "I'm Going" / "I'm Here" button flow.
- The React + Vite frontend foundation and Supabase authentication with `.columbia.edu` / `.barnard.edu` SSO felt clean and trustworthy.
- Concept validation: students confirmed they want a low-friction way to meet up without relying on group chats.

### What confused them or broke

- The "Empty Table" problem: if a user logs in and the Pulse feed is empty, they immediately churn. Reviewers struggled to imagine the value when the feed wasn't already busy.
- Lack of visibility into what other students are doing — reviewers wanted more signal about who's around and what they're interested in.

### Biggest gap right now

- **Cold start.** Insufficient organic event density to sustain the platform without the manual "Shadow Circles" workaround. Until the supply side is populated, the demand side has nothing to engage with.
- **User transparency / engagement signals.** Reviewers needed more visibility into other users' activities to feel motivated to participate.

### One improvement we shipped based on what we heard

Finalized our MVP Scope Document and `CLAUDE.md` to strictly define our engineering workflow, and locked in our core features vs. what we will fake/cut for launch. Concretely: committed to shipping the **Columbia Events scraper** (planned for Week 10) as the primary mitigation for the cold-start problem reviewers flagged. Link: `20260305/mvp_doc.md` and `20260305/CLAUDE.md`.

---

## Part 2 — Product Roadmap

### What we need to learn about our product

1. **Will students actually join a scraped event if no one else has tapped "I'm Going" yet?** Does the scraped event act as a sufficient social catalyst, or does it feel like a sterile directory?
2. **What level of user transparency is the "sweet spot"?** How do we show past/future circle history to build trust and connection without violating privacy or feeling like passive tracking?
3. **What is the critical mass of daily active users required inside Morningside Heights to make the "Pulse" feel organically alive?**

### What we need to build

| Week | Dates | Build Focus | Who |
|------|-------|-------------|-----|
| **9** | Mar 24–28 | Frontend core views (Pulse feed, Circle details). Supabase schema setup and SSO auth route. | Arjun (FE), Geonsik (BE) |
| **10** | Mar 31 – Apr 4 | Event Scraper (Columbia websites/emails) to solve cold start. User History / Transparency UI. | Geonsik (BE), Arjun (UI) |
| **11** | Apr 7–11 | "I'm Here" notification flow. "Ghosting Penalty" / Reliability Score logic integration. | In Keun (Workflow), Geonsik |
| **12** | Apr 14–18 | QA, bug bashing. Micro-influencer onboarding and manual seed testing. | Alessandro (QA), All |
| **13 (freeze Apr 23)** | Apr 21–25 | Final polish, performance optimization, marketing push prep. | All |

_After Week 13: product is frozen. No new features. Only bug fixes and data collection._

### Demo Day vision

**What does success look like on May 12?**

- A live, buzzing instance of Circles restricted to Morningside Heights, with real Columbia students using it to log their locations and find study groups or coffee runs.
- A demonstrated solution to the cold start problem via our event-scraping pipeline and a highly engaged early user base.

**The story we want to tell:**

Columbia students are starved for connection but paralyzed by the friction of scheduling. Circles replaces the anxiety of the group chat with the simplicity of a live heatmap, proving that "intent + proximity" is the future of campus social life.

**Data / metrics needed to support that story:**

- Number of active Circles created organically vs. joined from scraped events.
- "Join" conversion rate (how many users who open the app tap "I'm Going").
- Retention / repeated usage during midterm weeks — our highest stress / intent period.

### Biggest open question

> Will the transition from "Scraped Official Events" to "Organic User-Generated Circles" happen naturally, or will users treat the app as just another campus event directory rather than a spontaneous lifestyle / social tool?
