# Niramaya Landing Page

The **Niramaya Landing Page** is the public-facing website for the Niramaya wellness and wellbeing application. It presents the product, its core features, wellness experiences, user journey, resources, contact information, and legal information.

This project is part of the **Full-Stack Niramaya App** MCA Final Year Project.

> **Wellness positioning:** Niramaya is a wellness application. Its informational content and recommendations are not intended to replace diagnosis, treatment, or professional medical care.

---

## Tech Stack

- **Next.js** — React web framework
- **React** — UI development
- **TypeScript** — Type-safe development
- **Next.js App Router** — File-based routing
- **CSS / Tailwind CSS** — Responsive styling
- **Next.js Metadata API** — SEO metadata
- **ESLint** — Code quality

---

## Website Pages

| Route           | Description                             |
| --------------- | --------------------------------------- |
| `/`             | Main Niramaya landing page              |
| `/features`     | Niramaya platform capabilities          |
| `/how-it-works` | User journey and personalization flow   |
| `/wellness`     | Overall wellness experience             |
| `/yoga`         | Yoga-related content and experience     |
| `/ayurveda`     | Ayurveda-related content and experience |
| `/app`          | Mobile application showcase             |
| `/about`        | About Niramaya                          |
| `/resources`    | Wellness resources                      |
| `/faq`          | Frequently asked questions              |
| `/contact`      | Contact information and form            |
| `/privacy`      | Privacy Policy                          |
| `/terms`        | Terms of Use                            |
| `/disclaimer`   | Wellness and medical disclaimer         |

---

## Project Structure

