# PayPal hosted buttons

The General Store does not send a price from the web page. Each item is a PayPal hosted button. PayPal stores the price, shipping, and tax. The page only displays a price and, when payments are on, renders the button PayPal already created.

No button IDs exist yet. Every `hostedButtonId` in `js/site-config.js` is `REPLACE_ME`. Do not invent one.

## What the site loads

This follows PayPal's recommended HTML for the low-code buy button (guide updated 11 September 2026):

https://developer.paypal.com/guides/low-code-buy-button

One script for the store page. The guide says not to change the query parameters. The site uses only the three parameters from that snippet, filled from `js/site-config.js`:

```
https://www.paypal.com/sdk/js?client-id=CLIENT_ID&components=hosted-buttons&currency=USD
```

Then, for each item that has a real button ID:

```js
paypal.HostedButtons({
  hostedButtonId: "BUTTON_ID"
}).render("#paypal-container-BUTTON_ID");
```

`js/store.js` does that. Do not paste thirty-one snippets into the HTML. Paste each button's ID into `storeButtons` under that item's slug.

PayPal's rules for several buttons on one page, from that same guide:

- Each button needs its own `hostedButtonId`. Reusing an ID means only the first one renders.
- Every button on the store page must use the same currency. This site's `currency` is `USD`.

How to create a button, including shipping, tax, and the return URL:

- https://developer.paypal.com/payment-links-buttons/create-buy-button (updated 8 September 2026)
- https://developer.paypal.com/payment-links-buttons/manage-inventory-variants-taxes
- https://developer.paypal.com/payment-links-buttons/customize

## Create one button

Use the Institute's PayPal Business account. A personal account cannot create these buttons.

1. Log in to the PayPal business account.
2. From the navigation menu, select **Pay & Get Paid > Create Payment Links and Buttons**.
3. Select the button type, then the product.
4. On the Product tab, set the name to the item name in the table below.
5. Under Price, choose **One set price** (not customer-set). Enter the display price from the table, in USD. The crossed-out "was" price on the page is not the charge.
6. On the Checkout tab, set shipping and tax as below. Do not type a shipping amount or a tax rate into this repository. Those stay in PayPal.
7. On the Confirmation tab, turn on **Auto-return** and set the URL to `https://aitriz.org/pages/thanks.html`. PayPal's customize doc says this return URL applies only to that button, so set it on every button. The thank-you page is `pages/thanks.html`.
8. Select **Build it**.
9. From the generated code, copy two values only:
   - The `client-id` in the script URL (`components=hosted-buttons`). One client ID for the whole page. Put it in `paypalClientId`.
   - That button's `hostedButtonId`. Put it on the matching slug in `storeButtons`.

Leave `hostedButtonIdPlaceholder` as `REPLACE_ME`. An ID that still equals that sentinel is not rendered.

The button ID PayPal shows should be letters, numbers, hyphens, or underscores. Paste it exactly. The store will not render anything else, so a placeholder or a sentence cannot become a charge.

### Shipping

From PayPal's inventory, variants, and taxes doc. On the Checkout tab:

- **Ship = Yes** in the table (books, book sets, the TRIZ Matrix chart, and TRIZContrasolve, which is supplied on disc). Leave shipping-address collection on. Turn on **Shipping fee**. Choose **Use shipping from my settings** or **Use a specific shipping fee**. Do not choose **Shipping not applicable**.
- **Ship = No** (videos, certification fees, Legacy Support, the newsletter ad, and the $20 gift). Turn off **Shipping address**. Set the shipping fee to **Shipping not applicable**.

PayPal's FAQ says payment buttons do not use the account-wide shipping override. Set the fee on each physical button.

### Tax

On the Checkout tab, turn on **Taxes** only if the Institute collects tax on that item. Then choose **Use tax from my settings** or **Use a specific tax rate** (percentage or flat amount). Choose **Taxes not applicable** when no tax is due. This repository does not choose a rate.

### Two labels on the page

Legacy Support ($300) and the newsletter ad ($500) say "per year" on the page. The buy-button steps above create one charge of that amount, not a renewal. If those need to bill again next year, that is a separate decision. Do not turn them into a customer-typed amount.

The $20 gift is a one-set price of $20.00, not a customer-set donation, so the payer cannot change the amount.

## Turn payments on

