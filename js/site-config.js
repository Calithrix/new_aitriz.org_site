/*
 * Membership prices and PayPal for the static site.
 *
 * Change a price, the PayPal client ID, or paymentsEnabled here.
 * pages/membership.html and js/store.js read this file. The membership
 * page repeats these figures as the no-JS fallback; keep that text in step.
 *
 * paypalClientId stays the placeholder until the Institute supplies its
 * PayPal business (Live) client ID. Each store item's hostedButtonId
 * stays REPLACE_ME until that item's hosted button exists.
 * Leave paymentsEnabled false until both are real. While payments are
 * off, or an item's button ID is still the placeholder, that item shows
 * "Online payment coming soon" and the hosted-buttons SDK is not loaded
 * for it. See docs/paypal-hosted-buttons.md.
 */
(function (window, document) {
  var siteConfig = {
    currency: 'USD',
    paymentsEnabled: false,
    // One-line swap: the Institute's PayPal business (Live) client ID.
    paypalClientId: 'REPLACE_WITH_INSTITUTE_PAYPAL_ID',
    // Leave this sentinel. A client ID that still matches it cannot charge.
    paypalClientIdPlaceholder: 'REPLACE_WITH_INSTITUTE_PAYPAL_ID',
    // Leave this sentinel. A hosted button ID that still matches it is not rendered.
    hostedButtonIdPlaceholder: 'REPLACE_ME',
    membershipTiers: {
      annual: {
        label: 'Annual',
        price: 120,
        term: 'per year'
      },
      student: {
        label: 'Student',
        price: 35,
        term: 'per year · full-time students'
      },
      retired: {
        label: 'Retired',
        price: 60,
        term: 'per year · retirees'
      },
      lifetime: {
        label: 'Lifetime',
        price: 950,
        term: 'one-time, never renew'
      }
    },
    storeButtons: {
      'innovation-algorithm': { hostedButtonId: 'REPLACE_ME' },
      'innovation-algorithm-hard-cover': { hostedButtonId: 'REPLACE_ME' },
      'and-suddenly-the-inventor-appeared': { hostedButtonId: 'REPLACE_ME' },
      'creativity-as-an-exact-science': { hostedButtonId: 'REPLACE_ME' },
      '40-principles-first-edition': { hostedButtonId: 'REPLACE_ME' },
      '40-principles-extended-edition': { hostedButtonId: 'REPLACE_ME' },
      'ballad-of-the-stars': { hostedButtonId: 'REPLACE_ME' },
      'innovation-tools-handbook': { hostedButtonId: 'REPLACE_ME' },
      'triz-right-solution-right-time': { hostedButtonId: 'REPLACE_ME' },
      'the-ideal-result': { hostedButtonId: 'REPLACE_ME' },
      '40-inventive-principles': { hostedButtonId: 'REPLACE_ME' },
      'hands-on-systematic-innovation': { hostedButtonId: 'REPLACE_ME' },
      'da-vinci-and-the-40-answers': { hostedButtonId: 'REPLACE_ME' },
      'triz-systematic-innovation-in-manufacturing': { hostedButtonId: 'REPLACE_ME' },
      'triz-theory-of-inventive-problem-solving': { hostedButtonId: 'REPLACE_ME' },
      'triz-technology-for-innovation': { hostedButtonId: 'REPLACE_ME' },
      'triz-for-six-sigma': { hostedButtonId: 'REPLACE_ME' },
      'using-triz-for-anti-virus-development': { hostedButtonId: 'REPLACE_ME' },
      'triz-matrix': { hostedButtonId: 'REPLACE_ME' },
      'trizcontrasolve': { hostedButtonId: 'REPLACE_ME' },
      'ia-triz-technology-combo': { hostedButtonId: 'REPLACE_ME' },
      '3-book-set': { hostedButtonId: 'REPLACE_ME' },
      'success-factor': { hostedButtonId: 'REPLACE_ME' },
      'teaching-21st-century-skills': { hostedButtonId: 'REPLACE_ME' },
      'trizcon2025-video-review': { hostedButtonId: 'REPLACE_ME' },
      'trizcon2023-video-review': { hostedButtonId: 'REPLACE_ME' },
      'associate-certification-fee-membership': { hostedButtonId: 'REPLACE_ME' },
      'associate-certification-fee-tulane': { hostedButtonId: 'REPLACE_ME' },
      'legacy-supporter-annual': { hostedButtonId: 'REPLACE_ME' },
      'advertise-e-newsletter': { hostedButtonId: 'REPLACE_ME' },
      'donation-20': { hostedButtonId: 'REPLACE_ME' }
    }
  };

  window.SITE_CONFIG = siteConfig;

  function numericPrice(price) {
    if (typeof price === 'number' && isFinite(price) && price >= 0) return price;
    if (typeof price === 'string' && /^\d+(\.\d{1,2})?$/.test(price.trim())) return Number(price.trim());
    return null;
  }

  function formatDollars(amount) {
    var parts = amount.toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (parts[1] === '00') return '$' + parts[0];
    return '$' + parts[0] + '.' + parts[1];
  }

  function fillPrice(el, tier, format) {
    var amount = numericPrice(tier.price);
    if (el.classList) el.classList.remove('is-pending');
    if (amount == null) {
      el.textContent = 'Price to be confirmed';
      if (el.classList) el.classList.add('is-pending');
      return;
    }
    var dollars = formatDollars(amount);
    var currency = typeof siteConfig.currency === 'string' ? siteConfig.currency.trim() : '';
    if (format === 'plain' || !/^[A-Z]{3}$/.test(currency)) {
      el.textContent = dollars;
      return;
    }
    el.textContent = '';
    el.appendChild(document.createTextNode(dollars + ' '));
    var small = document.createElement('small');
    small.textContent = currency;
    el.appendChild(small);
  }

  function renderMembershipPrices() {
    var tiers = siteConfig.membershipTiers || {};
    var nodes = document.querySelectorAll('[data-membership-tier]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var tier = tiers[el.getAttribute('data-membership-tier')];
      if (!tier) continue;
      if (el.getAttribute('data-membership-part') === 'price') {
        fillPrice(el, tier, el.getAttribute('data-membership-format'));
        continue;
      }
      var heading = el.querySelector('h3');
      var price = el.querySelector('.price');
      var term = el.querySelector('.term');
      if (heading && tier.label) heading.textContent = tier.label;
      if (term && tier.term) term.textContent = tier.term;
      if (price) fillPrice(price, tier, price.getAttribute('data-membership-format'));
    }
  }

  if (document) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderMembershipPrices);
    } else {
      renderMembershipPrices();
    }
  }
})(window, typeof document === 'undefined' ? null : document);
