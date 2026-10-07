# Portfolio — burkasolutions.dev

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)

Portfolio statico di Yonas Habtetsadik Burka, sviluppatore frontend e
studente in Data Management & Coding presso ITS Umbria Academy.

**Live:** https://burkasolutions.dev
**Deploy:** push su `main` → Cloudflare Pages (build automatica, nessun comando di build)

## Struttura

```
index.html          # pagina unica (hero, chi sono, competenze, progetti, contatti)
assets/style.css    # temi dark/light, responsive, reduced-motion
assets/script.js    # toggle tema, menu mobile, active-link on scroll, reveal
images/             # screenshot progetti in WebP + og-cover.jpg per social
favicon.svg         # favicon
robots.txt          # sitemap.xml per SEO (solo /, i progetti vivono su sottodomini)
_headers            # header HTTP di Cloudflare Pages (cache + sicurezza)
_redirects          # www -> apex 301, vecchi path /FutsalManager/* e /38-0/* -> 404
404.html            # pagina 404 brandizzata
```

## Progetti collegati (repo e demo separati)

- FutsalManager → [codice](https://github.com/yonashabtetsadikburka/futsalmanager) · [demo](https://futsal.burkasolutions.dev)
- CinePosto → in progress
- 38-0 Serie A → [codice](https://github.com/yonashabtetsadikburka/serie-a-38-0) · [demo](https://38-0.burkasolutions.dev)

## Note

- La Content-Security-Policy è in `Report-Only` in `_headers`: verificare i
  report nel browser prima di passare a enforcing.
- Pesi dei font Google: verificare periodicamente che tutti i pesi caricati
  siano davvero usati.

## Licenza

Distribuito sotto licenza MIT — vedi [LICENSE](LICENSE).
