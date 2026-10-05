/*
 * General Store — PayPal buy buttons
 *
 * ONE-LINE SWAP: replace PAYPAL_CLIENT_ID with the Institute's
 * PayPal business (Live) client ID. Do not add a second client ID.
 *
 * While the value below is unchanged, this file does not load the
 * PayPal SDK and does not create orders. Buttons stay on the page
 * and report that checkout is not live when clicked.
 *
 * Every card in pages/store.html carries a data-amount in USD with
 * two decimals (for example "49.00") that mirrors its visible price.
 * Keep the two in sync when the Institute changes a price. Cards
 * without a valid data-amount are never charged. Sold-out items have
 * no .store-buy block at all.
 */
var PAYPAL_CLIENT_ID = 'REPLACE_WITH_INSTITUTE_PAYPAL_ID';

(function () {
  var PLACEHOLDER_ID = 'REPLACE_WITH_INSTITUTE_PAYPAL_ID';
  var NOT_LIVE = 'Prototype — checkout not live yet';

  function isLiveClientId(id) {
    return typeof id === 'string' && id.length > 0 && id !== PLACEHOLDER_ID;
  }

  function isChargeableAmount(amount) {
    return typeof amount === 'string' && /^\d+\.\d{2}$/.test(amount) && amount !== '0.00';
  }

  function markNotLive(buy) {
    var status = buy.querySelector('.store-checkout-status');
    if (!status) return;
    status.hidden = false;
    status.textContent = NOT_LIVE;
  }

  function bindPrototype(buy) {
    var button = buy.querySelector('.paypal-buy');
    if (!button || button.dataset.bound === '1') return;
    button.dataset.bound = '1';
    button.addEventListener('click', function (event) {
      event.preventDefault();
      markNotLive(buy);
    });
  }

  function mountSdkButton(buy, paypal) {
    var amount = buy.getAttribute('data-amount') || '';
    var title = buy.getAttribute('data-title') || 'General Store item';
    if (!isChargeableAmount(amount)) {
      bindPrototype(buy);
      return;
    }

    var button = buy.querySelector('.paypal-buy');
    var slot = buy.querySelector('.paypal-slot');
    if (!slot || !paypal || typeof paypal.Buttons !== 'function') {
      bindPrototype(buy);
      return;
    }

    if (button) button.hidden = true;
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
            amount: { currency_code: 'USD', value: amount }
          }]
        });
      },
      onError: function () {
        if (button) button.hidden = false;
        slot.hidden = true;
        markNotLive(buy);
      }
    }).render(slot).catch(function () {
      if (button) button.hidden = false;
      slot.hidden = true;
      markNotLive(buy);
    });
  }

  function loadSdk(clientId) {
    return new Promise(function (resolve, reject) {
      if (window.paypal && typeof window.paypal.Buttons === 'function') {
        resolve(window.paypal);
        return;
      }
      var script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=' + encodeURIComponent(clientId) + '&currency=USD&intent=capture&components=buttons';
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

    var anyChargeable = false;
    for (var i = 0; i < buys.length; i++) {
      if (isChargeableAmount(buys[i].getAttribute('data-amount') || '')) anyChargeable = true;
    }

    if (!isLiveClientId(PAYPAL_CLIENT_ID) || !anyChargeable) {
      for (var j = 0; j < buys.length; j++) bindPrototype(buys[j]);
      return;
    }

    loadSdk(PAYPAL_CLIENT_ID).then(function (paypal) {
      for (var k = 0; k < buys.length; k++) {
        try {
          mountSdkButton(buys[k], paypal);
        } catch (err) {
          bindPrototype(buys[k]);
        }
      }
    }).catch(function () {
      for (var n = 0; n < buys.length; n++) bindPrototype(buys[n]);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
