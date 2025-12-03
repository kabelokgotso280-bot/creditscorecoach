
CreditScoreCoach - Site (static)
Files: index.html, about.html, services.html, pricing.html, contact.html, privacy.html, terms.html
Assets: css/styles.css, assets/images/logo.png

Deployment to Cloudflare Pages (quick):
1. Create a GitHub repository and push all files.
2. In Cloudflare Pages, choose 'Connect to Git' and pick your repo.
3. Set the build settings: Framework preset: None; Build command: (leave blank); Build output directory: / (root)
4. Save and deploy. Cloudflare will serve the static files.

Notes:
- Replace assets/images/logo.png with your real logo (same filename) to have it show automatically.
- To enable form submissions, use a serverless function or a form service (Formspree, Netlify Forms, etc.).
- Update contact details in contact.html and privacy/terms before going live.


Cloudflare Pages notes:
- This is a static site. In Cloudflare Pages, set Framework preset: None, Build command: (leave blank), Build output directory: / (root).
- To serve forms, consider Cloudflare Workers or a third-party form service. If you want, we can add a worker script template.
