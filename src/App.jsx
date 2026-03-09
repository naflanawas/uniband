import './App.css'
import { Helmet } from 'react-helmet-async'
import { Fragment, useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from 'react-router-dom'

const blogPosts = [
  {
    slug: 'why-were-building-uniband',
    title: 'Why We’re Building UniBand: A Wearable AI Study Assistant Concept',
    excerpt: 'We believe university students need a better way to capture and understand lectures. Here is the story behind UniBand and why we are building the ultimate AI study wearable.',
    date: 'Mar 2, 2026',
    readTime: '4–5 min read',
    tag: 'Technology',
    image: '/images/uniBlog.png',
    mediumUrl: 'https://medium.com/@naflanawas/do-university-students-need-a-smarter-way-to-record-lectures-586076f85cd7'
  },
  {
    slug: 'record-university-lectures-guide',
    title: 'Best Ways to Record University Lectures in 2026: A Complete Guide',
    excerpt: 'Stop missing important points. Compare audio recorders, transcriber apps, and the latest AI wearable devices designed specifically for university students.',
    date: 'Feb 9, 2026',
    readTime: '4 min read',
    tag: 'Technology',
    image: '/images/noteTaking.png',
  },
  {
    slug: 'study-english-second-language',
    title: 'How to Study Effectively When English Isn\'t Your First Language',
    excerpt: 'Struggling to keep up with fast-paced English-medium lectures? Discover translation tools, auto-summarizers, and active learning strategies to boost your grades.',
    date: 'Feb 9, 2026',
    readTime: '5 min read',
    tag: 'Language',
    image: '/images/card1.png',
  },
  {
    slug: 'note-taking-long-lectures',
    title: 'The Ultimate Guide to Note-Taking for 3-Hour University Lectures',
    excerpt: 'Writing everything down doesn\'t work. Learn how top students use the Feynman technique, Cornell notes, and AI transcription to master long lecture halls.',
    date: 'Feb 9, 2026',
    readTime: '4 min read',
    tag: 'Study',
    image: '/images/card2.png',
  },
  {
    slug: 'ai-study-tools-transform-semester',
    title: '5 AI Study Tools That Will Transform Your Semester (and GPA)',
    url: 'https://gozuperly.medium.com/five-productivity-tools-for-college-students-d31c684c8d2',
    excerpt: 'From smart flashcards to wearable lecture recorders like UniBand, these breakthrough AI technologies are changing how university students prepare for exams.',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
    tag: 'Technology',
    image: '/images/card3.png',
  },
  {
    slug: 'missed-lecture-catch-up',
    title: 'What to Do When You Miss a Lecture: A Foolproof Catch-Up Strategy',
    excerpt: 'Missed a crucial class? Don\'t panic. Learn how to leverage shared lecture notes, AI summarization, and classmate recordings to get back on track instantly.',
    date: 'Jan 20, 2026',
    readTime: '5 min read',
    tag: 'Study',
    image: '/images/card4.png',
  },
  {
    slug: 'lecture-revision-strategy',
    title: 'How to Turn Raw Lecture Transcripts into High-Yield Revision Sheets',
    url: 'https://medium.com/@NeverCap/transcribe-lectures-into-study-notes-for-university-students-the-ultimate-guide-to-ai-powered-bb92075d776e',
    excerpt: 'Don\'t just re-read your notes. Discover the fastest workflow for converting hours of lecture audio into digestible, exam-ready summaries and flashcards.',
    date: 'Jan 15, 2026',
    readTime: '4 min read',
    tag: 'Revision',
    image: '/images/card5.png',
  },
]

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Features', to: '/features' },
  { label: 'Get Started', to: '/get-started' },
  { label: 'Blog', to: '/blog' },
]

function Navbar({ variant = 'dark' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className={`navbar ${variant}`}>
      <div className="container navbar-inner">
        <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
          UniBand
        </Link>

        {/* Hamburger toggle (mobile only) */}
        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="btn primary nav-cta"
            to="/get-started"
            onClick={() => setMenuOpen(false)}
          >
            Join Beta Program
          </Link>
        </nav>

        {/* Desktop CTA (visible only on larger screens) */}
        <Link className="btn primary desktop-cta" to="/get-started">
          Join Beta Program
        </Link>
      </div>
    </header>
  )
}

