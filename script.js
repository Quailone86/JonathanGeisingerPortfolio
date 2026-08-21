// Lite YouTube embed: only loads the actual iframe once the user clicks,
// so the page stays fast until someone actually wants to watch.
document.querySelectorAll('.video-embed').forEach((el) => {
  const videoId = el.dataset.videoId;
  const title = el.dataset.title || 'Project video';

  if (!videoId) return; // leave the "ADD VIDEO" placeholder as-is

  // Build a clickable thumbnail state
  el.innerHTML = `
    <img class="video-embed__thumb" src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" alt="${title}" loading="lazy">
    <div class="video-embed__play"><span>▶</span></div>
  `;

  el.addEventListener('click', () => {
    el.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
        title="${title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
  }, { once: true });
});

// Reveal-on-scroll for project rows and hobby photo tiles — CSS handles the actual motion
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.project, .hobby-tile').forEach((el) => observer.observe(el));

// Mobile nav: toggle the collapsed link dropdown open/closed, and close it
// again once a link is picked so it doesn't stay open after navigating.
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  const setOpen = (open) => {
    navLinks.classList.toggle('nav__links--open', open);
    navToggle.classList.toggle('nav__toggle--active', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };

  navToggle.addEventListener('click', () => {
    setOpen(!navLinks.classList.contains('nav__links--open'));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
}
