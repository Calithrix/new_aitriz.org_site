# Board-demo audit — new aitriz.org vs live aitriz.org

**Date:** Saturday, 26 September 2026  
**Scope:** `Calithrix/new_aitriz.org_site` @ `2d92ca5` (main) vs production Joomla at https://www.aitriz.org/  
**Status of this repo:** static board prototype. Not a cutover. Live Joomla stays live.

This is a page-by-page content, link, accessibility, and board-tripwire review. Findings are from reading every HTML file in the repo and crawling the matching live pages the same day. Do not treat unverified items as facts.

## How to read this

| Severity | Meaning |
| --- | --- |
| **Blocker for board review** | A director will notice this in the first five minutes, or it states something the live site does not. Fix or wrap in a Placeholder box before the walkthrough. |
| **Should fix** | Wording drift, missing live content a member will look for, weak/wrong outbound links, a11y defects. |
| **Note** | Context, intentional prototype limits, or live-site problems the demo correctly improved. |

---

## Executive summary

The prototype is a coherent six-page public site with the live identity (charcoal / royal blue / khaki, Raleway + Lato, lamp logo) and much cleaner copy than Joomla. It already fixes live typos (`pround`, `Sponship`, `fertal`, `Directrory`, `non-for-profit`, `Perdue`) and standardizes the founder's name to **Genrikh**.

What will trip a board member is not the design. It is four classes of fact:

1. **Dates and a portal that do not exist on the live homepage body.** TRIZCON 2026 is dated 3–5 November 2026 on the demo home and events pages, and every “TRIZCON 2026 portal” button points at `https://www.aitriz.org/` (the live homepage).
2. **Money.** Join-page prices ($120 / $35 / $60 / $950) are used, and the demo itself warns that another live page still shows $95 / $25 / $50. Student copy invents a “special” conference discount the live student plan does not define.
3. **Who is on the site.** Footer sponsor logos do not match the live Our Sponsors roster. The five named Tulane Associates from May 2026 are missing from the home page. Awards stop at 2019. The lifetime roll is “30+” instead of the 34 named members.
4. **Claims a lawyer or MATRIZ person will ask about.** “Only organization authorized to use his name.” “One of only two international TRIZ certification bodies.” Iran on the certified-countries list. Master level “to be established.”

Placeholder boxes are used well elsewhere. The TRIZCON dates are the exception — they are presented as fact.

---

## Page map

| Demo file | Live counterparts |
| --- | --- |
| `index.html` | https://www.aitriz.org/ |
| `pages/triz.html` | https://www.aitriz.org/triz · https://www.aitriz.org/altshuller |
| `pages/events.html` | https://www.aitriz.org/triz-event-list · year pages · /triz-event-list/awards · /webinar-videos |
| `pages/learn.html` | https://www.aitriz.org/triz-training · certification pages |
| `pages/membership.html` | https://www.aitriz.org/membership/join · /membership · /sponsorship · /donations · /membership/lifetime |
| `pages/library.html` | article series, /community-news/triz-news, /visit-our-store |
| `pages/about.html` | /about-us · /about-us/objectives · /about-us/elected-officers · /about-us/ai-bylaws · /about-us/standing-committees · /about-us/taxes · /contact-us |

Demo nav (all seven files): TRIZ · Events · Learn · Membership · Library · About · Join.

Live surfaces with **no dedicated demo page** (outbound or omitted): General Store catalog, member login / restricted archives, full bylaws text, Form 990 files, organization directory, contact form, news-submission workflow, certified-practitioners list, TRIZ Masters list, memorial, 1999–2015 TRIZCON years, QR / abstract portal.

That compression is consistent with README.md (“Not a Joomla clone”). Call it out in the walkthrough so directors do not think those functions vanished.

---

## Blockers for a board walkthrough

### B1. TRIZCON 2026 dates stated as fact

Demo `index.html` and `pages/events.html` list **3–5 November 2026** in the facts list and in the banner `alt` text. Live homepage body copy on 26 Sep 2026 says the conference is coming, hosted by CIMAT in Mexico, and that a portal is being created. It does not print those dates in the text we crawled.

