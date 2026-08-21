# jonathangeisinger.com

Portfolio site code. Just HTML/CSS/JS, no frameworks, no build step. Open index.html in browser, done.

Live at https://www.jonathangeisinger.com - GitHub Pages + custom domain (CNAME file, don't delete).

## Files

- index.html - whole site, one page. Order: hero, projects, leadership, social, capture, clients, tools, about, contact
- styles.css - colors/layout/everything visual
- script.js - youtube click-to-load, scroll animations
- assets/ - logos, hobby photo scripts, sweepstakes img

## Adding a project

Copy an existing `<article class="project">` block, edit text. Add project--reverse class to flip sides so it's not repetitive.

Video ID = the part after watch?v= in youtube link. Goes in data-video-id.

## Random notes

- CSS/JS not updating live = caching. Bump the ?v=2 number in index.html
- hamburger nav = small screens + wide monitors only, normal screens get full nav
- some logos png not svg (dragon ball super, level infinite, lightspeed, level8, shiftup, typhur) - no clean transparent version
- email/linkedin hardcoded in 2 spots - contact section + footer. update both
- favicon = made myself, not generic

## Run locally

Double click index.html. no npm no server nothing

## Publish

Push to main, pages auto updates in a minute or two. settings already point at main/root

## To do

- stat rows for project 4 + 5 (poe2, lpl) - other 3 have them, never finished these
- logo row near bottom - maybe lazy load, kinda long
