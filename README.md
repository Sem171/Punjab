# Punjab — Land of Five Rivers

A cinematic, dark-and-gold single-page site about Punjab, India, built with React 19 and Vite.

## Sections

1. **Hero**: full-screen crossfading landscapes with Ken Burns motion, scroll and pointer parallax, and drifting gold embers on canvas.
2. **Discover Punjab**: word-by-word reveal statement, a parallax photo, animated stats and a swipeable history timeline.
3. **Land of Five Rivers**: an interactive SVG of the Jhelum, Chenab, Ravi, Beas and Sutlej, a full-bleed "Golden Fields" parallax band and a Winter / Spring / Monsoon crop-season switcher.
4. **Punjabi Culture**: a pinned horizontal-scroll gallery covering Bhangra, Giddha, Phulkari, traditional dress and folk music, with a playable synthesised dhol. On narrow screens it becomes a native swipe carousel.
5. **Famous Places**: a stylised map of Punjab with markers for the Golden Temple, Wagah Border, Jallianwala Bagh and Anandpur Sahib, linked to a detail card and photo tiles.
6. **Punjabi Food**: a hover-driven menu board for Sarson da Saag, Makki di Roti, Amritsari Kulcha and Lassi, followed by a langar parallax band.
7. **Gallery**: a mosaic with a keyboard-navigable lightbox.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build && npm run preview
```

## Structure

```
src/
  App.jsx             page composition + preloader timing
  main.jsx
  motion.js           reveal-on-scroll, parallax loop, pointer glow, count-up, scroll progress
  data/site.js        all copy, place data, map coordinates and photo credits
  sections/           Chrome (nav, menu, preloader), Hero, Discover, Rivers, Culture, Places, Food, Gallery, Footer
  styles/punjab.css   design tokens and all styles
public/img/           photographs (Wikimedia Commons)
```

Motion respects `prefers-reduced-motion`. Parallax runs in a single `requestAnimationFrame` scroll loop, and images below the fold load lazily.

## Photo credits

All photographs come from Wikimedia Commons under CC BY / CC BY-SA licences. Each photo's author, licence and source link are listed in `src/data/site.js` and shown in the site footer and lightbox.

## Legacy files

`src/components/`, the old `src/data/*Data.js` files, `src/styles/index.css`, `src/styles/variables.css`, `src/App.css` and `src/index.css` belong to the earlier version of the site. Nothing imports them any more, so they can be deleted.
