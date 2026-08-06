# Projekt: MitarbeiterPlus – bKV Sales Landing Page

Statische Sales-Landing-Page für Stevens bKV-Angebot (betriebliche Krankenversicherung). Ziel: Unternehmer mit >5 Mitarbeitern zur Terminbuchung für einen kostenlosen Google-Meet-Call bewegen.

## Angebot

- Kostenloser Google-Meet-Call + dauerhafte Betreuung
- Zielgruppe: Unternehmer, die Mitarbeiter gewinnen und/oder binden wollen
- Vertriebsform: Steven ist als Handelsvertreter tätig (nicht unabhängiger Makler) — Texte dürfen "unabhängig/Anbietervergleich" nicht suggerieren
- USP: Von unzufriedenen zu begeisterten Mitarbeitern in 30 Tagen
- Pricing: Beratung kostenlos, danach variabel je nach Mitarbeiteranzahl & freiem Budget für steuerfreien Sachbezug
- Booking-Link (an allen CTAs verlinkt): https://calendar.app.google/aeGAt8DKvBZdj5HR9

## Struktur

- `index.html` — alle 7 Sektionen: Hero, Pain-Block, 3 Vorteile, Social Proof, Pricing, FAQ, Final CTA
- `styles.css` — Design-Tokens (Farben/Radius) als CSS-Variablen in `:root`, mobile-first Media-Queries ab 640px/1024px
- `script.js` — FAQ-Accordion (einziges JS-Feature)

Kein Build-Tooling, keine Dependencies — einfach `index.html` öffnen oder per beliebigem Static-Host (Netlify, Vercel, GitHub Pages) deployen.

## Design

Dunkles Theme, einheitliche Akzentfarbe Gold `#C9AA22` (Variable `--gold` in `styles.css:9`) auf dunklem Anthrazit-Hintergrund — ersetzt die frühere Pastell-Gradient-Version (Mint/Lavendel/Koralle). Folgt der globalen Stil-Vorgabe aus `C:\Claude\CLAUDE.md` (Akzentfarbe #C9AA22, dunkles Theme, mobile-first), hier zusätzlich bewusst "laut/dynamisch" über große Headlines in der Akzentfarbe statt über visuelle Unordnung.

## Offene TODOs vor Live-Gang

- **Social Proof (`index.html`, Abschnitt "SOCIAL PROOF")**: enthält aktuell nur generische, neutrale Trust-Signale (IDD-konforme Beratung, §3 Nr. 34 EStG, direkter Draht zum Versicherer als Handelsvertreter, kein Risiko) — bewusst **keine** erfundenen Kundenstimmen. Sobald echte Testimonials, Kundenlogos oder Kennzahlen vorliegen, hier ergänzen.
- Impressum/Datenschutz-Links fehlen noch (rechtlich vor Live-Schaltung ergänzen).
- Kontaktinfos/Footer ggf. um echten Firmennamen/Adresse erweitern, falls "MitarbeiterPlus" nur Arbeitstitel ist.
