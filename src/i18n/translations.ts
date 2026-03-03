export type Language = "de" | "en";

type TranslationMap = Record<string, Record<Language, string>>;

export const translations: TranslationMap = {
  // Navbar
  "nav.home": { de: "Startseite", en: "Home" },
  "nav.solutions": { de: "Lösungen", en: "Solutions" },
  "nav.platforms": { de: "Plattformen", en: "Platforms" },
  "nav.about": { de: "Über uns", en: "About" },
  "nav.contact": { de: "Kontakt", en: "Contact" },
  "nav.getStarted": { de: "Jetzt starten", en: "Get Started" },

  // Hero
  "hero.badge": { de: "KI-gestützte Gesundheitslösungen", en: "AI-Powered Healthcare Solutions" },
  "hero.headline1": { de: "KI transformiert das", en: "Transforming Healthcare" },
  "hero.headline2": { de: "Gesundheitswesen", en: "with AI" },
  "hero.sub": {
    de: "3 bewährte KI-Plattformen mit bahnbrechenden Ergebnissen für Krankenhäuser, Kliniken & Agenturen weltweit",
    en: "3 Proven AI Platforms Delivering Game-Changing Results for Hospitals, Clinics & Agencies Worldwide",
  },
  "hero.cta": { de: "Unsere KI-Lösungen entdecken", en: "Explore Our AI Solutions" },
  "hero.demo": { de: "Demo ansehen", en: "Watch Demo" },

  // Hero testimonials
  "hero.testimonial1.quote": {
    de: "Die KI-Plattformen von Medicortex haben unseren Patientenfluss komplett transformiert. Die Ergebnisse übertrafen alle Erwartungen.",
    en: "Medicortex's AI platforms have completely transformed how we manage patient flow. Results exceeded all expectations.",
  },
  "hero.testimonial1.role": { de: "Leitung Gesundheitswesen", en: "Healthcare Director" },
  "hero.testimonial1.org": { de: "Regionales Krankenhausnetzwerk", en: "Regional Hospital Network, US" },
  "hero.testimonial2.quote": {
    de: "Wir haben die Personalkosten um 35% gesenkt und gleichzeitig die Abdeckungsqualität verbessert. Das KI-Matching ist bemerkenswert genau.",
    en: "We reduced staffing costs by 35% while improving coverage quality. The AI matching is remarkably accurate.",
  },
  "hero.testimonial2.role": { de: "Betriebsleitung", en: "Operations Manager" },
  "hero.testimonial2.org": { de: "Personalvermittlung, Europa", en: "Medical Staffing Agency, UK" },
  "hero.testimonial3.quote": {
    de: "Die Implementierung war nahtlos. Innerhalb weniger Wochen verbesserte sich unsere Klinikeffizienz dramatisch.",
    en: "Implementation was seamless. Within weeks, our clinic workflow efficiency improved dramatically.",
  },
  "hero.testimonial3.role": { de: "Ärztliche Leitung", en: "Chief Medical Officer" },
  "hero.testimonial3.org": { de: "Fachklinikverbund, Deutschland", en: "Multi-Specialty Clinic, Germany" },

  // Platforms
  "platforms.badge": { de: "Unsere Plattformen", en: "Our Platforms" },
  "platforms.title1": { de: "Unsere 3 KI", en: "Our 3 AI" },
  "platforms.title2": { de: "Game-Changer", en: "Game-Changers" },
  "platforms.sub": {
    de: "Speziell entwickelte KI-Plattformen mit messbaren Ergebnissen im gesamten Gesundheitswesen.",
    en: "Purpose-built AI platforms delivering measurable results across the healthcare ecosystem.",
  },
  "platforms.demo": { de: "Demo anfragen", en: "Request Demo" },

  // Platform 1
  "platform1.name": { de: "MediAssist AI", en: "MediAssist AI" },
  "platform1.desc": {
    de: "Intelligente klinische Entscheidungsunterstützung mit KI-Echtzeit-Insights für medizinisches Fachpersonal.",
    en: "Intelligent clinical decision support that empowers healthcare providers with real-time AI insights.",
  },
  "platform1.b1": { de: "Echtzeit-Diagnosehilfe", en: "Real-time diagnostic assistance" },
  "platform1.b2": { de: "Patientenrisiko-Stratifizierung", en: "Patient risk stratification" },
  "platform1.b3": { de: "Evidenzbasierte Empfehlungen", en: "Evidence-based recommendations" },
  "platform1.b4": { de: "EHR-Integrationsbereit", en: "EHR integration ready" },

  // Platform 2
  "platform2.name": { de: "StaffIQ", en: "StaffIQ" },
  "platform2.desc": {
    de: "KI-gestützte Workforce-Intelligence für optimierte Personalplanung in Gesundheitsorganisationen.",
    en: "AI-powered workforce intelligence that optimizes staffing across healthcare organizations.",
  },
  "platform2.b1": { de: "Prädiktive Bedarfsprognose", en: "Predictive demand forecasting" },
  "platform2.b2": { de: "Intelligentes Kandidaten-Matching", en: "Smart candidate matching" },
  "platform2.b3": { de: "Automatisierte Schichtoptimierung", en: "Automated shift optimization" },
  "platform2.b4": { de: "Kostenreduktions-Analysen", en: "Cost reduction analytics" },

  // Platform 3
  "platform3.name": { de: "ClinicFlow AI", en: "ClinicFlow AI" },
  "platform3.desc": {
    de: "End-to-End Klinik-Workflow-Automatisierung, die Engpässe beseitigt und das Patientenerlebnis verbessert.",
    en: "End-to-end clinic workflow automation that eliminates bottlenecks and improves patient experience.",
  },
  "platform3.b1": { de: "Automatisierte Terminplanung", en: "Automated scheduling" },
  "platform3.b2": { de: "Digitale Aufnahme & Akten", en: "Digital intake & records" },
  "platform3.b3": { de: "Abrechnungsoptimierung", en: "Billing optimization" },
  "platform3.b4": { de: "Patienten-Journey-Tracking", en: "Patient journey tracking" },

  // Solutions
  "solutions.badge": { de: "Was wir lösen", en: "What We Solve" },
  "solutions.title1": { de: "KI-Lösungen für das", en: "AI Solutions for" },
  "solutions.title2": { de: "Gesundheitswesen", en: "Healthcare" },
  "solutions.sub": {
    de: "Umfassende KI-Lösungen für die kritischsten Herausforderungen im modernen Gesundheitswesen.",
    en: "Comprehensive AI solutions addressing the most critical challenges in modern healthcare.",
  },

  "sol1.title": { de: "Krankenhausoptimierung", en: "Hospital Optimization" },
  "sol1.desc": {
    de: "Optimieren Sie den Krankenhausbetrieb mit KI-gesteuerter Ressourcenzuweisung, Patientenfluss-Optimierung und prädiktiver Analytik.",
    en: "Streamline hospital operations with AI-driven resource allocation, patient flow optimization, and predictive analytics that reduce wait times and improve outcomes.",
  },
  "sol1.b1": { de: "Wartezeiten um bis zu 40% reduzieren", en: "Reduce patient wait times by up to 40%" },
  "sol1.b2": { de: "Bettenauslastung in Echtzeit optimieren", en: "Optimize bed utilization in real-time" },
  "sol1.b3": { de: "Vorausschauende Wartungsplanung", en: "Predictive maintenance scheduling" },

  "sol2.title": { de: "Klinik-Workflow-Automatisierung", en: "Clinic Workflow Automation" },
  "sol2.desc": {
    de: "Automatisieren Sie administrative Aufgaben, Terminplanung und Aktenverwaltung, damit sich Ihr klinisches Personal auf das Wesentliche konzentrieren kann — die Patientenversorgung.",
    en: "Automate administrative tasks, scheduling, and record management so your clinical staff can focus on what matters most — patient care.",
  },
  "sol2.b1": { de: "Automatisierte Terminplanung", en: "Automated appointment scheduling" },
  "sol2.b2": { de: "Digitale Patientenaufnahme", en: "Digital patient intake forms" },
  "sol2.b3": { de: "Optimierte Abrechnung & Kodierung", en: "Streamlined billing & coding" },

  "sol3.title": { de: "Personalintelligenz", en: "Staffing Intelligence" },
  "sol3.desc": {
    de: "Finden Sie die richtigen Fachkräfte für die richtigen Rollen mit KI-gestütztem Matching, Bedarfsprognosen und Workforce-Analytik.",
    en: "Match the right healthcare professionals to the right roles with AI-powered candidate matching, demand forecasting, and workforce analytics.",
  },
  "sol3.b1": { de: "KI-gestütztes Talent-Matching", en: "AI-powered talent matching" },
  "sol3.b2": { de: "Bedarfsprognose-Genauigkeit 95%+", en: "Demand forecasting accuracy 95%+" },
  "sol3.b3": { de: "Einstellungszeit um 60% reduzieren", en: "Reduce hiring time by 60%" },

  "sol4.title": { de: "Individuelle KI-Integration", en: "Custom AI Integration" },
  "sol4.desc": {
    de: "Maßgeschneiderte KI-Lösungen für Ihre individuellen Herausforderungen im Gesundheitswesen. Unser Team entwickelt, implementiert und skaliert kundenspezifische Modelle.",
    en: "Tailored AI solutions designed for your unique healthcare challenges. Our team builds, deploys, and scales custom models that integrate seamlessly with your existing systems.",
  },
  "sol4.b1": { de: "Individuelle Modellentwicklung", en: "Bespoke model development" },
  "sol4.b2": { de: "Nahtlose EHR/EMR-Integration", en: "Seamless EHR/EMR integration" },
  "sol4.b3": { de: "Fortlaufende Optimierung & Support", en: "Ongoing optimization & support" },

  // Social Proof
  "social.badge": { de: "Nachgewiesene Ergebnisse", en: "Proven Results" },
  "social.title1": { de: "Weltweit", en: "Trusted" },
  "social.title2": { de: "vertraut", en: "Worldwide" },
  "social.metric1": { de: "Nutzer im Gesundheitswesen", en: "Healthcare Users" },
  "social.metric2": { de: "Kundenzufriedenheit", en: "Client Satisfaction" },
  "social.metric3": { de: "Länder bedient", en: "Countries Served" },
  "social.metric4": { de: "KI-Plattformen", en: "AI Platforms" },

  "social.t1.quote": {
    de: "Der ROI durch die Implementierung der Medicortex-Plattformen in unserem Krankenhausnetzwerk war außergewöhnlich.",
    en: "The ROI from implementing Medicortex platforms across our hospital network has been extraordinary. We saw measurable improvements within the first month.",
  },
  "social.t1.role": { de: "Vizepräsident Operations", en: "Vice President of Operations" },
  "social.t1.org": { de: "Nationale Gesundheitsgruppe", en: "National Healthcare Group" },
  "social.t2.quote": {
    de: "StaffIQ hat unsere chronischen Unterbesetzungsprobleme gelöst. Die KI-Prognosen sind bemerkenswert genau.",
    en: "StaffIQ solved our chronic understaffing challenges. The AI predictions are remarkably accurate and have transformed our scheduling.",
  },
  "social.t2.role": { de: "HR-Leitung", en: "HR Director" },
  "social.t2.org": { de: "Personalvermittlung, Europa", en: "Medical Staffing Agency, Europe" },
  "social.t3.quote": {
    de: "ClinicFlow AI integrierte sich nahtlos in unsere bestehenden Systeme. Die Patientenzufriedenheit stieg in drei Monaten um 28%.",
    en: "ClinicFlow AI integrated seamlessly with our existing systems. Patient satisfaction scores jumped 28% in three months.",
  },
  "social.t3.role": { de: "Praxismanagement", en: "Practice Manager" },
  "social.t3.org": { de: "Multi-Standort-Klinikgruppe", en: "Multi-Location Clinic Group" },

  // Footer CTA
  "cta.title": { de: "Bereit, Ihre Abläufe zu transformieren?", en: "Ready to Transform Your Operations?" },
  "cta.sub": {
    de: "Kontaktieren Sie uns, um zu erfahren, wie unsere KI-Plattformen Ergebnisse für Ihre Organisation liefern.",
    en: "Get in touch to explore how our AI platforms can deliver results for your organization.",
  },
  "cta.name": { de: "Ihr Name", en: "Your Name" },
  "cta.org": { de: "Organisation", en: "Organization" },
  "cta.email": { de: "E-Mail-Adresse", en: "Email Address" },
  "cta.message": { de: "Erzählen Sie uns von Ihren Anforderungen...", en: "Tell us about your needs..." },
  "cta.submit": { de: "Anfrage senden", en: "Send Inquiry" },
  "cta.sent": { de: "Nachricht gesendet! ✓", en: "Message Sent! ✓" },
  "cta.consent": {
    de: "Ich stimme der Datenverarbeitung gemäß DSGVO zu.",
    en: "I consent to data processing in accordance with GDPR.",
  },

  // Footer
  "footer.desc": {
    de: "KI-Gesundheitslösungen aus Berlin. Wir transformieren Krankenhäuser, Kliniken und Personalagenturen weltweit mit bewährten KI-Plattformen.",
    en: "Berlin-based AI Healthcare Solutions. Transforming hospitals, clinics, and staffing agencies worldwide with proven AI platforms.",
  },
  "footer.links": { de: "Schnelllinks", en: "Quick Links" },
  "footer.connect": { de: "Verbinden", en: "Connect" },
  "footer.legal": { de: "Rechtliches", en: "Legal" },
  "footer.privacy": { de: "Datenschutz", en: "Privacy Policy" },
  "footer.impressum": { de: "Impressum", en: "Impressum" },
  "footer.copyright": {
    de: "© 2026 Medicortex. Alle Rechte vorbehalten. | KI-Gesundheitslösungen aus Berlin",
    en: "© 2026 Medicortex. All rights reserved. | Berlin-based AI Healthcare Solutions",
  },
  "footer.gdpr": {
    de: "DSGVO-konform · Daten in der EU gehostet",
    en: "GDPR-compliant · Data hosted in the EU",
  },

  // Cookie Consent
  "cookie.title": { de: "Cookie-Einstellungen", en: "Cookie Settings" },
  "cookie.desc": {
    de: "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. Nur notwendige Cookies sind standardmäßig aktiv.",
    en: "We use cookies to provide you with the best experience. Only necessary cookies are active by default.",
  },
  "cookie.necessary": { de: "Notwendige Cookies", en: "Necessary Cookies" },
  "cookie.necessaryDesc": { de: "Immer aktiv", en: "Always active" },
  "cookie.analytics": { de: "Analyse-Cookies", en: "Analytics Cookies" },
  "cookie.analyticsDesc": { de: "Helfen uns, die Nutzung zu verstehen", en: "Help us understand usage" },
  "cookie.acceptAll": { de: "Alle akzeptieren", en: "Accept All" },
  "cookie.necessaryOnly": { de: "Nur notwendige", en: "Necessary Only" },

  // Datenschutz / Impressum
  "datenschutz.title": { de: "Datenschutzerklärung", en: "Privacy Policy" },
  "impressum.title": { de: "Impressum", en: "Legal Notice" },
};
