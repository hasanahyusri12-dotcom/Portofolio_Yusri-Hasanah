# Portfolio App

Website portfolio pribadi, dibangun dengan React + Vite.

## Cara menjalankan

1. Install dependencies:
   ```bash
   npm install
   ```

2. Jalankan mode development:
   ```bash
   npm run dev
   ```
   Lalu buka `http://localhost:5173` di browser.

3. Build untuk production:
   ```bash
   npm run build
   ```
   Hasilnya ada di folder `dist/`.

4. Preview hasil build:
   ```bash
   npm run preview
   ```

## Struktur folder

```
portfolio-app/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json          <- rewrite config (kalau deploy ke Vercel)
├── public/
│   └── _redirects       <- redirect config (kalau deploy ke Netlify)
└── src/
    ├── main.jsx          <- setup routing (React Router)
    ├── index.css
    ├── data.js           <- semua data & design tokens terpusat di sini
    ├── components/
    │   ├── Layout.jsx    <- header nav, mobile nav, footer (shared di semua halaman)
    │   └── ui.jsx         <- komponen kecil reusable (Card, Tag, Pill, dll)
    └── pages/
        ├── Home.jsx        -> route "/"
        ├── Work.jsx        -> route "/work"
        ├── Expertise.jsx   -> route "/expertise"
        └── Contact.jsx     -> route "/contact"
```

Ini udah multi-page beneran pakai **React Router** — tiap halaman punya URL sendiri,
bukan cuma scroll-anchor kayak sebelumnya.

## Catatan

- Font (Space Grotesk, Inter, JetBrains Mono) di-load lewat Google Fonts di `Layout.jsx`, jadi butuh koneksi internet saat pertama kali render.
- Icon pakai library `lucide-react`.
- Form kontak di halaman "Contact" masih statis (belum terhubung ke backend/email service manapun) — tinggal isi endpoint sendiri kalau mau difungsikan.
- Kalau deploy ke **Vercel** atau **Netlify**, jangan lupa `vercel.json` / `public/_redirects` udah disiapkan supaya refresh halaman (misal langsung buka `/work`) tetap kebaca, bukan malah 404.
- Mau nambah halaman baru? Tinggal bikin file di `src/pages/`, terus daftarin route-nya di `src/main.jsx` dan link-nya di `src/components/Layout.jsx`.
