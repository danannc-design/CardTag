// Card Tag Landing – FAQ accordion & interactions

document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initGalleryImages();
});

function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.hasAttribute('data-open');

      items.forEach((other) => {
        const otherAnswer = other.querySelector('.faq-answer');
        other.removeAttribute('data-open');
        other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        if (otherAnswer) otherAnswer.style.maxHeight = '';
      });

      if (!isOpen) {
        item.setAttribute('data-open', '');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

function initGalleryImages() {
  const fallback = 'assets/app-icon.png';

  const heroImg = document.querySelector('.hero-image');
  if (heroImg) {
    heroImg.src = 'assets/screenshots/hero-portrait.png';
    heroImg.onerror = () => { heroImg.src = fallback; heroImg.onerror = null; };
  }

  const gallerySlots = ['hero-portrait', 'label3-portrait', 'export2-portrait'];
  document.querySelectorAll('.gallery-image').forEach((img, i) => {
    const name = gallerySlots[i];
    if (name) img.src = 'assets/screenshots/' + name + '.png';
    img.onerror = () => { img.src = fallback; img.onerror = null; };
  });
}
