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