Do this only after the buttons exist in the Institute's live PayPal account and a test purchase of one cheap item has been refunded.

1. Set `paypalClientId` to the live client ID from the button snippet.
2. Replace each `REPLACE_ME` you are ready to sell. Items left as `REPLACE_ME` keep saying "Online payment coming soon."
3. Set `paymentsEnabled` to `true`.

If `paymentsEnabled` is `false`, or the client ID is still `REPLACE_WITH_INSTITUTE_PAYPAL_ID`, the PayPal script is not loaded at all.

Membership signup is unchanged. It still links to the current join page on aitriz.org. Do not create membership buttons for this step.

Changing a price later is a change inside that PayPal button, plus the visible price in `pages/store.html`. The page price is display only. It is not what PayPal charges.

## Checklist

Thirty-one items have a buy slot. Create one hosted button per row. Slugs match `storeButtons` in `js/site-config.js`.

| Slug | Item | Display price to put on the button | Ship a physical item? |
| --- | --- | --- | --- |
| `innovation-algorithm` | The Innovation Algorithm | $50.00 | Yes |
| `innovation-algorithm-hard-cover` | The Innovation Algorithm (Hard Cover) | $65.00 | Yes |
| `and-suddenly-the-inventor-appeared` | And Suddenly the Inventor Appeared | $40.00 | Yes |
| `creativity-as-an-exact-science` | Creativity As An Exact Science | $100.00 | Yes |
| `40-principles-first-edition` | 40 Principles — first edition | $25.00 | Yes |
| `40-principles-extended-edition` | 40 Principles: Extended Edition | $55.00 | Yes |
| `ballad-of-the-stars` | Ballad of the Stars | $20.00 | Yes |
| `innovation-tools-handbook` | The Innovation Tools Handbook | $40.00 | Yes |
| `triz-right-solution-right-time` | TRIZ: The Right Solution at the Right Time | $60.00 | Yes |
| `the-ideal-result` | The Ideal Result | $90.00 | Yes |
| `40-inventive-principles` | 40 Inventive Principles | $20.00 | Yes |
| `hands-on-systematic-innovation` | Hands On Systematic Innovation | $110.00 | Yes |
| `da-vinci-and-the-40-answers` | Da Vinci and the 40 Answers | $20.00 | Yes |
| `triz-systematic-innovation-in-manufacturing` | TRIZ: Systematic Innovation in Manufacturing | $55.00 | Yes |
| `triz-theory-of-inventive-problem-solving` | TRIZ — The Theory of Inventive Problem Solving | $99.00 | Yes |
| `triz-technology-for-innovation` | TRIZ — Technology for Innovation | $60.00 | Yes |
| `triz-for-six-sigma` | TRIZ for Six Sigma | $25.00 | Yes |
| `using-triz-for-anti-virus-development` | Using TRIZ for Anti-Virus Development | $65.00 | Yes |
| `triz-matrix` | TRIZ Matrix | $6.00 | Yes |
| `trizcontrasolve` | TRIZContrasolve | $65.00 | Yes |
| `ia-triz-technology-combo` | IA & TRIZ Technology Combo | $110.00 | Yes |
| `3-book-set` | 3 Book Set | $115.00 | Yes |
| `success-factor` | Success Factor | $30.00 | Yes |
| `teaching-21st-century-skills` | Teaching 21st Century Skills | $40.00 | Yes |
| `trizcon2025-video-review` | Video Review of TRIZCON2025 — Latvia | $100.00 | No |
| `trizcon2023-video-review` | TRIZCON2023 — video review of all conference presentations | $100.00 | No |
| `associate-certification-fee-membership` | Associate Certification Testing Fee & Annual Membership | $350.00 | No |
| `associate-certification-fee-tulane` | Associate Certification Testing Fee for TULANE BioEngineering students | $250.00 | No |
| `legacy-supporter-annual` | Become a Legacy Supporter (Annual) | $300.00 (page also says per year; the button is one charge of this amount) | No |
| `advertise-e-newsletter` | Advertise in our E-Newsletter | $500.00 (page also says per year; the button is one charge of this amount) | No |
| `donation-20` | Donations to support AI | $20.00 | No |

Do not create buttons for these. They are marked sold out and have no buy slot:

- Innovation on Demand, shown at $99.00.
- Systematic (Software) Innovation, shown at $190.00.