function Footer({ variant = 'dark' }) {
  return (
    <footer className={`footer ${variant}`}>
      {/* Main footer grid */}
      <div className="container footer-grid">
        <div>
          <h4>Product</h4>
          <div className="footer-links">
            <Link to="/features">Features</Link>
            <Link to="/get-started">Early Access</Link>
            <span>Pricing (Coming Soon)</span>
            <span>Docs (Coming Soon)</span>
          </div>
        </div>
        <div>
          <h4>Resources</h4>
          <div className="footer-links">
            <Link to="/blog">Blog</Link>
            <Link to="/about">About Us</Link>
            <span>Support</span>
            <span>FAQ</span>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <div className="footer-links">
            <Link to="/about">Our Story</Link>
            <a href="mailto:hello@uniband.app">Contact Us</a>
            <span>Careers</span>
            <span>Partners</span>
          </div>
        </div>
        <div>
          <h4>Legal</h4>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <span>Cookie Policy</span>
          </div>
        </div>
        <div>
          <h4>Download our Apps</h4>
          <div className="footer-app-badges">
            <a href="#" className="app-badge" aria-label="Download on App Store">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.56C5.55 8.1 7.13 7.18 8.82 7.16C10.1 7.14 11.32 8.03 12.11 8.03C12.89 8.03 14.37 6.96 15.92 7.12C16.57 7.15 18.39 7.39 19.56 9.04C19.47 9.1 17.39 10.28 17.41 12.79C17.44 15.79 20.06 16.77 20.09 16.78C20.06 16.85 19.67 18.23 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" /></svg>
              <div>
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </a>
            <a href="#" className="app-badge" aria-label="Get it on Google Play">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3.18 23.31C3.06 23.04 3 22.72 3 22.37V1.63C3 1.28 3.06 0.96 3.18 0.69L12.73 10.24L3.18 23.31ZM16.81 14.32L5.44 21.16L14.65 12.16L16.81 14.32ZM20.16 10.71C20.7 11.06 21 11.5 21 12C21 12.5 20.7 12.94 20.16 13.29L17.89 14.64L15.5 12.24L17.89 9.85L20.16 10.71ZM5.44 2.84L16.81 9.68L14.65 11.84L5.44 2.84Z" /></svg>
              <div>
                <small>Get it on</small>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <div className="footer-bottom-left">
            <span>© 2026 UniBand. All rights reserved.</span>
          </div>
          <div className="footer-bottom-contact">
            <span>Email: <a href="mailto:hello@uniband.app">hello@uniband.app</a></span>
          </div>
          <div className="footer-socials">
            <span>Connect with us</span>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container footer-copyright">
        <span>© 2026 UniBand. All rights reserved.</span>
      </div>
    </footer>
  )
}

function PageShell({ title, subtitle, children }) {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">UniBand</p>
          <h1>{title}</h1>
          {subtitle ? <p className="lead">{subtitle}</p> : null}
        </div>
      </section>
      {children}
    </main>
  )
}

/* ═══════════════════════════════════════════════════
   HOME PAGE — Voltpile-inspired layout
   ═══════════════════════════════════════════════════ */