The banner image itself may carry the dates (file: `assets/events/trizcon2026-banner.png`, sourced from the live `/images/TRIZCON2026/` folder). If the conference committee has locked dates only on the artwork, say so in a Placeholder. Do not leave them as bare HTML facts.

Altshuller's 100th anniversary is **15 October 2026** — three weeks from this review, and *before* a 3–5 November conference. The ED letter on home and about asks members to “make Altshuller proud on his 100th anniversary.” A director will connect those two calendars.

### B2. “TRIZCON 2026 portal” is the live homepage

Both CTAs:

- `index.html` — `href="https://www.aitriz.org/"` labeled “TRIZCON 2026 portal”
- `pages/events.html` — same href, same label

Live still describes the portal as in process (QR mentioned on the homepage). Sending a board member to the current Joomla home is embarrassing. Either link a real portal URL or change the label to “Live site (portal forthcoming)” and keep it in a Placeholder.

### B3. Membership price schedule is not settled

Demo `pages/membership.html` uses the **join** page schedule and already flags the conflict:

| Plan | Demo / live `/membership/join` | Live `/membership` overview (older figures) |
| --- | --- | --- |
| Free trial | $0 / 6 months | free / temporary |
| Annual | $120 | $95 |
| Student | $35 | $25 |
| Retired | $60 | $50 |
| Lifetime | $950 | $950 |

The Placeholder on the plans section is correct. The board must pick one schedule before this page is shown as “the new site.”

Student-plan wording also drifted: demo says “Special student discount to the annual conference.” Live student copy grants the **same 10%** conference discount as annual members. Do not invent a second discount.

### B4. Footer sponsor roster does not match live Our Sponsors

Live https://www.aitriz.org/our-supporters on 26 Sep 2026 shows:

- Fox Pest Control
- Technical Innovation Center, Inc.
- David Drummonds

Demo global footer (every page) shows logos for:

- Post University, Malcolm Baldrige School of Business
- Innovation-TRIZ
- Technical Innovation Center, Inc.
- Kent State University
- WorkForce Planning Associates, Inc.
- Pratt & Whitney Rocketdyne

`pages/membership.html` additionally renders `assets/sponsors/fox.png` (Fox Pest Control). That logo is **not** in the global footer.

Pratt & Whitney Rocketdyne is a retired corporate name. Those extra marks were copied from live Joomla footer banner files (`assets/README.md`). They are stale on the live template too. A board member who just looked at Our Sponsors will ask why six logos appear here.

### B5. Strong institutional claims without a confirm box

Repeated on home, about, membership, and TRIZ pages:

- “The Institute is the only organization officially authorized by Genrikh Altshuller to use his name.”
- About stats grid: **“2 of 2 — One of only two international TRIZ certification bodies.”**
- Learn page: qualifications “compatible with those conferred by the International TRIZ Association (MATRIZ).”
- Learn page countries list includes **Iran**.
- Master certification: “a fourth level to be established once the Board agrees how to select and qualify candidates” / evaluation “To be determined.”

Any one of these is a legitimate board question. The “2 of 2” cell is also just cryptic on a history stats grid.

---

## Page-by-page

### `index.html` — Home

**What is carried over well**

- Hero line matches live: “Stop learning to innovate through trial and error.”
- Three doors (Member / Training / Certification) echo the live strip.
- ED letter excerpt is cleaned (live leftover “This version keeps your honest reflection…” is gone; `pround` → `proud`; `100 anniversary` → `100th anniversary`).
- Company chips and “TRIZ works” list are recognizably the live “Powerful solutions grow on TRIZ” block.
- Contact block matches live `/contact-us`: 100 Barber Avenue, Worcester, MA 01606; 508-799-6601; `ai@triz.org`.

**Wording / content drift**

