# General Store plan — readable and scalable

Date: 27 September 2026
Live URL: https://www.aitriz.org/visit-our-store
Do not edit live Joomla until an Akeeba / host backup exists off-server.

## What the store actually is

Not VirtueMart. Joomla page `com_ecwid` embeds **Ecwid store 16808109**. Catalog and checkout are JavaScript from `app.ecwid.com` / `us-vir5-storefront-api.ecwid.com`. Stripe is loaded for payment. Crawlers and `?format=feed` see almost nothing (`ecwidView` 404).

That is why the page feels unreadable: the Institute chrome (long left nav, retired sponsor banners) wraps a third-party widget that has no HTML fallback.

Live membership copy already says members get **10% off** store items. Do not invent a different discount.

Several titles are also sold by Technical Innovation Center. Richard runs TIC. Fulfillment may be TIC, not an Institute warehouse.

The Institute files Form 990-N (revenue under $50,000). Do not propose Shopify, a custom cart, or moving checkout into the static prototype.

## What a board member trips on today

- No sentence above the grid that says what the store is, who ships, or that members get 10%.
- One unsorted grid: conference video, first-edition 40 Principles, used *Creativity as an Exact Science*, youth title, sold-out *Innovation on Demand*, and a “New offering” combo sit side by side.
- Sale badges and strikethrough prices with no “as of” date.
- Sold-out items still occupy a tile.
- Cover art uses older Latin spellings (Genrich). That is the printed book. Do not “correct” covers.
- Left nav still says “Genrick Altshuller.” Separate from the store widget.
- Prototype `library.html` still has a store placeholder instead of a curated shelf.

## Plan

### 0. Backup
Akeeba `.jpa` or cPanel full backup off the server before any Joomla or Ecwid cleanup.

### 1. Readable wrapper on live (small Joomla edit)
One article *above* the Ecwid embed:

- What it is: books, proceedings, and videos the Institute sells.
- Members: 10% off (point to Join).
- Shipping / questions: ai@triz.org and the Worcester phone.
- “Catalog loads below. If it does not appear, open the store in a current browser.”
- Noscript fallback: a short list of categories, not every SKU.

Do not restyle Ecwid inside Gantry. Do not hide the widget.

### 2. Catalog hygiene in Ecwid admin (this is the scale work)
Ecwid already scales SKUs. The Institute does not need a new cart.

Ask Richard: who has the Ecwid admin, and can he export the product CSV this week.

Then, in Ecwid, not in GitHub:

- Export products.
- Hide or archive out-of-print / sold-out unless he wants them listed as unavailable.
- Six categories, not one pile: Altshuller originals · textbooks & handbooks · youth · TRIZCON proceedings & video · used / remainder · other.
- Confirm sale prices have an end date or drop the badge.
- Confirm the 10% member coupon still works.

Do not change prices in the prototype. Fees are already under his review.

### 3. Prototype shelf (static site only)
On `pages/library.html`, replace the store placeholder with a curated shelf of titles the live site already names (*The Innovation Algorithm*, *40 Principles*, *And Suddenly the Inventor Appeared*, *Izobretenia*, TRIZCON video / proceedings). Each card: title + “Buy in the General Store” → https://www.aitriz.org/visit-our-store. No invented prices. Checkout stays on Ecwid.

### 4. Later, only if 1–3 work
Deep-link individual Ecwid products from the shelf. Keep one storefront. Do not merge TIC’s shop into aitriz.org without an explicit decision.

## Out of scope

- Rebuilding checkout in the static prototype
- Inventing SKUs, shipping rates, or a new discount
- Committing Ecwid CSV or customer data to this repo
