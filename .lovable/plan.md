

# Medicortex Landing Page — Three-Part Enhancement

This plan covers three user requests: GDPR/DSGVO compliance, DE/EN bilingual toggle, and healthcare AI imagery.

---

## 1. GDPR/DSGVO Compliance

### Cookie Consent Banner
- New `CookieConsent.tsx` component — shadcn-styled bottom banner with opt-in toggles for "Notwendige Cookies" (always on, disabled) and "Analyse-Cookies" (opt-in only)
- Stores consent in `localStorage` (`medicortex-cookie-consent`)
- Shows on first visit, dismissable with "Akzeptieren" / "Nur notwendige"
- No analytics scripts loaded unless explicitly opted in

### Privacy & Impressum Pages
- New routes `/datenschutz` (Privacy Policy) and `/impressum` — placeholder legal text pages with proper German legal structure
- Footer updated with "Datenschutz" and "Impressum" links (German law mandates these)

### Form Consent Checkbox
- Add required DSGVO consent checkbox to FooterCTA contact form: "Ich stimme der Datenverarbeitung gemäß DSGVO zu"
- Form won't submit without checkbox checked

### EU Data Hosting Badge
- Small badge/note in footer: "DSGVO-konform · Daten in der EU gehostet" with a shield icon
- Also visible near the contact form

### No Auto-Trackers
- No analytics scripts are currently loaded — this stays as-is. Analytics would only initialize after cookie consent opt-in.

---

## 2. Bilingual DE/EN Toggle

### Approach: State-based i18n (no external library)
- New `LanguageContext` provider with `de` / `en` state, persisted to `localStorage`
- Default language: `de` (German primary)
- Translation JSON objects for all UI strings in a `src/i18n/translations.ts` file
- Custom `useTranslation()` hook returning a `t(key)` function

### Toggle UI
- Pill-style `DE | EN` toggle in the Navbar (both desktop and mobile)
- Uses shadcn styling, highlights active language
- Persists selection in `localStorage('medicortex-lang')`

### Translations Scope
All visible text across all sections:
- Navbar links, Hero headline/subheadline/CTA, Platform names/descriptions/benefits, Solutions titles/descriptions, Social proof headings/testimonials, Footer CTA heading/form labels, Footer text, Cookie banner, GDPR badge

---

## 3. Healthcare AI Imagery

### Image Strategy
- Use high-quality Unsplash photos via URL (free, no attribution required for hotlinking in dev; for production, download and host)
- Teal/blue-toned healthcare + technology images

### Placement
- **Hero**: AI dashboard / medical technology background image with dark overlay (replacing pure SVG pattern)
- **Platforms cards**: Small header images per card (AI analytics dashboard, staffing tablet view, clinic workflow screen)
- **Solutions zigzag**: Replace icon-only blocks with image + icon combo (diverse clinic teams, hospital corridors with tech, staffing dashboards)

### Technical
- All images use `loading="lazy"` for performance
- Responsive sizing with `object-cover` and appropriate aspect ratios
- Fallback background colors if images fail to load

---

## Implementation Order
1. Create `src/i18n/translations.ts` with all DE/EN strings
2. Create `src/contexts/LanguageContext.tsx` with provider + hook
3. Wrap app in `LanguageProvider`
4. Update all landing components to use `t()` for every string
5. Add DE/EN toggle to Navbar
6. Create `CookieConsent.tsx` banner component
7. Add DSGVO checkbox to FooterCTA form
8. Create `/datenschutz` and `/impressum` pages + routes
9. Update Footer with legal links + EU hosting badge
10. Add healthcare images to Hero, Platforms, and Solutions sections

### New Files
- `src/i18n/translations.ts`
- `src/contexts/LanguageContext.tsx`
- `src/components/landing/CookieConsent.tsx`
- `src/pages/Datenschutz.tsx`
- `src/pages/Impressum.tsx`

### Modified Files
- `src/App.tsx` — LanguageProvider wrapper, new routes
- `src/components/landing/Navbar.tsx` — language toggle
- `src/components/landing/HeroSection.tsx` — translations + background image
- `src/components/landing/PlatformsSection.tsx` — translations + card images
- `src/components/landing/SolutionsSection.tsx` — translations + section images
- `src/components/landing/SocialProofSection.tsx` — translations
- `src/components/landing/FooterCTA.tsx` — translations + DSGVO checkbox
- `src/components/landing/Footer.tsx` — translations + legal links + EU badge
- `src/pages/Index.tsx` — add CookieConsent component

