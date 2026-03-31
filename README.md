# Personal Website (Static Version)

This is a lightweight personal website starter with:

- Home / About / Projects / Blog / Contact pages
- Two sample blog posts
- Responsive layout + small motion effects
- Basic SEO files: `robots.txt`, `sitemap.xml`, Open Graph metadata
- Zero build dependencies, can run as plain static files

## Local Preview

Use Python (if installed):

```bash
cd personal-site
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Customize Before Deploy

1. Replace `hello@your-domain.com` in `contact.html`.
2. Site URL is currently configured as `https://effass7-art.github.io` in:
   - `index.html`, `about.html`, `projects.html`, `blog.html`, `contact.html`
   - `posts/*.html`
   - `robots.txt`
   - `sitemap.xml`
3. Update site owner name and project/blog content.

## Suggested Deployment

Upload the folder to any static host:

- Vercel
- Netlify
- GitHub Pages


