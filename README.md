# 🚀 Dev Portfolio — Next.js

Portfolio website fullstack developer dengan Next.js, dirancang clean & modern.

## Tech Stack
- **Framework**: Next.js 14 (Pages Router)
- **Styling**: CSS Modules (pure CSS, no Tailwind needed)
- **Font**: Instrument Serif + Outfit + JetBrains Mono (Google Fonts)
- **Deployment**: Vercel (recommended)

## Struktur Project

```
portfolio/
├── components/
│   └── Navbar.jsx          # Navbar fixed + mobile menu
├── data/
│   └── portfolio.js        # Data skills, projects, experience
├── hooks/
│   └── useReveal.js        # Scroll animation hook
├── pages/
│   ├── _app.jsx
│   ├── _document.jsx
│   └── index.jsx           # Main page (Hero, About, Skills, Projects, Contact, Footer)
├── styles/
│   ├── globals.css         # CSS variables, reset, utilities
│   ├── Home.module.css     # All section styles
│   └── Navbar.module.css   # Navbar styles
├── public/
├── next.config.js
└── package.json
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## Customization

### Ganti Info Personal
Edit `pages/index.jsx`:
- `Your Name` → nama kamu
- `dev@example.com` → email kamu

### Ganti Social Media Links
Edit `pages/index.jsx` (bagian Contact & Footer) dan `components/Navbar.jsx`:
```js
href="https://github.com/yourusername"    // → username GitHub kamu
href="https://tiktok.com/@yourusername"   // → username TikTok kamu
href="https://instagram.com/yourusername" // → username Instagram kamu
```

### Ganti Data Proyek & Skills
Edit `data/portfolio.js` — semua data skills, proyek, dan pengalaman ada di sini.

### Warna
Edit CSS variables di `styles/globals.css`:
```css
--green:   #16A34A;
--yellow:  #CA8A04;
--blue:    #2563EB;
```

## Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Atau push ke GitHub dan connect repo di [vercel.com](https://vercel.com).

---
Made with ❤️ & Next.js
