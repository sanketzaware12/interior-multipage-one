# AURELLE INTERIORS - static website
Open `index.html` (or use Live Server). No build step.
- **Edit details:** `assets/js/config.js` (brand, phone, WhatsApp, email, address, socials, stats, testimonials, projects, services).
- **Contact form:** no backend is configured. A valid submit opens WhatsApp with the enquiry prefilled. Set `formEndpoint` (e.g. a Formspree URL) to send via API instead.
- **Hero video:** set `heroVideo` to an mp4 in `assets/videos/` (e.g. `assets/videos/hero.mp4`). The poster image is the automatic fallback.
- **Images:** loaded from Unsplash URLs (internet needed). To self-host, download into `assets/images/` and change `S.img` / image ids in config.
- **Placeholders to replace:** phone, email, address, stats, testimonials, team cards, map embed.
- **CDN libraries:** Bootstrap 5.3.3, Font Awesome 6.5.1, GSAP 3.12.5 + ScrollTrigger.
