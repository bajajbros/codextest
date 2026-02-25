const links = [...document.querySelectorAll('.nav-link')];
const sections = links.map((l) => document.querySelector(l.getAttribute('href'))).filter(Boolean);

const setActive = (id) => {
  links.forEach((link) => {
    const hit = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', hit);
  });
};

if (sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 }
  );
  sections.forEach((section) => observer.observe(section));
}

document.querySelectorAll('#themePulse').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.hero').forEach((hero, i) => {
      hero.animate(
        [
          { transform: 'translateY(0px)', filter: 'brightness(1)' },
          { transform: 'translateY(-4px)', filter: 'brightness(1.12)' },
          { transform: 'translateY(0px)', filter: 'brightness(1)' }
        ],
        { duration: 600 + i * 120, easing: 'ease-out' }
      );
    });
  });
});
