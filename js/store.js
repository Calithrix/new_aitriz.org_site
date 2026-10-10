/*
 * General Store — PayPal hosted buttons
 *
 * Prices, shipping, and tax stay in the Institute's PayPal account.
 * This file never reads a page price and never calls createOrder.
 *
 * Documented integration (recommended HTML, low-code buy button):
 * https://developer.paypal.com/guides/low-code-buy-button
 * One script for the page, query unchanged except the account values
 * PayPal puts in that snippet:
 *   client-id, components=hosted-buttons, currency
 * Then, for each product:
 *   paypal.HostedButtons({ hostedButtonId }).render("#paypal-container-ID")
 *
 * The SDK loads only when paymentsEnabled is true, paypalClientId is
 * not the placeholder, currency is a 3-letter code, and at least one
 * item has a hosted button ID other than REPLACE_ME. Every other card
 * stays on "Online payment coming soon."
 */
(function () {
  var COMING_SOON = 'Online payment coming soon';
  var CLIENT_PLACEHOLDER = 'REPLACE_WITH_INSTITUTE_PAYPAL_ID';
  var BUTTON_PLACEHOLDER = 'REPLACE_ME';

  function config() {
    return window.SITE_CONFIG || null;
  }

  function isRealToken(value, placeholder) {
    if (typeof value !== 'string') return false;
    var trimmed = value.trim();
    if (!trimmed || trimmed === placeholder) return false;
    return /^[A-Za-z0-9_-]+$/.test(trimmed);
  }

  function paymentsReady(cfg) {
    if (!cfg || cfg.paymentsEnabled !== true) return false;
    var clientPlaceholder = typeof cfg.paypalClientIdPlaceholder === 'string' && cfg.paypalClientIdPlaceholder.trim()
      ? cfg.paypalClientIdPlaceholder.trim()
      : CLIENT_PLACEHOLDER;
    var currency = typeof cfg.currency === 'string' ? cfg.currency.trim() : '';
    if (!isRealToken(cfg.paypalClientId, clientPlaceholder)) return false;
    if (!/^[A-Z]{3}$/.test(currency)) return false;
    return true;
  }

  function hostedButtonId(cfg, sku) {
    if (!cfg || !cfg.storeButtons || !sku) return '';
    var entry = cfg.storeButtons[sku];
    if (!entry) return '';
    var placeholder = typeof cfg.hostedButtonIdPlaceholder === 'string' && cfg.hostedButtonIdPlaceholder.trim()
      ? cfg.hostedButtonIdPlaceholder.trim()
      : BUTTON_PLACEHOLDER;
    if (!isRealToken(entry.hostedButtonId, placeholder)) return '';
    return entry.hostedButtonId.trim();
  }

  function showComingSoon(buy) {
    var slot = buy.querySelector('.paypal-slot');
    var status = buy.querySelector('.store-checkout-status');
    if (slot) {
      slot.hidden = true;
      slot.removeAttribute('id');
      slot.textContent = '';
    }
    if (!status) return;
    status.hidden = false;
    status.textContent = COMING_SOON;
  }

  function mountHostedButton(buy, buttonId) {
    var slot = buy.querySelector('.paypal-slot');
    var status = buy.querySelector('.store-checkout-status');
    if (!slot || !window.paypal || typeof window.paypal.HostedButtons !== 'function') {
      showComingSoon(buy);
      return;
    }
    var containerId = 'paypal-container-' + buttonId;
    slot.id = containerId;
    slot.hidden = false;
    if (status) status.hidden = true;
    try {
      var rendered = window.paypal.HostedButtons({
        hostedButtonId: buttonId
      }).render('#' + containerId);
      if (rendered && typeof rendered.catch === 'function') {
        rendered.catch(function () {
          showComingSoon(buy);
        });
      }
    } catch (err) {
      showComingSoon(buy);
    }
  }

  function loadSdk(clientId, currency) {
    return new Promise(function (resolve, reject) {
      if (window.paypal && typeof window.paypal.HostedButtons === 'function') {
        resolve(window.paypal);
        return;
      }
      var script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=' + encodeURIComponent(clientId)
        + '&components=hosted-buttons&currency=' + encodeURIComponent(currency);
      script.async = true;
      script.onload = function () {
        if (window.paypal && typeof window.paypal.HostedButtons === 'function') resolve(window.paypal);
        else reject(new Error('PayPal hosted buttons did not initialize'));
      };
      script.onerror = function () {
        reject(new Error('PayPal hosted buttons failed to load'));
      };
      document.head.appendChild(script);
    });
  }

  function init() {
    var buys = document.querySelectorAll('.store-buy');
    if (!buys.length) return;

    var cfg = config();
    var ready = [];
    for (var i = 0; i < buys.length; i++) {
      var buttonId = paymentsReady(cfg) ? hostedButtonId(cfg, buys[i].getAttribute('data-sku') || '') : '';
      if (buttonId) ready.push({ buy: buys[i], buttonId: buttonId });
      else showComingSoon(buys[i]);
    }
    if (!ready.length) return;

    loadSdk(cfg.paypalClientId.trim(), cfg.currency.trim()).then(function () {
      for (var k = 0; k < ready.length; k++) {
        mountHostedButton(ready[k].buy, ready[k].buttonId);
      }
    }).catch(function () {
      for (var n = 0; n < ready.length; n++) showComingSoon(ready[n].buy);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