- Founder spelling: demo **Genrikh**; live homepage slider **Genrick**; Shulyak PDF **Genrich**. Three spellings in the ecosystem. Demo chose the best one; tell the board that is intentional.
- Home “TRIZ works” list dropped two live factors that `triz.html` still has: “It is very general” and “It reduces the resources required to generate a solution set.”
- Company lists differ between `index.html` and `triz.html` (home adds NASA, Toyota, Rolls Royce, J&J, Shell, Lockheed Martin; TRIZ page keeps GM, Chrysler, Kodak, Exxon, Rockwell, Delphi, Boston Scientific, S.C. Johnson). Neither list is wrong; they are not the same list.
- Tulane home blurb: “Four years of TRIZ… students may sit for the Institute's Associate certification exam.” `learn.html` is more current (12 students, five passed May 2026). Live homepage names the five Associates: **Maxwell Dunn, Morgan Lyon, Mariana Pirela Ramirez, Marisa Ricci, Matthew Vuong**. Dropping the names is a recognition-vs-privacy decision the board should make on purpose.
- Hero lede adds “The Institute teaches it, certifies it, and gathers the people who use it” — not on the live slider. Fine as new framing; not a quote from live.

**Links**

- Internal nav and section targets (`#trizcon`, membership `#join`) resolve.
- TRIZCON portal CTA is B2 above.

### `pages/triz.html` — What is TRIZ

**Carried over well**

- Definition, TREEZ pronunciation, 1946 patent study, Soviet underground history, QFD / Six Sigma / Lean complementarity.
- Three testimonials (Prince, Dunn, Burrus) match live `/triz`.
- 40 principles list looks standard.
- Body of Knowledge section correctly credits Litvin / Petrov / Rubin (MATRIZ) and Victor Fey (Institute). PDF at https://www.aitriz.org/articles/TRIZ_Body_of_Knowledge.pdf is live.
- Shulyak intro PDF at https://www.aitriz.org/articles/40p_triz.pdf is live (uses “Genrich”).

**Drift / gaps**

- Altshuller bio is much richer than the live `/triz` stub (Baku, first patent at 14, Caspian patent office, five levels, Siberian camp, “University for One,” Altov). That material exists in the live Altshuller archive; it is not invented, but it is a longer public biography than the current `/triz` page.
- “Only organization officially authorized…” again, with no Placeholder.
- TRIZ Masters CTA points at https://www.aitriz.org/triz/triz-masters (page exists; list is stale).

### `pages/events.html` — Events & TRIZCON

**Carried over well**

- “Unchain your brain,” family-friendly conference, 10% member discount.
- 2025 Riga / University of Latvia / 6–7 Oct 2025 / pre-conference 3 Oct / AI-in-education theme matches live `/trizcon2025`.
- Webinar series names match live `/webinar-videos`: Systematic Innovation Methods · The Soft Side of TRIZ · Guided Brainstorming.
- Awards categories and 2016–2019 recipients match live `/triz-event-list/awards`.

**Problems**

- B1 and B2 (dates + portal).
- Theme row is “To be announced” — good, this is how the dates row should look until confirmed.
- Archive skips **2022** entirely (2025, 2024, 2023, 2021, 2020, 2019–2016).
- 2018 / 2017 / 2016 “Review for members” links go to `membership.html`, not the live member-only year reviews.
- https://www.aitriz.org/trizcon2024-2 exists (200).
- https://www.aitriz.org/trizcon2023-1 exists (200). A parallel crawl reported the body describing 2024 content — treat as a **live misroute**, not a demo invention. Still a bad target to send a director to unlabeled.
- https://www.aitriz.org/trizcon2021 and `/trizcon2020` exist (200).
- Awards frozen at 2019 on **both** sites. Live awards page still uses “Genrick Altshuller” and a “thier” typo. Demo cleaned the names. Board will still ask why seven conference years have no honorees.
- Inherits live phrase “vast **collage** of professionals.”

### `pages/learn.html` — Learn & certify

**Carried over well**

- Training listings dated Sep–Nov 2026 for Zinovy Royzen / TOP-TRIZ and the TIC Associate-prep workshop, with a “as of September 2026, confirm with the provider” disclaimer. Matches the spirit of `/triz-training`.
- Tulane block has the current-year numbers and the Adjerid quote.
- Associate / Practitioner mechanics (open-book, hours, 75%, 14-day results) look like the live certification pages.
- Sample PDF https://www.aitriz.org/documents/Certification/ASSOCIATE_TEST_SAMPLE.pdf is live.
- Test application https://www.aitriz.org/triz-certification/test-application is live.

