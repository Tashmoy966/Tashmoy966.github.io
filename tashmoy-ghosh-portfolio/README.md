# Tashmoy Ghosh — Research Portfolio V2

A polished, responsive, build-free academic portfolio for an AI & Robotics researcher. It is designed to be hosted directly with GitHub Pages.

## Design philosophy

The site follows patterns common on strong robotics/academic homepages:

- immediate research identity and affiliation in the hero;
- compact latest-news strip for recent papers;
- visual featured-project blocks for major research contributions;
- publication list optimized for academic scanning;
- focused research themes rather than a long generic project catalog;
- direct links to paper / project / code / CV;
- minimal JavaScript and no framework/build dependency.

## Files

- `index.html` — main portfolio
- `styles.css` — responsive visual system
- `script.js` — navigation, reveal animation, progress indicator
- `cv.html` — print-friendly public web CV
- `assets/` — portrait, favicon, and custom research visual abstracts
- `.nojekyll` — keeps GitHub Pages in pure static-file mode
- `DEPLOYMENT.md` — detailed hosting instructions

## Local preview

From this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Recommended hosting

Use a GitHub user site repository named:

```text
Tashmoy966.github.io
```

The default URL will be:

```text
https://tashmoy966.github.io/
```

See `DEPLOYMENT.md` for exact steps and custom-domain instructions.

## Before publishing

1. Review research wording and dates.
2. Replace `assets/tashmoy-ghosh.jpg` later with a higher-resolution professional headshot if available.
3. If you obtain a personal domain, update the canonical/OG URLs in `index.html`, `robots.txt`, and `sitemap.xml`.
4. Keep sensitive details (home address, phone number) out of the public repository.
