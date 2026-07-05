# Walker Road Studios — Website v1

A Digital Outfitter. A Guide Builder. A Game Maker.

---

## How to Run

Open `index.html` in any browser. No server required.

```bash
# Optionally, from this directory:
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

## How to Deploy

- **Netlify**: Drag the `walker-road-studios/` folder into app.netlify.com/drop
- **GitHub Pages**: Push to a repo, enable Pages from Settings → Pages
- **Vercel**: `vercel` in this directory with CLI installed

---

## Placeholders to Replace

Search the HTML for these strings:

| Placeholder | Where | What to put |
|---|---|---|
| `CONTACT_LINK_HERE` | Multiple CTAs, buttons | A mailto:, Calendly URL, Typeform, or contact page URL |
| `VENMO_LINK_HERE` | Payment section + footer | Your Venmo payment link (e.g. `https://venmo.com/u/YOUR-USERNAME`) |
| `PAYPAL_LINK_HERE` | Payment section + footer | Your PayPal.me link (e.g. `https://paypal.me/YOUR-USERNAME`) |
| `EMAIL_ADDRESS_HERE` | Footer | Your contact email |
| `WEBSITE_URL_HERE` | Footer | Full URL once deployed |

### Finding and replacing

In VS Code: Ctrl+Shift+H (Find & Replace All)
In any text editor: Find All, Replace All

---

## Files

```
walker-road-studios/
├── index.html       — All content, single page
├── styles.css       — All styles
├── script.js        — Mobile nav toggle, keyboard handling
├── assets/          — Drop images here when ready
└── README.md        — This file
```

---

## Notes

- The site works with JavaScript disabled (nav links remain visible, just not the mobile toggle)
- Tested at: desktop wide, desktop narrow, tablet (~768px), mobile (~375px)
- All navigation links scroll to sections on the same page
- Payment section is visible on the main page — not a separate page
- Footer contains John Walker dedication per owner direction
