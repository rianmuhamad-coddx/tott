# Plan: Add Live Chat AI Agent + FAQ Section to MOT Website

## Goal
Add two high-impact features to the MOT landing page (Next.js 16 + Tailwind CSS 4 + Framer Motion): (1) a persistent floating Live Chat AI Agent chatbot and (2) a reusable FAQ section with JSON-LD structured data.

## Constraints
- No new external dependencies (use existing: React, Framer Motion, Lucide, Tailwind 4)
- No backend — both features are frontend-only (React state for chat, static data array for FAQ)
- Preserve existing file conventions (`@/` alias, `components/`, `sections/`)
- All new files go under `mot-landing/`
- Must work with existing dark theme and glassmorphism styles

## Chunks

### Chunk 1 — FAQ Section + JSON-LD

#### Scope
Reusable `FaqSection` component with `FaqItem` accordion sub-components, plus a `faqData` data file. Can be dropped into any page. Includes JSON-LD `<script>` injection via a helper component.

#### Files Changed

| Action | File |
|--------|------|
| CREATE | `mot-landing/components/sections/FaqSection.tsx` — Main FAQ component |
| CREATE | `mot-landing/components/sections/FaqItem.tsx` — Single accordion item |
| CREATE | `mot-landing/components/ui/JsonLd.tsx` — JSON-LD structured data injector (renders `<script>` in head) |
| CREATE | `mot-landing/lib/faq-data.ts` — FAQ data array + JSON-LD schema builder |
| MODIFY | `mot-landing/app/page.tsx` — Import and render `<FaqSection />` on home page |
| MODIFY | `mot-landing/app/layout.tsx` — Optionally import `JsonLd` for site-wide FAQ schema |

#### Depends On
None (can be parallel with Chunk 2)

#### Accept When
1. `npm run dev` shows an expanded accordion on `/` with 4-6 FAQs
2. Clicking any question opens/closes the answer with Framer Motion slide animation
3. Viewing page source reveals `<script type="application/ld+json">` with FAQ schema

#### Test Coverage
None (frontend-only, no test runner configured)

#### Open Questions
- Q: Should the JSON-LD be injected via layout (site-wide) or per-page via a component call? A: Per-page via component — more flexible and follows Next.js conventions.

---

### Chunk 2 — Live Chat AI Agent (Floating Chatbot)

#### Scope
`LiveChat` floating component (bottom-right, `fixed`, `z-50`) with an expandable chat window. Uses React state for messages array. Predefined response map for simple replies. Animated open/close via Framer Motion.

#### Files Changed

| Action | File |
|--------|------|
| CREATE | `mot-landing/components/LiveChat.tsx` — Main chat widget with toggle button |
| CREATE | `mot-landing/components/ui/ChatMessage.tsx` — Individual message bubble |
| CREATE | `mot-landing/lib/chat-responses.ts` — Response map + helper function |

#### Depends On
None (can be parallel with Chunk 1)

#### Accept When
1. A small chat icon appears fixed at bottom-right of every page (layout-level)
2. Clicking it opens a chat window with a greeting message ("Hi! How can I help?")
3. Typing "pricing" / "services" / "hello" returns predefined responses
4. Closing the window collapses it with a smooth Framer Motion animation
5. Messages are stored in React state, no persistence

#### Test Coverage
None (frontend-only)

#### Open Questions
- Q: Should the chatbot be injected at the layout level (every page) or only on `/` and `/contact`? A: Layout-level — all pages should show it.

---

### Chunk 3 — Wire Into Layout + Verify Build

#### Scope
Integration checks: ensure both components load without errors, `npm run build` succeeds, and no visual regressions.

#### Files Changed

| Action | File |
|--------|------|
| MODIFY | `mot-landing/app/layout.tsx` — Add `<LiveChat />` to body |

#### Depends On
Chunk 1, Chunk 2

#### Accept When
1. `npm run build` completes with 0 errors
2. Both `/` and `/about` show the chat icon at bottom-right
3. Both pages show FAQ section (if rendered) with working accordion

---

## Arsitektur Komponen

```
mot-landing/
├── app/
│   ├── layout.tsx          # <LiveChat /> ditambahkan di sini
│   └── page.tsx           # <FaqSection /> ditambahkan di sini
├── components/
│   ├── LiveChat.tsx        # Stateful chatbot widget (client component)
│   ├── sections/
│   │   └── FaqSection.tsx # Reusable FAQ + FaqItem
│   └── ui/
│       ├── ChatMessage.tsx # Bubble UI
│       └── JsonLd.tsx      # JSON-LD injector
├── lib/
│   ├── faq-data.ts        # Data array + JSON-LD builder function
│   └── chat-responses.ts  # Response map for chatbot
```

## Data Flow

### FAQ
- `lib/faq-data.ts` → `const faqs: FaqItem[]` → diimpor oleh `FaqSection.tsx`
- `lib/faq-data.ts` juga ekspor `buildFaqJsonLd(faqs)` → di-pass ke `JsonLd.tsx`
- `FaqSection.tsx` render: title, daftar `FaqItem`, dan `JsonLd` di bagian bawah

### Chat
- `lib/chat-responses.ts` → `responseMap: Record<string, string>` + `getReply(input: string): string`
- `LiveChat.tsx` → `const [messages, setMessages] = useState<Message[]>([])` + `const [isOpen, setIsOpen] = useState(false)`
- Tiap user message → cari di responseMap → balas → push ke array → re-render
- No backend, no persistence

## Prioritas
1. **FAQ Section** — lebih cepat dibuat, reusable, langsung bisa dipasang di beberapa halaman + SEO benefit dari JSON-LD
2. **Live Chat** — terlihat di mana-mana, interaktif, high-impact untuk konversi
3. **Wire + Build** — integrasi dan verifikasi

## Verification Strategy
- `npm run dev` → buka browser → cek FAQ dan Chat jalan
- `npm run build` → must succeed (catch TypeScript errors)
- Inspect HTML di browser → cari `<script type="application/ld+json">`

## Decision Log
| Keputusan | Opsi Dipilih | Alternatif Ditolak | Alasan |
|-----------|--------------|-------------------|--------|
| Chat di layout | Semua halaman | Hanya halaman tertentu | Konsistensi UX |
| Chat state | React useState | Zustand/Ctx | Tidak perlu global state |
| FAQ data | Static array file | CMS API | Frontend-only dulu |
| JSON-LD | Per-component | Layout global | Fleksibel per halaman |

## Risks
- **Framer Motion conflict**: Komponen chat pakai Motion + AnimatePresence. Pastikan tidak bentrok dengan AnimatedSection yang sudah ada. Mitigasi: gunakan `AnimatePresence` hanya untuk chat window, tidak untuk container.
- **Tailwind v4**: Pastikan semua utility class kompatibel dengan Tailwind 4 (no deprecated `@apply`). Mitigasi: gunakan CSS variable dan `@theme` inline seperti yang sudah ada di globals.css.