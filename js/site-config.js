/*
 * Membership prices and PayPal for the static site.
 *
 * Change a price, the PayPal client ID, or paymentsEnabled here.
 * pages/membership.html and js/store.js read this file. The membership
 * page repeats these figures as the no-JS fallback; keep that text in step.
 *
 * paypalClientId stays the placeholder until the Institute supplies its
 * PayPal business (Live) client ID. Leave paymentsEnabled false until that
 * ID is real. While either check fails, store buttons stay hidden and the
 * PayPal SDK is not loaded.
 */
(function (window, document) {
  var siteConfig = {
    currency: 'USD',
    paymentsEnabled: false,
    // One-line swap: the Institute's PayPal business (Live) client ID.
    paypalClientId: 'REPLACE_WITH_INSTITUTE_PAYPAL_ID',
    // Leave this sentinel. A client ID that still matches it cannot charge.
    paypalClientIdPlaceholder: 'REPLACE_WITH_INSTITUTE_PAYPAL_ID',
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
