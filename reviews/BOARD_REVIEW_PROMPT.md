# Prompt — re-audit the AITRIZ board prototype against live aitriz.org

Copy everything below the line into a new agent session (or Nuntii card) when the prototype or the live Joomla site changes. Do not invent pages, prices, dates, officers, or sponsors. If a live URL 404s or returns an empty body, say so.

---

You are reviewing the static board prototype in the private GitHub repo `Calithrix/new_aitriz.org_site` against the live production site https://www.aitriz.org/ (Joomla + Cloudflare). The prototype is **not** production and must not be described as a cutover.

## Setup

1. Use the GitHub connector as user Calithrix. Confirm repo `Calithrix/new_aitriz.org_site`, default branch `main`, latest commit SHA.
2. Inventory every file. The expected public pages are:
   - `index.html`
   - `pages/triz.html`
   - `pages/events.html`
   - `pages/learn.html`
   - `pages/membership.html`
   - `pages/library.html`
   - `pages/about.html`
   - `css/site.css`
   - `assets/**` (do not treat binary assets as copy; do check `alt` and which sponsor files are actually referenced)
3. Read **every** HTML file end to end. Read `README.md` and `assets/README.md`. Skim `css/site.css` for skip-link, `:focus-visible`, `prefers-reduced-motion`, contrast tokens, `.sr-only` usage.
4. Crawl live aitriz.org starting at the homepage. Follow the main nav and every About / Membership / Events / Training / Certification / Store / Contact / News child. Record exact wording, prices, dates, officer names, sponsor names, and typos. Do not use aitriz.ai or other look-alike domains.
5. Extract every `href` in the prototype. Classify each as internal file, internal hash, live aitriz.org, or other external. Request every live URL. Mark 200 / empty / wrong-year / 404.

## Compare these pairs

| Prototype | Live |
| --- | --- |
| `index.html` | https://www.aitriz.org/ |
| `pages/triz.html` | https://www.aitriz.org/triz and https://www.aitriz.org/altshuller |
| `pages/events.html` | https://www.aitriz.org/triz-event-list, year pages (`/trizcon2025`, `/trizcon2024-2`, `/trizcon2023-1`, `/trizcon2021`, `/trizcon2020`, `/trizcon2019`), https://www.aitriz.org/triz-event-list/awards, https://www.aitriz.org/webinar-videos |
| `pages/learn.html` | https://www.aitriz.org/triz-training and certification URLs including `/triz-certification/test-application`, `/triz-certification/certified-practitioners`, `/documents/Certification/ASSOCIATE_TEST_SAMPLE.pdf` |
| `pages/membership.html` | https://www.aitriz.org/membership/join **and** https://www.aitriz.org/membership (prices have disagreed), `/sponsorship`, `/donations`, `/membership/lifetime`, `/our-supporters` |
| `pages/library.html` | `/triz-articles/*`, `/community-news/triz-news`, `/visit-our-store`, blog URLs |
| `pages/about.html` | `/about-us`, `/about-us/objectives`, `/about-us/elected-officers`, `/about-us/organization`, `/about-us/standing-committees`, `/about-us/ai-bylaws`, `/about-us/taxes`, `/about-us/135-tax`, `/contact-us` |

## Flag these categories only with evidence

### 1. Wording that drifted
Quote both sides. Typical hot spots:
- Founder spelling: Genrikh vs Genrick vs Genrich.
- ED letter (`pround`, 100th vs 100 anniversary, leftover editorial notes).
- Student conference discount language vs the live 10%.
- Specialist certification fee and defense process vs the compressed demo sentence.
- “TRIZ works” bullet lists on home vs TRIZ page vs live.
- Company-user lists that differ across pages.
- Legal name with or without “, Inc.”
- 501(c)(3) punctuation.
- Objectives list vs the full live purposes.
- “Only organization authorized to use his name.”
- “One of only two international TRIZ certification bodies” / “2 of 2.”
- MATRIZ compatibility sentence.

### 2. Missing content a board member will look for
Check for: named May 2026 Tulane Associates; TRIZCON 2026 portal / QR; 2022 conference year; awards after 2019; lifetime member roll (live has 34 names); standing-committee chairs and vacancies; full bylaws; current Form 990; organization directory; General Store catalog; member login / archives; certified-practitioners list; privacy / terms / donation disclaimer.

### 3. Broken, empty, or dishonest links
Especially:
- Anything labeled “TRIZCON 2026 portal.”
- `/visit-our-store`.
- `/about-us/taxes` and `/about-us/135-tax`.
- Year pages whose title or body is the wrong year.
- “Review for members” links that go to the membership page instead of the year review.
- Article “Read more” links that go to a series index instead of the piece.
- PDFs: `/articles/TRIZ_Body_of_Knowledge.pdf`, `/articles/40p_triz.pdf`, `/documents/Certification/ASSOCIATE_TEST_SAMPLE.pdf`.

### 4. Accessibility
- Logo `alt` in header and footer.
- Skip link. `.sr-only` defined but unused is a finding.
- `#nav-toggle` + `aria-hidden="true"` + label pattern.
- `:focus-visible` and `prefers-reduced-motion` (CSS has `scroll-behavior: smooth`).
- Tables: caption, scope.
- Third-party Google Fonts.
- Contrast of `--muted` on `--cream`, khaki as text, khaki on charcoal, hero text on photo+gradient.
- Empty buttons, missing lang, missing main — report only if present.

### 5. Board tripwires
Anything a director, treasurer, or counsel will stop the meeting for:
- Dates that are not on the live homepage body.
- Two live price lists.
- Sponsor logos that are not on `/our-supporters` (watch Pratt & Whitney Rocketdyne, Post University, Kent State, WFPA, Innovation-TRIZ, Fox Pest Control, David Drummonds).
- Jack Ezickson (Finance chair / lifetime) vs Jon Ezickson (Treasurer).
- Committee vacancies (Membership, By-laws).
- Iran on a public countries list.
- Master certification “to be determined.”
- Stale tax filings offered as “full disclosure.”
- Test sites still listed as Boston, MA or Detroit, MI.
- Personal phone numbers (do **not** copy these from live committees onto the prototype).
- Altshuller 100th anniversary date (15 October 2026) vs TRIZCON dates.

## Output

Write a new markdown file in `reviews/YYYY-MM-DD-board-demo-audit.md` with:

1. SHA reviewed and date.
2. Executive summary (one screen).
3. Blockers for a walkthrough.
4. Page-by-page notes with file path + live URL + quotes.
5. Link ledger (working / wrong / empty).
6. Accessibility list.
7. Board decisions to ask in the room.
8. Suggested next code pass.

Commit that file to `main` via the GitHub connector. Do not modify HTML, CSS, or assets in the same commit unless the user asked for fixes.

If `reviews/BOARD_REVIEW_PROMPT.md` itself is stale (new pages added, nav changed, live IA changed), update this prompt in the same commit.

## Rules

- Production Joomla is not to be edited from this repo.
- Public copy only. No member database, no personal phone numbers, no unpublished board minutes.
- Placeholder / To confirm boxes already in the HTML are a feature. Note when a fact is presented *without* one.
- Quote live typos when they matter; do not re-introduce them into the prototype.
- Prior audit for comparison: `reviews/2026-09-26-board-demo-audit.md`.
