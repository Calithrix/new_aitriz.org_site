/*
 * General Store — PayPal buy buttons
 *
 * The client ID, currency, and paymentsEnabled flag live in
 * js/site-config.js. This file does not keep a second copy.
 *
 * The PayPal SDK is loaded only when paymentsEnabled is true, the
 * client ID is not the placeholder, and currency is a 3-letter code.
 * Otherwise every buy control stays hidden and the card says
 * "Online payment coming soon".
 *
 * Every card in pages/store.html carries a data-amount in USD with
 * two decimals (for example "49.00") that mirrors its visible catalog
 * price. Those catalog prices are not membership dues. Cards without
 * a valid data-amount are never charged. Sold-out items have no
 * .store-buy block at all.
 */
(function () {
  var COMING_SOON = 'Online payment coming soon';
  var FALLBACK_PLACEHOLDER = 'REPLACE_WITH_INSTITUTE_PAYPAL_ID';

  function config() {
    return window.SITE_CONFIG || null;
  }

  function paymentsAreLive(cfg) {
    if (!cfg || cfg.paymentsEnabled !== true) return false;
    var id = typeof cfg.paypalClientId === 'string' ? cfg.paypalClientId.trim() : '';
    var placeholder = typeof cfg.paypalClientIdPlaceholder === 'string' && cfg.paypalClientIdPlaceholder.trim()
      ? cfg.paypalClientIdPlaceholder.trim()
      : FALLBACK_PLACEHOLDER;
    var currency = typeof cfg.currency === 'string' ? cfg.currency.trim() : '';
    if (!id || id === placeholder) return false;
    if (!/^[A-Z]{3}$/.test(currency)) return false;
    return true;
  }

  function isChargeableAmount(amount) {
    return typeof amount === 'string' && /^\d+\.\d{2}$/.test(amount) && amount !== '0.00';
  }

  function showComingSoon(buy) {
    var button = buy.querySelector('.paypal-buy');
    var slot = buy.querySelector('.paypal-slot');
    var status = buy.querySelector('.store-checkout-status');
    if (button) {
      button.hidden = true;
      button.disabled = true;
    }
    if (slot) slot.hidden = true;
    if (!status) return;
    status.hidden = false;
    status.textContent = COMING_SOON;
  }

  function mountSdkButton(buy, paypal, currency) {
    var amount = buy.getAttribute('data-amount') || '';
    var title = buy.getAttribute('data-title') || 'General Store item';
    if (!isChargeableAmount(amount)) {
      showComingSoon(buy);
      return;
    }

    var button = buy.querySelector('.paypal-buy');
    var slot = buy.querySelector('.paypal-slot');
    var status = buy.querySelector('.store-checkout-status');
    if (!slot || !paypal || typeof paypal.Buttons !== 'function') {
      showComingSoon(buy);
      return;
    }

    if (button) {
      button.hidden = true;
      button.disabled = true;
    }
    if (status) status.hidden = true;
    slot.hidden = false;

    paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'rect',
        label: 'buynow'
      },
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            description: title,
            amount: { currency_code: currency, value: amount }
          }]
        });
      },
      onError: function () {
        showComingSoon(buy);
      }
    }).render(slot).catch(function () {
      showComingSoon(buy);
    });
  }

  function loadSdk(clientId, currency) {
    return new Promise(function (resolve, reject) {
      if (window.paypal && typeof window.paypal.Buttons === 'function') {
        resolve(window.paypal);
        return;
      }
      var script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=' + encodeURIComponent(clientId)
        + '&currency=' + encodeURIComponent(currency)
        + '&intent=capture&components=buttons';
      script.async = true;
      script.onload = function () {
        if (window.paypal && typeof window.paypal.Buttons === 'function') resolve(window.paypal);
        else reject(new Error('PayPal SDK did not initialize'));
      };
      script.onerror = function () {
        reject(new Error('PayPal SDK failed to load'));
      };
      document.head.appendChild(script);
    });
  }

  function init() {
    var buys = document.querySelectorAll('.store-buy');
    if (!buys.length) return;

    var cfg = config();
    if (!paymentsAreLive(cfg)) {
      for (var i = 0; i < buys.length; i++) showComingSoon(buys[i]);
      return;
    }

    var anyChargeable = false;
    for (var j = 0; j < buys.length; j++) {
      if (isChargeableAmount(buys[j].getAttribute('data-amount') || '')) anyChargeable = true;
    }
    if (!anyChargeable) {
      for (var n = 0; n < buys.length; n++) showComingSoon(buys[n]);
      return;
    }

    var currency = cfg.currency.trim();
    loadSdk(cfg.paypalClientId.trim(), currency).then(function (paypal) {
      for (var k = 0; k < buys.length; k++) {
        try {
          mountSdkButton(buys[k], paypal, currency);
        } catch (err) {
          showComingSoon(buys[k]);
        }
      }
    }).catch(function () {
      for (var m = 0; m < buys.length; m++) showComingSoon(buys[m]);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
