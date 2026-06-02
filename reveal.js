// Apple-style reveal-on-scroll. Adds .reveal (initial hidden state) only when JS
// runs, so no-JS users always see content. Elements fade/slide in once on enter.
(function () {
  if (!('IntersectionObserver' in window)) return;

  var SELECTORS = [
    // index.html
    '.hero h1', '.hero .lead', '.stat', '.section-header',
    '.service', '.case-study', '.additional-item', '.testimonial',
    '.cta h2', '.cta .lead', '.contact-options',
    // case pages
    '.case-hero > *', '.case-section', '.case-stats-grid > div',
    '.tech-table', '.case-cta-inner > *'
  ];

  var els = document.querySelectorAll(SELECTORS.join(','));
  if (!els.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(function (el) {
    el.classList.add('reveal');
    io.observe(el);
  });
})();
