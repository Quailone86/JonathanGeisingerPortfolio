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

// Reveal-on-scroll for project rows — CSS handles the actual motion (see .project / .project--visible)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('project--visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.project').forEach((el) => observer.observe(el));
