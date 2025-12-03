
Creditscore Coach - Cloudflare Pages ready site
Files included:
- index.html, about.html, services.html, contact.html
- assets/css/style.css
- assets/js/main.js
- assets/images/logo.svg, favicon.svg

How to deploy on Cloudflare Pages:
1. Create a new Pages project in the Cloudflare dashboard.
2. Link a Git repository or upload this ZIP contents to a new repo.
3. Set the build settings: Framework: None; Build command: (leave empty); Build output directory: / (root)
4. Save and deploy. The site will serve the static HTML pages.

Notes:
- Contact form is configured to post to Formspree as an example. Replace action attribute with your backend endpoint if you have one.
- To improve performance further: enable Cloudflare caching, enable Image Resizing or use Cloudflare Images, and enable Brotli compression at the server/CDN level.
