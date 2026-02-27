# Atlanta For Sudan — Website

Static website for **Atlanta For Sudan**, a community organization uniting Sudanese people across metro Atlanta through cultural connection, mutual support, and collective action.

- Instagram: [@emory4sudan](https://instagram.com/emory4sudan) (1,000+ followers)
- Email: atlantaforsudan@gmail.com

---

## Pages

| File | Page |
|------|------|
| `index.html` | Home — hero, programs, events preview, CTA |
| `about.html` | About Us — origin story, mission, values, community |
| `events.html` | Events — upcoming & recurring event listings |
| `get-involved.html` | Get Involved — WhatsApp, volunteer, donate |
| `contact.html` | Contact — form, direct links, partner info |

## Assets

```
css/style.css   — Mobile-first stylesheet (Sudanese flag color palette)
js/main.js      — Mobile nav, accordion, contact form, scroll animations
```

## Design

- **Colors:** Sudanese flag palette — Green `#007A3D`, Red `#D21034`, Black `#1A1A1A`, White `#FFFFFF`
- **Mobile-first:** Designed for phone users first; responsive at 600px, 768px, 900px
- **Bilingual:** English primary with Arabic (`font-family: Cairo`) accents throughout
- **Fast & lightweight:** No frameworks, no build step — pure HTML/CSS/JS
- **Accessible:** ARIA labels, keyboard navigation, focus styles, semantic HTML

## Deployment

This is a plain static site — deploy anywhere:

- **GitHub Pages:** Push to `main` branch → enable Pages in repo Settings
- **Netlify / Vercel:** Drag-and-drop the folder or connect the repo
- **Carrd / other:** Download and upload `index.html` + `css/` + `js/`

## Updating Events

Open `events.html` and edit the `.event-card` blocks. Each card follows this pattern:

```html
<div class="event-card">
  <div class="event-date-block" aria-label="Month Day">
    <span class="month">Mar</span>
    <span class="day">15</span>
  </div>
  <div class="event-body">
    <h3>Event Title</h3>
    <div class="event-meta">
      <span>🕒 Time</span>
      <span>📍 Location</span>
    </div>
    <p>Description...</p>
  </div>
</div>
```

## Contact Form

The contact form on `contact.html` uses [Formspree](https://formspree.io/) (free tier).
To activate:
1. Create a free Formspree account
2. Create a new form and copy the endpoint URL
3. Replace `https://formspree.io/f/XXXXXXXX` in `contact.html` with your URL

## TODO (Before Launch)

- [ ] Replace `+1XXXXXXXXXX` with real WhatsApp number in all pages
- [ ] Set up Formspree and update contact form action URL
- [ ] Update Instagram handle once `@atlantaforsudan` is claimed
- [ ] Add real event dates and details as they are confirmed
- [ ] Update copyright year as needed

---

*Atlanta For Sudan — Community. Culture. Connection.*
