// Google Analytics 4
(function () {
  // Skip local dev sessions so they don't pollute GA data
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') return;
  var GA_MEASUREMENT_ID = 'G-N92VPFCL2J';
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
})();
