# Kushal Pathapati - Portfolio

Responsive portfolio for applied AI engineering, LLM applications, analytics and automation. Built with React, TypeScript and Vite.

## Run locally

```sh
npm install
npm run dev
```

## Contact form configuration

The form preserves the existing EmailJS browser integration. Its service ID, template ID and **public client key** remain configured for the current service; optional Vite overrides are listed in `.env.example`.

```text
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

These EmailJS values are intended for browser use. The form reports a delivery error and offers the direct email address if sending fails. Do not put a private provider secret in a `VITE_` variable; Vite embeds those values in the browser bundle.

## Content evidence

- **FinSight AI:** [source repository](https://github.com/Kushalraju098/FinSight_AI). This portfolio describes the code paths that are present in the repository. The API docs URL is documented by that repository; its current availability has not been verified here. No evaluation score is claimed.
- **Aisle Analytics:** [source repository](https://github.com/Kushalraju098/AI-Powered-Retail-Analytics-and-Inventory-Optimization-System-using-N8n). Reported metrics are identified as reported project results and were not rerun for this rebuild. The dashboard PDF and workflow image are repository artifacts.
- **CyberCrime Trends Analysis in Canada:** [source repository](https://github.com/Kushalraju098/cybercrime-analysis-canada). Findings are described as retrospective and descriptive, not predictive.

Experience, education and certification labels are based on information supplied for this rebuild. Education dates are shown without a completion claim. Credential verification links are included only where the existing portfolio had a link.

## Build and checks

```sh
npm run lint
npm run test
npm run build
```

The site is a single-page Vite application. The current production URL is used as the canonical URL in page metadata and `public/sitemap.xml`.
