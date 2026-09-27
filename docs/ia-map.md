# aitriz.org redesign: Information Architecture map (board prototype)

## 1. About this map

**What this is:** a draft IA map for the static board prototype (six sections: TRIZ, Events, Learn, Membership, Library, About). It covers **public URLs only**. The source is a crawl of the live https://aitriz.org done on **2026-09-26** (`inventory.csv`, 1,025 URLs). This is a proposal for board review. Nothing here has been published or changed on the live site or in the GitHub repo.

**Crawl counts by HTTP status:** 200 = 989 · 404 = 30 · 303 redirect = 5 · not fetched (/login) = 1 · total = 1025. Of the 1,025 rows, 173 are documents (PDF/DOC/PPTX/iCal).

**Legend (action):**

- **Keep**: the page gets its own page in the new site.
- **Merge**: its content folds into another page, and the old URL 301s to that page.
- **Archive**: kept in an archive area (past events, old documents) but not shown in the main navigation.
- **Redirect**: no content is carried over and the old URL 301s somewhere else (duplicates, 404s, empty categories, login/member-system URLs).

"New home" is `Section / Sub-page`. For Merge and Redirect rows the target follows after a period. `Home` is used only for the homepage and its aliases.

## 2. Section tree

### Home
Hero, four doors, featured item. Fed by `/` (Executive Director letter, TRIZCON2026 block, featured Inside TRIZ article).

- **Home** (live URLs mapped here: Keep 1)

  *Fed by:* `/`

### TRIZ
What TRIZ is and who Altshuller was.

- **TRIZ / Ah Ha! Moments** (live URLs mapped here: Keep 1)
- **TRIZ / Body of Knowledge** (live URLs mapped here: Keep 1)
- **TRIZ / Genrich Altshuller** (live URLs mapped here: Keep 1, Merge 3)
- **TRIZ / TRIZ Masters** (live URLs mapped here: Keep 1)
- **TRIZ / What is TRIZ** (live URLs mapped here: Keep 1, Merge 1)
- **TRIZ / Genrich Altshuller / Altshuller Teaching** (live URLs mapped here: Keep 1)
- **TRIZ / Genrich Altshuller / Interview** (live URLs mapped here: Keep 1)
- **TRIZ / Genrich Altshuller / Last Communiqué** (live URLs mapped here: Keep 1)
- **TRIZ / Genrich Altshuller / Tributes** (live URLs mapped here: Keep 1, Merge 3)

  *Fed by:* `/ahha-moments`; `/altshuller`; `/altshuller/altshuller-teaching`; `/altshuller/interview`; `/altshuller/last-comunique`; `/altshuller/tributes`; `/triz`; `/triz/triz-body-of-knowledge`; `/triz/triz-masters`; Altshuller tribute articles; Legacy Altshuller category (/116-altshuller/*); Legacy TRIZ articles (…/14-triz/triz/*)

### Events
Current conference first, archive behind it.

- **Events / TRIZCON2026** (NEW page, no live URL yet; write it from the homepage TRIZCON2026 block)
- **Events** (live URLs mapped here: Merge 1)
- **Events / TRIZ Conferences** (live URLs mapped here: Keep 1)
- **Events / Webinar Series** (live URLs mapped here: Keep 1)
- **Events / Past TRIZCONs / Awards** (live URLs mapped here: Archive 1)
- **Events / Past TRIZCONs / Documents** (live URLs mapped here: Archive 17)
- **Events / Past TRIZCONs / Legacy information** (live URLs mapped here: Archive 2)
- **Events / Past TRIZCONs / TRIZCON2010** (live URLs mapped here: Archive 40)
- **Events / Past TRIZCONs / TRIZCON2011** (live URLs mapped here: Archive 45)
- **Events / Past TRIZCONs / TRIZCON2012** (live URLs mapped here: Archive 8)
- **Events / Past TRIZCONs / TRIZCON2013** (live URLs mapped here: Archive 9)
- **Events / Past TRIZCONs / TRIZCON2015** (live URLs mapped here: Archive 9)
- **Events / Past TRIZCONs / TRIZCON2016** (live URLs mapped here: Archive 1)
- **Events / Past TRIZCONs / TRIZCON2017** (live URLs mapped here: Archive 3)
- **Events / Past TRIZCONs / TRIZCON2018** (live URLs mapped here: Archive 1)
- **Events / Past TRIZCONs / TRIZCON2019** (live URLs mapped here: Archive 58)
- **Events / Past TRIZCONs / TRIZCON2020** (live URLs mapped here: Archive 3)
- **Events / Past TRIZCONs / TRIZCON2021** (live URLs mapped here: Archive 1)
- **Events / Past TRIZCONs / TRIZCON2023** (live URLs mapped here: Archive 4)
- **Events / Past TRIZCONs / TRIZCON2024** (live URLs mapped here: Archive 23)
- **Events / Past TRIZCONs / TRIZCON2025** (live URLs mapped here: Archive 25)

  *Fed by:* `/events`; `/triz-event-list`; `/triz-event-list/awards`; `/trizcon2019`; `/trizcon2019/trizcon2019-authors`; `/trizcon2019/trizcon2019-info`; `/trizcon2019/tz2019draft`; `/trizcon2019/tz2019papers`; `/trizcon2020/abstracts-papers`; `/trizcon2020/author-guidelines`; `/trizcon2021`; `/trizcon2023-1/trizcon2023-abstracts`; `/trizcon2024-2`; `/trizcon2024-2/trizcon2024-abstracts-bios`; `/trizcon2025`; `/trizcon2025/registration`; `/trizcon2025/trizcon2025-abstracts-biographies`; `/trizcon2025/trizcon2025-agenda`; `/webinar-series`; Legacy "Information" FAQ category (/99-faqs/*); Legacy TRIZCON 2010–2018 pages (abstracts, info, proceedings); TRIZCON documents & paper downloads (/documents/TRIZCON/*, /trizcon2019/**/file); TRIZCON2019 sub-pages, abstracts & papers; TRIZCON2020 sub-pages, abstracts & papers; TRIZCON2023 sub-pages, abstracts & papers; TRIZCON2024 sub-pages, abstracts & papers; TRIZCON2025 sub-pages, abstracts & papers

### Learn
Training and certification as one door.