**Problems**

- Homepage certification door sells Associate, Practitioner, Specialist. Learn page adds Master as “to be established.” Fine if labeled; the home door does not mention Master.
- Specialist on live includes an **$800 fee**, a thesis with named sections, an 8-week submission window, and a 3-member defense. Demo compresses this to “paper on an advanced topic and an interview” and omits the fee.
- Test application still says exams are held in **Boston, MA or Detroit, MI** and that dates are “not established.” Four-week (Associate/Practitioner) / two-month (Specialist) lead times. If the Institute now tests at Tulane or online, this outbound page will contradict the demo's university story.
- Certified-practitioners list (outbound) is stale: many 2010 dates, some 2016–2019, 2020 rows blank. It will not show the five 2026 Tulane Associates.
- Recommended-references list is useful and not on the live certification landing in this form.
- Iran appears in “Countries with TRIZ certifications.”

### `pages/membership.html` — Membership

**Carried over well**

- Benefit list (archives, Izobretenia, Inside TRIZ, TRIZ Features, Hipple series, 10% store, 10% conference) matches `/membership/join`.
- Corporate Platinum–Iron table and Legacy Support / website / newsletter dollar amounts match live `/sponsorship`.
- Donate CTA to https://www.aitriz.org/donations exists (endowment goal $500,000, $100+ gifts).
- Lifetime CTA to https://www.aitriz.org/membership/lifetime exists (34 named members).

**Problems**

- B3 prices and student-discount wording.
- “30+ lifetime members” undercounts the live roll of 34.
- Fox logo only on this page (see B4).
- Checkout correctly stays on the live join page.

### `pages/library.html` — Library

**Carried over well**

- Featured items match current live homepage / news: Walton / Rehlko microgrid piece (5 Dec 2025), Sidorec supply-chain piece, Nakagawa earthquake / TRIZ Home Page in Japan updates through 15 Sep 2025.
- Series cards point at live sections that exist: Inside TRIZ, TRIZ Features, Soft Side of TRIZ, Curries Corner.
- Blog / Ah Ha / Games / Memorial chips point at live URLs that exist.

**Problems**

- Almost all reading is outbound. There is no local article body. That is honest for a prototype; a director clicking “Library” will expect a shelf, not a directory of Joomla links.
- General Store CTA https://www.aitriz.org/visit-our-store returned **no usable catalog** on crawl (“No content found”). Placeholder on the demo shelf is correct; the button still sends people into an empty-looking store.
- Featured “Read more” links on the first two articles both go to the Inside TRIZ *index*, not the article permalinks.

### `pages/about.html` — About

**Carried over well**

- 1995 TIC approach / 1998 founding paragraph matches live `/about-us` (demo upgrades “non-for-profit” → “not-for-profit”).
- Mission / who-we-serve / “TRIZ is the tool, you are the force” matches the live Institute page.
- Objectives list is a faithful condensation of https://www.aitriz.org/about-us/objectives. Live purposes 3–6 are longer (facilities for conferences; pamphlets and literature; documents / books / notes; communications to journals). Demo collapsed those.
- Officers as of April 2026 match live `/about-us/elected-officers` exactly: President Mansour Ashtiani (2nd term), VP Bob King, Treasurer Jon Ezickson, Secretary Andres Meraz.
- Address, phone, fax 508-799-9944, email, and contact-form outbound all match `/contact-us`.
- Governance Placeholder (“bylaws, directory, Form 990 stay on Joomla until the board approves moving them”) is the right pattern.

**Problems**

