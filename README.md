# AITRIZ board prototype

Static redesign of [aitriz.org](https://www.aitriz.org) for an Altshuller Institute board review. It is the planned replacement for the current Joomla site, and it is not the live site yet. Live `aitriz.org` stays on Joomla + Cloudflare and is not touched by this repo.

Cutover is planned on Cloudflare Pages, with the published files served at the domain root (`https://aitriz.org/`). It is waiting on board sign-off and on the Institute's PayPal hosted buttons. Until those buttons exist, store checkout on this site stays off. Membership signup still links to the current join page on aitriz.org.

The GitHub Pages preview remains at https://calithrix.github.io/new_aitriz.org_site/ and uses relative asset paths, so it keeps working under that subpath.

## Open locally

```bash
git clone https://github.com/Calithrix/new_aitriz.org_site.git
cd new_aitriz.org_site
python -m http.server 8000
```

Then open http://127.0.0.1:8000

## What this is not

- Not a Joomla clone
- Not a login. Registration and the paper portal still link out to the current site. Membership plans on this site do too.

## Cloudflare Pages

Build command: `sh scripts/prepare-cloudflare-pages.sh`

Build output directory: `dist`

Pages publishes the build output directory. There is no ignore file, and a `_redirects` rule cannot return 404. Cloudflare's own redirects table marks a 404 rewrite as unsupported (`/blog/* /blog/404.html 404`). The build copies the site into `dist` and leaves out `reviews/`, `docs/`, `backups/`, and `old-site-backup/`, so those folders are not uploaded.

`robots.txt` also disallows those paths. That only asks crawlers to skip them. It does not stop the files being served if a publish accidentally includes them. The `dist` build is what keeps them off the public site.

GitHub Pages preview still serves the repository root, including those folders. They are internal notes, not pages of the new site.

## Membership prices and PayPal

Edit `js/site-config.js` for dues, the PayPal client ID, hosted button IDs, and the payments switch. The store setup steps are in `docs/paypal-hosted-buttons.md`.

- **Prices.** Confirmed from the live join page: Annual $120 per year, Student $35 per year, Retired $60 per year, Lifetime $950. Change `membershipTiers.annual.price`, `student.price`, `retired.price`, or `lifetime.price`, and update the matching no-JS text in `pages/membership.html`.
- **Currency.** `currency` is `USD`. The hosted-button script uses that code. Every store button must use the same currency.
- **PayPal client ID.** Replace `paypalClientId` with the `client-id` from the hosted-button snippet PayPal generates. Leave `paypalClientIdPlaceholder` as it is.
- **Hosted button IDs.** Each slug under `storeButtons` gets the `hostedButtonId` from that item's button. Leave `hostedButtonIdPlaceholder` as `REPLACE_ME`.
- **Turn payments on.** Set `paymentsEnabled` to `true` only after the client ID is the Institute's and the buttons you want to sell have real IDs. Otherwise the store says online payment is coming soon and does not load PayPal.

Visible store prices in `pages/store.html` are display only. The amount charged is the price saved on the hosted button.

## Layout

```
index.html          home
404.html            not-found page
pages/*.html        triz, events, learn, membership, library, about, store, thanks
css/site.css        single stylesheet, design tokens at the top
js/site-config.js   membership prices, currency, PayPal client ID, hosted button IDs, payments switch
js/store.js         PayPal hosted buttons; reads js/site-config.js
robots.txt          crawler rules and sitemap location
sitemap.xml         the eight public pages
scripts/prepare-cloudflare-pages.sh
                    publish copy without internal folders
docs/paypal-hosted-buttons.md
                    how to create the buttons and turn payments on
assets/             logo, banners, portraits, event and sponsor images
```
