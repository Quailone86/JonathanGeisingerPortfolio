# Jonathan Geisinger — Portfolio

A static, single-page portfolio. No build tools needed — just HTML, CSS, and JS.

## What to fill in

1. **YouTube videos** — open `index.html`, search for `data-video-id=""`. For each
   project block, paste just the video ID (the part after `v=` in a YouTube URL,
   e.g. for `youtube.com/watch?v=dQw4w9WgXcQ` the ID is `dQw4w9WgXcQ`) between the
   quotes. Leave it blank to keep showing the "ADD VIDEO" placeholder.

2. **Email + LinkedIn** — search for `youremail@example.com` and
   `linkedin.com/in/your-profile` in `index.html` (in the Contact section near the
   bottom) and swap in your real ones.

3. **Projects 4 & 5** — these are placeholder slots. Fill in the title, role,
   description, and tags, or delete the whole `<article class="project ...">`
   block if you don't need them yet.

## Preview it locally

Just double-click `index.html` to open it in a browser. No server required.

## Publish with GitHub Pages

1. Create a new repo (or clear out your existing portfolio repo) and add these
   three files: `index.html`, `styles.css`, `script.js`.
2. Push them to the `main` branch.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch," branch
   `main`, folder `/ (root)`. Save.
5. GitHub gives you a URL like `https://yourusername.github.io/repo-name/` —
   that's your live site. It can take a minute or two to go live the first time.

## Structure

- `index.html` — all content and page structure
- `styles.css` — all visual styling (dark theme, layout, responsive rules)
- `script.js` — lazy-loads YouTube embeds on click, and a scroll-in animation
  for project rows
