# Hosting the portfolio with GitHub Pages

## Recommended route: GitHub user site

Your GitHub username is `Tashmoy966`, so create a repository named exactly:

```text
Tashmoy966.github.io
```

GitHub user sites are published at `https://<username>.github.io/`.

## Option A — easiest: upload through GitHub.com

1. Sign in to GitHub.
2. Create a **new public repository** called `Tashmoy966.github.io`.
3. Do **not** place the website inside an extra nested folder. The repository root should contain `index.html`, `styles.css`, `script.js`, `.nojekyll`, etc.
4. Upload every file/folder from this package and commit them to the `main` branch.
5. Open the repository → **Settings → Pages**.
6. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
7. Select branch **main** and folder **/(root)**, then save.
8. GitHub will publish the site at:

```text
https://tashmoy966.github.io/
```

Changes can take several minutes to appear after a push.

## Option B — recommended for ongoing editing: Git command line

After creating the empty repository on GitHub, open a terminal in this website folder and run:

```bash
git init
git add .
git commit -m "Launch research portfolio"
git branch -M main
git remote add origin https://github.com/Tashmoy966/Tashmoy966.github.io.git
git push -u origin main
```

Then configure **Settings → Pages → Deploy from a branch → main → /(root)** once.

For future updates:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Custom domain (recommended long term)

A personal domain makes the site more durable for papers, CVs, conference bios, and applications. Example structure:

```text
tashmoyghosh.com
www.tashmoyghosh.com
```

### GitHub configuration

1. In the repository open **Settings → Pages**.
2. Enter the custom domain under **Custom domain** and save it.
3. After DNS resolves, enable **Enforce HTTPS**.

### DNS for an apex domain

At your domain registrar/DNS provider, point the apex (`@`) to GitHub Pages using these A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For `www`, add a CNAME that points to:

```text
Tashmoy966.github.io
```

Avoid wildcard DNS records for the domain.

## Updating canonical URLs after adding a custom domain

If you move from `tashmoy966.github.io` to a custom domain, update:

- `<link rel="canonical">` in `index.html`
- `og:url` and structured-data `url` values in `index.html`
- `robots.txt`
- `sitemap.xml`

## Optional alternatives

### Cloudflare Pages
Good if you want a global CDN, preview deployments, and easy custom-domain DNS. Connect the same GitHub repository; no build command is needed for this static site.

### Netlify
Also works well for a static portfolio and provides deploy previews/forms, but GitHub Pages is simpler for an academic portfolio that already lives alongside your research code.

### Vercel
Excellent for Next.js/React applications. It is unnecessary for this build-free static portfolio unless you later migrate to a framework-based site.
