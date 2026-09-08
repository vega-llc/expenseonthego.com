# ExpenseOnTheGo website

Static GitHub Pages website for `expenseonthego.com`. The iOS app lives separately in the sibling `ExpenseOnTheGo` repository.

## September 2026 redesign

The homepage now leads with the product, real 2.0 app screenshots, on-device AI, and the value of Free and Pro. It includes a keyboard-accessible workflow preview, clearly labeled scripted Ask AI examples, a monthly/yearly pricing comparison, FAQs, and an email launch-update request. The original video is retained in a collapsed history section, with its age clearly identified. Original photos and other assets remain available.

The privacy page now names Ask AI, its summary-based expense context, Gemma 3 4B, its approximate 2.5 GB download, and compatible custom models. It distinguishes local AI inference from optional iCloud sync, Apple subscription processing, and model downloads. Launch-update emails and separate Keychain identifier deletion are also explained.

## Current release status

The site continues to describe version 2.0 as coming soon. Prices of $4.99/month and $39.99/year are planned values verified against the app's local StoreKit configuration, not confirmation of live App Store pricing. There is no website checkout. Launch-update buttons open a prefilled email that the visitor must send.

After the owner confirms 2.0 is available and verifies its live prices, update the status, FAQ, metadata, pricing disclosures, and launch CTAs together. Use the verified App Store listing as the conversion destination. Do not imply that the site sells the subscription.

## Files and assets

- `index.html`: marketing page and shared SVG icons
- `assets/css/site.css`: responsive site and policy styles
- `assets/js/site.js`: navigation, workflow previews, scripted examples, billing comparison
- `assets/screenshots/`: actual app screenshots from the app's marketing materials, using sample data
- `privacy.html`, `terms.html`, `support.html`: App Store policy and support destinations
- Legacy HTML routes: preserved redirects

No build dependencies, sign-in, analytics, tracking scripts, or hosted AI calls are required. The Ask AI preview uses fixed, labeled sample data; it does not run the app's AI.

## Publishing

Production remains the existing GitHub Pages workflow in `vega-llc/expenseonthego.com`, with `CNAME` pointing to `expenseonthego.com`. The approved redesign is published through that production repository. A separate owner-only Sites review copy is kept outside this repository so the existing production architecture stays intact.

## Validation

Checked all 14 HTML pages for local asset/link/anchor resolution, unique IDs, required button types, image alternative text, and structured data syntax. JavaScript syntax and Git whitespace checks pass. Static specialist review checked the product claims, tier boundaries, privacy statements, and interactive control wiring. Browser interaction and device testing have not been performed on the redesign.