```text
landing-page/
├── app/
│   ├── about/page.tsx
│   ├── app/page.tsx
│   ├── ayurveda/page.tsx
│   ├── contact/page.tsx
│   ├── disclaimer/page.tsx
│   ├── faq/page.tsx
│   ├── features/page.tsx
│   ├── how-it-works/page.tsx
│   ├── privacy/page.tsx
│   ├── resources/page.tsx
│   ├── terms/page.tsx
│   ├── wellness/page.tsx
│   ├── yoga/page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── ayurveda/
│   ├── common/
│   ├── features/
│   ├── home/
│   ├── how-it-works/
│   ├── information/
│   ├── layout/
│   ├── legal/
│   ├── product/
│   ├── wellness/
│   └── yoga/
│
├── data/
│   └── features.ts
│
├── lib/
│   ├── constants.ts
│   └── seo.ts
│
├── public/
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## Component Architecture

The website uses reusable, page-specific components instead of putting large UI implementations directly inside route files.

### Home

```text
components/home/
├── AppPreview.tsx
├── FeaturesPreview.tsx
├── FinalCTA.tsx
├── GoalsProgressPreview.tsx
├── Hero.tsx
├── HowItWorksPreview.tsx
├── IntroSection.tsx
├── WellnessPreview.tsx
├── WhyNiramaya.tsx
└── YogaAyurvedaPreview.tsx
```

### Features

```text
components/features/
├── FeatureCTA.tsx
├── FeatureCard.tsx
├── FeatureGrid.tsx
└── FeatureHero.tsx
```

Feature data is maintained in `data/features.ts`.

### How It Works

```text
components/how-it-works/
├── HowItWorksCTA.tsx
├── HowItWorksHero.tsx
├── Personalization.tsx
└── Steps.tsx
```

### Wellness

```text
components/wellness/
├── WellnessAreas.tsx
├── WellnessCTA.tsx
├── WellnessHero.tsx
├── WellnessJourney.tsx
└── WellnessOverview.tsx
```

### Yoga

```text
components/yoga/
├── YogaCTA.tsx
├── YogaCategories.tsx
├── YogaExperience.tsx
├── YogaHero.tsx
└── YogaOverview.tsx
```

### Ayurveda

```text
components/ayurveda/
├── AyurvedaCTA.tsx
├── AyurvedaConsultation.tsx
├── AyurvedaDiscovery.tsx
├── AyurvedaHero.tsx
└── AyurvedaOverview.tsx
```

### Product / App

```text
components/product/
├── AppDownloadCTA.tsx
├── AppFeatures.tsx
├── AppHero.tsx
├── AppJourney.tsx
├── AppScreens.tsx
└── AppShowcase.tsx
```

The `/app` page presents the mobile application and its major experiences, including Home, Goals, Progress, Yoga, Ayurveda, and Explore.

### Information

```text
components/information/
├── AboutCTA.tsx
├── AboutEcosystem.tsx
├── AboutHero.tsx
├── AboutPrinciples.tsx
├── AboutStory.tsx
├── ContactDetails.tsx
├── ContactForm.tsx
├── ContactHero.tsx
├── FAQHero.tsx
├── FAQItem.tsx
├── FAQList.tsx
├── ResourceCard.tsx
├── ResourceGrid.tsx
└── ResourcesHero.tsx
```

### Legal

```text
components/legal/
├── LegalFooterCTA.tsx
├── LegalHeader.tsx
├── LegalSection.tsx
└── LegalSidebar.tsx
```

These shared components provide the layout used by the Privacy Policy, Terms, and Disclaimer pages.

### Global Layout

```text
components/layout/
├── Footer.tsx
├── MobileMenu.tsx
└── Navbar.tsx
```

---

## Design System

The landing page follows a calm, natural, modern, and professional wellness aesthetic.

### Core Colors

```text
Background  #EEF2E6
Primary     #4D6A50
Dark        #263F31
Secondary   #6D796F
Muted       #929B92
Cards       #FFFFFF
Border      #E3E7DF
Danger      #B65D54
```

### Design Principles

- Calm and natural visual language
- Spacious layouts
- Clear typography and hierarchy
- Professional presentation
- Responsive and mobile-first design
- Accessible navigation
- Subtle interactions
- Minimal visual noise
- Avoid excessive gradients, neon colors, glassmorphism, decorative blobs, and generic SaaS styling

---

## Running the Project

From the landing-page directory:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

The exact scripts are defined in `package.json`.

---

## SEO

SEO is handled through the Next.js Metadata API.

Relevant files:

```text
lib/seo.ts
app/robots.ts
app/sitemap.ts
```

The site supports page metadata such as titles, descriptions, keywords, canonical URLs, Open Graph metadata, Twitter metadata, and robots directives.

Before production deployment, update the canonical website URL to the real production domain.

---

## Responsive Design

The website is designed for:

- Mobile phones
- Tablets
- Laptops
- Desktop screens

Navigation, grids, typography, spacing, and content layouts should adapt to the available viewport.

---

## Accessibility

New pages and components should maintain:

- Semantic HTML
- Correct heading hierarchy
- Keyboard-accessible controls
- Visible focus states
- Meaningful link labels
- Accessible navigation
- Appropriate ARIA attributes where required
- Sufficient color contrast

---

## Adding a New Page

1. Create the route:

```text
app/new-page/page.tsx
```

2. Create page-specific components:

```text
components/new-page/
├── NewPageHero.tsx
├── NewPageContent.tsx
└── NewPageCTA.tsx
```

3. Add metadata using `lib/seo.ts`.

4. Add navigation links to `Navbar.tsx` or `Footer.tsx` when appropriate.

5. Update `app/sitemap.ts` when the route should be publicly indexed.

---

## Public Assets

Static assets belong in `public/`.

For example:

```text
public/images/hero.jpg
```

is available in the browser as:

```text
/images/hero.jpg
```

Application screenshots can be organized under:

```text
public/app/
```

---

## Contact Form

The `/contact` page contains the frontend contact form UI.

The form should not be considered a live email/submission system until an actual backend or approved communication service has been connected.

---

## Legal and Wellness Positioning

Niramaya is presented as a wellness and wellbeing platform.

Website content should not make unsupported claims about diagnosing or treating medical conditions, replacing healthcare professionals, guaranteeing health outcomes, or guaranteeing the effectiveness of Yoga or Ayurveda recommendations.

Legal wording should be reviewed for the project's actual organization, jurisdiction, data practices, retention requirements, and applicable laws before production use.

---

## Deployment Checklist

Before production deployment:

- [ ] Production domain configured
- [ ] Environment variables configured
- [ ] Canonical SEO URL updated
- [ ] Open Graph metadata checked
- [ ] Favicon checked
- [ ] Sitemap checked
- [ ] Robots configuration checked
- [ ] Contact form backend/integration connected
- [ ] Production build tested
- [ ] Legal information reviewed
- [ ] Privacy/data-processing information reviewed
- [ ] Mobile app links verified
- [ ] Production assets verified

---

## Project Status

- [x] Home
- [x] Features
- [x] How It Works
- [x] Wellness
- [x] Yoga
- [x] Ayurveda
- [x] App
- [x] About
- [x] Resources
- [x] FAQ
- [x] Contact
- [x] Privacy
- [x] Terms
- [x] Disclaimer
- [x] Responsive navigation
- [x] Shared footer
- [x] SEO foundation
- [x] Sitemap
- [x] Robots configuration
- [x] Reusable component architecture

---

## Repository Context

```text
Full-Stack Niramaya App/
├── backend/
├── mobile/
└── website/
    └── landing-page/
```

The landing page is the public-facing web and informational layer of the Niramaya ecosystem.

---

## License

This project is developed as part of the **Niramaya MCA Final Year Project** at **KiiT University**.

Unless otherwise specified by the project owners, the source code, content, branding, design assets, and project materials should not be treated as open-source software.

---

## Maintainers

**Niramaya Project**  
Soni Vaibhav Kumar & Satinder Singh Sall
MCA Final Year Project  
KiiT University
