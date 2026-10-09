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
- Not a login — registration and the paper portal link out to the live site. The General Store (`pages/store.html`) is a PayPal-button prototype; checkout is not live.

## Membership prices and PayPal

Edit `js/site-config.js` only.

- **Prices.** Set `membershipTiers.annual.price`, `student.price`, `retired.price`, or `lifetime.price` to a number. `null` means that tier stays "Price to be confirmed" on the membership page. The live site lists two different schedules; both are named in the TODO at the top of the config file. Do not copy either schedule in until the board picks one. Lifetime is the only amount both live pages share, and it is still changed in that file.
- **Currency.** `currency` is the code used on the membership page and, once payments are on, in the PayPal order.
- **PayPal.** Replace `paypalClientId` with the Institute's PayPal business (Live) client ID. Leave `paypalClientIdPlaceholder` as it is so a leftover placeholder cannot charge.
- **Turn payments on.** Set `paymentsEnabled` to `true` only after that client ID is the Institute's. If the ID is still `REPLACE_WITH_INSTITUTE_PAYPAL_ID`, or `paymentsEnabled` is `false`, store buttons stay hidden, the page says online payment is coming soon, and the PayPal SDK is not loaded.

Store catalog prices (the book and video amounts on each card) are not in this file.

## Layout

```
index.html          home
pages/*.html        triz, events, learn, membership, library, about, store
css/site.css        single stylesheet, design tokens at the top
js/site-config.js   membership prices, currency, PayPal client ID, payments switch
js/store.js         PayPal buy buttons; reads js/site-config.js
assets/             logo, banners, portraits, event and sponsor images
```