- Legal name on live is **The Altshuller Institute for TRIZ Studies, Inc.** Demo usually drops “, Inc.”
- Live tax index `/about-us/135-tax` and `/about-us/taxes` surface a **2017 budget**, a **2012 return**, and **FORM 990-2007**. There is no recent 990 in the public crawl. The demo “AI tax forms” link will embarrass anyone who opens it.
- Live standing committees (https://www.aitriz.org/about-us/standing-committees):

  | Committee | Chair |
  | --- | --- |
  | Membership | Vacant-2 |
  | Education | Victor Fey |
  | Publicity | David Conley |
  | Finance | Jack Ezickson |
  | Conference | Richard Langevin |
  | Publications | Jim Bradley |
  | Website | Michael Berstene |
  | By-laws | Vacant |

  Demo lists the committee names and names Fey + Langevin, and omits vacancies. **Jack Ezickson** (Finance chair, also a lifetime member) vs **Jon Ezickson** (elected Treasurer) is a name the treasurer will notice. Live committee page also publishes personal phone numbers — demo correctly does not copy those.
- Organization directory live page crawled empty / near-empty. Do not restore it without a source.
- “2 of 2” stat: see B5.

---

## Links ledger

### Working outbound (200 on 26 Sep 2026)

- https://www.aitriz.org/
- https://www.aitriz.org/contact-us
- https://www.aitriz.org/membership/join
- https://www.aitriz.org/membership/lifetime
- https://www.aitriz.org/sponsorship
- https://www.aitriz.org/donations
- https://www.aitriz.org/our-supporters
- https://www.aitriz.org/about-us/standing-committees
- https://www.aitriz.org/about-us/ai-bylaws
- https://www.aitriz.org/trizcon2025
- https://www.aitriz.org/trizcon2024-2
- https://www.aitriz.org/trizcon2023-1 (exists; year labeling suspect)
- https://www.aitriz.org/trizcon2021
- https://www.aitriz.org/trizcon2020
- https://www.aitriz.org/triz-event-list/awards
- https://www.aitriz.org/webinar-videos
- https://www.aitriz.org/triz-certification/test-application
- https://www.aitriz.org/triz-articles/inside-triz
- https://www.aitriz.org/triz-articles/curries-corner
- https://www.aitriz.org/articles/TRIZ_Body_of_Knowledge.pdf
- https://www.aitriz.org/articles/40p_triz.pdf
- https://www.aitriz.org/documents/Certification/ASSOCIATE_TEST_SAMPLE.pdf

### Wrong, empty, or fragile

| URL in demo | Problem |
| --- | --- |
| `https://www.aitriz.org/` labeled “TRIZCON 2026 portal” | Homepage, not a portal |
| `https://www.aitriz.org/visit-our-store` | Page exists; catalog crawl was empty |
| `https://www.aitriz.org/about-us/taxes` | Thin / stale filings (2007 990, 2012, 2017 budget). Live About index also points at `/about-us/135-tax` |
| `https://www.aitriz.org/trizcon2023-1` | 200, but year routing on live is untrustworthy |
| 2018–2016 “Review for members” | Points at `membership.html`, not the year review |
| Featured article “Read more” | Series index, not the article |

Internal anchors (`#join`, `#support`, `#certification`, `#trizcon2026`, `#governance`, `#contact`, `#altshuller`, `#body-of-knowledge`, `#universities`, `#director`) match ids on the destination pages.

Relative paths are consistent: `index.html` uses `pages/…` and `assets/…`; inner pages use `../index.html`, `../assets/…`, sibling `*.html`.

---

## Accessibility

Good bones: `lang="en"`, viewport, semantic `<header>` / `<nav>` / `<main>` / `<footer>`, `aria-label="Primary"` and “On this page,” `aria-current="page"` on the active item, visible focus is not destroyed by `outline: none`, no JavaScript dependency except a CSS checkbox menu, sponsor images have text alternatives, content images generally have real `alt`.

Defects a board a11y reviewer will write down:

1. **Logo `alt=""`** on the header *and* footer of every page. Adjacent wordmark reduces the harm; empty alt on the mark is still a fail if the image is meaningful.
2. **No skip link.** `css/site.css` already defines `.sr-only` and never uses it.
3. **`#nav-toggle` has `aria-hidden="true"`.** The visible `<label>` has `aria-label="Toggle navigation"`. Common CSS-checkbox pattern; fragile for some AT / voice-control users. `aria-expanded` is impossible without JS.
4. **No `:focus` / `:focus-visible` rules** in the stylesheet. Keyboard users get the browser default only.
5. **`scroll-behavior: smooth`** with no `prefers-reduced-motion` override.
6. **Google Fonts** from `fonts.googleapis.com` and `fonts.gstatic.com` on every page. No privacy / cookie notice. Material for EU members.
7. **Tables** on `learn.html` and `membership.html` have `<thead>` but no `<caption>` and no `scope`.
8. **Hero / page-hero text on photos** depends on a dark CSS gradient. Designed, not measured.
9. **Contrast to check before launch:** `--muted: #605e69` on `--cream: #faf8f2`; khaki `#e8e0b2` used as text on white in a few places; khaki-on-charcoal in the dark sections is the intended brand pair and is likely the strongest of these.
10. **Checkmarks** in `.checks` are CSS pseudo-elements, not text, so the list is still a real `<ul>`.

Live Joomla is worse (JS-cloaked emails, slider text splitting “T RIZ” / “I nside TRIZ”). Do not use that as the bar.

---

## Code notes

- Seven full HTML documents. Header, utility bar, footer, and sponsor row are copy-pasted. Any wording fix (sponsor roster, portal URL, legal name) must be applied seven times or it will drift *inside the prototype*.
- No build step, no JS. Matches README.
- `assets/sponsors/fox.png` is unused on six of seven pages.
- Unused / underused live content the prototype could still pull in if the board wants it: lifetime roll, named Tulane passers, standing-committee vacancies, 2022 conference slot, recent 990s (if they exist off-site).

---

## What the demo already improved (say this out loud)

Live Joomla problems the prototype does **not** reproduce:

- `pround` / `Sponship` / `fertal` / `Directrory` / `non-for-profit` / `Perdue` / `thier`
- Editorial leftover on the ED letter (“This version keeps your honest reflection…”)
- Personal phone numbers on the committees page
- “T RIZ” / “I nside TRIZ” slider clipping
- Inconsistent 501(c)3 / 501(C)3 punctuation — demo uses 501(c)(3) throughout

Those are wins. Lead with them, then walk B1–B5.

---

## Recommended board decisions

Ask the room to mark each item confirm / change / drop:

1. Official TRIZCON 2026 dates and the real portal URL.
2. Membership price schedule (join page vs overview page) and whether students get anything other than the standard 10%.
3. Whether the five May 2026 Tulane Associates are named on the public home page.
4. Current sponsor roster for the footer (drop Rocketdyne; decide on Post / Kent / WFPA / Innovation-TRIZ / Fox / Drummonds).
5. Whether “only organization authorized to use his name” and “one of two international certification bodies” stay in public copy.
6. Whether Iran stays on the certified-countries list.
7. Whether Master remains listed while “to be determined.”
8. Whether the lifetime roll and standing-committee vacancies are in-page or stay outbound.
9. What to do about tax transparency (cannot ship a 2007 990 as “full disclosure”).
10. Legal name: Inc. or no Inc.
11. Founder spelling for the Institute going forward: Genrikh (demo) vs Genrick (live home) vs Genrich (classic translations).

---

## Suggested next code pass

Priority order if the prototype is shown this week:

1. Wrap TRIZCON dates in a Placeholder, or remove them until the committee confirms.
2. Relabel or retarget the portal buttons.
3. Sync footer sponsors to the live Our Sponsors list plus any board-confirmed extras. Add Fox to the global footer or remove it from membership.
4. Change student conference language to “10% discount, same as annual members.”
5. Add `alt` on the logo, a skip link using `.sr-only`, `:focus-visible` styles, and `prefers-reduced-motion`.
6. Restore the two missing “TRIZ works” bullets on home, or delete them from `triz.html`, so the lists match.
7. Add a 2022 slot (even “not held / TBD”) so the archive does not look broken.
8. Do not host bylaws, 990s, or the organization directory in this repo until someone supplies current files.

Reusable prompt for the next pass: [`BOARD_REVIEW_PROMPT.md`](BOARD_REVIEW_PROMPT.md).
