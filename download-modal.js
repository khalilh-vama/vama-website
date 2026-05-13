(function () {
  // Inject modal into the page
  var el = document.createElement('div');
  el.id = 'download-modal';
  el.innerHTML =
    '<div class="dm-backdrop"></div>' +
    '<div class="dm-container">' +
      '<button class="dm-close" aria-label="Close">' +
        '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<path d="M1 1L15 15M15 1L1 15" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round"/>' +
        '</svg>' +
      '</button>' +
      '<div class="dm-header">' +
        '<h2 class="dm-title">VAMA is available on the following platforms</h2>' +
        '<p class="dm-subtitle">To get started, you\'ll need to sign up using the mobile app.<br>Once your account is created, you can continue using VAMA on the supported platforms below.</p>' +
        '<a href="#" class="dm-desktop-link">Download macOS Desktop App</a>' +
      '</div>' +
      '<div class="dm-cards">' +
        '<div class="dm-card">' +
          '<div class="dm-card-copy">' +
            '<p class="dm-platform">iOS</p>' +
            '<p class="dm-store">App Store</p>' +
            '<p class="dm-desc">Requires iOS 15 or newer.<br>Scan the QR code below with your Apple device to download.</p>' +
          '</div>' +
          '<img class="dm-qr" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://vama.com" alt="iOS App Store QR code" />' +
        '</div>' +
        '<div class="dm-card">' +
          '<div class="dm-card-copy">' +
            '<p class="dm-platform">Android</p>' +
            '<p class="dm-store">Google Play</p>' +
            '<p class="dm-desc">Requires Android 10 or newer.<br>Scan the QR code below with your Android device to download.</p>' +
          '</div>' +
          '<img class="dm-qr" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://vama.com" alt="Google Play QR code" />' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(el);

  function open() {
    document.getElementById('download-modal').classList.add('dm-active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    document.getElementById('download-modal').classList.remove('dm-active');
    document.body.style.overflow = '';
  }

  el.querySelector('.dm-backdrop').addEventListener('click', close);
  el.querySelector('.dm-close').addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  // Wire every "Download" CTA on the page
  document.querySelectorAll('.btn-white, .footer-cta a, .hero-buttons a').forEach(function (btn) {
    if (/download/i.test(btn.textContent)) {
      btn.addEventListener('click', function (e) { e.preventDefault(); open(); });
    }
  });
})();
