# UniBand Marketing Website Spec (React / Antigravity)

> Goal: Build a clean, hardware-startup style marketing site for **UniBand** (smart wearable lecture companion) that you can use for your Digital Marketing CW deliverables (microsite, SEO, email capture, pitch video).

---

## 1) Product Snapshot

**Product name:** UniBand  
**Tagline options (pick one):**
- Never miss a lecture — or the meaning behind it.
- Your lectures, captured and understood.
- Record once. Review smarter.

**One-paragraph intro (use across site):**  
UniBand is a smart wearable lecture companion designed for university students. It records academic sessions hands-free and syncs with an AI-powered platform that generates structured notes, summaries, and translated transcripts (e.g., Sinhala and other native languages). UniBand also acts as a personal study assistant, helping students revise, clarify confusing topics, and catch up on missed lessons.

**Core differentiator:** Wearable + AI notes + **translation** + personal study assistant.

**Tone:** Minimal, premium, student-friendly. Benefits first. No heavy AI jargon.

---

## 2) Site Architecture (Pages)

You said you want: **Home (with How it Works + Support inside), About, Features, Get Started, Blog**.  
Use these routes:

- `/` — Home (includes How it Works + Support/FAQ sections)
- `/about` — About UniBand
- `/features` — Features (SEO-heavy page)
- `/get-started` — Join early access (email capture)
- `/blog` — Blog listing
- `/blog/[slug]` — Blog article template (2–4 starter posts)

Optional but nice:
- `/privacy` — Privacy (short + trust)
- `/terms` — Terms (short)

---

## 3) Global Layout

### Header (sticky)
- Logo: **UniBand**
- Nav: Home, About, Features, Get Started, Blog
- CTA button: **Join Early Access**

### Footer
- Quick links (same nav)
- Social icons (placeholders)
- Contact email (placeholder)
- Small legal links: Privacy, Terms

---

## 4) Design System (Quick)

**Look:** Rabbit r1 vibe: clean, bold headline, whitespace, simple gradients (optional).  
**Colors:** Neutral base + 1 accent (blue/purple/teal).  
**Typography:** 1 modern sans (Inter or similar).  
**Buttons:** Primary filled + secondary outline.  
**Cards:** Soft shadow, rounded corners.  
**Images:** Minimal product renders / line icons (can be placeholders).

---

## 5) Page-by-Page Content & Sections

## 5.1 Home Page (`/`)

### Section A — Hero
**Headline:** Never miss a lecture — or the meaning behind it.  
**Subtext:** UniBand records lectures hands-free, turns them into smart notes and summaries, and translates transcripts into your native language.  
**Primary CTA:** Join Early Access  
**Secondary CTA:** See Features

**Mini trust line (optional):** Built for university students learning in fast-paced, English-medium classrooms.

---

### Section B — Problem (4 cards)
**Title:** Lecture life is chaotic. UniBand fixes it.  
Cards:
1) Missed sessions  
2) Fast-paced teaching  
3) Language barriers  
4) Incomplete notes

---

### Section C — How It Works (embedded on Home)
**Title:** How UniBand works  
Steps (horizontal or vertical):
1) Wear UniBand to class  
2) Record the session with one tap  
3) Sync to UniBand app  
4) Get transcript, summaries, and translations  
5) Ask UniBand Assistant to explain anything

**Micro-copy tip:** Keep each step under 12 words.

---

### Section D — Key Benefits (4 cards)
- Hands-free recording (focus in class)
- Instant notes + summaries (revise faster)
- Native-language translation (understand better)
- Personal assistant (ask questions anytime)

---

### Section E — Translation Spotlight (special section)
**Title:** Understand in your language  
**Body:** Toggle between English and Sinhala (or any selected language) to learn faster and revise with confidence.  
**Bullet points:**
- Bilingual transcripts
- Phrase-level translation
- Study-friendly formatting

---

### Section F — Support / FAQ (inside Home, as you wanted)
**Title:** Support & FAQs  
Include 6 FAQs:
1) Do I need internet in class?  
   - Recording works offline; processing happens after sync.
2) Is UniBand for students only?  
   - Built for students, useful for anyone in lectures.
3) Which languages are supported?  
   - English + Sinhala (initially), expandable to more.
4) Is my audio private?  
   - You control recordings; privacy-first storage.
5) Can I search old lectures?  
   - Yes, searchable archive by module/date/topic.
6) Can I export notes?  
   - Export summaries as PDF / text (planned).

---

### Section G — CTA Banner (end)
**Title:** Join early access  
**Body:** Get early updates and a free sample summary workflow.  
**CTA button:** Join Early Access (goes to `/get-started`)

---

## 5.2 About Page (`/about`)

### Section A — Mission
**Title:** Why UniBand exists  
**Body (short):** Students shouldn’t choose between listening and writing. UniBand helps you focus on learning and still leave with clear notes.

### Section B — Who it’s for
- Undergraduates
- International students
- English-medium learners
- STEM / theory-heavy modules

### Section C — What makes it different
- Wearable-first capture (hands-free)
- Notes + summaries + translation in one flow
- “Explain this” assistant mode for confusing parts

