# Rencana Landing Page — MOT (Mind of Things)

## Goal
Membangun landing page profesional untuk agency AI & Web Development "MOT" yang:
- Menjelaskan positioning agency dalam 5 detik pertama.
- Menampilkan 2 layanan utama: Agentic AI Development & Web Development.
- Membangun kepercayaan lewat portfolio, proses kerja, dan testimonial.
- Mengarahkan pengunjung ke aksi: booking call / kirim inquiry.

---

## Tech Stack
| Layer | Pilihan |
|-------|---------|
| Framework | **Next.js 14+ (App Router)** |
| Styling | **Tailwind CSS** |
| UI Components | Shadcn/ui (opsional, tapi direkomendasikan) |
| Icons | Lucide React |
| Font | Inter (default Tailwind) atau Geist (font modern Next.js) |
| Animasi | Framer Motion (opsional, untuk polish) |
| Deploy | Vercel |

---

## Folder Structure
```
my-app/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Process.tsx
│       ├── Portfolio.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── components/
│   └── ui/          # Shadcn/ui components (Button, Card, Badge)
├── public/
│   └── images/      # Logo, portfolio screenshots, icons
├── lib/
│   └── utils.ts
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## Section Structure

### 1. Navigation (Sticky Header)
- Logo MOT (kiri)
- Menu: Services, Process, Portfolio, About, Contact
- CTA button: "Book a Call" / "Let's Talk"
- Responsive: hamburger menu di mobile

### 2. Hero Section
**Copy:**
- Headline: "We Build the Intelligence Behind Your Startup"
- Subheadline: "MOT helps early-stage startups ship agentic AI systems and high-converting websites — without hiring a full tech team."
- CTA Primary: "Book a Free Strategy Call"
- CTA Secondary: "See Our Work"
- Visual: Abstract AI/network illustration atau hero image modern

### 3. About / Why MOT Section
**Copy:**
- Heading: "Built for Startups, Not Enterprises"
- Paragraph: "MOT is a small, hands-on agency. We don't chase volume — we partner with founders who need real tech built fast. From AI agents that think and act on their own, to websites that convert visitors into customers."
- 4 value points:
  1. Results first, tools second
  2. Startup-ready pace & pricing
  3. Move fast, build right
  4. Transparent by design

### 4. Services Section
**Heading:** "What We Build"
**Subheading:** "Two services. One team. Zero coordination headaches."

**Card 1 — Agentic AI Development:**
- "AI agents that plan, decide, and act — not just chat."
- Bullet points:
  - Custom AI Agent Development
  - AI Integration (CRM, WhatsApp, Helpdesk, etc.)
  - AI Consulting & Architecture
- CTA: "Explore AI Services"

**Card 2 — Web Development:**
- "Fast, clean, and conversion-focused websites."
- Bullet points:
  - Landing Page & Company Profile
  - Web + AI Integration
  - Revamp & Maintenance
- CTA: "Explore Web Services"

### 5. Process Section
**Heading:** "How We Work"
**Subheading:** "From first call to shipped product in weeks, not months."

4 steps:
1. **Discovery** — Understand your business, users, and goals.
2. **Design & Plan** — Define scope, architecture, and delivery milestones.
3. **Build & Iterate** — Ship fast, review weekly, adjust quickly.
4. **Launch & Support** — Deploy, monitor, and grow together.

### 6. Portfolio Section
**Heading:** "Selected Work"
**Subheading:** "Real projects built for real startups."

3 case study cards (placeholder, bisa diupdate nanti):
1. **Customer Support Agent** — AI agent untuk cek status pesanan, triase masalah, dan eskalasi ke tim manusia.
2. **AI-Powered Landing Page** — Landing page dengan form lead capture yang langsung diteruskan ke agent kualifikasi.
3. **Startup Company Profile** — Website company profile + live chat agentic untuk investor dan calon pengguna.

### 7. Testimonials Section
**Heading:** "What Founders Say"
3 testimonial cards dengan:
- Quote singkat
- Nama founder
- Posisi & startup

Contoh placeholder:
> "MOT helped us launch our AI agent in 3 weeks. It felt like having an internal tech team."  
> — Rian, Founder @ MOT

### 8. CTA Section
**Heading:** "Ready to Build Smarter?"
**Subheading:** "Book a free 30-minute strategy call. We'll map out what to build first."
- CTA Primary: "Book a Free Call"
- CTA Secondary: "Send an Inquiry"

### 9. Footer
- Logo + tagline singkat
- Menu links
- Contact: email, LinkedIn, WhatsApp (placeholder)
- Copyright: © 2026 MOT. All rights reserved.

---

## Design Direction
- **Style:** Clean, modern, minimal, tech-forward
- **Color palette:**
  - Primary: Deep indigo / violet (#4F46E5 atau #6366F1)
  - Background: White / soft gray (#F8FAFC)
  - Text: Dark slate (#0F172A)
  - Accent: Cyan / electric blue untuk highlight
- **Typography:** Sans-serif modern, heading bold, body readable
- **Vibe:** Startup agency yang profesional tapi tidak kaku

---

## File yang Akan Dibuat
1. `app/page.tsx` — menyusun semua section
2. `app/layout.tsx` — root layout + metadata
3. `app/globals.css` — global styles + Tailwind directives
4. `app/sections/Hero.tsx`
5. `app/sections/About.tsx`
6. `app/sections/Services.tsx`
7. `app/sections/Process.tsx`
8. `app/sections/Portfolio.tsx`
9. `app/sections/Testimonials.tsx`
10. `app/sections/CTA.tsx`
11. `app/sections/Footer.tsx`
12. `components/Navbar.tsx`
13. `tailwind.config.ts` — konfigurasi warna & font
14. `next.config.js` — export static (opsional)

---

## Next Steps
1. Persetujuan rencana ini.
2. Setup project Next.js + Tailwind CSS.
3. Implementasi semua section satu per satu.
4. Verifikasi build & preview.
5. Deploy ke Vercel.
