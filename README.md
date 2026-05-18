# Arunprakash B — Analytics & BI Portfolio (Next.js)

A modern **Next.js App Router** portfolio website for an analytics/BI consulting brand, built with a **light-theme-only** design system, **Tailwind CSS**, and **Framer Motion** interactions.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Animation:** Framer Motion
- **Icons:** Lucide React

---

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Features Included

- Sticky top navbar: Home, About, Services, Projects, Experience, Contact
- Hero section with rotating analytics headline text and CTA buttons
- KPI widgets and floating analytics visuals
- About split layout aligned to Arunprakash B’s analytics/BI positioning
- Animated tech stack cards (Python, SQL, Power BI, Tableau, Databricks, PySpark, Streamlit, ML, Excel, GitHub)
- Services cards with icon + hover interactions
- Featured project case-study cards (5 projects) with tags, impact, and CTA
- Business impact stat cards
- Animated vertical experience timeline
- Testimonial placeholders
- Contact CTA and email-form UI
- Premium-style footer
- SEO metadata in `app/layout.tsx`
- LinkedIn + GitHub brand links wired

---

## Visual Direction

- Light background only (no dark mode)
- Subtle gray section bands
- Blue / purple / cyan gradient accents
- Glassmorphism and soft shadows
- High readability dark text

---

## Framer Motion Usage

- Scroll reveal and staggered card entry
- Subtle hover lift/tilt effects
- Floating micro-interactions in hero analytics widgets
- Smooth, low-overhead transitions

---

## Getting Started

### 1) Clone and open the project

```bash
git clone <your-repo-url>
cd AB_Business_portfolio
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run development server

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

---

## Scripts

- `npm run dev` — start local development server
- `npm run build` — create production build
- `npm run start` — run production build locally
- `npm run lint` — run linting

---

## Deployment

### Vercel (recommended)

1. Push repository to GitHub.
2. Import project into Vercel.
3. Deploy with default Next.js settings.

---

## Branding Links

- LinkedIn: https://www.linkedin.com/in/arun8nov
- GitHub: https://github.com/arun8nov

---

## SEO Metadata

Configured in `app/layout.tsx`:

- Page title and description
- Open Graph fields
- Twitter card metadata

Update `metadataBase` and URLs if deploying on your custom domain.

---

## Notes / Troubleshooting

### `npm install` returns `403 Forbidden`

If this occurs, it is usually a network or registry policy issue in the current environment.

Try one of the following:

- Run in a different network
- Verify npm registry settings:

```bash
npm config get registry
```

Expected:

```text
https://registry.npmjs.org/
```

- Reset if needed:

```bash
npm config set registry https://registry.npmjs.org/
```

---

## Customization Tips

- Edit section copy/content in `app/page.tsx`
- Extend design tokens in `tailwind.config.ts`
- Adjust metadata/social previews in `app/layout.tsx`
- Update global typography and base styles in `app/globals.css`

---

## License

Private/internal use unless otherwise specified by repository owner.