### Section D — Vision (optional)
**Title:** The future of lecture learning  
**Body:** A personal academic assistant for every student, regardless of language background.

---

## 5.3 Features Page (`/features`) — SEO target

**Page intro:** A full breakdown of UniBand features for modern students.

### Feature blocks (use cards with short bullets)

1) **One-tap lecture recording**
- Hands-free and discreet
- Organized by module/date

2) **Accurate transcription**
- Clean, structured text
- Highlight key terms & definitions

3) **Smart notes & summaries**
- Bullet notes
- Topic sections
- Quick revision mode

4) **Multi-language translation (Sinhala + more)**
- Toggle language view
- Bilingual transcripts
- Better comprehension for ESL learners

5) **UniBand Assistant**
- “Explain in simple terms”
- Examples and clarifications
- “What’s exam-relevant?”

6) **Missed lecture recovery**
- Catch-up summaries
- Key concepts and action points

7) **Searchable archive**
- Search by keyword/topic
- Filter by module/week

8) **Exports & sharing**
- Export notes as PDF/text
- Share with classmates (optional)

---

## 5.4 Get Started Page (`/get-started`)

### Section A — Join Early Access
**Title:** Get UniBand early access  
**Body:** Leave your email to receive launch updates and be first in line for student discounts.

### Section B — Email capture form (React form)
Fields:
- Full name (optional)
- Email (required)
- University / Institute (optional)
- Preferred language (dropdown: English, Sinhala, Tamil, Other)
- Checkbox: “I’m okay receiving UniBand updates”

**CTA button:** Join Early Access

### Section C — What you get
- Early product updates
- Free “sample lecture summary” demo
- Invite to beta testing (optional)

---

## 5.5 Blog (`/blog`)

### Blog design
- Minimal card list: Title, 1-liner, date, read time, tag

### Starter blog posts (create 3 to start)
1) **How to take better lecture notes without burning out**  
   Tags: Study, Notes
2) **Learning in a second language: strategies that actually work**  
   Tags: Language, International students
3) **How to revise faster using summaries and active recall**  
   Tags: Revision, Productivity

Each post should end with a CTA:
- “Want UniBand to do this automatically? Join early access.”

---

## 6) Copywriting Rules (Keep it crisp)
- Headline: 6–10 words
- Subtext: 1–2 sentences
- Feature bullets: 3 bullets max
- Avoid heavy words like “LLM pipeline” / “deep learning architecture”
- Use benefit language: focus, understand, revise, translate, catch up

---

## 7) Components Checklist (React)

**Core components**
- `<Navbar />`
- `<Footer />`
- `<Hero />`
- `<FeatureGrid />`
- `<HowItWorks />`
- `<FAQ />`
- `<CTASection />`
- `<EmailSignupForm />`
- `<BlogList />`
- `<BlogPostTemplate />`

**Nice-to-have**
- `<LanguageToggleDemo />` (fake UI toggle English ⇄ Sinhala)
- `<TestimonialCarousel />` (mock testimonials)

---

## 8) SEO Plan (for your coursework later)

### Primary keywords (site-wide)
- lecture recorder wearable
- AI lecture notes
- lecture transcription for students
- lecture summary tool
- translate lecture transcript Sinhala

### Per-page intent
- Home: brand + problem/solution
- Features: high keyword density target
- Blog: long-tail keywords
- Get Started: conversion

### On-page SEO items
- Unique `<title>` and meta description per page
- H1 only once per page
- Use H2/H3 for section titles
- Add alt text to images
- Internal links:
  - Home → Features → Get Started
  - Blog posts → Get Started
- Add a simple sitemap (if you deploy)

---

## 9) Translation Feature (How to present it)
Call it **“Multi-language Translation”** on Features + Home spotlight.

Suggested microcopy:
- “Switch between English and Sinhala to understand faster.”
- “Bilingual transcripts help you revise with confidence.”
- “Designed for students learning in English-medium lectures.”

Avoid claiming perfect accuracy. Say:
- “High-quality translation with student-friendly formatting.”

---

## 10) Deployment Notes (Antigravity)
- Deploy as a static React site (or Next.js if you want dynamic blog routes).
- Add a basic analytics script later (for CW2/web analytics).
- Store form submissions via:
  - Google Forms embed, OR
  - Simple API endpoint (optional), OR
  - Airtable / Supabase (optional)

---

## 11) Assets You Need (Minimum)
- Logo text (UniBand) is enough
- 1 hero image (placeholder ok)
- 4 simple icons for benefits
- 1 “how it works” diagram (can be simple steps)
- Blog cover images (optional)

---

## 12) “Done” Definition (MVP Website)
- All 5 pages live + blog listing
- Home includes How It Works + FAQ/support
- Get Started page has working email capture
- Consistent nav/footer
- Clean mobile layout
- Basic meta tags

---

## 13) Next Step After You Build Skeleton
When you finish the first pass, do these next:
1) Replace placeholder copy with refined final copy  
2) Add 2–3 screenshots/visuals (even mockups)  
3) Add blog posts (at least 3)  
4) Prepare before/after SEO changes for CW evidence

---
