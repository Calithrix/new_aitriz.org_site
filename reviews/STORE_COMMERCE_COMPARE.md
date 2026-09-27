# Store commerce comparison — dollars to mission

Date: 27 September 2026. List prices as published September 2026. Confirm on vendor pages before a board vote. Not a cutover plan.

The Institute is a 501(c)(3) filing Form 990-N (revenue under $50,000). The store sells books, proceedings, and videos. Members get 10% off. Technical Innovation Center sells some of the same titles. The live cart is Ecwid store 16808109 with Stripe loaded.

Question: which stack leaves the largest share of each dollar for TRIZ work, after platform rent, card fees, and volunteer hours.

## Two different fees

| Layer | Who charges it | Can a nonprofit dodge it? |
| --- | --- | --- |
| Platform rent | Ecwid, Shopify, host | Yes, by using a $0-rent stack |
| Card processing | Stripe, PayPal, Square, Lightspeed Payments | No, unless the buyer pays it or you take checks/ACH |

Stripe's 501(c)(3) rate (about 2.2% + $0.30) applies only if **80% of that Stripe account's volume is tax-deductible donations**. Book and video sales do not count. A store account pays the ordinary **2.9% + $0.30**. Keep donations on a separate processor if you want the gift discount.

PayPal's verified 501(c)(3) rate is about **1.99% + $0.49**. That is often available to the organization, not only to a donations-only account. Confirm on the current PayPal Nonprofit application.

Ecwid charges **no platform cut of sales**. Rent is the subscription. Nonprofit perk: six months of Venture free if they apply — not a permanent discount.

Digital products and discount coupons on Ecwid require Venture or higher. Starter (10 products, $5/mo) cannot sell the TRIZCON video or run the 10% member coupon. The live grid already has more than 10 products. Floor for this catalog is **Venture**.

## Model (we do not have their GMV)

Assume 80 orders / year at ~$60 average = **$4,800** store revenue. That is a guess. Ask Richard for 2023–2025 store gross.

| Stack | Annual rent | Processing on $4,800 / 80 orders | All-in | $ to mission |
| --- | ---: | ---: | ---: | ---: |
| Ecwid Venture annual + Stripe | $348 | $163 | **$511** | $4,289 (89%) |
| Ecwid Business annual + Stripe | $588 | $163 | **$751** | $4,049 (84%) |
| Shopify NPO Lite + Shopify Payments | $348 | ~$163 | **~$511** | similar dollars, higher lock-in |
| WooCommerce + cheap host + Stripe | ~$120–300 | $163 | **~$280–460** | more $ if someone already maintains WordPress |
| Square Online Free | $0 | $182 (3.3%+$0.30) | **$182** | $4,618 (96%) |
| PayPal buttons only (NPO rate) | $0 | $135 | **$135** | $4,665 (97%) |
| Stripe Payment Links only | $0 | $163 | **$163** | $4,637 (97%) |
| Zeffy nonprofit store | $0 | $0 to the Institute; optional buyer tip pays Zeffy | **$0** | $4,800 (100% of list) |
| Invoice + check / ACH | $0 | $0 | **$0** | $4,800 + unpaid hours |

At **$15,000** / 200 orders the rent matters less and processing dominates: Ecwid Venture all-in ~$870; PayPal NPO ~$400; Zeffy $0 to the org.

At **$40,000** you are near the whole 990-N cap if the store were the Institute's only revenue. Unlikely. Do not size the stack for a shop that does not exist.

## What each option actually is

**Keep Ecwid + Stripe.** Already live. Embeds on Joomla *and* on the static prototype. Zero Ecwid sales tax. Cost is Venture rent + ordinary Stripe. Switching away throws away catalog, coupons, and order history. Only stay if last year's GMV makes $348 look small, or if nobody will rebuild a catalog.

**Shopify NPO.** Lite ~$29/mo. You rent a second website. Staff time to migrate. No mission reason at this scale.

**WooCommerce.** $0 plugin. You pay hosting and you pay whoever patches WordPress. The Institute is trying to leave a neglected CMS, not adopt another.

**Square Online Free.** $0 rent, worse card rate (3.3%+$0.30). Fine for a bake-sale cart. No 10% member logic unless you add it by hand.

**PayPal buttons / Stripe Payment Links.** $0 rent. Best dollar-to-mission if the catalog stays small (10–20 titles). Ugly grid unless we design the shelf ourselves — which is what the prototype Store page would be. Member 10% becomes a coupon code you email, not a logged-in price.

**Zeffy store.** $0 to the Institute because the buyer is asked for an optional tip that funds Zeffy. 100% of list price can land. Trade: the tip prompt sits on a book checkout; customer list lives at Zeffy; this is a fundraising merch tool, not a scholarly bookstore. Board should look at the checkout UX before treating “free” as free of obligation.

**No cart.** Shelf on the new site, “email ai@triz.org to order,” check or ACH. Maximum mission share. Maximum volunteer time. Fine as a bridge, not as the long-term public face if they still want a General Store.

**TIC's shop.** Some titles already sell there. Duplicating inventory so the Institute can look like a retailer may cost more than it returns. That is a board question, not a software question.

## Stewardship rules

1. Get 2023–2025 store gross and the current Ecwid plan name before anyone votes.
2. Do not move live checkout until Akeeba exists off-server.
3. Separate **donations** from **product sales** so gift volume can sit on a nonprofit card rate.
4. Count volunteer hours. A $200 cheaper stack that costs Richard ten hours a month is not cheaper.
5. Do not put customer data or the Ecwid CSV in this public-facing repo.
