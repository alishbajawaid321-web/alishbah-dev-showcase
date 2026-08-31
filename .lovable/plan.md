# Alishbah — Frontend Developer Portfolio

A polished, fully responsive single-brand portfolio site positioning Alishbah as an aspiring Frontend Web Developer, with her Chemistry studies as background context. Honest content only — no fake stats, clients, or testimonials.

## Look and feel

Inspired by the reference screenshot: a soft-surface hero with a large ghosted "DEVELOPER" wordmark behind a circular/arched portrait, floating skill pills, and a small stat/info card.

- Palette: deep navy and charcoal, generous white/near-white surfaces, one blue-violet accent.
- Modern geometric typography, tight-tracked bold headings, calm body text.
- Rounded corners, elegant soft shadows, subtle grid/gradient background texture.
- Restrained motion: scroll-reveal, hover lifts on cards and buttons, animated nav underline, smooth scrolling.
- Mobile-first, no horizontal scroll at any width.

## Sections

1. **Sticky nav** — ALISHBAH wordmark, links (Home, About, Skills, Services, Projects, Contact), "Let's Work Together" CTA. Backdrop-blur + shadow on scroll. Hamburger sheet on mobile.
2. **Hero** — "Hi, I'm Alishbah — Frontend Web Developer", tagline "Turning Ideas Into Responsive Web Experiences.", supporting line covering BS Chemistry at University of Karachi, Bano Qabil Web Development with AI, responsive-site focus. Generated professional avatar portrait in an arched/circular frame, floating HTML/CSS/JS pills, small code-window accent. CTAs: View My Work, Let's Work Together.
3. **About** — background paragraphs plus a "Currently Learning & Growing" progression strip: BS Chemistry → Web Development with AI → Portfolio Projects → Client Project → Frontend Development. Includes the transparency note about practical experience.
4. **Education** — compact two-card timeline: University of Karachi (BS Chemistry, 4th semester, expected 2028) and Bano Qabil (Web Development with AI, completed).
5. **Skills** — badge/card grid: HTML5, CSS3, JavaScript, Responsive Web Design, Frontend Web Development, Website Deployment, GitHub, Vercel, Netlify. Short intro line; GitHub/Vercel/Netlify cards describe practical project-management and deployment experience. No fake percentages.
6. **Services** — five cards with icons and hover animation: Frontend Web Development, Responsive Websites, Landing Pages, Portfolio Websites, Website Redesign. CTA: "Have a project in mind? Let's build it together."
7. **Projects** — two groups.
   - Completed: Crave Hub (fast food), Fresh Cart (grocery), Lumera (fashion) — each with its own generated mockup, description, tech tags, Live Demo (your Vercel links) and View Project.
   - Current client project: Online Quran Tutor — "Client Project" badge + "Currently in Development" status, built so the status flips to Completed and reveals Live Demo / Project Details with a one-line change.
8. **Project details modal** — large preview, name, category, description, tech list, key features, Live Demo and View Code buttons; keyboard-closable and focus-managed.
9. **My Development Journey** — vertical timeline: Bano Qabil course → Portfolio Development → Frontend Development → Client Project.
10. **Contact** — "Let's Build Something Together", email alishbajawaid321@gmail.com, phone 03196714921, Karachi, Pakistan, plus a validated form (Name, Email, Subject, Message) that really saves submissions.
11. **Footer** — name + role, quick links, contact options, "© 2026 Alishbah. All rights reserved."

## Contact form backend

Enable Lovable Cloud and add a `contact_messages` table (name, email, subject, message, created_at) with row-level security allowing public inserts and no public reads. The form validates with Zod, submits through a server function, and shows real success/error states.

## Images

Generate four distinct project mockups (restaurant, grocery, fashion, online Quran learning) plus one professional avatar portrait for the hero. No image reused across cards.

## Technical notes

- Built on the project's TanStack Start + React + Tailwind v4 stack (the deployable equivalent of the requested HTML/CSS/JS); one route at `/` with anchor-scrolled sections and a separate route only if needed.
- All colors as semantic tokens in `src/styles.css`; no hardcoded color utilities.
- Semantic HTML, accessible contrast, visible focus states, keyboard-operable nav and modal, lazy-loaded images.
- Route `head()` metadata with portfolio-specific title, description, and social tags.
