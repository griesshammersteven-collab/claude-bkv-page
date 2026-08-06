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
- `impressum.html`, `datenschutz.html` — rechtliche Pflichtseiten, im Footer von `index.html` verlinkt

Kein Build-Tooling, keine Dependencies — einfach `index.html` öffnen oder per beliebigem Static-Host (Netlify, Vercel, GitHub Pages) deployen.

## Design

Dunkles Theme, einheitliche Akzentfarbe Gold `#C9AA22` (Variable `--gold` in `styles.css:9`) auf dunklem Anthrazit-Hintergrund — ersetzt die frühere Pastell-Gradient-Version (Mint/Lavendel/Koralle). Folgt der globalen Stil-Vorgabe aus `C:\Claude\CLAUDE.md` (Akzentfarbe #C9AA22, dunkles Theme, mobile-first), hier zusätzlich bewusst "laut/dynamisch" über große Headlines in der Akzentfarbe statt über visuelle Unordnung.

## Git-Workflow

Zwei Branches, bewusst schlank gehalten:

- **`main`** — Produktions-Branch. Nur fertige, getestete Merges. Verbunden mit Netlify "Production branch" → das ist die Live-Domain.
- **`develop`** — täglicher Arbeits-Branch. Hier passiert die eigentliche Arbeit, Standard ist direktes Committen. Verbunden mit Netlify "Branch deploy" → eigene Vorschau-URL zum Testen vor dem Go-Live.

Ablauf: Auf `develop` arbeiten und testen (lokal + Netlify-Branch-Preview) → wenn fertig & getestet: Merge `develop` → `main` → Netlify deployed automatisch live.

Für größere/riskantere Änderungen optional ein kurzlebiger Feature-Branch von `develop` (z.B. `feature/pricing-update`), der per Merge zurück in `develop` geht — kein Zwang, nur bei Bedarf.

**Nie direkt auf `main` committen.**

## Offene TODOs vor Live-Gang

- **Social Proof (`index.html`, Abschnitt "SOCIAL PROOF")**: enthält aktuell nur generische, neutrale Trust-Signale (IDD-konforme Beratung, §3 Nr. 34 EStG, direkter Draht zum Versicherer als Handelsvertreter, kein Risiko) — bewusst **keine** erfundenen Kundenstimmen. Sobald echte Testimonials, Kundenlogos oder Kennzahlen vorliegen, hier ergänzen.
- Kontaktinfos/Footer ggf. um echten Firmennamen/Adresse erweitern, falls "MitarbeiterPlus" nur Arbeitstitel ist.

## Rechtliches (Impressum/Datenschutz)

`impressum.html` und `datenschutz.html` sind live (Daten übernommen aus der DVAG-Seite von Dieter Pfleghardt, `dvag.de/dieter.pfleghardt`, mit Stevens Bestätigung — er ist als gebundener Vertreter dieser Hauptgeschäftsstelle tätig, daher gelten deren Register-/Kontaktdaten auch für dieses Angebot):

- Verantwortliche Stelle: Hauptgeschäftsstelle für Deutsche Vermögensberatung, Dieter Pfleghardt, Achtelstr. 8, 91245 Simmelsdorf
- Vermittlerregisternummern §34d/§34f/§34i GewO, Aufsichtsbehörde IHK München u. Oberbayern — Quelle: dvag.de/dieter.pfleghardt/impressum.html
- Datenschutzerklärung ist **nicht** 1:1 von DVAG kopiert, sondern auf das tatsächliche Setup dieser Seite zugeschnitten (Netlify-Hosting, Google-Calendar-Booking-Link, kein Tracking/keine Cookies auf dieser Seite selbst)

**TODO vor echtem Go-Live**: Von einem Anwalt oder der DVAG-Compliance gegenchecken lassen, ob für Stevens eigene Person zusätzlich eine eigene Vermittlerregisternummer im Impressum stehen muss, oder ob die Geschäftsstellen-Angaben ausreichen. Fehlerhafte Pflichtangaben bei Versicherungsvermittlern sind ein klassischer Abmahn-Grund.