function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <main className="home">
      <Helmet>
        <title>UniBand - AI-Powered Lecture Recorder Wearable</title>
        <meta name="description" content="Capture every word with the UniBand AI lecture recorder wearable. Get real-time transcriptions, smart summaries, and translated notes effortlessly." />
      </Helmet>
      {/* ── 1. Motion Hero Section ── */}
      <section className="hero-section">
        {/* Ambient glow effects */}
        <div className="hero-glow" />
        <div className="hero-glow-secondary" />

        {/* Floating feature cards around edges */}
        <div className="hero-floating-card float-tl hero-anim" style={{ '--anim-delay': '0.6s' }}>
          <div className="floating-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
          </div>
          <div>
            <strong>One-Tap Recording</strong>
            <span>Hands-free capture that works offline</span>
          </div>
        </div>

        <div className="hero-floating-card float-tr hero-anim" style={{ '--anim-delay': '0.8s' }}>
          <div className="floating-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
          </div>
          <div>
            <strong>AI-Powered Notes</strong>
            <span>Smart summaries from every lecture</span>
          </div>
        </div>

        <div className="hero-floating-card float-bl hero-anim" style={{ '--anim-delay': '1.0s' }}>
          <div className="floating-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
          </div>
          <div>
            <strong>Multi-Language Translation</strong>
            <span>Understand in your native language</span>
          </div>
        </div>

        <div className="hero-floating-card float-br hero-anim" style={{ '--anim-delay': '1.2s' }}>
          <div className="floating-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </div>
          <div>
            <strong>Searchable Archive</strong>
            <span>Find any topic across all lectures</span>
          </div>
        </div>

        {/* Center content with staggered animations */}
        <div className="hero-content">

          <h1 className="hero-title hero-anim" style={{ '--anim-delay': '0.2s' }}>
            AI Lecture Recorder
            <br />
            & Smart Study
            <br />
            <span className="accent-word">Companion.</span>
          </h1>
          <p className="hero-subtitle hero-anim" style={{ '--anim-delay': '0.4s', marginBottom: '1rem' }}>
            UniBand combines a lightweight smart wearable with an AI-powered mobile app that records, transcribes, translates and summarises your university lectures automatically.
          </p>
          <div className="muted hero-anim" style={{ '--anim-delay': '0.45s', marginBottom: '2.5rem', fontSize: '0.95rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: 'var(--radius)', display: 'inline-block' }}>
            <span style={{ marginRight: '0.5rem' }}>🎁</span> Limited Beta: Selected students receive early hardware access and 6 months of Pro features.
          </div>
          <div className="hero-actions hero-anim" style={{ '--anim-delay': '0.5s' }}>
            <Link className="btn ghost" to="/about">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust bar with university logos ── */}
      <section className="trust-bar">
        <div className="container">
          <p className="trust-label">Trusted by early adopters from</p>
          <div className="trust-logos">
            <div className="trust-logo-item">
              <img src="/images/Uni_emblem.jpg" alt="University of Moratuwa" />
              <span>University of Moratuwa</span>
            </div>
            <div className="trust-logo-item">
              <img src="/images/uoc.png" alt="University of Colombo" />
              <span>University of Colombo</span>
            </div>
            <div className="trust-logo-item">
              <img src="/images/sliit-logo.png" alt="SLIIT" />
              <span>SLIIT</span>
            </div>
            <div className="trust-logo-item">
              <img src="/images/pera.jpg" alt="University of Peradeniya" />
              <span>University of Peradeniya</span>
            </div>
            <div className="trust-logo-item">
              <img src="/images/iit.png" alt="IIT Sri Lanka" />
              <span>IIT Sri Lanka</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Problem statement (light bg) ── */}
      <section className="problem-section">
        <div className="container problem-grid">
          <div className="problem-text reveal">
            <p className="eyebrow">The Problem</p>
            <h2 className="problem-heading">
              Current note-taking is unsustainable.
            </h2>
            <p className="problem-desc">
              Students juggle writing, listening, and understanding — all at
              once. Fast-paced lectures, language barriers, and missed classes
              leave gaps that are hard to fill. It's time for a smarter approach.
            </p>
          </div>
          <div className="problem-image reveal" style={{ '--delay': '0.12s' }}>
            <img
              src="/images/problem.jpg"
              alt="UniBand AI lecture recorder on a desk — minimal campus lifestyle"
            />
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container mission-centered">
          <div className="mission-content reveal">
            <p className="eyebrow" style={{ color: 'var(--accent)' }}>Our Solution</p>
            <h2 className="mission-heading">
              Leading the way to a{' '}
              <span className="accent-word">smarter</span> lecture future.
            </h2>
            <p className="mission-desc">
              UniBand captures every session through a lightweight wearable band,
              then syncs with an AI-powered platform that generates structured
              notes, summaries, and translated transcripts in your native language.
            </p>
          </div>

          <div
            className="mission-video-container reveal"
            style={{ '--delay': '0.1s' }}
            onClick={() => setIsVideoPlaying(true)}
          >
            {!isVideoPlaying ? (
              <>
                <img
                  src="https://img.youtube.com/vi/Y91Bf2lBcM8/maxresdefault.jpg"
                  alt="UniBand Solution Video Thumbnail"
                  className="video-thumbnail"
                />
                <div className="play-button-overlay">
                  <div className="play-button">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </>
            ) : (
              <iframe
                className="mission-video"
                src="https://www.youtube.com/embed/Y91Bf2lBcM8?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1"
                title="UniBand YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            <div className="video-overlay-glow" />
          </div>

          <div className="mission-actions reveal" style={{ '--delay': '0.2s' }}>
            <Link className="btn primary" to="/about">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. Feature cards (light bg) ── */}
      <section className="features-section">
        <div className="container">
          <div className="features-header reveal">
            <p className="eyebrow">Features</p>
            <h2 className="features-heading">
              A complete, smart lecture ecosystem.
            </h2>
          </div>
          <div className="features-grid">
            {[
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>),
                title: 'One-tap recording',
                desc: 'Tap once and listen. Discreet, hands-free capture that works offline.',
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>),
                title: 'Smart notes & summaries',
                desc: 'AI-generated bullet notes, key definitions, and quick-revision summaries.',
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>),
                title: 'Multi-language translation',
                desc: 'Toggle between English and Sinhala with study-friendly formatting.',
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>),
                title: 'AI study assistant',
                desc: 'Ask questions, get explanations, and clarify difficult concepts instantly.',
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>),
                title: 'Searchable archive',
                desc: 'Search by keyword, topic, module, or date across all your lectures.',
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>),
                title: 'Export & share',
                desc: 'Download notes as PDF or text. Share with classmates effortlessly.',
              },
            ].map((f, i) => (
              <div
                className="feature-card reveal"
                key={f.title}
                style={{ '--delay': `${i * 0.06}s` }}
              >
                <div className="card-icon-wrap">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Product showcase (dark) ── */}
      <section className="showcase-section">
        <div className="container showcase-grid">
          <div className="showcase-image reveal">
            <img
              src="/images/wristband.png"
              alt="UniBand AI lecture recorder wearable interface concept"
            />
          </div>
          <div className="showcase-text reveal" style={{ '--delay': '0.12s' }}>
            <p className="eyebrow">Industry-leading focus</p>
            <h2>Hands-free capture, zero distractions.</h2>
            <p>
              Tap once, keep listening. UniBand handles the capture and the
              platform handles the understanding.
            </p>
            <ul className="showcase-list">
              <li>Discreet wearable-first recording</li>
              <li>Auto-organized by module and date</li>
              <li>Private, student-first storage</li>
            </ul>
          </div>
        </div>
      </section>


      {/* ── 8. Image row (dark) ── */}
      <section className="image-row-section">
        <div className="container image-row">
          <div className="image-card reveal">
            <img src="/images/modelBand.png" alt="UniBand product variants" />
            <div className="image-card-body">
              <h3>Designed for daily campus use</h3>
              <p>Durable, lightweight, and comfortable for long lectures.</p>
            </div>
          </div>
          <div className="image-card reveal" style={{ '--delay': '0.1s' }}>
            <img src="/images/mbDesign.png" alt="UniBand close-up detail" />
            <div className="image-card-body">
              <h3>Premium build quality</h3>
              <p>Brushed metal clasp with woven textile strap — built to last.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Translation showcase (dark) ── */}
      <section className="showcase-section">
        <div className="container showcase-grid reverse">
          <div className="showcase-image reveal">
            <img
              src="/images/mb.png"
              alt="UniBand AI lecture recorder wearable in minimal lighting"
            />
          </div>
          <div className="showcase-text reveal" style={{ '--delay': '0.12s' }}>
            <p className="eyebrow">Multi-language translation</p>
            <h2>Understand in your language.</h2>
            <p>
              Toggle between English and Sinhala with study-friendly formatting.
              Perfect for international and bilingual students.
            </p>
            <div className="translation-panel">
              <div className="toggle">
                <span className="active">English</span>
                <span>Sinhala</span>
              </div>
              <div className="translation-card">
                <p>"The cell membrane regulates exchange of materials."</p>
                <p className="translated">
                  "කෝෂ පටලය ද්‍රව්‍ය හුවමාරුව පාලනය කරයි."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Stats (light bg) ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-header reveal">
            <p className="eyebrow">By the Numbers</p>
            <h2>Built for real student impact.</h2>
          </div>
          <div className="stats-grid reveal" style={{ '--delay': '0.1s' }}>
            <div className="stat-card">
              <span className="stat-number stat-accent">200+</span>
              <span className="stat-label">Early access sign-ups</span>
            </div>
            <div className="stat-card">
              <span className="stat-number stat-accent">15+</span>
              <span className="stat-label">Universities represented</span>
            </div>
            <div className="stat-card">
              <span className="stat-number stat-accent">50+</span>
              <span className="stat-label">Beta testers onboarded</span>
            </div>
            <div className="stat-card">
              <span className="stat-number stat-accent">98%</span>
              <span className="stat-label">Would recommend to a friend</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. Testimonials ── */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header reveal">
            <p className="eyebrow">What Students Say</p>
            <h2>Real feedback from real students.</h2>
          </div>
        </div>
        <div className="testimonial-carousel">
          <div className="testimonial-track">
            {[...Array(2)].map((_, setIdx) => (
              <Fragment key={setIdx}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-quote">
                    "I used to spend 2 hours rewriting my lecture notes every evening. With UniBand, I get clean summaries before I even leave the hall."
                  </p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">D</div>
                    <div>
                      <strong>Dinesh P.</strong>
                      <span>3rd Year, University of Moratuwa</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-quote">
                    "As an international student, the Sinhala translation feature is a lifesaver — I finally feel like I understand everything in my lectures."
                  </p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">S</div>
                    <div>
                      <strong>Sachini W.</strong>
                      <span>2nd Year, University of Colombo</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-quote">
                    "I missed a week of lectures due to illness. UniBand's catch-up summaries helped me get back on track in one afternoon."
                  </p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">K</div>
                    <div>
                      <strong>Kavinda R.</strong>
                      <span>Final Year, SLIIT</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-quote">
                    "The searchable archive is amazing. I can find any topic from any lecture just by typing a keyword. Exam prep has never been this easy."
                  </p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">A</div>
                    <div>
                      <strong>Amaya F.</strong>
                      <span>2nd Year, University of Peradeniya</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-quote">
                    "As a STEM student, I need to focus 100% on the lecturer. UniBand records and summarises everything so I can just listen and think."
                  </p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">R</div>
                    <div>
                      <strong>Ravindu J.</strong>
                      <span>3rd Year, IIT Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. FAQ (light bg) ── */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header reveal">
            <p className="eyebrow">Support</p>
            <h2 className="faq-heading">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list reveal" style={{ '--delay': '0.1s' }}>
            {[
              {
                q: 'What is UniBand and how does it work?',
                a: 'UniBand is an AI-powered lecture recording system that combines a lightweight wearable device with a smart mobile application.During a lecture, the wearable captures high-quality audio. The mobile app then uses advanced AI to automatically convert the lecture into searchable text, generate structured summaries, highlight key concepts, and even translate the content into the student’s preferred language.This allows students to focus on listening in class instead of rushing to take notes, and later review concise, organised study material within minutes.',
              },
              {
                q: 'Does UniBand support multilingual translation?',
                a: 'Yes. UniBand supports lecture translation into selected regional languages, including Sinhala and Tamil, with future expansion planned.Students can switch between the original transcript and translated versions directly within the app. This feature is particularly helpful for students who understand spoken English but prefer revising in their native language for better comprehension.',
              },
              {
                q: 'How accurate is the AI transcription and summarisation?',
                a: 'UniBand uses advanced speech recognition models trained to handle academic vocabulary and classroom environments.The system filters background noise and identifies speaker patterns to improve transcription clarity. Summaries are generated using AI models that extract key points, definitions, and core concepts rather than rewriting the entire lecture.While no AI system is 100% perfect, UniBand is continuously improving through updates and user feedback to enhance accuracy and performance',
              },
              {
                q: 'Can I search old lectures?',
                a: 'Yes. UniBand automatically converts every recorded lecture into searchable text, allowing you to quickly find specific topics, keywords, or definitions from past classes.Instead of replaying hours of audio, students can simply type a keyword—such as “binary trees” or “marketing funnel”—into the app’s search bar. UniBand instantly locates the exact section of the transcript where the topic was discussed and links it to the relevant summary points.All lectures are securely stored in your personal archive, making it easy to revisit content before exams, assignments, or revision sessions.',
              },
              {
                q: 'Is my lecture data private and secure?',
                a: 'Yes. Student privacy is a core priority.All lecture recordings and transcripts are securely stored and encrypted within the UniBand system. Users maintain full control over their content, and recordings are never shared or sold to third parties.UniBand is designed strictly for personal academic use, ensuring students can review their lectures confidently and securely.',
              },
            ].map((item) => (
              <details key={item.q} className="faq-item">
                <summary>
                  <span className="faq-question">{item.q}</span>
                  <span className="faq-chevron">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. Marquee ticker ── */}
      <section className="marquee-section">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={`c-${i}`}>
              join&nbsp;early&nbsp;access&nbsp;·&nbsp;
              <span className="marquee-accent">UniBand</span>
              &nbsp;·&nbsp;smart&nbsp;wearable&nbsp;·&nbsp;lecture&nbsp;companion&nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </section >

      {/* ── 13. CTA ── */}
      < section className="cta-section" >
        <div className="container cta-inner">
          <div className="reveal">
            <h2>Join early access</h2>
            <p>
              Get early updates, a free sample summary workflow, and be first in
              line for student discounts at launch.
            </p>
          </div>
          <Link
            className="btn primary reveal"
            style={{ '--delay': '0.1s' }}
            to="/get-started"
          >
            Join Early Access
          </Link>
        </div>
      </section >
    </main >
  )
}

/* ═══════════════════════════════════════════════════
   SUB PAGES
   ═══════════════════════════════════════════════════ */

function AboutPage() {
  return (
    <PageShell
      title="About UniBand"
      subtitle="We believe every student deserves a personal lecture companion — regardless of language, learning style, or background."
    >
      <Helmet>
        <title>About Us - UniBand AI Lecture Recorder</title>
        <meta name="description" content="Learn about our mission to reimagine how students capture and understand their lectures with the UniBand AI lecture wearable device." />
      </Helmet>
      {/* Mission statement */}
      <section className="section">
        <div className="container">
          <h2 className="about-mission-heading reveal">
            We're building the bridge between{' '}
            <span className="features-highlight">listening</span> and{' '}
            <span className="features-highlight">learning</span>
          </h2>
          <div className="about-mission-text reveal" style={{ '--delay': '0.1s' }}>
            <p>
              In lecture halls around the world, students face the same impossible
              choice: listen carefully to the lecturer, or write everything down
              before it disappears. Most end up doing neither well. Notes are
              incomplete, attention is divided, and learning suffers.
            </p>
            <p>
              UniBand was created to solve this. We're building a smart wearable
              that captures lectures hands-free, then uses AI to transform recordings
              into clean transcriptions, structured summaries, and multilingual
              translations — all delivered to your phone in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="section alt">
        <div className="container about-story-grid">
          <div className="about-story-image reveal">
            <img src="/images/aboutUs.png" alt="The UniBand story - AI lecture recorder wearable device" />
            <div className="about-story-quote-card">
              <p>"Making learning accessible, one lecture at a time"</p>
              <span>UniBand Team</span>
            </div>
          </div>
          <div className="about-story-content reveal" style={{ '--delay': '0.15s' }}>
            <p className="eyebrow" style={{ color: 'var(--accent)' }}>Our Story</p>
            <h2>Born from a real student struggle</h2>
            <p>
              UniBand started when our founders — university students in Sri Lanka —
              realized that attending English-medium lectures while thinking in
              Sinhala or Tamil meant they were always one step behind. Writing notes
              meant missing what the lecturer said next. Not writing meant forgetting
              everything after class.
            </p>
            <blockquote className="about-quote">
              "We wanted a device that could sit on your wrist, quietly record
              everything, and give you perfect notes in your own language — without
              you lifting a pen."
            </blockquote>
            <p>
              That idea became UniBand: a wearable-first platform that combines
              speech recognition, AI summarisation, and real-time translation to
              give every student an unfair advantage in the lecture hall.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section">
        <div className="container">
          <p className="eyebrow reveal" style={{ color: 'var(--accent)', textAlign: 'center' }}>Who It's For</p>
          <h2 className="reveal" style={{ textAlign: 'center', marginBottom: '3rem', '--delay': '0.05s' }}>Built for students like you</h2>
          <div className="about-audience-grid">
            <div className="about-audience-card reveal" style={{ '--delay': '0.1s' }}>
              <div className="about-audience-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 10 3 12 0v-5" /></svg>
              </div>
              <h4>Undergraduates</h4>
              <p>Struggling to keep up in fast-paced lectures? UniBand captures everything so you can focus on understanding.</p>
            </div>
            <div className="about-audience-card reveal" style={{ '--delay': '0.15s' }}>
              <div className="about-audience-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <h4>International Students</h4>
              <p>Learning in a second language is hard. Get bilingual transcripts and translations that bridge the gap.</p>
            </div>
            <div className="about-audience-card reveal" style={{ '--delay': '0.2s' }}>
              <div className="about-audience-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
              </div>
              <h4>STEM Students</h4>
              <p>Complex theory-heavy modules need full attention. Let UniBand handle the notes while you absorb the concepts.</p>
            </div>
            <div className="about-audience-card reveal" style={{ '--delay': '0.25s' }}>
              <div className="about-audience-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h4>Accessibility Needs</h4>
              <p>Students with hearing difficulties or learning differences get AI-powered support in and outside class.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values pillars */}
      <section className="section alt">
        <div className="container">
          <p className="eyebrow reveal" style={{ color: 'var(--accent)', textAlign: 'center' }}>Our Values</p>
          <h2 className="reveal" style={{ textAlign: 'center', marginBottom: '3rem', '--delay': '0.05s' }}>What drives us</h2>
          <div className="about-values-grid">
            <div className="about-value-card reveal" style={{ '--delay': '0.1s' }}>
              <div className="about-value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Privacy-First</h3>
              <p>You own your data. Recordings stay on your device until you decide otherwise. We're transparent about everything we do with your information.</p>
            </div>
            <div className="about-value-card reveal" style={{ '--delay': '0.15s' }}>
              <div className="about-value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <h3>Student-Centred</h3>
              <p>Every feature we build starts with a real student problem. We test with real students, in real lectures, solving real frustrations.</p>
            </div>
            <div className="about-value-card reveal" style={{ '--delay': '0.2s' }}>
              <div className="about-value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
              <h3>Accessible Excellence</h3>
              <p>Premium learning tools shouldn't cost premium prices. We're committed to keeping UniBand affordable for every student worldwide.</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="section cta">
        <div className="container cta-inner">
          <div>
            <h2>Ready to transform how you learn?</h2>
            <p className="lead">
              Join thousands of students who are already on the early access list.
            </p>
          </div>
          <Link className="btn primary" to="/get-started">
            Join Early Access
          </Link>
        </div>
      </section>
    </PageShell>
  )
}

function FeaturesPage() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
      ),
      title: 'One-Tap Recording',
      desc: 'Start recording lectures with a single tap — hands-free, discreet, and automatically organized by module and date.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
      ),
      title: 'AI-Powered Real-Time Lecture Transcription',
      desc: 'AI-powered speech-to-text converts your lectures into clean, structured transcriptions with highlighted key terms and definitions.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
      ),
      title: 'Automated Lecture Summaries & Revision Points',
      desc: 'Get AI-generated bullet notes, topic sections, and quick revision summaries — perfect for exam prep and review sessions.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
      ),
      title: 'Multi-Language Translation',
      desc: 'Toggle between languages in real-time. Get bilingual transcripts to bridge language gaps and boost ESL comprehension.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
      ),
      title: 'UniBand Assistant',
      desc: 'Ask anything about your lecture — get simplified explanations, real-world examples, clarifications, and exam-relevant cues.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
      ),
      title: 'Searchable Archive',
      desc: 'Search your entire lecture history by keyword, topic, or module. Filter by week, date, or subject for instant access.',
    },
  ]

  return (
    <PageShell
      title="Features built for modern students"
      subtitle="Everything you need to capture, understand, and ace your lectures."
    >
      <Helmet>
        <title>Features - UniBand AI Lecture Transcription & Summaries</title>
        <meta name="description" content="Explore UniBand's powerful AI features: real-time transcription, smart summaries, multi-language translation, and more." />
      </Helmet>
      {/* Mission statement */}
      <section className="section features-mission">
        <div className="container">
          <p className="eyebrow reveal" style={{ color: 'var(--accent)', textAlign: 'center' }}>Our Features</p>
          <h2 className="features-mission-heading reveal" style={{ '--delay': '0.1s' }}>
            Our Mission Is To Make Your{' '}
            <span className="features-highlight">Learning</span>{' '}
            Better Through Technology
          </h2>
        </div>
      </section>

      {/* Feature cards grid */}
      <section className="section">
        <div className="container features-grid">
          {features.map((feature, i) => (
            <div className="feature-card-v2 reveal" key={feature.title} style={{ '--delay': `${i * 0.05}s` }}>
              <div className="feature-icon-wrap">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extra capabilities */}
      <section className="section alt">
        <div className="container">
          <p className="eyebrow reveal" style={{ color: 'var(--accent)', textAlign: 'center' }}>More Capabilities</p>
          <h2 className="reveal" style={{ textAlign: 'center', marginBottom: '3rem', '--delay': '0.05s' }}>Everything Else You Need</h2>
          <div className="features-extras-grid">
            <div className="feature-extra-card reveal" style={{ '--delay': '0.1s' }}>
              <div className="feature-extra-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              </div>
              <h4>Export & Share</h4>
              <p>Export notes as PDF or text. Share transcriptions and summaries with classmates instantly.</p>
            </div>
            <div className="feature-extra-card reveal" style={{ '--delay': '0.15s' }}>
              <div className="feature-extra-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h4>Missed Lecture Recovery</h4>
              <p>Absent? Get comprehensive catch-up summaries with key concepts and action points.</p>
            </div>
            <div className="feature-extra-card reveal" style={{ '--delay': '0.2s' }}>
              <div className="feature-extra-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
              </div>
              <h4>Discreet, Lecture-Safe Wearable Design</h4>
              <p>Purpose-built for a wearable form factor — discreet, comfortable, and always ready for lectures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plan */}
      <section className="section pricing-section">
        <div className="container">
          <p className="eyebrow reveal" style={{ color: 'var(--accent)', textAlign: 'center' }}>Pricing Plan</p>
          <h2 className="pricing-heading reveal" style={{ '--delay': '0.05s' }}>Simple, Student-Friendly Pricing</h2>
          <p className="pricing-subtitle reveal" style={{ '--delay': '0.1s' }}>Start free. Upgrade when you need more power.</p>

          <div className="pricing-positioning reveal" style={{ '--delay': '0.12s', textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto', color: 'var(--text-light-muted)', lineHeight: '1.6' }}>
            <p><strong>UniBand is built to be affordable for students while delivering premium AI-powered lecture recording and transcription.</strong></p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}><em>Note: The UniBand wearable hardware is a one-time purchase. Software subscription plans (below) unlock advanced AI features.</em></p>
          </div>

          <div className="pricing-grid">
            {/* Free */}
            <div className="pricing-card reveal" style={{ '--delay': '0.15s' }}>
              <h3>Free</h3>
              <div className="pricing-price">
                <span className="pricing-amount">$0</span>
                <span className="pricing-period">/month</span>
              </div>
              <p className="pricing-tagline">Great for trying the app</p>
              <ul className="pricing-features">
                <li><span className="check">✓</span> 5 mobile app recordings/month</li>
                <li><span className="check">✓</span> Basic transcription</li>
                <li><span className="check">✓</span> Summary notes</li>
                <li><span className="check">✓</span> 1 language</li>
                <li><span className="check">✓</span> 7-day archive</li>
                <li className="pricing-feature-hardware"><span className="cross">✗</span> Wearable band requires Pro</li>
              </ul>
              <Link className="btn ghost pricing-btn" to="/get-started">Get Started</Link>
            </div>

            {/* Pro — highlighted */}
            <div className="pricing-card featured reveal" style={{ '--delay': '0.2s' }}>
              <span className="pricing-badge">Most Popular</span>
              <h3>Pro</h3>
              <div className="pricing-price">
                <span className="pricing-amount">$4.99</span>
                <span className="pricing-period">/month</span>
              </div>
              <p className="pricing-tagline">Unlock full AI & hardware support</p>
              <ul className="pricing-features">
                <li className="pricing-feature-hardware"><span className="check">✓</span> <strong>Syncs with UniBand Wearable</strong></li>
                <li><span className="check">✓</span> Unlimited recordings</li>
                <li><span className="check">✓</span> Advanced AI transcription</li>
                <li><span className="check">✓</span> Smart summaries & revision</li>
                <li><span className="check">✓</span> Multi-language translation</li>
                <li><span className="check">✓</span> UniBand Assistant</li>
                <li><span className="check">✓</span> Unlimited archive & search</li>
                <li><span className="check">✓</span> Export & share</li>
              </ul>
              <Link className="btn primary pricing-btn" to="/get-started">Get Started</Link>
            </div>

            {/* University */}
            <div className="pricing-card reveal" style={{ '--delay': '0.25s' }}>
              <h3>University</h3>
              <div className="pricing-price">
                <span className="pricing-amount">Custom</span>
              </div>
              <p className="pricing-tagline">For institutions & departments</p>
              <ul className="pricing-features">
                <li><span className="check">✓</span> Hardware bundles available</li>
                <li><span className="check">✓</span> Everything in Pro</li>
                <li><span className="check">✓</span> Bulk student licences</li>
                <li><span className="check">✓</span> Admin dashboard</li>
                <li><span className="check">✓</span> LMS integration</li>
                <li><span className="check">✓</span> Priority support</li>
                <li><span className="check">✓</span> Custom deployment</li>
              </ul>
              <Link className="btn ghost pricing-btn" to="/get-started">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container cta-inner">
          <div>
            <h2>Ready to experience UniBand?</h2>
            <p className="lead">
              Join early access and get student discounts at launch.
            </p>
          </div>
          <Link className="btn primary" to="/get-started">
            Join Early Access
          </Link>
        </div>
      </section>
    </PageShell>
  )
}

function GetStartedPage() {
  return (
    <PageShell
      title="Apply for UniBand Beta Program"
      subtitle="Be among the first students to test UniBand’s smart wearable and AI-powered app before public release."
    >
      <Helmet>
        <title>Get Started - Apply for UniBand Beta Program</title>
        <meta name="description" content="Apply for the UniBand Beta Program to test our smart wearable and AI-powered app before public release." />
      </Helmet>
      <section className="section">
        <div className="container contact-grid-centered">
          <div className="contact-form-wrap reveal" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h2 className="contact-form-title" style={{ marginBottom: '1rem' }}>Secure your spot</h2>
            <div className="muted" style={{ fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: '1.6', textAlign: 'left' }}>
              We're accepting a limited number of beta applicants. Selected students may receive:
              <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>• Early access to the UniBand wearable</li>
                <li style={{ marginBottom: '0.5rem' }}>• 6 months of Pro access</li>
                <li>• Priority feature updates</li>
              </ul>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeM9TOWX6V3I0giYP2SI26P7Fpx3rf7sBWd1LflAM-AEsZCRA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
              style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
            >
              Apply for Beta Access &nbsp;→
            </a>
          </div>

        </div>
      </section>

      {/* Early Access Benefits Section */}
      <section className="section benefits-section" style={{ borderTop: '1px solid var(--light-border)', background: 'var(--white)' }}>
        <div className="container">
          <div className="benefits-header reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>Why join early access?</h2>
            <p className="lead" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Early access members get exclusive perks and help shape the future of UniBand.
            </p>
          </div>

          <div className="early-benefits-grid">
            <div className="benefit-card reveal" style={{ '--delay': '0.1s' }}>
              <div className="benefit-icon" style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#eab308' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.91 8.18L16.14 16.8a2 2 0 0 1-1.74 1h-8.8a2 2 0 0 1-1.74-1l-4.77-8.62a2 2 0 0 1 0-2l4.77-8.62a2 2 0 0 1 1.74-1h8.8a2 2 0 0 1 1.74 1l4.77 8.62a2 2 0 0 1 0 2z" /><path d="M12 22v-4" /><path d="M12 6V2" /></svg>
              </div>
              <h3>6 Months Pro Access</h3>
              <p>Exclusive for students. Sign up with your university email and get 6 months of premium access completely free.</p>
            </div>

            <div className="benefit-card reveal" style={{ '--delay': '0.15s' }}>
              <div className="benefit-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
              </div>
              <h3>Priority Beta Access</h3>
              <p>Be among the very first to test our wearable hardware and AI software before the public release.</p>
            </div>

            <div className="benefit-card reveal" style={{ '--delay': '0.2s' }}>
              <div className="benefit-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              </div>
              <h3>Founding Member Pricing</h3>
              <p>Locked-in "Early Bird" pricing and significant discounts exclusively for our first 1,000 students.</p>
            </div>

            <div className="benefit-card reveal" style={{ '--delay': '0.25s' }}>
              <div className="benefit-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
              </div>
              <h3>Direct Feature Input</h3>
              <p>Join our exclusive community of early adopters and help our team decide which features to build next.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

function BlogPage() {
  const [activeTag, setActiveTag] = useState('All')
  const tags = ['All', ...new Set(blogPosts.map((p) => p.tag))]
  const featured = blogPosts[0]
  const filtered = activeTag === 'All' ? blogPosts.slice(1) : blogPosts.filter((p) => p.tag === activeTag && p.slug !== featured.slug)

  return (
    <PageShell
      title="The Blog"
      subtitle="Stay up to date on tips, strategies, and trends for smarter learning."
    >
      {/* Category filter bar */}
      <section className="blog-filter-bar">
        <div className="container blog-filter-inner">
          <span className="blog-filter-label">Browse the blog :</span>
          <div className="blog-filter-tags">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`blog-tag-btn ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {activeTag === 'All' && (
        <section className="section blog-featured">
          <div className="container blog-featured-inner reveal">
            <div className="blog-featured-image">
              <span className="blog-featured-badge">Read the latest</span>
              <img src={featured.image} alt={`${featured.title} - UniBand AI lecture recorder`} />
            </div>
            <div className="blog-featured-content reveal" style={{ '--delay': '0.1s' }}>
              <span className="pill">{featured.tag}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className="meta">
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
              {featured.url ? (
                <a className="btn ghost-dark blog-read-btn" href={featured.url} target="_blank" rel="noopener noreferrer">
                  Read Post
                </a>
              ) : (
                <Link className="btn ghost-dark blog-read-btn" to={`/blog/${featured.slug}`}>
                  Read Post
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Blog grid */}
      <section className="section">
        <div className="container blog-grid">
          {filtered.map((post, i) => (
            <article className="blog-card-v2 reveal" key={post.slug} style={{ '--delay': `${i * 0.05}s` }}>
              {post.url ? (
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="blog-card-image-link">
                  <img src={post.image} alt={`${post.title} - UniBand AI lecture recorder`} className="blog-card-img" />
                </a>
              ) : (
                <Link to={`/blog/${post.slug}`} className="blog-card-image-link">
                  <img src={post.image} alt={`${post.title} - UniBand AI lecture recorder`} className="blog-card-img" />
                </Link>
              )}
              <div className="blog-card-body">
                <div className="blog-card-meta-row">
                  <span className="pill">{post.tag}</span>
                  <span className="blog-card-date">{post.date}</span>
                </div>
                <h3>
                  {post.url ? (
                    <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                  ) : (
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  )}
                </h3>
                <p>{post.excerpt}</p>
                {post.url ? (
                  <a className="text-link blog-read-more" href={post.url} target="_blank" rel="noopener noreferrer">
                    Read More &nbsp;→
                  </a>
                ) : (
                  <Link className="text-link blog-read-more" to={`/blog/${post.slug}`}>
                    Read More &nbsp;→
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <PageShell title="Post not found">
        <section className="section">
          <div className="container">
            <p className="lead" style={{ color: 'var(--text-light-muted)' }}>
              This post does not exist yet. Check back soon.
            </p>
            <Link className="btn ghost-light" to="/blog">
              Back to Blog
            </Link>
          </div>
        </section>
      </PageShell>
    )
  }

  return (
    <PageShell title={post.title} subtitle={`${post.date} · ${post.readTime}`}>
      <Helmet>
        <title>{post.title} - UniBand Blog</title>
        <meta name="description" content={post.excerpt ? post.excerpt : `Read ${post.title} on the UniBand Blog`} />
      </Helmet>
      <section className="section">
        <div className="container reveal">
          {post.slug === 'why-were-building-uniband' ? (
            <>
              <p className="lead" style={{ color: 'var(--text-light-muted)' }}>
                We all know the struggle: trying to listen to the professor while frantically scribbling down notes. You end up missing key points, staring at incomplete sentences later that night, and feeling overwhelmed when exam season approaches.
              </p>
              <p className="muted" style={{ marginTop: '1.5rem', lineHeight: '1.7' }}>
                That’s exactly why we started designing UniBand. We envisioned a discreet, wearable device that effortlessly captures the audio of your lecture, transcribes it in real time, and uses AI to generate smart, structured summaries directly to your phone.
              </p>
              <p className="muted" style={{ marginTop: '1.5rem', lineHeight: '1.7' }}>
                Our goal is to eliminate divided attention in the lecture hall. No more missing vital details. Just a seamless bridge between listening and learning.
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <a
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn ghost-dark"
                >
                  Read the full article on Medium &nbsp;→
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="lead" style={{ color: 'var(--text-light-muted)' }}>{post.excerpt}</p>
              <p className="muted" style={{ marginTop: '1rem' }}>
                This is a starter template for the blog article. We can expand it
                with full content and images next.
              </p>
            </>
          )}

          <div className="card subtle cta-inline" style={{ marginTop: '4rem' }}>
            <h3>Want UniBand to do this automatically?</h3>
            <Link className="btn primary" to="/get-started" style={{ marginTop: '1rem' }}>
              Join early access
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

function SimplePage({ title, body }) {
  return (
    <PageShell title={title}>
      <Helmet>
        <title>{title} - UniBand</title>
      </Helmet>
      <section className="section">
        <div className="container reveal">
          <p className="lead" style={{ color: 'var(--text-light-muted)' }}>{body}</p>
        </div>
      </section>
    </PageShell>
  )
}

/* ═══════════════════════════════════════════════════
   APP + ROUTER
   ═══════════════════════════════════════════════════ */

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

function AppRoutes() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const observeNewElements = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el))
    }

    observeNewElements()

    const mutationObserver = new MutationObserver(() => {
      observeNewElements()
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [location.pathname])

  return (
    <>
      <Navbar variant={isHome ? 'dark' : 'light'} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route
          path="/privacy"
          element={
            <SimplePage
              title="Privacy policy"
              body="We keep your recordings private and only process them after you sync."
            />
          }
        />
        <Route
          path="/terms"
          element={
            <SimplePage
              title="Terms of use"
              body="A clear, student-friendly set of terms will live here."
            />
          }
        />
        <Route
          path="*"
          element={
            <SimplePage
              title="Page not found"
              body="That page does not exist yet."
            />
          }
        />
      </Routes>
      <Footer variant={isHome ? 'dark' : 'light'} />
    </>
  )
}

export default App