- **Learn / Certification** (live URLs mapped here: Keep 1, Merge 5)
- **Learn / Certification Board & Register** (live URLs mapped here: Keep 1, Merge 1)
- **Learn / Certification Levels** (live URLs mapped here: Merge 5)
- **Learn / Publication Samples** (live URLs mapped here: Keep 7)
- **Learn / Training Calendar** (live URLs mapped here: Keep 1, Merge 5)

  *Fed by:* `/triz-certification`; `/triz-certification/associate-certification`; `/triz-certification/certified-practitioners`; `/triz-certification/general-provisions`; `/triz-certification/master-certification`; `/triz-certification/practitioner-certification`; `/triz-certification/specialist-certification`; `/triz-certification/summary-qualifications`; `/triz-certification/test-application`; `/triz-certification/triz-certification-board-members`; `/triz-training`; `/triz/publication-samples`; Certification history (legacy /103-certification/*); Publication sample excerpts; Training calendar event entries

### Membership
Join, give, sponsor, store.

- **Membership** (live URLs mapped here: Keep 1, Merge 5)
- **Membership / Donate & Special Projects** (live URLs mapped here: Keep 1, Merge 6)
- **Membership / Join** (live URLs mapped here: Keep 1)
- **Membership / Lifetime Members** (live URLs mapped here: Keep 1)
- **Membership / Our Sponsors** (live URLs mapped here: Keep 1, Merge 1)
- **Membership / Sponsorship** (live URLs mapped here: Keep 1, Merge 2)
- **Membership / Store** (live URLs mapped here: Keep 1)

  *Fed by:* `/donations`; `/membership`; `/membership/group`; `/membership/join`; `/membership/lifetime`; `/our-supporters`; `/sponsorship`; `/visit-our-store`; Legacy "Information" FAQ category (/99-faqs/*); Legacy Supporters article; Membership articles (legacy /115-membership/*); Special Projects articles (/113-special-projects/*); Sponsorship category alias

### Library
Articles, blog, news, videos, documents on one shelf.

- **Library / Articles** (live URLs mapped here: Keep 1)
- **Library / Blog** (live URLs mapped here: Keep 41)
- **Library / Document Archive** (live URLs mapped here: Archive 78)
- **Library / Games & Puzzles** (live URLs mapped here: Keep 12)
- **Library / News** (live URLs mapped here: Keep 81, Merge 1)
- **Library / Webinar Videos** (live URLs mapped here: Keep 1, Merge 3)
- **Library / Articles / Curries Corner** (live URLs mapped here: Keep 3)
- **Library / Articles / Inside TRIZ** (live URLs mapped here: Keep 77)
- **Library / Articles / Soft Side of TRIZ** (live URLs mapped here: Keep 15)
- **Library / Articles / TRIZ Features** (live URLs mapped here: Keep 41)
- **Library / Blog / Altshuller Institute Blog** (live URLs mapped here: Keep 1)
- **Library / Blog / Innovation in Manufacturing** (live URLs mapped here: Keep 1)
- **Library / Blog / TRIZ & Quality** (live URLs mapped here: Keep 1)
- **Library / Documents / Certification** (live URLs mapped here: Keep 6)
- **Library / Webinar Videos / Guided Brainstorming** (live URLs mapped here: Keep 1)
- **Library / Webinar Videos / Systematic Innovation Methods** (live URLs mapped here: Keep 1)
- **Library / Webinar Videos / The Soft Side of TRIZ** (live URLs mapped here: Keep 1)

  *Fed by:* `/blog`; `/blog/altshuller-institute-blog`; `/blog/innovate-mfg`; `/blog/triz-quality`; `/community-news/games`; `/community-news/triz-news`; `/triz-articles`; `/triz-articles/curries-corner`; `/triz-articles/inside-triz`; `/triz-articles/soft-side-triz-public`; `/triz-articles/triz-features`; `/webinar-videos`; `/webinar-videos/webinar-series-guided-brainstorming`; `/webinar-videos/webinar-series-systematic-innovation-methods`; `/webinar-videos/webinar-series-the-soft-side-of-triz`; Article & misc. documents (/articles/*.pdf, /images/*.docx/pptx); Blog posts; Certification PDFs (/documents/Certification/*); Curries Corner articles; Games & Puzzles items; Inside TRIZ articles; Legacy "Information" FAQ category (/99-faqs/*); Publication sample PDFs (/articles/samples/*); Soft Side of TRIZ articles; TRIZ Features articles; TRIZ News items; Webinar presenter bio (legacy /139-webinar-series/*)

### About
The Institute, governance, contact, memorial.

- **About** (live URLs mapped here: Keep 1, Merge 1)
- **About / Contact** (live URLs mapped here: Keep 1)
- **About / Governance** (live URLs mapped here: Merge 1)
- **About / Memorial** (live URLs mapped here: Keep 13)
- **About / The Institute** (live URLs mapped here: Keep 1, Merge 1)
- **About / Governance / Advisors** (live URLs mapped here: Keep 1, Merge 2)
- **About / Governance / Bylaws** (live URLs mapped here: Keep 1)
- **About / Governance / Elected Officers** (live URLs mapped here: Keep 1, Merge 2)
- **About / Governance / Standing Committees** (live URLs mapped here: Keep 1, Merge 8)
- **About / Governance / Taxes & Financials** (live URLs mapped here: Keep 1, Merge 3)

  *Fed by:* "Who We Are" article; `/about-us`; `/about-us/advisors`; `/about-us/ai-bylaws`; `/about-us/altshuller-institute`; `/about-us/elected-officers`; `/about-us/objectives`; `/about-us/organization`; `/about-us/standing-committees`; `/about-us/taxes`; `/community-news/memorial`; `/contact-us`; Advisor contact cards; Board of Directors article (lists "Board of Directors -- 2019"); Memorial articles; Organization Directory article; Standing committee contact cards; Tax/budget items (990-2007, 2012 990-EZ, 2017 budget)

## 3. Main table (page-group level)

Every item in the live top menu and left side menu has its own row. Other URLs are grouped, and `n` is the number of URLs in each group; see the Appendix for each individual URL. Where one group splits across actions or sections, it appears on more than one row.

### Home (2 rows)

| live path | title | action | new home |
|---|---|---|---|
| / | Altshuller Institute \| Serving the TRIZ Community | Keep | Home |
| /160-home-page, /160-home-page/756-ai-homepage (n=2) | Duplicate alias URLs (same body as a canonical page) — Home | Redirect | Home. Redirect to / |

### TRIZ (16 rows)

| live path | title | action | new home |
|---|---|---|---|
| /ahha-moments | Ah Ha! Moments | Keep | TRIZ / Ah Ha! Moments |
| /altshuller | Genrick Altshuller | Keep | TRIZ / Genrich Altshuller |
| /altshuller/altshuller-teaching | Altshuller Teaching | Keep | TRIZ / Genrich Altshuller / Altshuller Teaching |
| /altshuller/interview | Interview | Keep | TRIZ / Genrich Altshuller / Interview |
| /altshuller/last-comunique | Last comunique | Keep | TRIZ / Genrich Altshuller / Last Communiqué |
| /altshuller/tributes | Tributes | Keep | TRIZ / Genrich Altshuller / Tributes |
| /altshuller/who-is-altshuller | Who is Altshuller? | Redirect | TRIZ / Genrich Altshuller. Redirect to /altshuller |
| /triz | What is TRIZ? | Keep | TRIZ / What is TRIZ |
| /triz/triz-body-of-knowledge | TRIZ Body of Knowledge | Keep | TRIZ / Body of Knowledge |
| /triz/triz-masters | TRIZ Masters | Keep | TRIZ / TRIZ Masters |
| /116-altshuller/15-celebration-of-the-life-of-genrikh-altshuller, /altshuller/tributes/16-for-genrikh-stretcher-of-minds-shining-light, /altshuller/tributes/17-in-memoriam (n=3) | Altshuller tribute articles | Merge | TRIZ / Genrich Altshuller / Tributes. Merge into TRIZ / Genrich Altshuller / Tributes |
| /triz/what-is-triz (n=1) | Broken links returning 404 (various paths) | Redirect | TRIZ / What is TRIZ. Redirect to /triz |
| Joomla alias paths, e.g. /<section>/<nn>-<category>/… (n=9; e.g. /altshuller/altshuller-teaching/116-altshuller) | Duplicate alias URLs (same body as a canonical page) — TRIZ | Redirect | TRIZ. Redirect to the canonical URL listed per row in the Appendix |
| /116-altshuller, /116-altshuller/775-genrich-altshuller, /altshuller/116-altshuller (n=3) | Legacy Altshuller category (/116-altshuller/*) | Merge | TRIZ / Genrich Altshuller. Merge into TRIZ / Genrich Altshuller |
| /14-triz/triz, /triz/14-triz/triz (n=2) | Legacy TRIZ articles (…/14-triz/triz/*) | Redirect | TRIZ / What is TRIZ. Redirect to /triz |
| /14-triz/triz/610-benefits (n=1) | Legacy TRIZ articles (…/14-triz/triz/*) | Merge | TRIZ / What is TRIZ. Merge into TRIZ / What is TRIZ |

### Events (37 rows)

| live path | title | action | new home |
|---|---|---|---|
| (no live page; new) | TRIZCON2026 (CIMAT host; announced only in a homepage block) | Keep | Events / TRIZCON2026 (new page to be written from homepage block) |
| /events | TRIZ Events | Merge | Events. Merge into Events (landing) |
| /triz-event-list | TRIZ Events | Keep | Events / TRIZ Conferences |
| /triz-event-list/awards | Awards | Archive | Events / Past TRIZCONs / Awards |
| /triz-event-list/trizcon | What is TRIZCON? | Redirect | Events / TRIZ Conferences. Redirect to /triz-event-list |
| /trizcon2019 | TRIZCON2019 | Archive | Events / Past TRIZCONs / TRIZCON2019 |
| /trizcon2019/trizcon2019-authors | TRIZCON2019 Author Info | Archive | Events / Past TRIZCONs / TRIZCON2019 |
| /trizcon2019/trizcon2019-info | Trizcon2019 Info | Archive | Events / Past TRIZCONs / TRIZCON2019 |
| /trizcon2019/tz2019draft | TRIZCON2019 Abstracts and Draft Papers | Archive | Events / Past TRIZCONs / TRIZCON2019 |
| /trizcon2019/tz2019papers | TRIZCON2019 Abstracts and Papers | Archive | Events / Past TRIZCONs / TRIZCON2019 |
| /trizcon2020 | TRIZCON2020 | Redirect | Events / Past TRIZCONs / TRIZCON2021. Redirect to /trizcon2021 |
| /trizcon2020/abstracts-papers | Abstracts & Papers | Archive | Events / Past TRIZCONs / TRIZCON2020 |
| /trizcon2020/author-guidelines | Author Guidelines | Archive | Events / Past TRIZCONs / TRIZCON2020 |
| /trizcon2020/conference-information | Conference Info | Redirect | Events / Past TRIZCONs / TRIZCON2021. Redirect to /trizcon2021 |
| /trizcon2021 | TRIZCON2021 | Archive | Events / Past TRIZCONs / TRIZCON2021 |
| /trizcon2023-1 | TRIZCON2023 | Redirect | Events / Past TRIZCONs / TRIZCON2024. Redirect to /trizcon2024-2 |
| /trizcon2023-1/trizcon2023-abstracts | TRIZCON2023-Abstracts | Archive | Events / Past TRIZCONs / TRIZCON2023 |
| /trizcon2024-2 | TRIZCON2024 | Archive | Events / Past TRIZCONs / TRIZCON2024 |
| /trizcon2024-2/trizcon2024-abstracts-bios | TRIZCON2024 - Abstracts - Bios | Archive | Events / Past TRIZCONs / TRIZCON2024 |
| /trizcon2025 | TRIZCON2025 | Archive | Events / Past TRIZCONs / TRIZCON2025 |
| /trizcon2025/registration | TRIZCON2025 - Registration | Archive | Events / Past TRIZCONs / TRIZCON2025 |
| /trizcon2025/trizcon2025-abstracts-biographies | TRIZCON2025  Abstracts & Biographies | Archive | Events / Past TRIZCONs / TRIZCON2025 |
| /trizcon2025/trizcon2025-agenda | TRIZCON2025 - Agenda | Archive | Events / Past TRIZCONs / TRIZCON2025 |
| /trizcon2025/trizcon2025-overview | TRIZCON2025 - Overview | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /trizcon2025 |
| /trizcon2025/trizcon2025-wrap-up | TRIZCON2025 - Wrap-up | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /trizcon2025 |
| /webinar-series | Upcoming events | Keep | Events / Webinar Series |
| various (n=12; e.g. /author-submit-paper) | Broken links returning 404 (various paths) | Redirect | Events. Redirect to the nearest page per row in the Appendix |
| Joomla alias paths, e.g. /<section>/<nn>-<category>/… (n=36; e.g. /trizcon2019/trizcon2019-abstract) | Duplicate alias URLs (same body as a canonical page) — Events | Redirect | Events. Redirect to the canonical URL listed per row in the Appendix |
| /99-faqs/information15, /99-faqs/information15/78-trizcon (n=2) | Legacy "Information" FAQ category (/99-faqs/*) | Archive | Events / Past TRIZCONs / Legacy information |
| /NN-trizcon2010…2018/*, /94-proceedings/* (n=105; e.g. /134-trizcon2012/abstract-12) | Legacy TRIZCON 2010–2018 pages (abstracts, info, proceedings) | Archive | Events / Past TRIZCONs (by year) |
| /tz18*, /tz19*, /tz2019*, /register2020 (n=12; e.g. /register2020) | Past TRIZCON / workshop registration product pages (/tz18*, /tz19*, /tz2018*, /tz2019*, /register2020) | Redirect | Events / Past TRIZCONs. Redirect to the nearest page per row in the Appendix |
| /documents/TRIZCON/*, /trizcon2019/**/file (n=78; e.g. /documents/TRIZCON/AGENDA-TRIZCON2011-Pre.pdf) | TRIZCON documents & paper downloads (/documents/TRIZCON/*, /trizcon2019/**/file) | Archive | Events / Past TRIZCONs (by year) |
| /trizcon2019/author-submit-paper, /trizcon2019/trizcon2019-authors/80-copyright-license-agreement-2019, /trizcon2019/trizcon2019-authors/81-altshuller-institute-author-guidelines-for-trizcon2019-papers (n=3) | TRIZCON2019 sub-pages, abstracts & papers | Archive | Events / Past TRIZCONs / TRIZCON2019 |
| /trizcon2020/abstracts-papers/163-trizcon2020 (n=1) | TRIZCON2020 sub-pages, abstracts & papers | Archive | Events / Past TRIZCONs / TRIZCON2020 |
| /167-trizcon2023-1/2023-invitation/882-trizcon2023, /trizcon2023-1/171-trizcon2024/trizcon2024-abstracts-bios, /trizcon2023-1/trizcon2023-abstracts/166-trizcon2023-1 (n=3) | TRIZCON2023 sub-pages, abstracts & papers | Archive | Events / Past TRIZCONs / TRIZCON2023 |
| prefix /trizcon2024* and legacy /NN-trizcon2024/* (n=21; e.g. /169-trizcon2024) | TRIZCON2024 sub-pages, abstracts & papers | Archive | Events / Past TRIZCONs / TRIZCON2024 |
| prefix /trizcon2025* and legacy /NN-trizcon2025/* (n=21; e.g. /173-trizcon2025) | TRIZCON2025 sub-pages, abstracts & papers | Archive | Events / Past TRIZCONs / TRIZCON2025 |

### Learn (19 rows)

| live path | title | action | new home |
|---|---|---|---|
| /triz-certification | TRIZ Certification | Keep | Learn / Certification |
| /triz-certification/associate-certification | Associate Certification | Merge | Learn / Certification Levels. Merge into Learn / Certification Levels |
| /triz-certification/certified-practitioners | Certified Practitioners List | Keep | Learn / Certification Board & Register |
| /triz-certification/general-provisions | General Provisions | Merge | Learn / Certification. Merge into Learn / Certification |
| /triz-certification/master-certification | Master Certification | Merge | Learn / Certification Levels. Merge into Learn / Certification Levels |
| /triz-certification/practitioner-certification | Practitioner Certification | Merge | Learn / Certification Levels. Merge into Learn / Certification Levels |
| /triz-certification/specialist-certification | Specialist Certification | Merge | Learn / Certification Levels. Merge into Learn / Certification Levels |
| /triz-certification/summary-qualifications | Summary of Qualifications | Merge | Learn / Certification. Merge into Learn / Certification |
| /triz-certification/test-application | Test Application | Merge | Learn / Certification Levels. Merge into Learn / Certification Levels |
| /triz-certification/triz-certification-board-members | Certification Board | Merge | Learn / Certification Board & Register. Merge into Learn / Certification Board & Register |
| /triz-training | Events from Training | Keep | Learn / Training Calendar |
| /triz/publication-samples | Publication Samples | Keep | Learn / Publication Samples |
| /events/export/*, /triz-training/export/* (n=10; e.g. /events/export/58-advanced-practice-triz-course-virtual) | Calendar iCal export files (/events/export/*, /triz-training/export/*) | Redirect | Learn / Training Calendar. Redirect to /triz-training |
| /events/*, /triz-training/{print,invite,location,category,my-subscriptions}/* (n=30; e.g. /events/my-subscriptions) | Calendar system views (event/print/invite/location/category/subscriptions under /events and /triz-training) | Redirect | Learn / Training Calendar. Redirect to /triz-training |
| /103-certification, /103-certification/407-triz-certification45, /triz-certification/103-certification (n=3) | Certification history (legacy /103-certification/*) | Merge | Learn / Certification. Merge into Learn / Certification |
| Joomla alias paths, e.g. /<section>/<nn>-<category>/… (n=14; e.g. /events/print/58-advanced-practice-triz-course-virtual) | Duplicate alias URLs (same body as a canonical page) — Learn | Redirect | Learn. Redirect to the canonical URL listed per row in the Appendix |
| /triz-certification/78-information7 (n=1) | Empty system/component listings | Redirect | Learn / Certification. Redirect to /triz-certification |
| /triz/publication-samples/* (n=6; e.g. /triz/publication-samples/20-qpsychological-barriersq-the-innovation-algorithm) | Publication sample excerpts | Keep | Learn / Publication Samples |
| /triz-training/event/* (n=5; e.g. /triz-training/event/58-advanced-practice-triz-course-virtual) | Training calendar event entries | Merge | Learn / Training Calendar. Merge into Learn / Training Calendar |

### Membership (19 rows)

| live path | title | action | new home |
|---|---|---|---|
| /donations | Donations / Special Projects | Keep | Membership / Donate & Special Projects |
| /login | Login | Redirect | Membership / Join. Redirect to live member login |
| /membership | Membership | Keep | Membership |
| /membership/group | Corporate/Group Plans | Merge | Membership. Merge into Membership (levels section) |
| /membership/join | Altshuller Institute Registration | Keep | Membership / Join |
| /membership/lifetime | Lifetime Members | Keep | Membership / Lifetime Members |
| /our-supporters | Our Sponsors | Keep | Membership / Our Sponsors |
| /sponsorship | AI Sponsorship | Keep | Membership / Sponsorship |
| /visit-our-store | General Store | Keep | Membership / Store |
| various (n=10; e.g. /component/virtuemart) | Broken links returning 404 (various paths) | Redirect | Membership. Redirect to the nearest page per row in the Appendix |
| /membership/group/115-membership, /membership/lifetime/115-membership, /our-supporters/114-sponsorship (n=3) | Duplicate alias URLs (same body as a canonical page) — Membership | Redirect | Membership. Redirect to the canonical URL listed per row in the Appendix |
| /groupjive, /community-news/138-survey, /community-news/138-survey/625-member-survey (n=3) | Empty system/component listings | Redirect | Membership. Redirect to /membership |
| /99-faqs/information15/151-members-only-content (n=1) | Legacy "Information" FAQ category (/99-faqs/*) | Merge | Membership. Merge into Membership (benefits section) |
| /114-sponsorship/783-our-supporters (n=1) | Legacy Supporters article | Merge | Membership / Our Sponsors. Merge into Membership / Our Sponsors |
| /login-redirects, /component/comprofiler/*, /profile-edit, /account/* (n=10; e.g. /account/logout) | Member-system / login / profile URLs | Redirect | Membership / Join. Redirect to live member system |
| /115-membership, /115-membership/603-annual-membership, /membership/115-membership (n=3) | Membership articles (legacy /115-membership/*) | Merge | Membership. Merge into Membership (levels section) |
| /113-special-projects/*, /donations/113-* (n=6; e.g. /113-special-projects) | Special Projects articles (/113-special-projects/*) | Merge | Membership / Donate & Special Projects. Merge into Membership / Donate & Special Projects |
| /114-sponsorship, /sponsorship/114-sponsorship (n=2) | Sponsorship category alias | Merge | Membership / Sponsorship. Merge into Membership / Sponsorship |
| /visit-our-store/Become-a-Legacy-Supporter-Annual-p151521889 (n=1) | Store product URLs (/visit-our-store/*-p######) | Redirect | Membership / Store. Redirect to /visit-our-store |

### Library (33 rows)

| live path | title | action | new home |
|---|---|---|---|
| /blog | Categories - The Altshuller Institute Blogs | Keep | Library / Blog |
| /blog/altshuller-institute-blog | Altshuller Institute - The Altshuller Institute Blogs | Keep | Library / Blog / Altshuller Institute Blog |
| /blog/innovate-mfg | Innovation in Manufacturing - The Altshuller Institute Blogs | Keep | Library / Blog / Innovation in Manufacturing |
| /blog/triz-quality | TRIZ and Quality - The Altshuller Institute Blogs | Keep | Library / Blog / TRIZ & Quality |
| /community-news | Community News | Redirect | Library / News. Redirect to /community-news/triz-news |
| /community-news/games | Games & Puzzles | Keep | Library / Games & Puzzles |
| /community-news/triz-news | TRIZ News | Keep | Library / News |
| /triz-articles | TRIZ Articles | Keep | Library / Articles |
| /triz-articles/curries-corner | Curries Corner | Keep | Library / Articles / Curries Corner |
| /triz-articles/inside-triz | Inside TRIZ | Keep | Library / Articles / Inside TRIZ |
| /triz-articles/soft-side-triz-public | Soft Side of TRIZ | Keep | Library / Articles / Soft Side of TRIZ |
| /triz-articles/triz-features | TRIZ Features | Keep | Library / Articles / TRIZ Features |
| /webinar-videos | Webinar Series Videos | Keep | Library / Webinar Videos |
| /webinar-videos/webinar-series-guided-brainstorming | Webinar Series - Guided Brainstorming | Keep | Library / Webinar Videos / Guided Brainstorming |
| /webinar-videos/webinar-series-systematic-innovation-methods | Webinar Series - Systematic Innovation Methods | Keep | Library / Webinar Videos / Systematic Innovation Methods |
| /webinar-videos/webinar-series-the-soft-side-of-triz | Webinar Series - THE SOFT SIDE OF TRIZ | Keep | Library / Webinar Videos / The Soft Side of TRIZ |
| /articles/**, /images/** (n=72; e.g. /articles/40p_triz.pdf) | Article & misc. documents (/articles/*.pdf, /images/*.docx/pptx) | Archive | Library / Document Archive |
| /blog/<post>, /blog/<category>/<post> (n=40; e.g. /blog/altshuller-institute-blog/five-little-known-facts) | Blog posts | Keep | Library / Blog |
| /blog/**/{categories,tags,blogger,teamblog}/* (n=51; e.g. /blog/altshuller-institute-blog/blogger/listings/chuckroe) | Blog system listings (categories, tags, bloggers, team blogs) | Redirect | Library / Blog. Redirect to /blog |
| various (n=6; e.g. /component/acymailing/url/urlid-550/mailid-109) | Broken links returning 404 (various paths) | Redirect | Library. Redirect to the nearest page per row in the Appendix |
| /documents/Certification/* (n=6; e.g. /documents/Certification/ASSOCIATE_TEST_SAMPLE.pdf) | Certification PDFs (/documents/Certification/*) | Keep | Library / Documents / Certification |
| /triz-articles/curries-corner/437-triz-takes-case-based-instruction-to-a-higher-level, /triz-articles/curries-corner/527-the-well-tinkered-mind (n=2) | Curries Corner articles | Keep | Library / Articles / Curries Corner |
| Joomla alias paths, e.g. /<section>/<nn>-<category>/… (n=31; e.g. /blog/altshuller-institute-blog/blogger) | Duplicate alias URLs (same body as a canonical page) — Library | Redirect | Library. Redirect to the canonical URL listed per row in the Appendix |
| /component/weblinks (n=1) | Empty system/component listings | Redirect | Library. Redirect to /triz-articles |
| /community-news/games/* (n=11; e.g. /community-news/games/820-crossword-puzzle-1) | Games & Puzzles items | Keep | Library / Games & Puzzles |
| /triz-articles/inside-triz/* (n=76; e.g. /triz-articles/inside-triz/378-case-studies-in-triz-renewable-energy-systems) | Inside TRIZ articles | Keep | Library / Articles / Inside TRIZ |
| /99-faqs/information15/148-community (n=1) | Legacy "Information" FAQ category (/99-faqs/*) | Merge | Library / News. Merge into Library / News |
| /articles/samples/* (n=6; e.g. /articles/samples/40p_prn1-10.pdf) | Publication sample PDFs (/articles/samples/*) | Archive | Library / Document Archive |
| /triz-articles/soft-side-triz-public/* (n=14; e.g. /triz-articles/soft-side-triz-public/349-introduction25) | Soft Side of TRIZ articles | Keep | Library / Articles / Soft Side of TRIZ |
| /triz-articles/triz-features/* (n=40; e.g. /triz-articles/triz-features/207-genrikh-altshuller-the-creator-of-triz) | TRIZ Features articles | Keep | Library / Articles / TRIZ Features |
| /community-news/triz-news/* (n=80; e.g. /community-news/triz-news/605-provider) | TRIZ News items | Keep | Library / News |
| /component/tags/* (n=23; e.g. /component/tags/tag/artificial-intelligence) | Tag listing pages (/component/tags/*) | Redirect | Library / Articles. Redirect to /triz-articles |
| /139-webinar-series, /139-webinar-series/629-david-conley, /webinar-videos/139-webinar-series (n=3) | Webinar presenter bio (legacy /139-webinar-series/*) | Merge | Library / Webinar Videos. Merge into Library / Webinar Videos |

### About (24 rows)

| live path | title | action | new home |
|---|---|---|---|
| /about-us | About Us | Keep | About |
| /about-us/advisors | Advisors | Keep | About / Governance / Advisors |
| /about-us/ai-bylaws | Bylaws | Keep | About / Governance / Bylaws |
| /about-us/altshuller-institute | The Altshuller Institute | Keep | About / The Institute |
| /about-us/candidates-for-elected-office | Candidates | Redirect | About / Governance / Elected Officers. Redirect to /about-us/elected-officers |
| /about-us/elected-officers | Elected Officers | Keep | About / Governance / Elected Officers |
| /about-us/objectives | Objectives | Merge | About / The Institute. Merge into About / The Institute |
| /about-us/organization | Organization Directory | Merge | About / Governance. Merge into About / Governance |
| /about-us/standing-committees | Standing Committees | Keep | About / Governance / Standing Committees |
| /about-us/taxes | Taxes | Keep | About / Governance / Taxes & Financials |
| /community-news/memorial | Memorial | Keep | About / Memorial |
| /contact-us | Contact Us | Keep | About / Contact |
| /17-about-us/803-who-we-are (n=1) | "Who We Are" article | Merge | About. Merge into About (landing) |
| /17-about-us, /about-us/17-about-us, /about-us/objectives/17-about-us (n=3) | About Us category list aliases | Redirect | About. Redirect to /about-us |
| /about-us/advisors/15-cathie-currie-phd, /about-us/advisors/22-cathie-curries (n=2) | Advisor contact cards | Merge | About / Governance / Advisors. Merge into About / Governance / Advisors |
| /17-about-us/759-board-of-directors (n=1) | Board of Directors article (lists "Board of Directors -- 2019") | Merge | About / Governance / Elected Officers. Merge into About / Governance / Elected Officers |
| /cdn-cgi/l/email-protection (n=1) | Broken links returning 404 (various paths) | Redirect | About / Contact. Redirect to /contact-us |
| Joomla alias paths, e.g. /<section>/<nn>-<category>/… (n=17; e.g. /about-us/135-tax) | Duplicate alias URLs (same body as a canonical page) — About | Redirect | About. Redirect to the canonical URL listed per row in the Appendix |
| /component/contact/category/129-contact-us (n=1) | Empty system/component listings | Redirect | About / Contact. Redirect to /contact-us |
| /community-news/memorial/* (n=12; e.g. /community-news/memorial/525-memorial-eugene-rivin) | Memorial articles | Keep | About / Memorial |
| /about-us/organization/699-elected-officers (n=1) | Organization Directory article | Merge | About / Governance / Elected Officers. Merge into About / Governance / Elected Officers |
| /about-us/standing-committees/* (n=8; e.g. /about-us/standing-committees/10-richard-langevin) | Standing committee contact cards | Merge | About / Governance / Standing Committees. Merge into About / Governance / Standing Committees |
| /about-us/taxes/614-2007, /about-us/taxes/641-budget-2017, /about-us/taxes/642-2012-tax-990 (n=3) | Tax/budget items (990-2007, 2012 990-EZ, 2017 budget) | Merge | About / Governance / Taxes & Financials. Merge into About / Governance / Taxes & Financials |
| /7-faqs/examples, /7-faqs/examples/10-faq1, /7-faqs/examples/11-faq2 (n=3) | Template placeholder FAQ pages (Lorem ipsum) (/7-faqs/*) | Redirect | About. Redirect to /about-us |

## 4. Board decisions needed

Each item below is stale or sensitive content that a person has to decide on. The evidence comes from the 2026-09-26 crawl. Paths are live URLs.

1. **Tax and financial documents stop at 2017.** `/about-us/taxes` (with its items `/about-us/taxes/614-2007`, `/about-us/taxes/642-2012-tax-990` and `/about-us/taxes/641-budget-2017`, and alias `/about-us/135-tax`) shows a "Tax return 2012" item, a "FORM 990-2007" item and a projected 2017 budget. The budget lists line items such as ED expense, rent, "ROYALTY ALTSHULLER" and "Loan Repayment - RL". Nothing is dated after 2017. *Decide:* publish current Form 990s (or link to a public 990 source), and whether the 2017 budget detail stays public.
2. **Officer and board lists.** The brief says the officers list is frozen at 2019. The crawl shows something different, so this needs checking. `/about-us/elected-officers` says "current elected officers … as of April 2026" (President Mansour Ashtiani, VP Bob King, Treasurer Jon Ezickson, Secretary Andres Meraz). A separate article, "List of AI Board of Directors -- 2019" (`/17-about-us/759-board-of-directors` plus 5 alias URLs, not in the menus), is still public. It names Isak Bukhman as Chairman and includes James Bradley, whom the Memorial page `/community-news/memorial/853-in-memory-of-dr-james-jim-bradley` says died on August 10, 2022. *Decide:* is there a current Board of Directors list? Retire or replace the 2019 list.
3. **Standing Committees include a deceased chair and vacancies.** `/about-us/standing-committees` lists Jim Bradley as Publications chair (see the item above), plus "Vacant" (By-laws) and "Vacant-2" (Membership), with personal phone numbers. *Decide:* current chairs, and whether phone numbers get published.
4. **Is the certification program current?** The certification pages are dated 2008–2010. The latest dates on each page: Associate 2008, Practitioner 2008, General Provisions 2010-03-31, Certification Board "group photo … 2009" (board: Fey (chair), Bukhman, Ikovenko, Zusman, Royzen). Sitemap last-modified dates for these pages run from 2017 to 2020. On the other hand, the 2026 training calendar (`/triz-training`) lists a "Virtual Multi-session TRIZ Workshop in preparation for the Associate Certification test from the Altshuller Institute". *Decide:* is the program active, who sits on the board now, are the levels, fees and test application current, and can the certification PDFs under `/documents/Certification/*` still be used?
5. **Fox Pest Control profile on the sponsors page.** `/our-supporters` ("Our Sponsors") opens with a long promotional "The Story of Fox" profile of Fox Pest Control, including its mission text and a link to foxpest-easternma.com/service-area/worcester/, before the Technical Innovation Center profile. *Decide:* is this a real current sponsor at a level that earns this placement, or should it be cut down or removed?
6. **Duplicate advisor entry.** `/about-us/advisors` lists both "Cathie Curries" (Advisor, `/about-us/advisors/22-cathie-curries`) and "Cathie Currie, Ph.D." (Education Advisor, New York, phone listed, `/about-us/advisors/15-cathie-currie-phd`). *Decide:* merge into one correct entry, and confirm the advisor list is current (these two are the only entries).
7. **Registers that stop at 2020 and 2017.** The certified practitioners list (`/triz-certification/certified-practitioners`) runs to 2020. The Lifetime Members list (`/membership/lifetime`) runs to 2017 (joining years 1998–2017). It still includes members who are now deceased, e.g. Genrikh Altshuller and Ellen Domb, who has a 2025 memorial page (`/community-news/memorial/953-…-1946-2025`). *Decide:* update both lists, and choose a convention for listing deceased members.
8. **TRIZCON2026 has no page of its own.** The only 2026 conference content is a homepage block: "TRIZCON2026 coming soon", "CIMAT will be our generous Host for our annual event in 2026", "We are in the process of creating a TRIZCON2026 Portal", and a QR code for abstract submission. There are no dates, no location text ("Mexico" does not appear in the page text) and no URL. *Decide:* approve dates, venue and abstract/registration links for a new Events / TRIZCON2026 page.
9. **`/trizcon2023-1` shows 2024 content.** The menu item "TRIZCON2023" (`/trizcon2023-1`) serves the same body as `/trizcon2024-2`: "Join us for TRIZCON2024 … December 14-15, 2024, in Beijing". Real 2023 content survives only at `/trizcon2023-1/trizcon2023-abstracts` and a few legacy alias paths. The same problem affects `/trizcon2020` and `/trizcon2020/conference-information`, which serve the TRIZCON2021 body. *Decide:* recover a TRIZCON2023 (and TRIZCON2020) overview from records, or accept these archive gaps. The map currently redirects `/trizcon2023-1` to `/trizcon2024-2` and `/trizcon2020` to `/trizcon2021`.
10. **Leftover editing text on the homepage.** The Executive Director letter on `/` contains the sentence "This version keeps your honest reflection and vision, while making it more polished, inspiring, and professional:", which looks like leftover drafting or AI-editor text. It also has a typo ("Let's make Altshuller pround…"). *Decide:* approve cleaned copy, and where the letter lives (the prototype suggests About or a letters page, not the homepage).
11. **Placeholder and off-topic pages.** `/7-faqs/examples` and its two items are Joomla "Lorem ipsum" sample pages that are publicly reachable. `/blog/teamblog/listings/helpline` ("TRIZ Helpline") reads "Many thanks for your interest in our growing marketing services…". *Decide:* confirm these can be dropped (the map redirects them).
12. **Members-only promises.** `/membership` and `/membership/join` promise paid members access to restricted archives (past proceedings, Izobretenia, past Inside TRIZ/TRIZ Features, Soft Side lessons), and `/triz-event-list` says the TRIZCON2018 review is "for paid members only". The static prototype has no member area. *Decide:* how restricted archives are handled after the redesign, i.e. stay on the live Joomla member system or change policy.


## 5. Appendix: all 1,025 crawled URLs

There is one row per URL in `inventory.csv`, sorted by section. Notes explain Redirect/Merge reasons or judgment calls.

| live path | title | action | new home | notes |
|---|---|---|---|---|
| / | Altshuller Institute \| Serving the TRIZ Community | Keep | Home |  |
| /160-home-page | Home Page | Redirect | Home. Redirect to / | Same body text as / |
| /160-home-page/756-ai-homepage | AI Home Page | Redirect | Home. Redirect to / | Same body text as / |
| /ahha-moments | Ah Ha! Moments | Keep | TRIZ / Ah Ha! Moments |  |
| /triz/triz-body-of-knowledge | TRIZ Body of Knowledge | Keep | TRIZ / Body of Knowledge |  |
| /116-altshuller | Altshuller | Merge | TRIZ / Genrich Altshuller. Merge into TRIZ / Genrich Altshuller |  |
| /116-altshuller/775-genrich-altshuller | Genrich Altshuller | Merge | TRIZ / Genrich Altshuller. Merge into TRIZ / Genrich Altshuller |  |
| /altshuller | Genrick Altshuller | Keep | TRIZ / Genrich Altshuller |  |
| /altshuller/116-altshuller | Altshuller | Merge | TRIZ / Genrich Altshuller. Merge into TRIZ / Genrich Altshuller |  |
| /altshuller/altshuller-teaching/116-altshuller | Altshuller | Redirect | TRIZ / Genrich Altshuller. Redirect to TRIZ / Genrich Altshuller | Same body text as /altshuller/116-altshuller |
| /altshuller/interview/116-altshuller | Altshuller | Redirect | TRIZ / Genrich Altshuller. Redirect to TRIZ / Genrich Altshuller | Same body text as /altshuller/116-altshuller |
| /altshuller/last-comunique/116-altshuller | Altshuller | Redirect | TRIZ / Genrich Altshuller. Redirect to TRIZ / Genrich Altshuller | Same body text as /altshuller/116-altshuller |
| /altshuller/who-is-altshuller | Who is Altshuller? | Redirect | TRIZ / Genrich Altshuller. Redirect to /altshuller | Same body text as /altshuller |
| /altshuller/who-is-altshuller/116-altshuller | Altshuller | Redirect | TRIZ / Genrich Altshuller. Redirect to TRIZ / Genrich Altshuller | Same body text as /altshuller/116-altshuller |
| /altshuller/altshuller-teaching | Altshuller Teaching | Keep | TRIZ / Genrich Altshuller / Altshuller Teaching |  |
| /altshuller/interview | Interview | Keep | TRIZ / Genrich Altshuller / Interview |  |
| /altshuller/last-comunique | Last comunique | Keep | TRIZ / Genrich Altshuller / Last Communiqué |  |
| /116-altshuller/15-celebration-of-the-life-of-genrikh-altshuller | Celebration of the Life of Genrikh Altshuller | Merge | TRIZ / Genrich Altshuller / Tributes. Merge into TRIZ / Genrich Altshuller / Tributes |  |
| /altshuller/tributes | Tributes | Keep | TRIZ / Genrich Altshuller / Tributes |  |
| /altshuller/tributes/16-for-genrikh-stretcher-of-minds-shining-light | For Genrikh, Stretcher of Minds, Shining Light | Merge | TRIZ / Genrich Altshuller / Tributes. Merge into TRIZ / Genrich Altshuller / Tributes |  |
| /altshuller/tributes/17-in-memoriam | In Memoriam | Merge | TRIZ / Genrich Altshuller / Tributes. Merge into TRIZ / Genrich Altshuller / Tributes |  |
| /triz/triz-masters | TRIZ Masters | Keep | TRIZ / TRIZ Masters |  |
| /14-triz/triz | TRIZ | Redirect | TRIZ / What is TRIZ. Redirect to /triz | Category alias of What is TRIZ |
| /14-triz/triz/610-benefits | Benefits of TRIZ | Merge | TRIZ / What is TRIZ. Merge into TRIZ / What is TRIZ |  |
| /triz | What is TRIZ? | Keep | TRIZ / What is TRIZ |  |
| /triz/14-triz/triz | TRIZ | Redirect | TRIZ / What is TRIZ. Redirect to /triz | Category alias of What is TRIZ |
| /triz/14-triz/triz/610-benefits | Benefits of TRIZ | Redirect | TRIZ / What is TRIZ. Redirect to TRIZ / What is TRIZ | Same body text as /14-triz/triz/610-benefits |
| /triz/triz-body-of-knowledge/14-triz/triz | TRIZ | Redirect | TRIZ / What is TRIZ. Redirect to /triz | Same body text as /triz/14-triz/triz |
| /triz/triz-body-of-knowledge/14-triz/triz/610-benefits | Benefits of TRIZ | Redirect | TRIZ / What is TRIZ. Redirect to TRIZ / What is TRIZ | Same body text as /14-triz/triz/610-benefits |
| /triz/triz-masters/14-triz/triz | TRIZ | Redirect | TRIZ / What is TRIZ. Redirect to /triz | Same body text as /triz/14-triz/triz |
| /triz/triz-masters/14-triz/triz/610-benefits | Benefits of TRIZ | Redirect | TRIZ / What is TRIZ. Redirect to TRIZ / What is TRIZ | Same body text as /14-triz/triz/610-benefits |
| /triz/what-is-triz | 404 Category not found | Redirect | TRIZ / What is TRIZ. Redirect to /triz | HTTP 404 on live site |
| /events | TRIZ Events | Merge | Events. Merge into Events (landing) | Live page is the training/events calendar; per brief merged into Events landing, listings themselves live in Learn / Training Calendar |
| /documents/TRIZCON/Author_Guidelines_TRIZCON2012.pdf | [document: text/html, 28 KB] | Redirect | Events / Past TRIZCONs. Redirect to Events / Past TRIZCONs | HTTP 404 on live site |
| /tz18conf-1 | TRIZCON2018 - One Day Pass-TRIZCON2018-Confence | Redirect | Events / Past TRIZCONs. Redirect to Events / Past TRIZCONs | Past registration form; no content to carry |
| /tz18conf-2 | TRIZCON2017 Registration | Redirect | Events / Past TRIZCONs. Redirect to Events / Past TRIZCONs | Past registration form; no content to carry |
| /tz18present | TRIZCON2018 - Presenter-TRIZCON2018-Special | Redirect | Events / Past TRIZCONs. Redirect to Events / Past TRIZCONs | Past registration form; no content to carry |
| /tz18student | Student Pass 18-TRIZCON2018-Special | Redirect | Events / Past TRIZCONs. Redirect to Events / Past TRIZCONs | Past registration form; no content to carry |
| /tz18work3 | 404 Article not found | Redirect | Events / Past TRIZCONs. Redirect to Events / Past TRIZCONs | HTTP 404 on live site |
| /tz18work5 | 404 Article not found | Redirect | Events / Past TRIZCONs. Redirect to Events / Past TRIZCONs | HTTP 404 on live site |
| /tz2018registration | TRIZCON2017 Registration | Redirect | Events / Past TRIZCONs. Redirect to Events / Past TRIZCONs | Past registration form; no content to carry |
| /triz-event-list/awards | Awards | Archive | Events / Past TRIZCONs / Awards | Awards history, latest year 2019 |
| /documents/TRIZCON/COPYRIGHT_LICENSE AGREEMENT_2011.pdf | [document: application/pdf, 99 KB] PDF title: TRIZCON2001 COPYRIGHT LICENSE RELEASE (1 pp) | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/COPYRIGHT_LICENSE_AGREEMENT_2010.pdf | [document: application/pdf, 12 KB] PDF title: Microsoft Word - COPYRIGHT_LICENSE AGREEMENT | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/MC-1099_floorplan_r3.pdf | [document: application/pdf, 174 KB] PDF title: Bath Iron Works Color Presentation (1 pp) | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/MC2MAP.pdf | [document: application/pdf, 81 KB] PDF title: Slide 1 (1 pp) | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/Map_Ster.pdf | [document: application/pdf, 22 KB] PDF title: MAP_STER (1 pp) | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/Proceedings/2011-01-Seeing_the_Invisible_McCaffrey.pdf | [document: application/pdf, 697 KB] PDF title: Seeing_the_Invisible_McCaffrey (10 pp) | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/Proceedings/2011-02_TRIZ_specialty_AI%20TRIZCON_2011.pdf | [document: application/pdf, 79 KB] PDF title: Microsoft Word - #02_TRIZ_specialty_AI TRIZ  | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/Proceedings/2011-03_40-Inventive-Principle-for-Human-Factors-JWH072210.pdf | [document: application/pdf, 742 KB] PDF title: Subject: (16 pp) | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/Proceedings/2011-05_Knowledge-base-tools.pdf | [document: application/pdf, 203 KB] PDF title: Microsoft Word - #05_Knowledge based tools  | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/Proceedings/2011-06_FAST-Diagrams-The-Foundation-for-Creating-Effective-Function-Models.pdf | [document: application/pdf, 3653 KB] PDF title: Microsoft Word - #06_FAST Diagrams-The Fou | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/Proceedings/2011-08_The-Creative-Application-of-deBono-Methods-in-Manufacturing.pdf | [document: application/pdf, 733 KB] PDF title: Microsoft Word - #08_The Creative Applicati | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/Proceedings/2011-09_Using TRIZ-for-Innovation-and-Patent-Design-in-the-Chemical-Industry.pdf | [document: application/pdf, 2381 KB] (30 pp) | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/Proceedings/2011-10_Applying-Patent-Deconstruction.pdf | [document: application/pdf, 3078 KB] PDF title: Microsoft Word - #10_Applying Patent Decon | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/Proceedings/2011-12_TeachingResourc_CZ.pdf | [document: application/pdf, 2263 KB] PDF title: TeachingResourc.pptx (31 pp) | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/Proceedings/2011-13_TRIZ+Paper-SY.pdf | [document: application/pdf, 46 KB] PDF title: Subject: (3 pp) | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/TRIZ_Foreign_Natl_Form.pdf | [document: application/pdf, 55 KB] PDF title: Microsoft Word - TRIZ Foreign Natl Form.doc  | Archive | Events / Past TRIZCONs / Documents | Event document |
| /documents/TRIZCON/VisitorHelpfulTips.pdf | [document: application/pdf, 67 KB] PDF title: Slide 1 (1 pp) | Archive | Events / Past TRIZCONs / Documents | Event document |
| /99-faqs/information15 | Information | Archive | Events / Past TRIZCONs / Legacy information | Generic TRIZCON info, old |
| /99-faqs/information15/78-trizcon | TRIZCON | Archive | Events / Past TRIZCONs / Legacy information | Generic TRIZCON info, old |
| /73-trizcon2010/information1 | Information | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /73-trizcon2010/information1/402-agenda42 | Agenda | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /73-trizcon2010/information1/443-information-page | Information Page | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /73-trizcon2010/information1/470-trizcon2010-sponsors-and-supporters | TRIZCON2010 Sponsors and Supporters | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6 | Abstracts | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/414-maturity-of-automobile-steering-wheel | Forecasting Analysis of the Maturity of Automobile Steering Wheel System on TRIZ | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/415-collateral-beauty | Collateral Beauty: Integrating TRIZ, Fundamental Design Method & Metaphysics of Quality | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/417-three-axes-analysis-method | Three-Axes Analysis Method | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/418-choosing-the-most-promising-system-evolution-paths-with-triz-rebar-tying-case-study | Choosing the most promising system evolution paths with TRIZ - Rebar Tying Case Study | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/421-missing-the-woods-for-the-triz | Missing the Woods for the TRIZ! | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/423-teaching-triz-leaving-the-classroom-to-enhance-learning | Teaching TRIZ:  Leaving the classroom to enhance learning | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/424-40-principles-and-contradictions-in-human-factors-and-ergonomics | 40 Principles and Contradictions in Human Factors and Ergonomics | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/425-applying-triz-principles-in-crowd-management | Applying TRIZ Principles in Crowd Management | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/430-addressing-secondary-problems-with-triz | Addressing secondary problems with TRIZ | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/433-new-design-of-solar-plate-collector-system-using-triz | New Design of Solar Plate Collector System Using TRIZ | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/440-trizical-creatology-and-scifictology-trizbased-inventological-scifictology | TRIZical Creatology and Scifictology: TRIZBased Inventological Scifictology | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/444-applications-of-triz-to-information-technology-cases-and-lessons-learned | Applications of TRIZ to Information Technology  Cases and Lessons Learned. | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/445-the-five-percent-problem-transferring-triz-training-into-practice | The Five Percent Problem: Transferring TRIZ Training into Practice | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/446-integrating-triz-principles-in-local-schools | Integrating TRIZ Principles in Local Schools | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/447-design-for-innovation-in-manufacturing-dfim | Design For Innovation in Manufacturing (DFIM) | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/448-triz-toc-and-logic-process-applied-to-stringed-instrument-chord-theory | TRIZ, TOC and Logic Process Applied to Stringed Instrument Chord Theory | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/449-a-new-innovation-design-process-combining-triz-toc-and-logic | A New Innovation Design Process Combining TRIZ, TOC and Logic | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/450-applying-triz-to-breakthrough-innovations-in-healthcare | Applying TRIZ to Breakthrough Innovations in Healthcare | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/451-reformulating-a-semiconductor-information-problem-with-triz | Reformulating a Semiconductor Information Problem with TRIZ | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/455-design-and-evolution-of-software-libraries-a-triz-based-approach-to-innovation | Design and Evolution of Software Libraries  A TRIZ based approach to innovation | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/458-applying-triz-in-large-scale-software-modeling | Applying TRIZ in large scale software modeling | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/462-triz-in-a-bi-system-consisting-of-triz-and-lean-sigma | TRIZ in a Bi-system, Consisting of TRIZ and Lean Sigma | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/465-perception-mapping-and-contraction-resolution-of-voice-of-the-customer | Perception Mapping and Contraction Resolution of Voice of the Customer | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/466-triz-applied-to-value-managementtriz-applied-to-value-management | TRIZ applied to Value Management | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /74-trizcon2010/abstracts6/467-triz-technology-for-innovation47 | TRIZ - Technology for Innovation | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /75-trizcon2010/keynote-speakers5 | Keynote Speakers | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /75-trizcon2010/keynote-speakers5/463-mark-l-fox | Mark L. Fox | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /75-trizcon2010/keynote-speakers5/464-jeffery-r-davis-md-ms | Jeffery R. Davis, MD, MS | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /77-trizcon2010/forms-and-author-guidelines3 | Forms and Author Guidelines | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /77-trizcon2010/forms-and-author-guidelines3/403-call-for-papers43 | Call for Papers | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /77-trizcon2010/forms-and-author-guidelines3/404-author-guidelines44 | Author Guidelines | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /77-trizcon2010/forms-and-author-guidelines3/405-checklist-of-due-dates | Checklist of Due Dates | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /77-trizcon2010/forms-and-author-guidelines3/406-copyright-license-release | Copyright License Release | Archive | Events / Past TRIZCONs / TRIZCON2010 |  |
| /documents/TRIZCON/CHECKLIST_OF_DUE_DATES_for_TRIZCON2010.pdf | [document: application/pdf, 51 KB] PDF title: CHECKLIST OF DUE DATES for TRIZCON2004 (1 pp | Archive | Events / Past TRIZCONs / TRIZCON2010 | Event document |
| /documents/TRIZCON/TRIZCON2010.pdf | [document: application/pdf, 14 KB] PDF title: TRIZCON2010 the 12th anniversary event, will | Archive | Events / Past TRIZCONs / TRIZCON2010 | Event document |
| /85-trizcon2011/abstracts10 | Abstracts | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/511-chemical-process-development-of-sorel-cement-from-seawater-bitterns-using | Chemical process development of Sorel cement from seawater bitterns using | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/512-triz-for-human-factors-and-ergonomics | TRIZ for Human Factors and Ergonomics | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/514-analyzing-behavior-through-the-use-of-the-triz-contradiction-table-in-reverse | Analyzing Behavior through the Use of the TRIZ Contradiction Table in Reverse | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/521-application-of-new-methods-for-teaching-triz-to-the-use-of-resources | Application of new methods for teaching TRIZ to the use of resources. | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/522-next-steps-in-reduction-of-triz-entry-barriers | Next Steps in Reduction of TRIZ Entry Barriers | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/523-seeing-the-invisible-a-systematic-approach-to-uncovering-hidden-resources | Seeing the Invisible: A Systematic Approach to Uncovering Hidden Resources | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/524-a-new-specialty-the-technology-of-innovation-for-system-development-and-evolution | A New Specialty  The Technology of Innovation for System Development and Evolution | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/526-triz-beyond-technology-v2011 | TRIZ Beyond Technology  v.2011 | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/534-using-triz-for-innovation-and-patent-design-in-the-chemical-industry | Using TRIZ for Innovation and Patent Design in the Chemical Industry | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/559-innovation-diversity-and-triz | Innovation, Diversity and TRIZ | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/560-predicting-the-next-software-architecture-avatar-using-triz | Predicting the Next Software Architecture Avatar using TRIZ | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/561-fast-diagrams-the-foundation-for-creating-effective-function-models | FAST Diagrams: The Foundation for Creating Effective Function Models | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/562-improving-patents-and-designing-around-blocking-patents-using-patent-deconstruction-method | Improving Patents and Designing Around Blocking Patents using Patent Deconstruction® Metho | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/563-the-psychology-of-team-oriented-problem-solving-what-makes-a-team-successful | The Psychology of Team Oriented Problem Solving:  What makes a team successful? | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/564-stev1-solar-thermal-electric-vehicle | STEV1: Solar Thermal Electric Vehicle | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /85-trizcon2011/abstracts10/565-r-triz-on-telescoping-rail-failures | R-TRIZ on Telescoping Rail Failures | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /86-trizcon2011/information9 | Information | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /86-trizcon2011/information9/506-information | Information | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /86-trizcon2011/information9/567-registration-form-for-foreign-nationals | Registration Form for Foreign Nationals | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /87-trizcon2011/forms-and-authors | Forms and Authors | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /87-trizcon2011/forms-and-authors/519-copyright-license-agreement-2011 | Copyright License Agreement | Redirect | Events / Past TRIZCONs / TRIZCON2011. Redirect to /87-trizcon2011/forms-and-authors | Same body text as /87-trizcon2011/forms-and-authors |
| /88-trizcon2011/agenda | Agenda | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /88-trizcon2011/agenda/504-trizcon-2011-detroit-preliminary-agenda | TRIZCON 2011- Detroit Preliminary Agenda | Redirect | Events / Past TRIZCONs / TRIZCON2011. Redirect to /88-trizcon2011/agenda | Same body text as /88-trizcon2011/agenda |
| /94-proceedings/trizcon-2011-detroit | TRIZCON 2011 Detroit | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/571-seeing-the-invisible-a-systematic-approach-to-uncovering-hidden-resources54 | Seeing the Invisible: A Systematic Approach to Uncovering Hidden Resources | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/572-a-new-specialty-the-technology-for-innovation | A New Specialty  The Technology for Innovation | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/573-40-inventive-principles-with-examples-human-factors-and-ergonomics | 40 Inventive Principles with Examples: Human Factors and Ergonomics | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/574-team-problem-solving-given-the-new-corporate-realities | Team Problem Solving Given The New Corporate Realities | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/575-stev1-solar-thermal-electric-vehicle-a-new-vehicle-concept-based-on-ideal-final-result | STEV1: Solar Thermal Electric Vehicle  A new vehicle concept based on Ideal Final Result | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/576-determining-motivation-and-strategy-with-the-triz-contradiction-matrix | Determining Motivation And Strategy With The Triz Contradiction Matrix | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/577-learner-focused-teaching-applied-to-the-use-of-resources-in-triz-problem-solving | Learner-focused Teaching - Applied to the Use of Resources in TRIZ Problem Solving | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/578-r-triz-on-telescoping-rail-failures55 | R-TRIZ on Telescoping Rail Failures | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/579-improving-patents-and-designing-around-blocking-patents-using-patent-deconstruction-method56 | Improving Patents And Designing Around Blocking Patents Using Patent Deconstruction® Metho | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/580-using-triz-for-innovation-and-patent-design-in-the-chemical-industry | Using TRIZ for Innovation and Patent Design in the Chemical Industry | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/581-the-creative-application-of-de-bono-methods-in-the-manufacturing-sector-with-a-focus-on-company-wide-innovation | The Creative Application of de Bono Methods in the Manufacturing Sector with a Focus on Co | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/582-next-steps-in-reduction-of-triz-entry-barrier | Next Steps in Reduction of TRIZ Entry Barrier | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/583-fast-diagrams-the-foundation-for-creating-effective-function-models57 | FAST Diagrams: The Foundation for Creating Effective Function Models | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/584-knowledge-based-tools-for-software-supported-innovation-and-problem-solving | Knowledge Based Tools for Software Supported Innovation and Problem Solving | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /94-proceedings/trizcon-2011-detroit/585-chemical-process-development-of-sorel-cement-from-seawater-bitterns-using-triz-methodology | Chemical process development of Sorel cement from seawater bitterns using TRIZ methodology | Archive | Events / Past TRIZCONs / TRIZCON2011 |  |
| /documents/TRIZCON/AGENDA-TRIZCON2011-Pre.pdf | [document: application/pdf, 251 KB] PDF title: Microsoft Word - AGENDA-TRIZCON2011-Pre.doc | Archive | Events / Past TRIZCONs / TRIZCON2011 | Event document |
| /documents/TRIZCON/Proceedings/2011-04_TRIZCON2011_Lipp_and_Ranna.pdf | [document: application/pdf, 193 KB] PDF title: Microsoft Word - TRIZCON 2011 paper MCC pro | Archive | Events / Past TRIZCONs / TRIZCON2011 | Event document |
| /documents/TRIZCON/Proceedings/2011-07_TRIZCON2011ans12.pdf | [document: application/pdf, 635 KB] PDF title: Microsoft Word - #07_TRIZCON2011ans12.docx  | Archive | Events / Past TRIZCONs / TRIZCON2011 | Event document |
| /documents/TRIZCON/Proceedings/2011-11_H_Cooper-R-TRIZ-on-Telescoping-Rail-Failures_TRIZCON-2011.pdf | [document: application/pdf, 1031 KB] PDF title: Microsoft Word - #11_H_Cooper R-TRIZ on Te | Archive | Events / Past TRIZCONs / TRIZCON2011 | Event document |
| /documents/TRIZCON/Proceedings/2011-14_TRIZCON2011-STEV1-NoelLeon-ITESM.PDF | [document: application/pdf, 489 KB] PDF title: Indice sigle (9 pp) | Archive | Events / Past TRIZCONs / TRIZCON2011 | Event document |
| /documents/TRIZCON/Proceedings/2011-15_FINAL-Team-Problem-Solving-Given-the-New-Corporate-Realities-TRIZCON2011.pdf | [document: application/pdf, 144 KB] PDF title: Microsoft Word - #15_FINAL Team Problem Sol | Archive | Events / Past TRIZCONs / TRIZCON2011 | Event document |
| /documents/TRIZCON/TRIZCON2011_Information.pdf | [document: application/pdf, 87 KB] PDF title: Microsoft Word - Information - TRIZCON2011_R | Archive | Events / Past TRIZCONs / TRIZCON2011 | Event document |
| /134-trizcon2012/abstract-12 | Abstract | Archive | Events / Past TRIZCONs / TRIZCON2012 |  |
| /134-trizcon2012/abstract-12/592-a-workshop-games-activities-and-practices-for-the-first-time-in-the-40-principles-of-triz | A WORKSHOP GAMES, ACTIVITIES AND PRACTICES FOR THE FIRST TIME IN THE 40 PRINCIPLES OF TRIZ | Archive | Events / Past TRIZCONs / TRIZCON2012 |  |
| /134-trizcon2012/abstract-12/593-triz-and-stem-education | TRIZ and STEM Education | Archive | Events / Past TRIZCONs / TRIZCON2012 |  |
| /134-trizcon2012/abstract-12/594-the-skymall-catalog-a-resource-of-triz-examples-for-training | The Skymall Catalog: A Resource of TRIZ Examples for Training | Archive | Events / Past TRIZCONs / TRIZCON2012 |  |
| /134-trizcon2012/abstract-12/595-triz-principles-in-deformity-correction-surgery | The Relationship of TRIZ Principles to Deformity Correction in Surgery | Archive | Events / Past TRIZCONs / TRIZCON2012 |  |
| /95-trizcon2012/forms-and-authors14 | Forms and Authors | Archive | Events / Past TRIZCONs / TRIZCON2012 |  |
| /95-trizcon2012/forms-and-authors14/520-author-guidelines-trizcon-2012 | Author Guidelines | Redirect | Events / Past TRIZCONs / TRIZCON2012. Redirect to /95-trizcon2012/forms-and-authors14 | Same body text as /95-trizcon2012/forms-and-authors14 |
| /98-trizcon2012/information12 | Information | Archive | Events / Past TRIZCONs / TRIZCON2012 |  |
| /98-trizcon2012/information12/591-call-for-papers-2012 | Call for Papers | Redirect | Events / Past TRIZCONs / TRIZCON2012. Redirect to /98-trizcon2012/information12 | Same body text as /98-trizcon2012/information12 |
| /documents/TRIZCON/TRIZCON2012-Abstract-info.pdf | [document: application/pdf, 73 KB] PDF title: Microsoft Word - TRIZCON2012-Abstract info-1 | Archive | Events / Past TRIZCONs / TRIZCON2012 | Event document |
| /96-trizcon2013/abstracts13 | Abstracts | Archive | Events / Past TRIZCONs / TRIZCON2013 |  |
| /96-trizcon2013/abstracts13/632-larry-smith | Larry Smith | Archive | Events / Past TRIZCONs / TRIZCON2013 |  |
| /96-trizcon2013/abstracts13/633-noel-leon | Noel Leon | Archive | Events / Past TRIZCONs / TRIZCON2013 |  |
| /96-trizcon2013/abstracts13/635-conley | David Conley | Archive | Events / Past TRIZCONs / TRIZCON2013 |  |
| /96-trizcon2013/abstracts13/636-fey-cooke | Fey and Cooke | Archive | Events / Past TRIZCONs / TRIZCON2013 |  |
| /96-trizcon2013/abstracts13/637-r-joseph | Robert Joseph | Archive | Events / Past TRIZCONs / TRIZCON2013 |  |
| /96-trizcon2013/abstracts13/638-t-brewer-domb | Tim Brewer and Ellen Domb | Archive | Events / Past TRIZCONs / TRIZCON2013 |  |
| /96-trizcon2013/abstracts13/639-isak | Isak Bukhman | Archive | Events / Past TRIZCONs / TRIZCON2013 |  |
| /documents/TRIZCON/Author_Guidelines_TRIZCON2013.pdf | [document: application/pdf, 67 KB] PDF title: Microsoft Word - Author Guidelines_TRIZCON20 | Archive | Events / Past TRIZCONs / TRIZCON2013 | Event document |
| /141-trizcon2015 | TRIZCON2015 | Archive | Events / Past TRIZCONs / TRIZCON2015 |  |
| /141-trizcon2015/670-trizcon2015-information | TRIZCON2015 Information | Archive | Events / Past TRIZCONs / TRIZCON2015 |  |
| /141-trizcon2015/671-trizcon2015-agenda | Trizcon2015 agenda | Archive | Events / Past TRIZCONs / TRIZCON2015 |  |
| /142-trizcon2015/forms-and-author-guidelines-2015 | Forms and Author Guidelines | Archive | Events / Past TRIZCONs / TRIZCON2015 |  |
| /142-trizcon2015/forms-and-author-guidelines-2015/668-author-guidelines-2015 | Author Guidelines | Redirect | Events / Past TRIZCONs / TRIZCON2015. Redirect to /142-trizcon2015/forms-and-author-guidelines-2015 | Same body text as /142-trizcon2015/forms-and-author-guidelines-2015 |
| /144-trizcon2015/trizcon2015-presentation-papers | TRIZCON2015 Presentation Papers | Archive | Events / Past TRIZCONs / TRIZCON2015 |  |
| /144-trizcon2015/trizcon2015-presentation-papers/675-teaching-triz-does-not-equal-learning-triz | Teaching TRIZ does not Equal Learning TRIZ | Archive | Events / Past TRIZCONs / TRIZCON2015 |  |
| /144-trizcon2015/trizcon2015-presentation-papers/676-how-triz-completes-all-other-innovation-toolkits-s | How TRIZ completes all other innovation toolkits.s | Archive | Events / Past TRIZCONs / TRIZCON2015 |  |
| /144-trizcon2015/trizcon2015-presentation-papers/677-hipple-tutorial | Hipple Tutorial | Archive | Events / Past TRIZCONs / TRIZCON2015 |  |
| /144-trizcon2015/trizcon2015-presentation-papers/678-gadd-tutorial-2 | Gadd_ Presentation Tutorial (2) | Archive | Events / Past TRIZCONs / TRIZCON2015 |  |
| /145-trizcon2016 | TRIZCON2016 | Archive | Events / Past TRIZCONs / TRIZCON2016 |  |
| /145-trizcon2016/686-information-page | TRIZCON2016 - Information - Recap | Redirect | Events / Past TRIZCONs / TRIZCON2016. Redirect to /145-trizcon2016 | Same body text as /145-trizcon2016 |
| /148-trizcon2017/abstracts-2017 | Abstracts | Archive | Events / Past TRIZCONs / TRIZCON2017 |  |
| /148-trizcon2017/abstracts-2017/711-trizcon2017-abstracts | TRIZCON2017 - Abstracts | Redirect | Events / Past TRIZCONs / TRIZCON2017. Redirect to /148-trizcon2017/abstracts-2017 | Same body text as /148-trizcon2017/abstracts-2017 |
| /151-trizcon2017 | TRIZCON2017 | Archive | Events / Past TRIZCONs / TRIZCON2017 |  |
| /151-trizcon2017/728-trizcon2017-information | TRIZCON2017 Information | Archive | Events / Past TRIZCONs / TRIZCON2017 |  |
| /156-trizcon2018 | TRIZCON2018 | Archive | Events / Past TRIZCONs / TRIZCON2018 |  |
| /156-trizcon2018/748-trizcon2018-information | TRIZCON2018 in Review | Redirect | Events / Past TRIZCONs / TRIZCON2018. Redirect to /156-trizcon2018 | Same body text as /156-trizcon2018 |
| /trizcon2019 | TRIZCON2019 | Archive | Events / Past TRIZCONs / TRIZCON2019 |  |
| /trizcon2019-abstract | 404 Category not found | Redirect | Events / Past TRIZCONs / TRIZCON2019. Redirect to /trizcon2019 | HTTP 404 on live site |
| /trizcon2019/author-submit-paper | TRIZCON2019 | Archive | Events / Past TRIZCONs / TRIZCON2019 |  |
| /trizcon2019/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 348 KB | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/trizcon2019-abstract | TRIZCON2019 | Redirect | Events / Past TRIZCONs / TRIZCON2019. Redirect to /trizcon2019/author-submit-paper | Same body text as /trizcon2019/author-submit-paper |
| /trizcon2019/trizcon2019-authors | TRIZCON2019 Author Info | Archive | Events / Past TRIZCONs / TRIZCON2019 |  |
| /trizcon2019/trizcon2019-authors/80-copyright-license-agreement-2019 | COPYRIGHT LICENSE AGREEMENT 2019 | Archive | Events / Past TRIZCONs / TRIZCON2019 |  |
| /trizcon2019/trizcon2019-authors/80-copyright-license-agreement-2019/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 17 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/trizcon2019-authors/81-altshuller-institute-author-guidelines-for-trizcon2019-papers | Altshuller Institute Author Guidelines for TRIZCON2019 papers | Archive | Events / Past TRIZCONs / TRIZCON2019 |  |
| /trizcon2019/trizcon2019-authors/81-altshuller-institute-author-guidelines-for-trizcon2019-papers/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 17 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/trizcon2019-info | Trizcon2019 Info | Archive | Events / Past TRIZCONs / TRIZCON2019 |  |
| /trizcon2019/trizcon2019-info/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 348 KB | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft | TRIZCON2019 Abstracts and Draft Papers | Archive | Events / Past TRIZCONs / TRIZCON2019 |  |
| /trizcon2019/tz2019draft/100-an-introduction-of-innovation-lab-share-platform-network-system-design/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 51 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/101-an-introduction-to-the-design-culture/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 39 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/102-development-of-art-systems/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 52 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/103-a-triz-based-approach-to-enhance-safety-levels-of-unmanned-aerial-systems-for-urban-operations/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 31 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/104-multi-flow-problem-mining-and-solving-process-model-for-complex-electromechanical-product/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 34 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/106-scientific-notions/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 35 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/111-3d-printers-and-ideas-of-g-altov-novel-the-third-millennium/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 35 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/114-innovation-courses-for-adolescents-in-shanghai/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 49 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/115-introduction-to-the-practice-of-innovation-education-in-chinese-universities/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 45 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/122-improving-diabetes-care-using-triz-to-eliminate-contradictions/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 20 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/123-combining-triz-with-another-advanced-innovation-system-to-more-easily-teach-throughout-universities/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 23 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/128-update8-2-triz/file | [document: application/pdf, 826 KB] PDF title:  (8 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/130-new-diffraction-approach-in-knee-joints-surgery-based-on-triz/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 57 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/84-are-you-solving-the-right-problem/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 42 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/87-outdoor-rescue-product-design-based-on-triz/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 21 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/88-engineering-education-model-based-on-triz/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 84 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/89-reform-and-practice-on-innovation-course-of-applied-orientation-universities/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 146 KB | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/90-using-triz-to-solve-problems-in-detection-and-maintenance-of-offshore-oil-exploitation-structure/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 14 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/93-mechanical-engineering-course-construction-through-integration-of-innovative-method-and-professional/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 133 KB | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/94-design-of-multi-function-intelligent-key-keys/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 18 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/95-triz-competition-in-universities-of-china/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 219 KB | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/97-optimization-of-hydraulic-press-frame-based-on-triz-theory/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 50 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019draft/98-design-of-tomato-picking-device-based-on-triz/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 35 KB] | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers | TRIZCON2019 Abstracts and Papers | Archive | Events / Past TRIZCONs / TRIZCON2019 |  |
| /trizcon2019/tz2019papers/105-streamlining-medical-device-and-combination-product-regulatory-approval-processes/file | [document: application/pdf, 319 KB] (5 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/107-application-of-an-electric-field-actuator-for-thermoacoustic-instability-suppression-in-a-flame/file | [document: application/pdf, 595 KB] (8 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/108-what-principles-were-used-in-the-euclidean-proof-of-the-theorem-1-47-pythagoras/file | [document: application/pdf, 504 KB] (7 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/109-high-speed-ptz-camera-for-law-enforcement-vehicle-application/file | [document: application/pdf, 865 KB] PDF title:  (8 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/110-methodology-for-triz-application-in-research-projects/file | [document: application/pdf, 1830 KB] (38 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/112-formulating-hard-problems-for-solution-case-studies-of-three-important-problems/file | [document: application/pdf, 3796 KB] PDF title: Kartik_Justus_Creative Solutions to Fundam | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/113-strong-trizovian-thinking-in-science/file | 404 Not Found | Redirect | Events / Past TRIZCONs / TRIZCON2019. Redirect to /trizcon2019/tz2019papers | HTTP 404 on live site |
| /trizcon2019/tz2019papers/116-research-on-enhancing-the-efficiency-of-fire-extinguishing-method-with-water-based-on-triz/file | [document: application/pdf, 827 KB] (10 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/121-triz-and-developing-of-creative-imagination-1/file | 404 Not Found | Redirect | Events / Past TRIZCONs / TRIZCON2019. Redirect to /trizcon2019/tz2019papers | HTTP 404 on live site |
| /trizcon2019/tz2019papers/127-55-year-long-experiment-inspired-by-leonardo-da-vinci-in-bioengineering-and-biotechnology-keynote/file | [document: application/pdf, 118 KB] (1 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/129-new-treatment-paradigm-in-fighting-multi-drug-resistant-bacteria-based-on-triz/file | [document: application/pdf, 1879 KB] (28 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/131-last-resort-polymyxin-nephrotoxicity-reduction-based-on-triz/file | [document: application/pdf, 1879 KB] (28 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/132-new-synergetic-binary-hemostatic-gemma-based-on-triz/file | [document: application/pdf, 593 KB] (26 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/133-solving-the-next-problem-protecting-your-invention-in-the-context-of-u-s-patent-law-keynote/file | [document: application/vnd.openxmlformats-officedocument.presentationml.presentation, 377  | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/134-blockchain-trast-at-scale/file | [document: application/pdf, 1207 KB] (28 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/137-the-design-of-tomato-picking-manipulator-based-on-the-triz-theory-1/file | [document: application/pdf, 618 KB] (9 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/138-research-on-innovative-application-of-triz-theory-in-vocational-education/file | [document: application/pdf, 188 KB] (7 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/139-design-of-multi-function-positioning-key-link/file | [document: application/pdf, 629 KB] (14 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/140-outdoor-rescue-product-design-based-on-triz-1/file | [document: application/pdf, 618 KB] (9 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/146-ai-software-that-creates-new-inventions-keynote-presentation/file | [document: application/pdf, 156 KB] (2 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/147-trizcon2019-information-1/file | [document: application/vnd.openxmlformats-officedocument.wordprocessingml.document, 348 KB | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/86-multi-conflict-problem-mining-and-solving-process-model-for-complex-product/file | [document: application/pdf, 1060 KB] PDF title: Microsoft Word - 中文稿4-12 (17 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/91-drummonds-paper/file | [document: application/pdf, 243 KB] (7 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/92-can-doing-art-make-you-even-more-communicative-and-creative/file | [document: application/pdf, 951 KB] (29 pp) | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /trizcon2019/tz2019papers/96-logical-root-cause-analysis-lrca/file | 404 Not Found | Redirect | Events / Past TRIZCONs / TRIZCON2019. Redirect to /trizcon2019/tz2019papers | HTTP 404 on live site |
| /trizcon2019/tz2019papers/99-the-laws-of-technical-systems-evolution-as-productive-tautologies-4-hour-tutorial/file | [document: application/pdf, 201 KB] PDF title: Schollmeyer_Tamuzs_The laws of technical sy | Archive | Events / Past TRIZCONs / TRIZCON2019 | Event document |
| /tz19work3 | 3 Day TRIZ Workshop with Associate Preparation-TRIZCON2019-Workshop | Redirect | Events / Past TRIZCONs / TRIZCON2019. Redirect to /trizcon2019 | Past registration form; no content to carry |
| /tz19work5 | 5 Day TRIZ Workshop with Practitioner Preparation-TRIZCON2019-Workshop | Redirect | Events / Past TRIZCONs / TRIZCON2019. Redirect to /trizcon2019 | Past registration form; no content to carry |
| /tz2019attendee | TRIZCON2019 - Attendee Registration-TRIZCON2019-Conference | Redirect | Events / Past TRIZCONs / TRIZCON2019. Redirect to /trizcon2019 | Past registration form; no content to carry |
| /tz2019oneday | TRIZCON2019 - One Day Pass-TRIZCON2019-Conference | Redirect | Events / Past TRIZCONs / TRIZCON2019. Redirect to /trizcon2019 | Past registration form; no content to carry |
| /tz2019presenter | TRIZCON2019 - Presenter Registration-TRIZCON2019-Special | Redirect | Events / Past TRIZCONs / TRIZCON2019. Redirect to /trizcon2019 | Past registration form; no content to carry |
| /tz2019twoday | TRIZCON2019 - Two Day Pass-TRIZCON2019-Conference | Redirect | Events / Past TRIZCONs / TRIZCON2019. Redirect to /trizcon2019 | Past registration form; no content to carry |
| /register2020 | TRIZCON2020 - AM and PM Sessions-TRIZCON2020 | Redirect | Events / Past TRIZCONs / TRIZCON2020. Redirect to /trizcon2020/abstracts-papers | Past registration form; no content to carry |
| /trizcon2020/abstracts-papers | Abstracts & Papers | Archive | Events / Past TRIZCONs / TRIZCON2020 |  |
| /trizcon2020/abstracts-papers/163-trizcon2020 | TRIZCON2020 | Archive | Events / Past TRIZCONs / TRIZCON2020 |  |
| /trizcon2020/author-guidelines | Author Guidelines | Archive | Events / Past TRIZCONs / TRIZCON2020 |  |
| /trizcon2020/author-guidelines/163-trizcon2020 | TRIZCON2020 | Redirect | Events / Past TRIZCONs / TRIZCON2020. Redirect to /trizcon2020/abstracts-papers/163-trizcon2020 | Same body text as /trizcon2020/abstracts-papers/163-trizcon2020 |
| /trizcon2020 | TRIZCON2020 | Redirect | Events / Past TRIZCONs / TRIZCON2021. Redirect to /trizcon2021 | Same body text as /trizcon2021 |
| /trizcon2020/164-trizcon2021 | TRIZCON2021 | Redirect | Events / Past TRIZCONs / TRIZCON2021. Redirect to /trizcon2021 | Same body text as /trizcon2021 |
| /trizcon2020/conference-information | Conference Info | Redirect | Events / Past TRIZCONs / TRIZCON2021. Redirect to /trizcon2021 | Same body text as /trizcon2021 |
| /trizcon2020/conference-information/164-trizcon2021 | TRIZCON2021 | Redirect | Events / Past TRIZCONs / TRIZCON2021. Redirect to /trizcon2021 | Same body text as /trizcon2021 |
| /trizcon2021 | TRIZCON2021 | Archive | Events / Past TRIZCONs / TRIZCON2021 |  |
| /trizcon2021/164-trizcon2021 | TRIZCON2021 | Redirect | Events / Past TRIZCONs / TRIZCON2021. Redirect to /trizcon2021 | Same body text as /trizcon2021 |
| /167-trizcon2023-1/2023-invitation | 404 Article not found | Redirect | Events / Past TRIZCONs / TRIZCON2023. Redirect to /trizcon2023-1/trizcon2023-abstracts | HTTP 404 on live site |
| /167-trizcon2023-1/2023-invitation/882-trizcon2023 | TRIZCON2023 | Archive | Events / Past TRIZCONs / TRIZCON2023 |  |
| /trizcon2023-1/171-trizcon2024/trizcon2024-abstracts-bios | TRIZCON2024 - Abstracts - Bios | Archive | Events / Past TRIZCONs / TRIZCON2023 |  |
| /trizcon2023-1/trizcon2023-abstracts | TRIZCON2023-Abstracts | Archive | Events / Past TRIZCONs / TRIZCON2023 |  |
| /trizcon2023-1/trizcon2023-abstracts/166-trizcon2023-1 | TRIZCON2023 | Archive | Events / Past TRIZCONs / TRIZCON2023 |  |
| /trizcon2023-1/trizcon2023-abstracts/167-trizcon2023-1/2023-invitation | 404 Article not found | Redirect | Events / Past TRIZCONs / TRIZCON2023. Redirect to /trizcon2023-1/trizcon2023-abstracts | HTTP 404 on live site |
| /trizcon2024-2/171-trizcon2024/trizcon2024-abstracts-bios | TRIZCON2024 - Abstracts - Bios | Redirect | Events / Past TRIZCONs / TRIZCON2023. Redirect to /trizcon2023-1/171-trizcon2024/trizcon2024-abstracts-bios | Same body text as /trizcon2023-1/171-trizcon2024/trizcon2024-abstracts-bios |
| /trizcon2024-2/trizcon2024-abstracts-bios/171-trizcon2024/trizcon2024-abstracts-bios | TRIZCON2024 - Abstracts - Bios | Redirect | Events / Past TRIZCONs / TRIZCON2023. Redirect to /trizcon2023-1/171-trizcon2024/trizcon2024-abstracts-bios | Same body text as /trizcon2023-1/171-trizcon2024/trizcon2024-abstracts-bios |
| /169-trizcon2024 | TRIZCON2024 | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios | TRIZCON2024 - Abstracts - Bios | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/899-trizcon2024-popko | TECHNOLOGY OF CREATIVITY IN THE TRAINING OF PRESCHOOLS | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/900-exploring-the-development-of-ai-triz | Exploring the Development of AI-TRIZ | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/901-ai-triz-integrated-framework-for-enhanced-creativity | AI-TRIZ INTEGRATED FRAMEWORK FOR ENHANCED CREATIVITY | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/902-investigating-issues-related-to-endodontic-treatment-using-triz-innovation-roadmap | Investigating issues related to Endodontic Treatment using TRIZ innovation roadmap | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/903-innovative-design-of-multi-contradiction-systems-based-on-the-function-structure-model | Innovative Design of Multi-contradiction Systems Based on the Function-structure Model | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/904-innovative-thinking-with-triz | Innovative Thinking with TRIZ | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/905-dialectic-materialism-as-the-base-of-laws-of-system-evolution-and-development | Dialectic Materialism as the base of Laws of System Evolution and Development | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/906-c-triz-concept-structure-and-its-application-in-industrial-enterprises | C-TRIZ: Concept, Structure, and Its Application in Industrial Enterprises | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/907-where-and-how-can-an-ai-assist-triz-projects | Where and how can an AI assist TRIZ projects? | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/908-solving-inventive-problems-by-primary-school-students-in-a-digital-environment | Solving Inventive Problems by Primary School Students in a Digital Environment | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/909-generative-ai-for-systematic-resource-modification-in-creative-problem-solving | Generative AI for Systematic Resource Modification in Creative Problem Solving | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/910-internship-bridging-academia-industry-and-triz-the-path-to-a-successful-scientific-career-for-professors-and-students | Internship Bridging Academia, Industry, and TRIZ: The Path to a Successful Scientific Care | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/911-analysis-of-educational-technologies-and-prospects-for-their-development | Analysis of Educational Technologies and Prospects for Their Development | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/912-embrace-triz-inspire-creativity | Embrace TRIZ, Inspire Creativity | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/913-ai-in-innovation-logic-evolving-from-computer-aided-to-human-assisted | AI in Innovation Logic – Evolving from Computer-Aided to Human-Assisted | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/914-triz-application-in-industry-experience-of-rusal-company | TRIZ application in industry. Experience of RUSAL company | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/915-empowering-physics-discovery-triz-insights-with-chatgpt-guidance | Empowering Physics Discovery: TRIZ Insights with ChatGPT Guidance | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/916-the-innovation-service-journey-of-ima-innocloud-challenges-achievements-and-future-directions | The Innovation Service Journey of IMA-InnoCloud: Challenges, Achievements, and Future Dire | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /171-trizcon2024/trizcon2024-abstracts-bios/917-fostering-innovative-learning-experiences-practical-explorations-from-the-tsinghua-university-lab-for-lifelong-learning | Fostering Innovative Learning Experiences: Practical Explorations from the Tsinghua Univer | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /trizcon2023-1 | TRIZCON2023 | Redirect | Events / Past TRIZCONs / TRIZCON2024. Redirect to /trizcon2024-2 | Same body text as /trizcon2024-2 |
| /trizcon2023-1/169-trizcon2024 | TRIZCON2024 | Redirect | Events / Past TRIZCONs / TRIZCON2024. Redirect to /169-trizcon2024 | Same body text as /169-trizcon2024 |
| /trizcon2023-1/171-trizcon2024/trizcon2024-abstracts-bios/899-trizcon2024-popko | TECHNOLOGY OF CREATIVITY IN THE TRAINING OF PRESCHOOLS | Redirect | Events / Past TRIZCONs / TRIZCON2024. Redirect to /171-trizcon2024/trizcon2024-abstracts-bios/899-trizcon2024-popko | Same body text as /171-trizcon2024/trizcon2024-abstracts-bios/899-trizcon2024-popko |
| /trizcon2023-1/171-trizcon2024/trizcon2024-abstracts-bios/900-exploring-the-development-of-ai-triz | Exploring the Development of AI-TRIZ | Redirect | Events / Past TRIZCONs / TRIZCON2024. Redirect to /171-trizcon2024/trizcon2024-abstracts-bios/900-exploring-the-development-of-ai-triz | Same body text as /171-trizcon2024/trizcon2024-abstracts-bios/900-exploring-the-development-of-ai-triz |
| /trizcon2024-2 | TRIZCON2024 | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /trizcon2024-2/169-trizcon2024 | TRIZCON2024 | Redirect | Events / Past TRIZCONs / TRIZCON2024. Redirect to /169-trizcon2024 | Same body text as /169-trizcon2024 |
| /trizcon2024-2/171-trizcon2024/trizcon2024-abstracts-bios/899-trizcon2024-popko | TECHNOLOGY OF CREATIVITY IN THE TRAINING OF PRESCHOOLS | Redirect | Events / Past TRIZCONs / TRIZCON2024. Redirect to /171-trizcon2024/trizcon2024-abstracts-bios/899-trizcon2024-popko | Same body text as /171-trizcon2024/trizcon2024-abstracts-bios/899-trizcon2024-popko |
| /trizcon2024-2/171-trizcon2024/trizcon2024-abstracts-bios/900-exploring-the-development-of-ai-triz | Exploring the Development of AI-TRIZ | Redirect | Events / Past TRIZCONs / TRIZCON2024. Redirect to /171-trizcon2024/trizcon2024-abstracts-bios/900-exploring-the-development-of-ai-triz | Same body text as /171-trizcon2024/trizcon2024-abstracts-bios/900-exploring-the-development-of-ai-triz |
| /trizcon2024-2/trizcon2024-abstracts-bios | TRIZCON2024 - Abstracts - Bios | Archive | Events / Past TRIZCONs / TRIZCON2024 |  |
| /trizcon2024-2/trizcon2024-abstracts-bios/171-trizcon2024/trizcon2024-abstracts-bios/899-trizcon2024-popko | TECHNOLOGY OF CREATIVITY IN THE TRAINING OF PRESCHOOLS | Redirect | Events / Past TRIZCONs / TRIZCON2024. Redirect to /171-trizcon2024/trizcon2024-abstracts-bios/899-trizcon2024-popko | Same body text as /171-trizcon2024/trizcon2024-abstracts-bios/899-trizcon2024-popko |
| /trizcon2024-2/trizcon2024-abstracts-bios/171-trizcon2024/trizcon2024-abstracts-bios/900-exploring-the-development-of-ai-triz | Exploring the Development of AI-TRIZ | Redirect | Events / Past TRIZCONs / TRIZCON2024. Redirect to /171-trizcon2024/trizcon2024-abstracts-bios/900-exploring-the-development-of-ai-triz | Same body text as /171-trizcon2024/trizcon2024-abstracts-bios/900-exploring-the-development-of-ai-triz |
| /171-trizcon2024/trizcon2024-abstracts-bios/933-laws-on-the-development-of-systems-of-scientific-ideas | Laws on the development of systems of scientific ideas | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /trizcon2025/trizcon2025-abstracts-biographies/943-laws-on-the-development-of-systems-of-scientific-ideas | Same body text as /trizcon2025/trizcon2025-abstracts-biographies/943-laws-on-the-development-of-systems-of-scientific-ideas |
| /173-trizcon2025 | TRIZCON2025 | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /173-trizcon2025/927-trizcon2025-2 | TRIZCON2025 | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /174-trizcon2025/trizcon2025-overview | TRIZCON2025 Overview | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /174-trizcon2025/trizcon2025-overview/931-functional-thinking-invest-to-win-and-stop-funding-losses | Functional Thinking: Invest to Win and Stop Funding Losses | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /174-trizcon2025/trizcon2025-overview | Same body text as /174-trizcon2025/trizcon2025-overview |
| /trizcon2025 | TRIZCON2025 | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/173-trizcon2025 | TRIZCON2025 | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/174-trizcon2025/trizcon2025-overview | TRIZCON2025 Overview | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /174-trizcon2025/trizcon2025-overview | Same body text as /174-trizcon2025/trizcon2025-overview |
| /trizcon2025/registration | TRIZCON2025 - Registration | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/registration/173-trizcon2025 | TRIZCON2025 | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /trizcon2025/173-trizcon2025 | Same body text as /trizcon2025/173-trizcon2025 |
| /trizcon2025/registration/174-trizcon2025/trizcon2025-overview | TRIZCON2025 Overview | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /174-trizcon2025/trizcon2025-overview | Same body text as /174-trizcon2025/trizcon2025-overview |
| /trizcon2025/trizcon2025-abstracts-biographies | TRIZCON2025  Abstracts & Biographies | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/928-presentation-ai-enabled-innovative-educational-practice-activities-in-universities | Presentation: AI-enabled innovative educational practice activities in universities | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/930-scientific-and-technical-forecasting-in-futurology-and-science-fiction-literature-2 | Scientific and technical forecasting in futurology and science fiction literature | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/932-integrating-triz-and-ai-to-navigate-the-when-to-innovate-paradox | Integrating TRIZ and AI to Navigate the When-To-Innovate Paradox | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/938-investigation-of-adults-lifelong-learning-an-example-of-using-triz-in-social-research | Investigation of Adults' Lifelong Learning  – an Example of Using TRIZ in Social Research | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/939-triz-with-ai-theory-and-results | TRIZ with AI – Theory and Results | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/940-large-language-model-chatbots-for-triz | Large Language Model Chatbots for TRIZ | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/941-triz-and-the-evolution-of-language | TRIZ and the evolution of language | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/942-solving-in-meteorite-identification-and-satellite-laser-tracking | Solving in Meteorite Identification and Satellite Laser Tracking | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/943-laws-on-the-development-of-systems-of-scientific-ideas | Laws on the development of systems of scientific ideas | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/944-functional-thinking-invest-to-win-and-stop-funding-losses | Functional Thinking: Invest to Win and Stop Funding Losses | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/945-problem-sensemaking-under-deep-uncertainty | Problem Sensemaking Under Deep Uncertainty | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/946-how-triz-activates-teams-human-intelligence | How TRIZ Activates Teams’ Human Intelligence | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/947-toward-inventive-sustainable-supply-chains-triz-in-practice-and-ai-in-prospect-for-lean-green-systems | Toward Inventive Sustainable Supply Chains: TRIZ in Practice and AI in Prospect for Lean G | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/948-technology-for-innovation-triz-implementation-plan-for-companies | Technology for Innovation (TRIZ) Implementation Plan for Companies | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/949-triz-and-the-complementarity-principle-in-science-and-technology | TRIZ and the Complementarity Principle in Science and Technology | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/950-discovering-smart-adaptive-medical-drugs-the-future-of-medicine | Discovering Smart Adaptive Medical Drugs: The Future of Medicine | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-abstracts-biographies/952-some-challenges-needed-to-be-handled-in-medicine | Some challenges needed to be handled in medicine | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-agenda | TRIZCON2025 - Agenda | Archive | Events / Past TRIZCONs / TRIZCON2025 |  |
| /trizcon2025/trizcon2025-agenda/173-trizcon2025 | TRIZCON2025 | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /trizcon2025/173-trizcon2025 | Same body text as /trizcon2025/173-trizcon2025 |
| /trizcon2025/trizcon2025-agenda/174-trizcon2025/trizcon2025-overview | TRIZCON2025 Overview | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /174-trizcon2025/trizcon2025-overview | Same body text as /174-trizcon2025/trizcon2025-overview |
| /trizcon2025/trizcon2025-overview | TRIZCON2025 - Overview | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /trizcon2025 | Same body text as /trizcon2025 |
| /trizcon2025/trizcon2025-overview/173-trizcon2025 | TRIZCON2025 | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /trizcon2025/173-trizcon2025 | Same body text as /trizcon2025/173-trizcon2025 |
| /trizcon2025/trizcon2025-overview/174-trizcon2025/trizcon2025-overview | TRIZCON2025 Overview | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /174-trizcon2025/trizcon2025-overview | Same body text as /174-trizcon2025/trizcon2025-overview |
| /trizcon2025/trizcon2025-wrap-up | TRIZCON2025 - Wrap-up | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /trizcon2025 | Same body text as /trizcon2025 |
| /trizcon2025/trizcon2025-wrap-up/173-trizcon2025 | TRIZCON2025 | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /trizcon2025/173-trizcon2025 | Same body text as /trizcon2025/173-trizcon2025 |
| /trizcon2025/trizcon2025-wrap-up/174-trizcon2025/trizcon2025-overview | TRIZCON2025 Overview | Redirect | Events / Past TRIZCONs / TRIZCON2025. Redirect to /174-trizcon2025/trizcon2025-overview | Same body text as /174-trizcon2025/trizcon2025-overview |
| /author-submit-paper | 404 Category not found | Redirect | Events / TRIZ Conferences. Redirect to /triz-event-list | HTTP 404 on live site |
| /component/eventlist | 404 Component not found. | Redirect | Events / TRIZ Conferences. Redirect to /triz-event-list | HTTP 404 on live site |
| /triz-event-list | TRIZ Events | Keep | Events / TRIZ Conferences | Overview text stops at TRIZCON2019; needs update |
| /triz-event-list/120-uncategorised | Uncategorised | Redirect | Events / TRIZ Conferences. Redirect to /triz-event-list | Same body text as /triz-event-list |
| /triz-event-list/trizcon | What is TRIZCON? | Redirect | Events / TRIZ Conferences. Redirect to /triz-event-list | Same body text as /triz-event-list |
| /triz-event-list/trizcon/120-uncategorised | Uncategorised | Redirect | Events / TRIZ Conferences. Redirect to /triz-event-list | Same body text as /triz-event-list |
| /triz-event-list/trizcon/annual-conference | 404 Article not found | Redirect | Events / TRIZ Conferences. Redirect to /triz-event-list | HTTP 404 on live site |
| /webinar-series | Upcoming events | Keep | Events / Webinar Series | Currently shows only "no up-coming events"; that empty state folds into Events landing |
| /103-certification | Certification | Merge | Learn / Certification. Merge into Learn / Certification | History section |
| /103-certification/407-triz-certification45 | TRIZ Certification History | Merge | Learn / Certification. Merge into Learn / Certification | History section |
| /triz-certification | TRIZ Certification | Keep | Learn / Certification |  |
| /triz-certification/103-certification | Certification | Merge | Learn / Certification. Merge into Learn / Certification | History section |
| /triz-certification/78-information7 | Information | Redirect | Learn / Certification. Redirect to /triz-certification | Empty category |
| /triz-certification/associate-certification/103-certification | Certification | Redirect | Learn / Certification. Redirect to Learn / Certification | Same body text as /triz-certification/103-certification |
| /triz-certification/certified-practitioners/103-certification | Certification | Redirect | Learn / Certification. Redirect to Learn / Certification | Same body text as /triz-certification/103-certification |
| /triz-certification/general-provisions | General Provisions | Merge | Learn / Certification. Merge into Learn / Certification |  |
| /triz-certification/general-provisions/103-certification | Certification | Redirect | Learn / Certification. Redirect to Learn / Certification | Same body text as /triz-certification/103-certification |
| /triz-certification/master-certification/103-certification | Certification | Redirect | Learn / Certification. Redirect to Learn / Certification | Same body text as /triz-certification/103-certification |
| /triz-certification/practitioner-certification/103-certification | Certification | Redirect | Learn / Certification. Redirect to Learn / Certification | Same body text as /triz-certification/103-certification |
| /triz-certification/specialist-certification/103-certification | Certification | Redirect | Learn / Certification. Redirect to Learn / Certification | Same body text as /triz-certification/103-certification |
| /triz-certification/summary-qualifications | Summary of Qualifications | Merge | Learn / Certification. Merge into Learn / Certification |  |
| /triz-certification/summary-qualifications/103-certification | Certification | Redirect | Learn / Certification. Redirect to Learn / Certification | Same body text as /triz-certification/103-certification |
| /triz-certification/test-application/103-certification | Certification | Redirect | Learn / Certification. Redirect to Learn / Certification | Same body text as /triz-certification/103-certification |
| /triz-certification/triz-certification-board-members/103-certification | Certification | Redirect | Learn / Certification. Redirect to Learn / Certification | Same body text as /triz-certification/103-certification |
| /triz-certification/certified-practitioners | Certified Practitioners List | Keep | Learn / Certification Board & Register |  |
| /triz-certification/triz-certification-board-members | Certification Board | Merge | Learn / Certification Board & Register. Merge into Learn / Certification Board & Register |  |
| /triz-certification/associate-certification | Associate Certification | Merge | Learn / Certification Levels. Merge into Learn / Certification Levels |  |
| /triz-certification/master-certification | Master Certification | Merge | Learn / Certification Levels. Merge into Learn / Certification Levels |  |
| /triz-certification/practitioner-certification | Practitioner Certification | Merge | Learn / Certification Levels. Merge into Learn / Certification Levels |  |
| /triz-certification/specialist-certification | Specialist Certification | Merge | Learn / Certification Levels. Merge into Learn / Certification Levels |  |
| /triz-certification/test-application | Test Application | Merge | Learn / Certification Levels. Merge into Learn / Certification Levels | Application form section on the Levels page |
| /triz/publication-samples | Publication Samples | Keep | Learn / Publication Samples | Excerpts from Altshuller books/Izobretenia (e.g. 40 Principles 1-5) treated as instructional |
| /triz/publication-samples/20-qpsychological-barriersq-the-innovation-algorithm | "Psychological Barriers," The Innovation Algorithm | Keep | Learn / Publication Samples |  |
| /triz/publication-samples/21-qthe-power-of-fantasyq-the-innovation-algorithm | "The Power of Fantasy," The Innovation Algorithm | Keep | Learn / Publication Samples |  |
| /triz/publication-samples/22-qprinciples-1-5q-40-principles | "Principles 1-5," 40 Principles | Keep | Learn / Publication Samples |  |
| /triz/publication-samples/23-qthe-inventors-card-indexq-and-suddenly-the-inventor-appeared | "The Inventor's Card Index," And Suddenly the Inventor Appeared | Keep | Learn / Publication Samples |  |
| /triz/publication-samples/24-qwhat-will-happen-after-the-final-victoryq-izobretenia-vol-1 | "What will Happen After the Final Victory?," Izobretenia Vol. 1 | Keep | Learn / Publication Samples |  |
| /triz/publication-samples/25-qmanaging-innovation-knowledgeq-izobretenia-vol-1 | "Managing Innovation Knowledge," Izobretenia Vol. 1 | Keep | Learn / Publication Samples |  |
| /events/category/153-training | Events from Training | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/event/58-advanced-practice-triz-course-virtual | Advanced Practice TRIZ Course -- Virtual | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/event/72-triz-practitioner-course-virtual | TRIZ Practitioner Course -- Virtual | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/event/77-virtual-multi-session-triz-workshop-in-preparation-for-the-associate-certification-test-from-the-atshuller-institute | Virtual Multi-session TRIZ Workshop in preparation for the Associate Certification test fr | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/event/83-designing-manufacturing-better-products-faster-using-top-triz-online | Designing & Manufacturing Better Products Faster Using  TOP-TRIZ - Online | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/event/91-top-triz-rcca-course-virtual | TOP-TRIZ RCCA course -- Virtual | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/export/58-advanced-practice-triz-course-virtual | [document: text/calendar, 2 KB] | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function |
| /events/export/72-triz-practitioner-course-virtual | [document: text/calendar, 1 KB] | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function |
| /events/export/77-virtual-multi-session-triz-workshop-in-preparation-for-the-associate-certification-test-from-the-atshuller-institute | [document: text/calendar, 6 KB] | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function |
| /events/export/83-designing-manufacturing-better-products-faster-using-top-triz-online | [document: text/calendar, 3 KB] | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function |
| /events/export/91-top-triz-rcca-course-virtual | [document: text/calendar, 1 KB] | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function |
| /events/invite/58-advanced-practice-triz-course-virtual | TRIZ Events | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/invite/72-triz-practitioner-course-virtual | TRIZ Events | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/invite/77-virtual-multi-session-triz-workshop-in-preparation-for-the-associate-certification-test-from-the-atshuller-institute | TRIZ Events | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/invite/83-designing-manufacturing-better-products-faster-using-top-triz-online | TRIZ Events | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/invite/91-top-triz-rcca-course-virtual | TRIZ Events | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/location/16-seattle-wa-usa | TRIZ Events | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/location/46-virtual | TRIZ Events | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/location/6-zinovy-royzen-triz-consulting-inc | TRIZ Events | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/my-subscriptions | TRIZ Events | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /events/print/58-advanced-practice-triz-course-virtual | Advanced Practice TRIZ Course -- Virtual | Redirect | Learn / Training Calendar. Redirect to /triz-training | Same body text as /triz-training/print/58-advanced-practice-triz-course-virtual |
| /events/print/72-triz-practitioner-course-virtual | TRIZ Practitioner Course -- Virtual | Redirect | Learn / Training Calendar. Redirect to /triz-training | Same body text as /triz-training/print/72-triz-practitioner-course-virtual |
| /events/print/77-virtual-multi-session-triz-workshop-in-preparation-for-the-associate-certification-test-from-the-atshuller-institute | Virtual Multi-session TRIZ Workshop in preparation for the Associate Certification test fr | Redirect | Learn / Training Calendar. Redirect to /triz-training | Same body text as /triz-training/print/77-virtual-multi-session-triz-workshop-in-preparation-for-the-associate-certification-test-from-the-atshuller-institute |
| /events/print/83-designing-manufacturing-better-products-faster-using-top-triz-online | Designing & Manufacturing Better Products Faster Using  TOP-TRIZ - Online | Redirect | Learn / Training Calendar. Redirect to /triz-training | Same body text as /triz-training/print/83-designing-manufacturing-better-products-faster-using-top-triz-online |
| /events/print/91-top-triz-rcca-course-virtual | TOP-TRIZ RCCA course -- Virtual | Redirect | Learn / Training Calendar. Redirect to /triz-training | Same body text as /triz-training/print/91-top-triz-rcca-course-virtual |
| /triz-training | Events from Training | Keep | Learn / Training Calendar |  |
| /triz-training/category/153-training | Events from Training | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/event/58-advanced-practice-triz-course-virtual | Advanced Practice TRIZ Course -- Virtual | Merge | Learn / Training Calendar. Merge into Learn / Training Calendar | Individual course listings (2026 dates) shown in the calendar |
| /triz-training/event/72-triz-practitioner-course-virtual | TRIZ Practitioner Course -- Virtual | Merge | Learn / Training Calendar. Merge into Learn / Training Calendar | Individual course listings (2026 dates) shown in the calendar |
| /triz-training/event/77-virtual-multi-session-triz-workshop-in-preparation-for-the-associate-certification-test-from-the-atshuller-institute | Virtual Multi-session TRIZ Workshop in preparation for the Associate Certification test fr | Merge | Learn / Training Calendar. Merge into Learn / Training Calendar | Individual course listings (2026 dates) shown in the calendar |
| /triz-training/event/83-designing-manufacturing-better-products-faster-using-top-triz-online | Designing & Manufacturing Better Products Faster Using  TOP-TRIZ - Online | Merge | Learn / Training Calendar. Merge into Learn / Training Calendar | Individual course listings (2026 dates) shown in the calendar |
| /triz-training/event/91-top-triz-rcca-course-virtual | TOP-TRIZ RCCA course -- Virtual | Merge | Learn / Training Calendar. Merge into Learn / Training Calendar | Individual course listings (2026 dates) shown in the calendar |
| /triz-training/export/58-advanced-practice-triz-course-virtual | [document: text/calendar, 2 KB] | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function |
| /triz-training/export/72-triz-practitioner-course-virtual | [document: text/calendar, 1 KB] | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function |
| /triz-training/export/77-virtual-multi-session-triz-workshop-in-preparation-for-the-associate-certification-test-from-the-atshuller-institute | [document: text/calendar, 6 KB] | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function |
| /triz-training/export/83-designing-manufacturing-better-products-faster-using-top-triz-online | [document: text/calendar, 3 KB] | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function |
| /triz-training/export/91-top-triz-rcca-course-virtual | [document: text/calendar, 1 KB] | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function |
| /triz-training/invite/58-advanced-practice-triz-course-virtual | TRIZ Events by Category | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/invite/72-triz-practitioner-course-virtual | TRIZ Events by Category | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/invite/77-virtual-multi-session-triz-workshop-in-preparation-for-the-associate-certification-test-from-the-atshuller-institute | TRIZ Events by Category | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/invite/83-designing-manufacturing-better-products-faster-using-top-triz-online | TRIZ Events by Category | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/invite/91-top-triz-rcca-course-virtual | TRIZ Events by Category | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/location/16-seattle-wa-usa | TRIZ Events by Category | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/location/46-virtual | TRIZ Events by Category | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/location/6-zinovy-royzen-triz-consulting-inc | TRIZ Events by Category | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/my-subscriptions | TRIZ Events by Category | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/print/58-advanced-practice-triz-course-virtual | Advanced Practice TRIZ Course -- Virtual | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/print/72-triz-practitioner-course-virtual | TRIZ Practitioner Course -- Virtual | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/print/77-virtual-multi-session-triz-workshop-in-preparation-for-the-associate-certification-test-from-the-atshuller-institute | Virtual Multi-session TRIZ Workshop in preparation for the Associate Certification test fr | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/print/83-designing-manufacturing-better-products-faster-using-top-triz-online | Designing & Manufacturing Better Products Faster Using  TOP-TRIZ - Online | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /triz-training/print/91-top-triz-rcca-course-virtual | TOP-TRIZ RCCA course -- Virtual | Redirect | Learn / Training Calendar. Redirect to /triz-training | Calendar system function or duplicate of /triz-training entry |
| /115-membership | Membership | Merge | Membership. Merge into Membership (levels section) |  |
| /115-membership/603-annual-membership | Annual Membership | Merge | Membership. Merge into Membership (levels section) |  |
| /99-faqs/information15/151-members-only-content | Members Only Content | Merge | Membership. Merge into Membership (benefits section) | Describes paid-member-only materials |
| /community-news/138-survey | Survey | Redirect | Membership. Redirect to /membership | Survey page with no visible content |
| /community-news/138-survey/625-member-survey | Member Survey | Redirect | Membership. Redirect to /membership | Survey page with no visible content |
| /groupjive | Uncategorized | Redirect | Membership. Redirect to /membership | Empty "0 Groups" page |
| /membership | Membership | Keep | Membership |  |
| /membership/115-membership | Membership | Merge | Membership. Merge into Membership (levels section) |  |
| /membership/group | Corporate/Group Plans | Merge | Membership. Merge into Membership (levels section) |  |
| /membership/group/115-membership | Membership | Redirect | Membership. Redirect to Membership (levels section) | Same body text as /membership/115-membership |
| /membership/lifetime/115-membership | Membership | Redirect | Membership. Redirect to Membership (levels section) | Same body text as /membership/115-membership |
| /113-special-projects | Special Projects | Merge | Membership / Donate & Special Projects. Merge into Membership / Donate & Special Projects |  |
| /113-special-projects/111-altshullers-fund | Altshuller's Fund | Merge | Membership / Donate & Special Projects. Merge into Membership / Donate & Special Projects |  |
| /113-special-projects/29-outreach-program-schools | Outreach Program: Schools | Merge | Membership / Donate & Special Projects. Merge into Membership / Donate & Special Projects |  |
| /113-special-projects/30-scholarship-program | Scholarship Program | Merge | Membership / Donate & Special Projects. Merge into Membership / Donate & Special Projects |  |
| /113-special-projects/31-education-development-program | Education Development Program | Merge | Membership / Donate & Special Projects. Merge into Membership / Donate & Special Projects |  |
| /donations | Donations / Special Projects | Keep | Membership / Donate & Special Projects |  |
| /donations/113-special-projects | Special Projects | Merge | Membership / Donate & Special Projects. Merge into Membership / Donate & Special Projects |  |
| /donations/support-us | 404 Category not found | Redirect | Membership / Donate & Special Projects. Redirect to /donations | HTTP 404 on live site |
| /account/logout | (login page) | Redirect | Membership / Join. Redirect to live member system | Member system, outside static prototype |
| /component/comprofiler/lostpassword | Lost your Password? | Redirect | Membership / Join. Redirect to live member system | Member system, outside static prototype |
| /component/comprofiler/registers | Sign up | Redirect | Membership / Join. Redirect to live member system | Member system, outside static prototype |
| /component/comprofiler/userprofile/2344-aradise | Altshuller Institute | Redirect | Membership / Join. Redirect to live member system | Member system, outside static prototype |
| /component/comprofiler/userprofile/76-rrl | Altshuller Institute | Redirect | Membership / Join. Redirect to live member system | Member system, outside static prototype |
| /component/comprofiler/userprofile/tadmin | Altshuller Institute | Redirect | Membership / Join. Redirect to live member system | Member system, outside static prototype |
| /login | Login | Redirect | Membership / Join. Redirect to live member login | Member system, outside static prototype |
| /membership/join | Altshuller Institute Registration | Keep | Membership / Join | Checkout/registration stays on live member system |
| /profile-edit | Edit My Profile | Redirect | Membership / Join. Redirect to live member system | Member system, outside static prototype |
| /registration/registers | 404 Category not found | Redirect | Membership / Join. Redirect to /membership/join | HTTP 404 on live site |
| /triz-event-list/trizcon2016-top | (login page) | Redirect | Membership / Join. Redirect to live member system | Member system, outside static prototype |
| /triz-event-list/trizcon2017 | (login page) | Redirect | Membership / Join. Redirect to live member system | Member system, outside static prototype |
| /triz-event-list/trizcon2018-in-review | (login page) | Redirect | Membership / Join. Redirect to live member system | Member system, outside static prototype |
| /membership/lifetime | Lifetime Members | Keep | Membership / Lifetime Members |  |
| /114-sponsorship/783-our-supporters | Our Legacy Supporters | Merge | Membership / Our Sponsors. Merge into Membership / Our Sponsors |  |
| /our-supporters | Our Sponsors | Keep | Membership / Our Sponsors |  |
| /114-sponsorship | Sponsorship | Merge | Membership / Sponsorship. Merge into Membership / Sponsorship |  |
| /our-supporters/114-sponsorship | Sponsorship | Redirect | Membership / Sponsorship. Redirect to Membership / Sponsorship | Same body text as /sponsorship/114-sponsorship |
| /sponsorship | AI Sponsorship | Keep | Membership / Sponsorship |  |
| /sponsorship/114-sponsorship | Sponsorship | Merge | Membership / Sponsorship. Merge into Membership / Sponsorship |  |
| /component/virtuemart | 404 Component not found. | Redirect | Membership / Store. Redirect to /visit-our-store | HTTP 404 on live site |
| /online-store/triz-online-store/cert | 404 Category not found | Redirect | Membership / Store. Redirect to /visit-our-store | HTTP 404 on live site |
| /online-store/triz-online-store/donatations | 404 Category not found | Redirect | Membership / Store. Redirect to /visit-our-store | HTTP 404 on live site |
| /refund-policy | 404 Article not found | Redirect | Membership / Store. Redirect to /visit-our-store | HTTP 404 on live site |
| /visit-our-store | General Store | Keep | Membership / Store | JS Ecwid store; stays external |
| /visit-our-store/Become-a-Legacy-Supporter-Annual-p151521889 | Become a Legacy Supporter (Annual) \| General Store | Redirect | Membership / Store. Redirect to /visit-our-store | Ecwid product route; store stays external |
| /visit-our-store/Become-a-Legacy-Supporter-Monthly-Bill-p151529478 | General Store | Redirect | Membership / Store. Redirect to /visit-our-store | HTTP 404 on live site |
| /visit-our-store/TRIZCON2025-Registration-for-Latvian-students-and-citizens-for-in-person-viewing-of-this-2-day-symposium-in-Riga-Latvia-p781666639 | General Store | Redirect | Membership / Store. Redirect to /visit-our-store | HTTP 404 on live site |
| /visit-our-store/TRIZCON2025-Registration-for-ONLINE-viewing-of-this-2-day-symposium-from-Latvia-p711448752 | General Store | Redirect | Membership / Store. Redirect to /visit-our-store | HTTP 404 on live site |
| /visit-our-store/TRIZCON2025-Registration-for-live-viewing-of-this-2-day-symposium-in-Riga-Latvia-p781763020 | General Store | Redirect | Membership / Store. Redirect to /visit-our-store | HTTP 404 on live site |
| /component/weblinks | Altshuller Institute | Redirect | Library. Redirect to /triz-articles | Empty page |
| /component/gallery2 | 404 Component not found. | Redirect | Library / Articles. Redirect to /triz-articles | HTTP 404 on live site |
| /component/tags/tag/artificial-intelligence | Artificial Intelligence | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/bitcoin | Bitcoin | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/children-s-inventive-activity | children’s inventive activity | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/chips | Chips | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/critical-thinking | Critical Thinking | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/digital-laboratory | digital laboratory | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/earthquakes | Earthquakes | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/education | education | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/environmental-applications | Environmental applications | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/idea-generation | Idea Generation | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/innovation | Innovation, | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/international-event | international event | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/japan | Japan, | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/latvia | Latvia | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/llm | LLM | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/manufacturing | Manufacturing | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/otsm-triz-technologies | OTSM-TRIZ technologies | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/photons | Photons | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/problem-solving | Problem solving | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/resource-modification | Resource Modification | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/system-development | system development, | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/triz | TRIZ, | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /component/tags/tag/triz-principles | TRIZ Principles | Redirect | Library / Articles. Redirect to /triz-articles | Tags get no page of their own |
| /triz-articles | TRIZ Articles | Keep | Library / Articles |  |
| /triz-articles/<a href= | 404 Article not found | Redirect | Library / Articles. Redirect to /triz-articles | HTTP 404 on live site |
| /triz-articles/curries-corner | Curries Corner | Keep | Library / Articles / Curries Corner |  |
| /triz-articles/curries-corner/437-triz-takes-case-based-instruction-to-a-higher-level | TRIZ Takes Case-Based Instruction to a Higher Level | Keep | Library / Articles / Curries Corner |  |
| /triz-articles/curries-corner/527-the-well-tinkered-mind | The Well-Tinkered Mind | Keep | Library / Articles / Curries Corner |  |
| /triz-articles/inside-triz | Inside TRIZ | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/378-case-studies-in-triz-renewable-energy-systems | Case Studies In TRIZ: Renewable Energy Systems | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/387-deploying-innovation-and-inventive-thinking-in-organizations | Deploying Innovation and Inventive Thinking in Organizations | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/390-function-modeling-for-the-rest-of-us | Function Modeling For The Rest Of Us | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/392-the-function-modeling-method-for-new-product-development40 | The Function Modeling Method for New Product Development | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/395-triz-in-technology-education-perceptions-of-future-teachers | TRIZ in Technology Education: Perceptions of Future Teachers | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/398-the-holi-play-bags | The Holi play bags | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/400-how-to-have-your-triz-cake-and-eat-it-too41 | How to have your TRIZ cake and eat it too | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/419-contradiction-matrix-case-study | Contradiction Matrix Case Study | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/426-abstraction-and-analogy-thinking | Abstraction and Analogy Thinking | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/428-power-of-perspectives-thinking | Power of Perspectives Thinking | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/431-embrace-constraints-to-innovate | Embrace Constraints to Innovate | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/435-lg-case-study-for-making-shrinking-tubes | LG case study for making shrinking tubes | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/438-contradictions-beget-conflicts | Contradictions Beget Conflicts | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/441-eliminating-hitching-and-ringing-in-a-diesel-engine-powertrain | Optimization of a Diesel Engine Software Control Strategy | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/468-enhancing-air-safety-for-pilots-and-atc-using-triz | Enhancing Air Safety for Pilots and ATC using TRIZ | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/49-improving-technological-literacy-in-the-schools | Improving Technological Literacy in the Schools | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/496-improving-the-fuzzy-front-end-of-product-development-for-continuous-innovation | Improving the Fuzzy Front End of Product Development for Continuous Innovation | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/502-give-way-to-the-wind | Give Way to the Wind | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/516-holistic-value-framework | Holistic Value Framework using TRIZ and other frameworks | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/570-seeing-the-invisible-a-systematic-approach-to-uncovering-hidden-resources53 | Seeing the Invisible- A Systematic Approach to Uncovering Hidden Resources | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/58-beyond-swot-and-towards-change-p-triz-part-6 | Beyond SWOT And Towards Change: P-TRIZ, Part 6 | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/586-case-studies-from-a-breakthrough-innovation | Case Studies From A Breakthrough Innovation | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/589-improving-the-fuzzy-front-end-of-product-development-for-continuous-innovation-incorporating-triz58 | Improving the Fuzzy Front End of Product Development for Continuous Innovation Incorporati | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/596-law-of-increasing-intelligence-of-technical-systems | Law of Increasing Intelligence of Technical Systems | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/609-tranformation-algorithm | Development of the Creativity and Formula of the Nontechnical Systems' Transformation Algo | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/620-2-hour-triz | THE REAL WORLD: TRIZ in Two Hours for Undergraduate and Masters Level Students! | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/650-fuel-cell | CASE STUDY: APPLYING TRIZ IN A NON-TECHNICAL SETTING FOR A FUEL-CELL START-UP | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/717-sbce | Set Based Concurrent Engineering | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/721-sbce-2 | Set Based Concurrent Engineering (2) | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/725-quantifying-the-triz-levels-of-invention | Quantifying the TRIZ Levels of Invention | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/726-innovation-management | Innovation Management | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/745-steam-from-the-gridiron | STEAM from the gridiron | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/760-our-conscious-and-subconscious-minds-a-powerful-duo | OUR CONSCIOUS AND SUBCONSCIOUS MINDS:  A POWERFUL DUO | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/761-our-conscious-and-subconscious-minds-a-powerful-duo-1 | OUR CONSCIOUS AND SUBCONSCIOUS MINDS:   A POWERFUL DUO -1 | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/766-triz-plus-a-modern-tool-for-enhancing-design-innovation | TRIZ Plus – A Modern Tool for Enhancing Design Innovation | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/772-the-10-top-skills-that-will-land-you-high-paying-jobs-by-2020-according-to-the-world-economic-forum | The 10 Top Skills That Will Land You High-Paying Jobs by 2020, According to the World Econ | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/788-the-5-biggest-challenges-for-smart-factories | The 5 Biggest Challenges for Smart Factories | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/791-declining-federal-research | Declining Federal Research Is Hurting US Innovation | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/799-imagine-a-flexible-digital-screen-that-heals-itself-when-it-cracks | Imagine a flexible digital screen that heals itself when it cracks. | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/814-smart-concrete-paves-way-to-high-tech-roads | Smart Concrete Paves Way to High-Tech Roads | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/816-what-s-fueling-the-ev-drive | What's Fueling the EV Drive? | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/818-what-s-ahead-for-product-development-innovatiowhat-s-ahead-for-product-development-innovation-in-2021n-in-2021 | Product Development & Innovation in 2021 | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/821-first-human-uses-high-bandwidth-wireless-brain-computer-interface | First Human Uses High-Bandwidth Wireless Brain-Computer Interface | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/824-world-s-first-graphene-enhanced-concrete-slab-poured-in-england | World's first graphene-enhanced   concrete slab poured in England | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/828-world-s-first-graphene-enhanced-concrete-slab-poured-in-england-2 | World's first graphene-enhanced   concrete slab poured in England (2) | Redirect | Library / Articles / Inside TRIZ. Redirect to /triz-articles/inside-triz/824-world-s-first-graphene-enhanced-concrete-slab-poured-in-england | Same body text as /triz-articles/inside-triz/824-world-s-first-graphene-enhanced-concrete-slab-poured-in-england |
| /triz-articles/inside-triz/829-why-4-0-is-often-3-0-and-smart-is-not-always-intelligent | Why '4.0' Is Often 3.0, and Smart Is Not Always Intelligent | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/831-robotic-fish-tail-and-elegant-math-could-inspire-underwater-drones | Robotic Fish Tail and Elegant Math Could Inspire Underwater Drones | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/835-self-healing-material | Self-healing Display Material | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/839-supply-chain | Idealized Supply Chain Design | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/841-scientists-developed-transparent-solar-cells-that-can-be-used-in-windows-and-last-for-30-years | Scientists developed transparent solar cells that can be used in windows and last for 30 y | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/843-technology-chip-startups-using-light-instead-of-wires-gaining-speed-and-investments-by-jane-lanhee-lee-29-april-2022-1-second-of-15-secondsvolume-90-01-49-01-49-april-26-reuters-computers-using-light-rather-than-electric-currents-for-processing-only-years-ago-seen-as-research-projects-are-gaining-traction-and-startups-that-have-solved-the-engineering-challenge-of-using-photons-in-chips-are-getting | Technology  Chip startups using light instead of wires gaining speed and investments By Ja | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/846-rabbit-hologram-created-by-levitating-screen-using-sound-waves | Rabbit 'hologram' created by levitating screen using sound waves | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/848-could-silk-solve-the-microplastics-problem | Could Silk Solve the  Microplastics Problem? | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/854-trashfence-catches-a-garbage-tsunami-heading-downriver | Trashfence Catches a Garbage Tsunami Heading Downriver | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/856-exploring-the-effectiveness-of-inventive-principles-of-triz-on-developing-researchers-innovative-capabilities-a-case-study-in-an-innovative-research-center | Exploring the Effectiveness of Inventive Principles of TRIZ on Developing researchers’ inn | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/864-mit-engineers-grow-perfect-atom-thin-materials-on-industrial-silicon-wafers | MIT engineers grow “perfect”  atom-thin materials on industrial silicon wafers | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/866-road-that-can-melt-snow | Road That Can Melt Snow | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/869-innovation-for-urgency | Innovation for Urgency | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/870-mri-for-all | MRI for All | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/872-unmanned-aerial-vehicle | Unmanned Aerial Vehicle | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/875-metal-filtering-sponge-removes-lead-from-water | Metal-Filtering Sponge Removes Lead from Water | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/878-wearable-skin-patches-the-hot-medical-research-field | Wearable Skin Patches: The "Hot” Medical Research Field | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/879-in-war-against-industrial-corrosion-clean-lasers | In War Against Industrial Corrosion, Clean Lasers | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/881-ai-to-speed-up-clinical-trials | AI to Speed Up Clinical Trials | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/888-breakthrough-artificial-dna | Breakthrough: Artificial DNA | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/890-the-first-battery-prototype-using-hemoglobin | The First Battery  Prototype Using Hemoglobin | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/891-cassette-heat-pump-midea | Cassette heat pump — Midea | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/892-desalination-breakthrough-uses-sun-not-electricity-to-clean-seawater | Desalination Breakthrough uses Sun, not Electricity, to Clean Seawater | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/894-creating-the-self-healing-energy-grid-of-the-future | Creating the Self-Healing Energy Grid of the Future | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/896-wood-waste-turned-catalyst-could-unlock-affordable-green-hydrogen-from-ocean | Wood waste turned catalyst  could unlock affordable green hydrogen from ocean | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/919-after-uproar-google-revives-ai-generated-images-of-people-with-limits | After Uproar, Google Revives AI-Generated Images Of People, With Limits | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/920-after-uproar-google-revives-ai-generated-images-of-people-with-limits-2 | Enhance Your Innovation  Technique Using TOP-TRIZ, the Next Generation of TRIZ | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/922-after-uproar-google-revives-ai-generated-images-of-people-with-limits-3 | TRIZ: The Backbone of Innovation and Problem-Solving | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/924-accelerating-what-s-ahead-in-aerospace-and-defense | Accelerating What’s Ahead  in Aerospace and Defense | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/925-ai-blood-bath | The ‘white-collar bloodbath’ is all part of the AI hype machine | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/936-does-your-quality-goal-come-at-a-price | Does Your Quality Goal Come at a Price | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/954-how-modular-and-distributed-generation-can-transform-power-infrastructure | How Modular and Distributed Generation Can Transform Power Infrastructure | Keep | Library / Articles / Inside TRIZ |  |
| /triz-articles/inside-triz/<a href= | 404 Article not found | Redirect | Library / Articles / Inside TRIZ. Redirect to /triz-articles/inside-triz | HTTP 404 on live site |
| /triz-articles/soft-side-triz-public | Soft Side of TRIZ | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/349-introduction25 | Introduction | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/350-lesson-10-translating-triz-lines-of-evolution-to-business-and-management-i26 | Lesson 10: Translating TRIZ Lines of Evolution to Business and Management (I) | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/351-lesson-11-translating-triz-lines-of-evolution-to-business-and-management-ii27 | Lesson 11: Translating TRIZ Lines of Evolution to Business and Management (II) | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/352-lesson-12-integrating-triz-with-other-business-processes28 | Lesson 12: Integrating TRIZ with Other Business Processes | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/353-lesson-1-the-complications-of-the-qsoftq-side-of-the-ideal-final-result29 | Lesson 1: The Complications of the "Soft" Side of the Ideal Final Result | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/354-lesson-2-whose-q9-boxq-is-it30 | Lesson 2: Whose "9-BOX" is it? | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/355-lesson-3-looking-for-resources-in-the-soft-world31 | Lesson 3: Looking for Resources in the Soft World | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/356-lesson-4-contradictions-do-we-see-them-all32 | Lesson 4: Contradictions - Do We See Them All? | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/357-lesson-5-contradictions-are-they-qhardq-or-qsoftq33 | Lesson 5: Contradictions - Are They "Hard" or "Soft"? | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/358-lesson-6-translation-of-inventive-principles-to-the-qsoft-sideq-i34 | Lesson 6: Translation of Inventive Principles to the "Soft Side" (I) | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/359-lesson-7-translation-of-inventive-principles-to-the-qsoft-sideq-ii35 | Lesson 7: Translation of Inventive Principles to the "Soft Side" (II) | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/360-lesson-8-separation-principles-in-the-business-world36 | Lesson 8: Separation Principles in the Business World | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/361-lesson-9-using-triz-in-qreverseq-for-organizational-and-business-problems37 | Lesson 9: Using TRIZ in "Reverse" for Organizational and Business Problems | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/soft-side-triz-public/765-parallel-universes-treatment-of-parkinson-s-symptoms | Parallel Universes: Treatment of Parkinson’s Symptoms | Keep | Library / Articles / Soft Side of TRIZ |  |
| /triz-articles/triz-features | TRIZ Features | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/207-genrikh-altshuller-the-creator-of-triz | Genrikh Altshuller - The Creator of TRIZ | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/290-the-father-of-triz-as-we-know-him | The Father of TRIZ - As We Know Him | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/310-designing-features-for-next-generation-technology-products-role-of-triz-tools | Designing features for next generation technology products  Role of TRIZ tools | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/322-vacuum-chamber-solar-collector-development-using-triz-methodology24 | Vacuum Chamber Solar Collector Development Using TRIZ Methodology | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/345-creative-risk-management-based-on-reverse-thinking-helping-with-qinnovationq | Creative Risk Management Based on Reverse Thinking Helping with "Innovation" | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/379-improving-the-fuzzy-front-end-of-product-development-for-continuous-innovation-incorporating-triz38 | Improving the Fuzzy Front End of Product Development for Continuous Innovation Incorporati | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/388-methodology-for-the-evaluation-of-the-innovation-level-of-products-and-processes | Methodology for the Evaluation of the Innovation Level of Products and Processes | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/391-designing-features-for-next-generation-technology-products-role-of-triz-tools39 | Designing features for next generation technology products  Role of TRIZ tools | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/393-on-the-importance-of-creativity | On the Importance of Creativity... | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/394-computer-assisted-problem-analysis-via-semantically-extracted-experience | Computer-Assisted Problem Analysis Via Semantically Extracted Experience | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/399-trizfest-2009-matriz-conference-and-congress | TRIZfest-2009 MATRIZ Conference and Congress | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/401-power-thinking-skills-for-innovative-leadership | Power Thinking Skills for Innovative Leadership | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/420-prospecting-new-business-models-with-triz | Prospecting new business models with TRIZ | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/427-the-innovation-imperative | The Innovation Imperative | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/429-function-modeling-method-for-new-product-development | Function Modeling Method for New Product Development | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/432-contemporary-crisis | Contemporary Crisis | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/436-attempt-of-scientific-forecast | Attempt of Scientific Forecast | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/439-new-tools-for-design46 | New Tools for Design | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/442-perceptions-of-future-teachers | TRIZ in Technology Education: Perceptions of Future Teachers | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/469-determining-qualitative-parameters-using-triz-for-estimating-ip-value-of-intangibles | Determining Qualitative Parameters Using TRIZ for Estimating IP Value of Intangibles | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/497-theory-of-developing-conceptual-bases-the-particular-approach-to-evolution | Theory of Developing Conceptual Bases: The Particular Approach to Evolution | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/503-vacuum-chamber-solar-collector-development | Vacuum Chamber Solar Collector Development | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/517-predicting-new-business-models | Predicting new business models with TRIZ | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/529-the-well-tinkered-mind50 | The Well-Tinkered Mind | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/533-triz-and-software-innovation | TRIZ and Software Innovation | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/568-building-highly-effective-idea-management-systems-with-living-system-principles | Building Highly Effective Idea Management Systems With Living System Principles | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/587-applied-triz-in-high-tech-industry | Applied TRIZ in High-Tech Industry | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/590-creative-problem-solving-methodologies-trizusit | Creative Problem-Solving Methodologies TRIZ/USIT | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/597-why-do-we-need-innovation | Why Do We Need Innovation? | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/627-non-tech-triz | TRIZ IN A NON-TECHNICAL SETTING | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/628-anti-virus | Is anti-virus a Necessary Evil? | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/654-quantifying-the-triz-levels-of-invention | Quantifying the TRIZ Levels of Invention | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/690-selutskiy | Alexander Selutsky | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/754-samsung-an-innovative-company | Samsung an Innovative Company | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/757-is-anti-virus-a-necessary-evil | Is Anti-virus a Necessary Evil? | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/758-how-china-is-doing-science | How China is Doing Science | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/790-bloomberg-global-innovation | Bloomberg Innovation Index - 2020 | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/793-far-uvc-light-kills-airborne-flu-viruses | Far-UVC light kills airborne flu viruses | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/800-top-10-technologies-to-watch-in-2020 | Top 10 Technologies to Watch in 2020 | Keep | Library / Articles / TRIZ Features |  |
| /triz-articles/triz-features/851-2019-gmc-sierra-multipro-tailgate | 2019 GMC Sierra MultiPro Tailgate | Keep | Library / Articles / TRIZ Features |  |
| /blog | Categories - The Altshuller Institute Blogs | Keep | Library / Blog |  |
| /blog/7-things-your-competition-won-t-tell-concerning-strategies-for-improvement-and-innovation | 7 Things your competition won’t tell concerning strategies for improvement and innovation  | Keep | Library / Blog | 2013–2018 posts |
| /blog/altshuller-institute-blog/7-things-your-competition-won-t-tell-concerning-strategies-for-improvement-and-innovation | 7 Things your competition won’t tell concerning strategies for improvement and innovation  | Keep | Library / Blog | 2013–2018 posts |
| /blog/altshuller-institute-blog/blogger | Bloggers - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/triz-quality/blogger |
| /blog/altshuller-institute-blog/blogger/listings/billhessler | William Hessler - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/triz-quality/blogger/listings/billhessler |
| /blog/altshuller-institute-blog/blogger/listings/chuckroe | Chuck Roe - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/altshuller-institute-blog/categories | Categories - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog |
| /blog/altshuller-institute-blog/categories/current-and-upcoming-events | Current and Upcoming Events - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/altshuller-institute-blog/categories/manfacturing | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/triz-quality/categories/manfacturing |
| /blog/altshuller-institute-blog/categories/post-university-triz-and-quality | Post University - TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/altshuller-institute-blog/five-little-known-facts | Five Little Known Facts about Integrating Improvement and Innovation - The Altshuller Inst | Keep | Library / Blog | 2013–2018 posts |
| /blog/altshuller-institute-blog/http-aitriz-org-blog-categories-current-and-upcoming-events | Tracking the Problems of Innovation and Problem Solving - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/altshuller-institute-blog/http-aitriz-org-blog-categories-current-and-upcoming-events-1 | Dr. Noel Leon Keynote Address for ITCCA Conference - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/altshuller-institute-blog/learning-styles-and-innovation | Learning Styles and Innovation - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/altshuller-institute-blog/nine-windows-technique-framework-for-the-future | Nine Windows Technique Framework for the Future - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/altshuller-institute-blog/problem-solving-using-triz-in-manufacturing | Problem Solving Using TRIZ in Manufacturing - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/altshuller-institute-blog/shocking-truth | The Shocking Truth - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/altshuller-institute-blog/systemic-innovation-conference | Systemic Innovation Conference - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/altshuller-institute-blog/tags | Tags - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags |
| /blog/altshuller-institute-blog/tags/tag/benchmarking | Benchmarking - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags/tag/benchmarking |
| /blog/altshuller-institute-blog/tags/tag/congratulations | Congratulations - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags/tag/congratulations |
| /blog/altshuller-institute-blog/tags/tag/improvement | Improvement - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags/tag/improvement |
| /blog/altshuller-institute-blog/tags/tag/innovation | Innovation - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags/tag/innovation |
| /blog/altshuller-institute-blog/tags/tag/quality | Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags/tag/quality |
| /blog/altshuller-institute-blog/tags/tag/six-sigma | Six Sigma - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags/tag/six-sigma |
| /blog/altshuller-institute-blog/tags/tag/thank-you | Thank You - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags/tag/thank-you |
| /blog/altshuller-institute-blog/tags/tag/triz | TRIZ - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags/tag/triz |
| /blog/altshuller-institute-blog/teamblog | Team Blogs - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/teamblog |
| /blog/altshuller-institute-blog/teamblog/listings/helpline | TRIZ Helpline - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/teamblog/listings/helpline |
| /blog/altshuller-institute-blog/teamblog/listings/mfgteam | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/teamblog/listings/mfgteam |
| /blog/altshuller-institute-blog/using-creative-tension-to-integrate-improvement-innivation | Using Creative Tension to Integrate Improvement & Innivation - The Altshuller Institute Bl | Keep | Library / Blog | 2013–2018 posts |
| /blog/blogger | Bloggers - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/blogger/listings/billhessler | William Hessler - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/blogger/listings/chuckroe | Chuck Roe - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/categories | Categories - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog |
| /blog/categories/current-and-upcoming-events | Current and Upcoming Events - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/categories/manfacturing | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/five-little-known-facts | Five Little Known Facts about Integrating Improvement and Innovation - The Altshuller Inst | Keep | Library / Blog | 2013–2018 posts |
| /blog/http-aitriz-org-blog-categories-current-and-upcoming-events | Tracking the Problems of Innovation and Problem Solving - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/http-aitriz-org-blog-categories-current-and-upcoming-events-1 | Dr. Noel Leon Keynote Address for ITCCA Conference - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/innovate-mfg/7-things-your-competition-won-t-tell-concerning-strategies-for-improvement-and-innovation | 7 Things your competition won’t tell concerning strategies for improvement and innovation  | Keep | Library / Blog | 2013–2018 posts |
| /blog/innovate-mfg/blogger | Bloggers - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/blogger/listings/billhessler | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/blogger/listings/chuckroe | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/categories | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/categories/current-and-upcoming-events | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/categories/manfacturing | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/categories/post-university-triz-and-quality | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/five-little-known-facts | Five Little Known Facts about Integrating Improvement and Innovation - Innovation in Manuf | Keep | Library / Blog | 2013–2018 posts |
| /blog/innovate-mfg/http-aitriz-org-blog-categories-current-and-upcoming-events | Tracking the Problems of Innovation and Problem Solving - Innovation in Manufacturing | Keep | Library / Blog | 2013–2018 posts |
| /blog/innovate-mfg/http-aitriz-org-blog-categories-current-and-upcoming-events-1 | Dr. Noel Leon Keynote Address for ITCCA Conference - Innovation in Manufacturing | Keep | Library / Blog | 2013–2018 posts |
| /blog/innovate-mfg/learning-styles-and-innovation | Learning Styles and Innovation - Innovation in Manufacturing | Keep | Library / Blog | 2013–2018 posts |
| /blog/innovate-mfg/nine-windows-technique-framework-for-the-future | Nine Windows Technique Framework for the Future - Innovation in Manufacturing | Keep | Library / Blog | 2013–2018 posts |
| /blog/innovate-mfg/problem-solving-using-triz-in-manufacturing | Problem Solving Using TRIZ in Manufacturing - Innovation in Manufacturing | Keep | Library / Blog | 2013–2018 posts |
| /blog/innovate-mfg/shocking-truth | The Shocking Truth - Innovation in Manufacturing | Keep | Library / Blog | 2013–2018 posts |
| /blog/innovate-mfg/systemic-innovation-conference | Systemic Innovation Conference - Innovation in Manufacturing | Keep | Library / Blog | 2013–2018 posts |
| /blog/innovate-mfg/tags | Tags - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/tags/tag/benchmarking | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/tags/tag/congratulations | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/tags/tag/improvement | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/tags/tag/innovation | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/tags/tag/quality | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/tags/tag/six-sigma | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/tags/tag/thank-you | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/tags/tag/triz | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/teamblog | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/teamblog/listings/helpline | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/teamblog/listings/mfgteam | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/innovate-mfg/using-creative-tension-to-integrate-improvement-innivation | Using Creative Tension to Integrate Improvement & Innivation - Innovation in Manufacturing | Keep | Library / Blog | 2013–2018 posts |
| /blog/learning-styles-and-innovation | Learning Styles and Innovation - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/nine-windows-technique-framework-for-the-future | Nine Windows Technique Framework for the Future - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/problem-solving-using-triz-in-manufacturing | Problem Solving Using TRIZ in Manufacturing - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/shocking-truth | The Shocking Truth - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/systemic-innovation-conference | Systemic Innovation Conference - The Altshuller Institute Blogs | Keep | Library / Blog | 2013–2018 posts |
| /blog/tags | Tags - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/tags/tag/benchmarking | Benchmarking - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/tags/tag/congratulations | Congratulations - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/tags/tag/improvement | Improvement - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/tags/tag/innovation | Innovation - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/tags/tag/quality | Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/tags/tag/six-sigma | Six Sigma - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/tags/tag/thank-you | Thank You - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/tags/tag/triz | TRIZ - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/teamblog | Team Blogs - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/teamblog/listings/helpline | TRIZ Helpline - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/teamblog/listings/mfgteam | Innovation in Manufacturing - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/7-things-your-competition-won-t-tell-concerning-strategies-for-improvement-and-innovation | 7 Things your competition won’t tell concerning strategies for improvement and innovation  | Keep | Library / Blog | 2013–2018 posts |
| /blog/triz-quality/blogger | Bloggers - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/blogger/listings/billhessler | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/blogger/listings/chuckroe | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/categories | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog |
| /blog/triz-quality/categories/current-and-upcoming-events | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/categories/manfacturing | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/categories/post-university-triz-and-quality | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/five-little-known-facts | Five Little Known Facts about Integrating Improvement and Innovation - TRIZ and Quality | Keep | Library / Blog | 2013–2018 posts |
| /blog/triz-quality/http-aitriz-org-blog-categories-current-and-upcoming-events | Tracking the Problems of Innovation and Problem Solving - TRIZ and Quality | Keep | Library / Blog | 2013–2018 posts |
| /blog/triz-quality/http-aitriz-org-blog-categories-current-and-upcoming-events-1 | Dr. Noel Leon Keynote Address for ITCCA Conference - TRIZ and Quality | Keep | Library / Blog | 2013–2018 posts |
| /blog/triz-quality/learning-styles-and-innovation | Learning Styles and Innovation - TRIZ and Quality | Keep | Library / Blog | 2013–2018 posts |
| /blog/triz-quality/nine-windows-technique-framework-for-the-future | Nine Windows Technique Framework for the Future - TRIZ and Quality | Keep | Library / Blog | 2013–2018 posts |
| /blog/triz-quality/problem-solving-using-triz-in-manufacturing | Problem Solving Using TRIZ in Manufacturing - TRIZ and Quality | Keep | Library / Blog | 2013–2018 posts |
| /blog/triz-quality/shocking-truth | The Shocking Truth - TRIZ and Quality | Keep | Library / Blog | 2013–2018 posts |
| /blog/triz-quality/systemic-innovation-conference | Systemic Innovation Conference - TRIZ and Quality | Keep | Library / Blog | 2013–2018 posts |
| /blog/triz-quality/tags | Tags - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags |
| /blog/triz-quality/tags/tag/benchmarking | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/tags/tag/congratulations | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags/tag/congratulations |
| /blog/triz-quality/tags/tag/improvement | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/tags/tag/innovation | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/tags/tag/quality | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/tags/tag/six-sigma | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/tags/tag/thank-you | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/tags/tag/thank-you |
| /blog/triz-quality/tags/tag/triz | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | EasyBlog listing view |
| /blog/triz-quality/teamblog | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/teamblog |
| /blog/triz-quality/teamblog/listings/helpline | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/teamblog/listings/helpline |
| /blog/triz-quality/teamblog/listings/mfgteam | TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog. Redirect to /blog | Same body text as /blog/teamblog/listings/mfgteam |
| /blog/triz-quality/using-creative-tension-to-integrate-improvement-innivation | Using Creative Tension to Integrate Improvement & Innivation - TRIZ and Quality | Keep | Library / Blog | 2013–2018 posts |
| /blog/using-creative-tension-to-integrate-improvement-innivation | Using Creative Tension to Integrate Improvement & Innivation - The Altshuller Institute Bl | Keep | Library / Blog | 2013–2018 posts |
| /blog/altshuller-institute-blog | Altshuller Institute - The Altshuller Institute Blogs | Keep | Library / Blog / Altshuller Institute Blog |  |
| /blog/altshuller-institute-blog/categories/aitriz | Altshuller Institute - The Altshuller Institute Blogs | Redirect | Library / Blog / Altshuller Institute Blog. Redirect to /blog/altshuller-institute-blog | Same body text as /blog/altshuller-institute-blog |
| /blog/innovate-mfg | Innovation in Manufacturing - The Altshuller Institute Blogs | Keep | Library / Blog / Innovation in Manufacturing |  |
| /blog/categories/post-university-triz-and-quality | Post University - TRIZ and Quality - The Altshuller Institute Blogs | Redirect | Library / Blog / TRIZ & Quality. Redirect to /blog/triz-quality | Same body text as /blog/triz-quality |
| /blog/triz-quality | TRIZ and Quality - The Altshuller Institute Blogs | Keep | Library / Blog / TRIZ & Quality |  |
| /triz-quality | 404 Category not found | Redirect | Library / Blog / TRIZ & Quality. Redirect to /blog/triz-quality | HTTP 404 on live site |
| /articles/40p_triz.pdf | [document: application/pdf, 90 KB] PDF title: Untitled-23 (7 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/CurriesCorner/434D43757272696530353130.pdf | [document: application/pdf, 147 KB] PDF title: Fast Learning Change-up (4 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/CurriesCorner/4375727269652D323031312D3034.pdf | [document: application/pdf, 314 KB] PDF title: One important focus in Cognitive Developmen | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/303331302D4268616C6C61.pdf | [document: application/pdf, 115 KB] PDF title: Title Page (6 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/30363131-5065727573656B.pdf | [document: application/pdf, 32 KB] PDF title: Microsoft Word - Document1 (7 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/30373039-536D697468.pdf | [document: application/pdf, 211 KB] PDF title: Microsoft Word - Document1 (15 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/30393032-4D616E6E.pdf | [document: application/pdf, 140 KB] PDF title: Microsoft Word - Renewable eNERGY-MANN.doc  | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/30393033-457A69636B736F6E.pdf | [document: application/pdf, 285 KB] PDF title: Microsoft Word - TRIZPRESENTATION TRIZCON05 | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/30393036-746F6468756E746572.pdf | [document: application/pdf, 454 KB] PDF title: FUNCTION MODELING FOR THE REST OF US (11 pp | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/30393037-4B616E67-kang.pdf | [document: application/pdf, 319 KB] PDF title: Microsoft Word - FBM_YJ KANG 090130 _2_ (9  | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/303930385374616D6579-stamey.pdf | [document: application/pdf, 28 KB] PDF title: Microsoft Word - TECH EDUCATION STUDY-Paper_ | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/30393039706861646E6973-phadnis.pdf | [document: application/pdf, 20 KB] PDF title: Microsoft Word - TRIZ and the Holi play bags | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/303931302D636F6F6B65-Cooke.pdf | [document: application/pdf, 122 KB] PDF title: Microsoft Word - TRIZCON 2009 Paper - How t | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/30393132706861646E6973Phadnis.pdf | [document: application/pdf, 79 KB] PDF title: Application of the contradiction matrix and  | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/313030316268616C6C61_BHALLA.pdf | [document: application/pdf, 244 KB] PDF title: Microsoft Word - Abstraction and Analogy Th | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/313231312D4D6343616666726579.pdf | [document: application/pdf, 697 KB] PDF title: Seeing_the_Invisible_McCaffrey (10 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/323031302D31312D436F61746573.pdf | [document: application/pdf, 764 KB] PDF title: Improving the Fuzzy Front End of Product De | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/3230313030324268616C6C61.pdf | [document: application/pdf, 303 KB] PDF title: Title Page (8 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/3230313030342D4B616E67.pdf | [document: application/pdf, 197 KB] PDF title: TRIZ Future 2004 template (10 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/3230313030362D536D697468.pdf | [document: application/pdf, 944 KB] PDF title: SOFTWARE OPTIMIZATION OF A DIESEL ENGINE HI | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/323031303039695452495A.pdf | [document: application/pdf, 81 KB] (6 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/3230313031322D42756B6D616E.pdf | [document: application/pdf, 3339 KB] (110 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/323031312D30382D526976656E.pdf | [document: application/pdf, 326 KB] PDF title: Microsoft Word - In memory eugene riven.doc | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/3230313130322D69796572.pdf | [document: application/pdf, 582 KB] PDF title: Abstract (12 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/323031322D31312D6E61766E6565742D627573686D616E.pdf | [document: application/pdf, 650 KB] (4 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/436F617465732D30343132.pdf | [document: application/pdf, 558 KB] PDF title: Improving the Fuzzy Front End of Product De | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/6268616C6C6130353130.pdf | [document: application/pdf, 224 KB] PDF title: Title Page (6 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/InsideTRIZ/6D616E6E2D31323033.pdf | [document: application/pdf, 2415 KB] PDF title: Microsoft Word - #002-Breakthrough Innov-M | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/01-6F6E65.pdf | [document: application/pdf, 10 KB] PDF title: Microsoft Word - Document1 (2 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/02-74776F.pdf | [document: application/pdf, 21 KB] PDF title: Microsoft Word - Document1 (3 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/03-7468726565.pdf | [document: application/pdf, 22 KB] PDF title: Microsoft Word - Document1 (4 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/04-666F7572.pdf | [document: application/pdf, 21 KB] PDF title: Microsoft Word - Document1 (3 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/05-66697665.pdf | [document: application/pdf, 22 KB] PDF title: Microsoft Word - Document2 (4 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/06-736978.pdf | [document: application/pdf, 16 KB] PDF title: Microsoft Word - Document2 (4 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/07-736576656E.pdf | [document: application/pdf, 11 KB] PDF title: Microsoft Word - Document2 (2 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/08-6569676874.pdf | [document: application/pdf, 17 KB] PDF title: Microsoft Word - Document2 (4 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/09-6E696E65.pdf | [document: application/pdf, 12 KB] PDF title: Microsoft Word - Document2 (2 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/10-74656E.pdf | [document: application/pdf, 21 KB] PDF title: Microsoft Word - Document2 (5 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/11-656C6576656E.pdf | [document: application/pdf, 16 KB] PDF title: Microsoft Word - Document2 (3 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/12-7477656C7665.pdf | [document: application/pdf, 23 KB] PDF title: Microsoft Word - Document2 (5 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/SoftSide/i-696E74726F.pdf | [document: application/pdf, 13 KB] PDF title: Microsoft Word - Document1 (2 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/303331302D4B61706C616E.pdf | [document: application/pdf, 124 KB] PDF title: Contemporary Crisis (13 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/30383038-466579.pdf | [document: application/pdf, 85 KB] PDF title: Microsoft Word - APPENDIX 1.doc (4 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/30383039-4D6973687261.pdf | [document: application/pdf, 42 KB] PDF title: Microsoft Word - Biography of Genrich Altshu | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/30383130-4B6170706F7468.pdf | [document: application/pdf, 636 KB] PDF title: Microsoft Word - #004-Product_Design.doc (1 | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/30383131-526F76697261.pdf | [document: application/pdf, 825 KB] PDF title: Microsoft Word - TRIZCON08-ITESM-UET-AG-NLR | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/30383132-536177616775636869.pdf | [document: application/pdf, 350 KB] PDF title: Microsoft Word - TRIZCON2007_submit_.doc (1 | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/30393032-436F61746573.pdf | [document: application/pdf, 848 KB] PDF title: Microsoft Word - Improving the Fuzzy Front  | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/30393033-526F76697261.pdf | [document: application/pdf, 503 KB] PDF title: Microsoft Word - ITESM-TRIZCON2005.doc (13  | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/30393036-6B6170706F7468.pdf | [document: application/pdf, 656 KB] PDF title: Designing features for next generation tech | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/30393037-4973686171-Ishaq.pdf | [document: application/pdf, 50 KB] PDF title: Microsoft Word - On the Importance of Creati | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/3039303842756B686D616E-bukhman.pdf | [document: application/pdf, 359 KB] PDF title: Microsoft Word - Invention Machine TRIZCON2 | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/303930395452495A66657374.pdf | [document: application/pdf, 155 KB] PDF title: Microsoft Word - TRIZfest-2009 conference r | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/303931302D736F7563686B6F76-Souchkov.pdf | [document: application/pdf, 184 KB] PDF title: Microsoft Word - ThinkigSkillsForInnovative | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/3039313276696E63656E7465Gomila.pdf | [document: application/pdf, 163 KB] PDF title: Microsoft Word - Predicting new business mo | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/31303031686F77617264-HOWARD.pdf | [document: application/pdf, 658 KB] PDF title: Creativity Really Does Grow on TRIZ (47 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/323031302D31312D50616E7065746368.pdf | [document: application/pdf, 281 KB] PDF title: Evolutionary Theory (23 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/3230313030324B616E67.pdf | [document: application/pdf, 331 KB] PDF title: THE FUNCTION MODELING METHOD FOR NEW PRODUC | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/3230313030342D4B61706C616E.pdf | [document: application/pdf, 163 KB] PDF title: Author:          Len (16 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/3230313030362D5374616D6579.pdf | [document: application/pdf, 101 KB] PDF title: Burgess Article (4 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/3230313030395452495A66.pdf | [document: application/pdf, 133 KB] PDF title: Collaborative Research (8 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/3230313031322D495445534D2D554554.pdf | [document: application/pdf, 670 KB] PDF title: Vacuum Chamber Solar Collector development  | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/323031312D30382D4D616E6E.pdf | [document: application/pdf, 917 KB] PDF title: Microsoft Word - trizcon2007 dlm full.doc ( | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/3230313130322D56696E63656E7465.pdf | [document: application/pdf, 64 KB] PDF title: Microsoft Word - Predicting new business mod | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/323031322D31312D44616E612D436C61726B65.pdf | [document: application/pdf, 304 KB] PDF title: What is TRIZ (4 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/48616C69627572746F6E30353130.pdf | [document: application/pdf, 2072 KB] PDF title: HalliburtonNEW.indd (10 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/497965722D313232303131.pdf | [document: application/pdf, 371 KB] PDF title: Idea Management and Living System Principle | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/4E616B61676177612D30343132.pdf | [document: application/pdf, 918 KB] PDF title: 大阪学院大学『人文自然学会誌』原稿 (32 pp) | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZFeatures/6B7261736E6F736C6F626F64747365762D31323033.pdf | [document: application/pdf, 2856 KB] PDF title: Microsoft Word - TRIZCON2006_Paper.doc (13 | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/TRIZ_Body_of_Knowledge.pdf | [document: application/pdf, 135 KB] PDF title: Microsoft Word - TRIZ Body of Knowledge.doc | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /articles/samples/40p_prn1-10.pdf | [document: application/pdf, 276 KB] PDF title: Untitled-3.p65 (5 pp) | Archive | Library / Document Archive | Linked from Publication Samples |
| /articles/samples/asia_ch36.pdf | [document: application/pdf, 669 KB] (10 pp) | Archive | Library / Document Archive | Linked from Publication Samples |
| /articles/samples/final_victory.pdf | [document: application/pdf, 73 KB] PDF title: izo-autumn-99 creative imagination (7 pp) | Archive | Library / Document Archive | Linked from Publication Samples |
| /articles/samples/ia_pt3-1.pdf | [document: application/pdf, 360 KB] PDF title: Untitled-2 (14 pp) | Archive | Library / Document Archive | Linked from Publication Samples |
| /articles/samples/ia_pt3-2.pdf | [document: application/pdf, 344 KB] PDF title: izo-autumn-99 creative imagination (3 pp) | Archive | Library / Document Archive | Linked from Publication Samples |
| /articles/samples/managing_innovation.pdf | [document: application/pdf, 58 KB] PDF title: izo-autumn-99 new developments (9 pp) | Archive | Library / Document Archive | Linked from Publication Samples |
| /images/Woekshops/Failure_Mode__Effect_Analysis_for_Services_with_Logo.docx | [document: , 159 KB] | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /images/easyblog_images/791/QII-Foundation-Courses-Wordle_20131108-164113_1.pptx | [document: , 212 KB] | Archive | Library / Document Archive | Old article PDF/document (1998–2012 era) |
| /documents/Certification/ASSOCIATE_TEST_SAMPLE.pdf | [document: application/pdf, 104 KB] PDF title: Microsoft Word - ASSOCIATE TEST_SAMPLE.docx | Keep | Library / Documents / Certification | Test samples & regulations linked from Learn / Certification; currency is a board decision |
| /documents/Certification/GENERAL_PROVISIONS_EXCOM.pdf | [document: application/pdf, 115 KB] PDF title: Microsoft Word - GENERAL_PROVISIONS_EXCOM.d | Keep | Library / Documents / Certification | Test samples & regulations linked from Learn / Certification; currency is a board decision |
| /documents/Certification/PRACTITIONER_TEST_SAMPLE.pdf | [document: application/pdf, 847 KB] PDF title: Microsoft Word - PRACTITIONER TEST_SAMPLE.d | Keep | Library / Documents / Certification | Test samples & regulations linked from Learn / Certification; currency is a board decision |
| /documents/Certification/TRIZ_ASSOCIATE_CERTIFICATION_FINAL_1102.pdf | [document: application/pdf, 71 KB] PDF title: Microsoft Word - TRIZ ASSOCIATE CERTIFICATIO | Keep | Library / Documents / Certification | Test samples & regulations linked from Learn / Certification; currency is a board decision |
| /documents/Certification/TRIZ_PRACTITIONER_CERTIFICATION_EXCOM.pdf | [document: application/pdf, 37 KB] PDF title: TRIZ PRACTITIONER CERTIFICTAION (3 pp) | Keep | Library / Documents / Certification | Test samples & regulations linked from Learn / Certification; currency is a board decision |
| /documents/Certification/TRIZ_Specialist_Certification_RL_VF_RL.pdf | [document: application/pdf, 99 KB] PDF title: TRIZ Specialist Certification (1 pp) | Keep | Library / Documents / Certification | Test samples & regulations linked from Learn / Certification; currency is a board decision |
| /community-news/games | Games & Puzzles | Keep | Library / Games & Puzzles |  |
| /community-news/games/820-crossword-puzzle-1 | Crossword Puzzle #1 | Keep | Library / Games & Puzzles |  |
| /community-news/games/825-crossword-puzzle-2 | Crossword Puzzle # 2 | Keep | Library / Games & Puzzles |  |
| /community-news/games/827-crossword-puzzle-4 | Crossword Puzzle # 4 - - Answers | Keep | Library / Games & Puzzles |  |
| /community-news/games/834-crossword-puzzle-3 | Crossword Puzzle # 3 - - Answers | Keep | Library / Games & Puzzles |  |
| /community-news/games/842-triz-crossword-5-answers | TRIZ Crossword #5 answers | Keep | Library / Games & Puzzles |  |
| /community-news/games/844-triz-crossword-6-answers | TRIZ Crossword #6 answers | Keep | Library / Games & Puzzles |  |
| /community-news/games/847-triz-crossword-7-answers-7 | TRIZ Crossword #7 answers | Keep | Library / Games & Puzzles |  |
| /community-news/games/849-triz-crossword-8-answers-8 | TRIZ Crossword #8 answers | Keep | Library / Games & Puzzles |  |
| /community-news/games/857-triz-crossword-puzzle-9 | TRIZ Crossword Puzzle #9 | Keep | Library / Games & Puzzles |  |
| /community-news/games/859-triz-crossword-10-ans | TRIZ Crossword #10 Ans | Keep | Library / Games & Puzzles |  |
| /community-news/games/861-triz-crossword-11-ans-2 | TRIZ Crossword #11 Ans (2) | Keep | Library / Games & Puzzles |  |
| /99-faqs/information15/148-community | Community | Merge | Library / News. Merge into Library / News | Explains community news sections |
| /community-news | Community News | Redirect | Library / News. Redirect to /community-news/triz-news | Empty category |
| /community-news/triz-news | TRIZ News | Keep | Library / News |  |
| /community-news/triz-news/605-provider | TRIZ Providers | Keep | Library / News |  |
| /community-news/triz-news/612-forbes-01 | What Makes Samsung Such An Innovative Company? | Keep | Library / News |  |
| /community-news/triz-news/706-japan-2018-10-20 | TRIZ Home Page in Japan- 20 October 2018 | Keep | Library / News |  |
| /community-news/triz-news/708-japan-2018-05-04 | TRIZ Home Page in Japan- 5 April 2018 | Keep | Library / News |  |
| /community-news/triz-news/718-japan-2017-10-17 | TRIZ Home Page in Japan- 17 October 2017 | Keep | Library / News |  |
| /community-news/triz-news/720-japan-2017-11-06 | TRIZ Home Page in Japan- 6 November 2017 | Keep | Library / News |  |
| /community-news/triz-news/722-japan-2018-01-31 | TRIZ Home Page in Japan-31 Jan 2018 | Keep | Library / News |  |
| /community-news/triz-news/724-japan-2017-12-29 | TRIZ Home Page in Japan-29 December 2017 | Keep | Library / News |  |
| /community-news/triz-news/727-japan-2017-1-14 | TRIZ Home Page in Japan- 14 January | Keep | Library / News |  |
| /community-news/triz-news/729-japan-2019-08-21 | TRIZ Home Page in Japan-21 August 2019 | Keep | Library / News |  |
| /community-news/triz-news/732-japan-2017-2-14 | "TRIZ Home Page in Japan" Updated (Feb. 14, 2017) | Keep | Library / News |  |
| /community-news/triz-news/733-japan-2017-3-30 | "TRIZ Home Page in Japan" Updated (Mar. 30, 2017) | Keep | Library / News |  |
| /community-news/triz-news/734-japan-2017-4-26 | "TRIZ Home Page in Japan" Updated (26 April, 2017) | Keep | Library / News |  |
| /community-news/triz-news/741-japan-2017-6-5 | "TRIZ Home Page in Japan" Updated (5 June, 2017) | Keep | Library / News |  |
| /community-news/triz-news/744-japan-2019-9-09 | TRIZ Home Page in Japan - 9 September 2019 | Keep | Library / News |  |
| /community-news/triz-news/747-japan-2019-28-19 | TRIZ Home Page in Japan- 28 February 2019 | Keep | Library / News |  |
| /community-news/triz-news/755-triz-home-page-in-japan-14-feb-2018 | TRIZ Home Page in Japan- 14 Feb 2018 | Keep | Library / News |  |
| /community-news/triz-news/762-japan-2019-1-10 | "TRIZ Home Page in Japan" Updated (Jan. 10, 2019) | Keep | Library / News |  |
| /community-news/triz-news/763-japan-2019-2-14 | "TRIZ Home Page in Japan" Updated (Feb. 14, 2019) | Keep | Library / News |  |
| /community-news/triz-news/764-japan-2019-03-31 | TRIZ Home Page in Japan- 31 March 2019 | Keep | Library / News |  |
| /community-news/triz-news/767-japan-2019-05-18 | [WTSP] Letter: (10M-1AB) THPJ Updated (May 18) | Keep | Library / News |  |
| /community-news/triz-news/768-japan-2010-05-25 | TRIZ Home Page in Japan-25 May 2019 | Keep | Library / News |  |
| /community-news/triz-news/769-japan-2019-06-10 | [WTSP] Letter: (10M-1AB) THPJ Updated (June 10) | Keep | Library / News |  |
| /community-news/triz-news/770-japan-2016-12-29 | TRIZ Home Page in Japan- 26 June 2019 | Keep | Library / News |  |
| /community-news/triz-news/771-japan-2019-07-15 | TRIZ Home Page in Japan- 15 July 2019 | Keep | Library / News |  |
| /community-news/triz-news/773-japan-2016-12-30 | TRIZ Home Page in Japan- 5 August 2019 | Keep | Library / News |  |
| /community-news/triz-news/778-japan-2016-12-31 | TRIZ Home Page in Japan- 1 October 2019 | Keep | Library / News |  |
| /community-news/triz-news/784-japan-2019-10-21 | TRIZ Home Page in Japan- 21 October 2019 | Keep | Library / News |  |
| /community-news/triz-news/785-japan-2019-11-04 | TRIZ Home Page in Japan- 4 November 2019 | Keep | Library / News |  |
| /community-news/triz-news/789-japan-2020-01-5 | TRIZ Home Page in Japan- 5 January 2020 | Keep | Library / News |  |
| /community-news/triz-news/792-japan-2020-02-14 | “TRIZ Home Page in Japan” Updated (Feb. 13, 2020) 160 Selected articles of THPJ | Keep | Library / News |  |
| /community-news/triz-news/794-japan-2020-03-22 | “TRIZ Home Page in Japan” Updated (Mar. 22, 2020) "Dr. Ed N. Sickafus Memorial Archives" I | Keep | Library / News |  |
| /community-news/triz-news/795-japan-2020-04-22 | “TRIZ Home Page in Japan” Updated (April 22, 2020) | Keep | Library / News |  |
| /community-news/triz-news/796-japan-2020-05-20 | “TRIZ Home Page in Japan” Updated (May 20, 2020) | Keep | Library / News |  |
| /community-news/triz-news/797-japan-2020-05-25 | “TRIZ Home Page in Japan” Updated (May 25, 2020) | Keep | Library / News |  |
| /community-news/triz-news/798-japan-2020-06-10 | “TRIZ Home Page in Japan” Updated (10 June, 2020) | Keep | Library / News |  |
| /community-news/triz-news/801-japan-2020-07-02 | “TRIZ Home Page in Japan” Updated (2 July, 2020) | Keep | Library / News |  |
| /community-news/triz-news/806-japan-2020-07-23 | “TRIZ Home Page in Japan” Updated (23 July, 2020) | Keep | Library / News |  |
| /community-news/triz-news/807-japan-2020-08-14 | “TRIZ Home Page in Japan” Updated (14 August, 2020) | Keep | Library / News |  |
| /community-news/triz-news/809-japan-2020-11-12 | “TRIZ Home Page in Japan” Updated (12 November, 2020) | Keep | Library / News |  |
| /community-news/triz-news/810-japan-2020-11-23 | “TRIZ Home Page in Japan” Updated (23 November, 2020) | Keep | Library / News |  |
| /community-news/triz-news/812-japan-2020-11-24 | “TRIZ Home Page in Japan” Updated (9 December, 2020) | Keep | Library / News |  |
| /community-news/triz-news/813-japan-2020-12-24 | “TRIZ Home Page in Japan” Updated (24 December, 2020) | Keep | Library / News |  |
| /community-news/triz-news/815-japan-2021-01-05 | “TRIZ Home Page in Japan” Updated (5 January, 2021) | Keep | Library / News |  |
| /community-news/triz-news/817-japan-2021-02-16 | “TRIZ Home Page in Japan” Updated (16 February, 2021) | Keep | Library / News |  |
| /community-news/triz-news/819-japan-2021-04-20 | “TRIZ Home Page in Japan” Updated (20  April, 2021) | Keep | Library / News |  |
| /community-news/triz-news/822-japan-2021-05-26 | “TRIZ Home Page in Japan” Updated (26 May, 2021) | Keep | Library / News |  |
| /community-news/triz-news/823-japan-2021-06-06 | “TRIZ Home Page in Japan” Updated (6 June, 2021) | Keep | Library / News |  |
| /community-news/triz-news/826-japan-2021-07-16 | “TRIZ Home Page in Japan” Updated 16 July, 2021 | Keep | Library / News |  |
| /community-news/triz-news/830-japan-2021-08-05 | “TRIZ Home Page in Japan” Updated 5 Aug, 2021 | Keep | Library / News |  |
| /community-news/triz-news/832-japan-2021-09-16 | “TRIZ Home Page in Japan” Updated 16 Sept, 2021 | Keep | Library / News |  |
| /community-news/triz-news/833-japan-2021-10-28 | “TRIZ Home Page in Japan” Updated 28 Oct, 2021 | Keep | Library / News |  |
| /community-news/triz-news/836-japan-2021-12-25 | “TRIZ Home Page in Japan” Updated 25 Dec, 2021 | Keep | Library / News |  |
| /community-news/triz-news/837-japan-2022-01-17 | “TRIZ Home Page in Japan” Updated 17 Jan, 2021 | Keep | Library / News |  |
| /community-news/triz-news/838-japan-2022-02-19 | “TRIZ Home Page in Japan” Updated 19 Feb, 2022 | Keep | Library / News |  |
| /community-news/triz-news/840-japan-2022-02-20 | “TRIZ Home Page in Japan” Updated 11 April, 2022 | Keep | Library / News |  |
| /community-news/triz-news/845-japan-2022-05-05 | “TRIZ Home Page in Japan” Updated 5 June, 2022 | Keep | Library / News |  |
| /community-news/triz-news/850-japan-2022-31-7 | “TRIZ Home Page in Japan” Updated 31 July, 2022 | Keep | Library / News |  |
| /community-news/triz-news/852-japan-2022-18-8 | “TRIZ Home Page in Japan” Updated 18 August, 2022 | Keep | Library / News |  |
| /community-news/triz-news/855-japan-2022-18-9 | “TRIZ Home Page in Japan” Updated 18 September, 2022 | Keep | Library / News |  |
| /community-news/triz-news/860-japan-2022-06-10 | “TRIZ Home Page in Japan” Updated 6 October, 2022 | Keep | Library / News |  |
| /community-news/triz-news/862-japan-2022-09-12 | “TRIZ Home Page in Japan” Updated 9 December, 2022 | Keep | Library / News |  |
| /community-news/triz-news/863-japan-2023-01-12 | “TRIZ Home Page in Japan” Updated 12 January, 2023 | Keep | Library / News |  |
| /community-news/triz-news/865-japan-2023-02-11 | “TRIZ Home Page in Japan” Updated 11 February, 2023 | Keep | Library / News |  |
| /community-news/triz-news/868-japan-2023-03-19 | “TRIZ Home Page in Japan” Updated 19 March, 2023 | Keep | Library / News |  |
| /community-news/triz-news/871-japan-2023-03-20 | “TRIZ Home Page in Japan” Updated 29 April, 2023 | Keep | Library / News |  |
| /community-news/triz-news/873-japan-2023-06-11 | “TRIZ Home Page in Japan” Updated 11 June, 2023 | Keep | Library / News |  |
| /community-news/triz-news/874-japan-2023-06-20 | “TRIZ Home Page in Japan” Updated 20 June, 2023 | Keep | Library / News |  |
| /community-news/triz-news/876-japan-2023-07-21 | “TRIZ Home Page in Japan” Updated 21 July, 2023 | Keep | Library / News |  |
| /community-news/triz-news/877-japan-2023-08-13 | “TRIZ Home Page in Japan” Updated 13 August, 2023 | Keep | Library / News |  |
| /community-news/triz-news/880-japan-2023-09-23 | “TRIZ Home Page in Japan” Updated 23 September, 2023 | Keep | Library / News |  |
| /community-news/triz-news/886-japan-2023-10-26 | “TRIZ Home Page in Japan” Updated 26 October, 2023 | Keep | Library / News |  |
| /community-news/triz-news/887-japan-2023-11-13 | “TRIZ Home Page in Japan” Updated 13 November, 2023 | Keep | Library / News |  |
| /community-news/triz-news/889-japan-2024-05-18 | “TRIZ Home Page in Japan” Updated 18 May, 2024 | Keep | Library / News |  |
| /community-news/triz-news/893-japan-2024-07-31 | “TRIZ Home Page in Japan” Updated 31 JULY, 2024 | Keep | Library / News |  |
| /community-news/triz-news/895-japan-2024-09-1 | “TRIZ Home Page in Japan” Updated 5 September, 2024 | Keep | Library / News |  |
| /community-news/triz-news/897-japan-2024-10-2 | “TRIZ Home Page in Japan” Updated 7 October, 2024 | Keep | Library / News |  |
| /community-news/triz-news/918-updated-28-november-2024 | Updated:   28 November 2024 | Keep | Library / News |  |
| /community-news/triz-news/921-japan-2025-02-22 | “TRIZ Home Page in Japan” Updated 22 February, 2025 | Keep | Library / News |  |
| /community-news/triz-news/923-japan-2025-02-23 | “TRIZ Home Page in Japan” Updated 4 April, 2025 | Keep | Library / News |  |
| /component/acymailing/url/urlid-550/mailid-109 | 404 Component not found. | Redirect | Library / News. Redirect to /community-news/triz-news | HTTP 404 on live site |
| /component/acymailing/url/urlid-817/mailid-136 | 404 Component not found. | Redirect | Library / News. Redirect to /community-news/triz-news | HTTP 404 on live site |
| /triz-articles/triz-features/645-forbes-2 | What Makes Samsung Such An Innovative Company? (2) | Redirect | Library / News. Redirect to /community-news/triz-news/612-forbes-01 | Same body text as /community-news/triz-news/612-forbes-01 |
| /139-webinar-series | Webinar Series | Merge | Library / Webinar Videos. Merge into Library / Webinar Videos | Presenter bio (David Conley) |
| /139-webinar-series/629-david-conley | David Conley | Merge | Library / Webinar Videos. Merge into Library / Webinar Videos | Presenter bio (David Conley) |
| /webinar-videos | Webinar Series Videos | Keep | Library / Webinar Videos |  |
| /webinar-videos/139-webinar-series | Webinar Series | Merge | Library / Webinar Videos. Merge into Library / Webinar Videos | Presenter bio (David Conley) |
| /webinar-videos/webinar-series-guided-brainstorming/139-webinar-series | Webinar Series | Redirect | Library / Webinar Videos. Redirect to Library / Webinar Videos | Same body text as /webinar-videos/139-webinar-series |
| /webinar-videos/webinar-series-systematic-innovation-methods/139-webinar-series | Webinar Series | Redirect | Library / Webinar Videos. Redirect to Library / Webinar Videos | Same body text as /webinar-videos/139-webinar-series |
| /webinar-videos/webinar-series-the-soft-side-of-triz/139-webinar-series | Webinar Series | Redirect | Library / Webinar Videos. Redirect to Library / Webinar Videos | Same body text as /webinar-videos/139-webinar-series |
| /webinar-videos/webinar-series-guided-brainstorming | Webinar Series - Guided Brainstorming | Keep | Library / Webinar Videos / Guided Brainstorming |  |
| /webinar-videos/webinar-series-systematic-innovation-methods | Webinar Series - Systematic Innovation Methods | Keep | Library / Webinar Videos / Systematic Innovation Methods |  |
| /webinar-videos/webinar-series-the-soft-side-of-triz | Webinar Series - THE SOFT SIDE OF TRIZ | Keep | Library / Webinar Videos / The Soft Side of TRIZ |  |
| /17-about-us | About Us | Redirect | About. Redirect to /about-us | Category listing view |
| /17-about-us/803-who-we-are | Who We Are | Merge | About. Merge into About (landing) | Same founding history as /about-us |
| /7-faqs/examples | Examples | Redirect | About. Redirect to /about-us | Joomla sample content (Lorem ipsum), not real content |
| /7-faqs/examples/10-faq1 | Example FAQ Item 1 | Redirect | About. Redirect to /about-us | Joomla sample content (Lorem ipsum), not real content |
| /7-faqs/examples/11-faq2 | Example FAQ Item 2 | Redirect | About. Redirect to /about-us | Joomla sample content (Lorem ipsum), not real content |
| /about-us | About Us | Keep | About |  |
| /about-us/17-about-us | About Us | Redirect | About. Redirect to /about-us | Category listing view |
| /about-us/17-about-us/803-who-we-are | Who We Are | Redirect | About. Redirect to About (landing) | Same body text as /17-about-us/803-who-we-are |
| /about-us/ai-bylaws/17-about-us | About Us | Redirect | About. Redirect to /about-us | Same body text as /about-us/17-about-us |
| /about-us/ai-bylaws/17-about-us/803-who-we-are | Who We Are | Redirect | About. Redirect to About (landing) | Same body text as /17-about-us/803-who-we-are |
| /about-us/altshuller-institute/17-about-us | About Us | Redirect | About. Redirect to /about-us | Same body text as /about-us/objectives/17-about-us |
| /about-us/altshuller-institute/17-about-us/803-who-we-are | Who We Are | Redirect | About. Redirect to About (landing) | Same body text as /17-about-us/803-who-we-are |
| /about-us/elected-officers/17-about-us | About Us | Redirect | About. Redirect to /about-us | Same body text as /about-us/17-about-us |
| /about-us/elected-officers/17-about-us/803-who-we-are | Who We Are | Redirect | About. Redirect to About (landing) | Same body text as /17-about-us/803-who-we-are |
| /about-us/objectives/17-about-us | About Us | Redirect | About. Redirect to /about-us | Category listing view |
| /about-us/objectives/17-about-us/803-who-we-are | Who We Are | Redirect | About. Redirect to About (landing) | Same body text as /17-about-us/803-who-we-are |
| /triz-event-list/awards/17-about-us | About Us | Redirect | About. Redirect to /about-us | Same body text as /about-us/17-about-us |
| /triz-event-list/awards/17-about-us/803-who-we-are | Who We Are | Redirect | About. Redirect to About (landing) | Same body text as /17-about-us/803-who-we-are |
| /cdn-cgi/l/email-protection | Email Protection \| Cloudflare | Redirect | About / Contact. Redirect to /contact-us | HTTP 404 on live site |
| /component/contact/category/129-contact-us | Altshuller Institute | Redirect | About / Contact. Redirect to /contact-us | Contact category alias |
| /contact-us | Contact Us | Keep | About / Contact |  |
| /about-us/organization | Organization Directory | Merge | About / Governance. Merge into About / Governance | Category contains only one link (Elected Officers) |
| /about-us/advisors | Advisors | Keep | About / Governance / Advisors |  |
| /about-us/advisors/15-cathie-currie-phd | Cathie Currie, Ph.D. | Merge | About / Governance / Advisors. Merge into About / Governance / Advisors | Duplicate person entries |
| /about-us/advisors/22-cathie-curries | Cathie Curries | Merge | About / Governance / Advisors. Merge into About / Governance / Advisors | Duplicate person entries |
| /about-us/ai-bylaws | Bylaws | Keep | About / Governance / Bylaws |  |
| /17-about-us/759-board-of-directors | Board of Directors | Merge | About / Governance / Elected Officers. Merge into About / Governance / Elected Officers | Board decision: list dated 2019 |
| /about-us/17-about-us/759-board-of-directors | Board of Directors | Redirect | About / Governance / Elected Officers. Redirect to About / Governance / Elected Officers | Same body text as /17-about-us/759-board-of-directors |
| /about-us/ai-bylaws/17-about-us/759-board-of-directors | Board of Directors | Redirect | About / Governance / Elected Officers. Redirect to About / Governance / Elected Officers | Same body text as /17-about-us/759-board-of-directors |
| /about-us/altshuller-institute/17-about-us/759-board-of-directors | Board of Directors | Redirect | About / Governance / Elected Officers. Redirect to About / Governance / Elected Officers | Same body text as /17-about-us/759-board-of-directors |
| /about-us/candidates-for-elected-office | Candidates | Redirect | About / Governance / Elected Officers. Redirect to /about-us/elected-officers | Empty category |
| /about-us/elected-officers | Elected Officers | Keep | About / Governance / Elected Officers |  |
| /about-us/elected-officers/17-about-us/759-board-of-directors | Board of Directors | Redirect | About / Governance / Elected Officers. Redirect to About / Governance / Elected Officers | Same body text as /17-about-us/759-board-of-directors |
| /about-us/objectives/17-about-us/759-board-of-directors | Board of Directors | Redirect | About / Governance / Elected Officers. Redirect to About / Governance / Elected Officers | Same body text as /17-about-us/759-board-of-directors |
| /about-us/organization/699-elected-officers | Elected Officers | Merge | About / Governance / Elected Officers. Merge into About / Governance / Elected Officers |  |
| /triz-event-list/awards/17-about-us/759-board-of-directors | Board of Directors | Redirect | About / Governance / Elected Officers. Redirect to About / Governance / Elected Officers | Same body text as /17-about-us/759-board-of-directors |
| /about-us/standing-committees | Standing Committees | Keep | About / Governance / Standing Committees |  |
| /about-us/standing-committees/10-richard-langevin | Richard Langevin | Merge | About / Governance / Standing Committees. Merge into About / Governance / Standing Committees |  |
| /about-us/standing-committees/11-david-conley | David Conley | Merge | About / Governance / Standing Committees. Merge into About / Governance / Standing Committees |  |
| /about-us/standing-committees/12-victor-fey | Victor Fey | Merge | About / Governance / Standing Committees. Merge into About / Governance / Standing Committees |  |
| /about-us/standing-committees/16-vacant-2 | Vacant-2 | Merge | About / Governance / Standing Committees. Merge into About / Governance / Standing Committees |  |
| /about-us/standing-committees/17-jack-ezickson | Jack Ezickson | Merge | About / Governance / Standing Committees. Merge into About / Governance / Standing Committees |  |
| /about-us/standing-committees/21-michael-berstene | Michael Berstene | Merge | About / Governance / Standing Committees. Merge into About / Governance / Standing Committees |  |
| /about-us/standing-committees/6-vacant | Vacant | Merge | About / Governance / Standing Committees. Merge into About / Governance / Standing Committees |  |
| /about-us/standing-committees/8-jim-bradley | Jim Bradley | Merge | About / Governance / Standing Committees. Merge into About / Governance / Standing Committees |  |
| /about-us/135-tax | AI Tax Information | Redirect | About / Governance / Taxes & Financials. Redirect to /about-us/taxes | Same body text as /about-us/taxes |
| /about-us/taxes | Taxes | Keep | About / Governance / Taxes & Financials | Board decision: newest item 2017 |
| /about-us/taxes/614-2007 | Form 990-2007 | Merge | About / Governance / Taxes & Financials. Merge into About / Governance / Taxes & Financials | Board decision: newest 2017 |
| /about-us/taxes/641-budget-2017 | AI 2017 Annual Budget | Merge | About / Governance / Taxes & Financials. Merge into About / Governance / Taxes & Financials | Board decision: newest 2017 |
| /about-us/taxes/642-2012-tax-990 | 2012 Tax 990-EZ summary | Merge | About / Governance / Taxes & Financials. Merge into About / Governance / Taxes & Financials | Board decision: newest 2017 |
| /community-news/memorial | Memorial | Keep | About / Memorial |  |
| /community-news/memorial/525-memorial-eugene-rivin | Memorial Eugene Rivin | Keep | About / Memorial |  |
| /community-news/memorial/528-memorial-for-nikolai-khomenko | Memorial for Nikolai Khomenko | Keep | About / Memorial |  |
| /community-news/memorial/531-memorial-nikolai-khomenko | Memorial Nikolai Khomenko | Keep | About / Memorial |  |
| /community-news/memorial/532-memorial-eugene-rivin51 | Memorial Eugene Rivin | Keep | About / Memorial |  |
| /community-news/memorial/569-memorial-hansjurgen-linde | Memorial  -- Dr. Hansjurgen Linde | Keep | About / Memorial |  |
| /community-news/memorial/663-memorial-mitofanov-2 | Volyuslav Mitrofanov | Keep | About / Memorial |  |
| /community-news/memorial/786-memorial-john-lacarrubba | Memorial John LaCarrubba | Keep | About / Memorial |  |
| /community-news/memorial/787-memorial-zion-bar-el | Memorial for Zion Bar-El | Keep | About / Memorial |  |
| /community-news/memorial/811-memorial-kynin | Memorial for Dr. Alexander Kynin | Keep | About / Memorial |  |
| /community-news/memorial/853-in-memory-of-dr-james-jim-bradley | In memory of Dr. James “Jim” Bradley | Keep | About / Memorial |  |
| /community-news/memorial/867-the-triz-world-has-lost-a-champion | The TRIZ world has lost a champion | Keep | About / Memorial |  |
| /community-news/memorial/953-dr-ellen-domb-engineer-triz-pioneer-and-teacher-1946-2025 | Dr. Ellen Domb – Engineer, TRIZ Pioneer and teacher 1946-2025 | Keep | About / Memorial |  |
| /about-us/altshuller-institute | The Altshuller Institute | Keep | About / The Institute |  |
| /about-us/objectives | Objectives | Merge | About / The Institute. Merge into About / The Institute | Short objectives text; folds into The Institute page |
