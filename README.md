# AITRIZ board prototype

Static redesign of [aitriz.org](https://www.aitriz.org) for an Altshuller Institute board review.

This is **not** production. Live `aitriz.org` stays on Joomla + Cloudflare and is not touched by this repo.

## Open locally

```bash
git clone https://github.com/Calithrix/new_aitriz.org_site.git
cd new_aitriz.org_site
python -m http.server 8000
```

Then open http://127.0.0.1:8000

## What this is

- Pure static HTML + CSS. No build step, no JavaScript (the mobile menu is a CSS checkbox toggle).
- The live site's identity carried over: charcoal header (`#312f38`), royal blue (`#2f4291`), khaki accent (`#e8e0b2`), Raleway headings and Lato body, the "ai" lamp logo, and the banner imagery from the live home page (see `assets/README.md` for sources).
- Six-item nav: TRIZ, Events, Learn, Membership, Library, About — plus a Join button.
- Homepage: hero, three doors (Membership / Training / Certification), What is TRIZ, TRIZCON 2026 feature, three image tiles, Executive Director's letter, who uses TRIZ, Tulane story, membership CTA, rich footer with sponsors.
- Inner pages are filled with content adapted from the live site. Anything not confirmed on the live site is marked with a dashed **Placeholder / To confirm** box rather than invented.
- Public copy only. No member database, no login, no personal contact details beyond the Institute's own.

## What this is not

- Not a Joomla clone
- Not a cutover plan
- Not a store or login — checkout, registration and the paper portal link out to the live site

## Layout

```
index.html          home
pages/*.html        triz, events, learn, membership, library, about
css/site.css        single stylesheet, design tokens at the top
assets/             logo, banners, portraits, event and sponsor images
```
