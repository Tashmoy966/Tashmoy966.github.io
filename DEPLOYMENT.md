# Deploying to GitHub Pages

## 1. Repository name
Your GitHub username is `Tashmoy966`, so the user-site repository must be exactly:

`Tashmoy966.github.io`

The public site will be:

`https://tashmoy966.github.io/`

## 2. Important cleanup
This package intentionally includes `.nojekyll` and a root `index.html`.

Before replacing an older site, remove old Jekyll entry/config files if they exist:
- `index.md`
- `_config.yml`
- `_layouts/`
- `_includes/`
- `Gemfile`
- old GitHub Actions workflows that deploy a different site

Do not keep two competing homepages.

## 3. Copy files to repository root
The repository should look like:

```
Tashmoy966.github.io/
├── .nojekyll
├── index.html
├── cv.html
├── 404.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── tashmoy-ghosh.jpg
    └── favicon.svg
```

## 4. Push
```bash
git add .
git commit -m "Launch research portfolio"
git push origin main
```

## 5. GitHub Pages settings
Repository → **Settings → Pages**

Set:
- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**

Save and wait for the Pages deployment to become green in **Actions**.

## 6. Verify
Open:
`https://tashmoy966.github.io/`

If an older page remains, hard-refresh or open an incognito window. Also confirm that `index.md` and an old Pages workflow are not still present.

## Optional: custom domain
A custom domain such as `tashmoyghosh.com` can later be configured under **Settings → Pages → Custom domain**.
