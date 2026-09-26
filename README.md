# AITRIZ board prototype

Static redesign of [aitriz.org](https://www.aitriz.org) for an Altshuller Institute board review.

This is **not** production. Live `aitriz.org` stays on Joomla + Cloudflare.

## Open locally

```bash
git clone https://github.com/Calithrix/new_aitriz.org_site.git
cd new_aitriz.org_site
python -m http.server 8000
```

Then open http://127.0.0.1:8000

## What this is

- Navy / parchment frame that matches the certificate language
- Six-item nav: TRIZ, Events, Learn, Membership, Library, About
- Homepage: one hero, four doors, one featured piece
- Public copy only. No member database.
- IA map (live URLs → six sections, Keep / Merge / Archive / Redirect): [docs/ia-map.md](docs/ia-map.md)

## What this is not

- Not a Joomla clone
- Not a cutover plan
- Not a store or login
