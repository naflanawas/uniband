
export const metadata = {
  title: 'About Us - UniBand AI Lecture Recorder',
  description: 'Learn about our mission to reimagine how students capture and understand their lectures with the UniBand AI lecture wearable device.',
}

import Link from 'next/link'
import PageShell from '../../components/PageShell'

export default function AboutPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="We believe everyone deserves a personal lecture companion — regardless of language, learning style, or background."
    >

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
              Our AI wearable was created to solve this. We're building a smart device
              that captures lectures hands-free, then uses artificial intelligence to transform recordings
              into clean transcriptions, structured summaries, and multilingual
              translations — all delivered to your phone instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="section alt">
        <div className="container about-story-grid">
          <div className="about-story-image reveal">
            <img src="/images/aboutUs.png" alt="Our story - AI lecture recorder wearable device" />
            <div className="about-story-quote-card">
              <p>"Making learning accessible, one lecture at a time"</p>
              <span>The Founding Team</span>
            </div>
          </div>
          <div className="about-story-content reveal" style={{ '--delay': '0.15s' }}>
            <p className="eyebrow" style={{ color: 'var(--accent)' }}>Our Story</p>
            <h2>Born from a genuine struggle</h2>
            <p>
              The journey started when our founders — attending university in Sri Lanka —
              realized that attending English-medium classes while thinking in
              Sinhala or Tamil meant they were always one step behind. Writing notes
              meant missing what the professor said next. Not writing meant forgetting
              everything after the session.
            </p>
            <blockquote className="about-quote">
              "We wanted a device that could sit on your wrist, quietly record
              everything, and give you perfect notes in your own language — without
              you lifting a pen."
            </blockquote>
            <p>
              That idea evolved into our core product: a wearable-first platform that combines
              speech recognition, AI summarisation, and real-time translation to
              give every learner an unfair advantage in the hall.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section">
        <div className="container">
          <p className="eyebrow reveal" style={{ color: 'var(--accent)', textAlign: 'center' }}>Who It's For</p>
          <h2 className="reveal" style={{ textAlign: 'center', marginBottom: '3rem', '--delay': '0.05s' }}>Built for learners like you</h2>
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
              <h4>STEM Majors</h4>
              <p>Complex theory-heavy modules need full attention. Let our device handle the notes while you absorb the concepts.</p>
            </div>
            <div className="about-audience-card reveal" style={{ '--delay': '0.25s' }}>
              <div className="about-audience-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h4>Accessibility Needs</h4>
              <p>Individuals with hearing difficulties or learning differences get AI-powered support in and outside class.</p>
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
              <h3>User-Centred</h3>
              <p>Every feature we build starts with an actual problem. We test with active undergraduates, in live environments, solving genuine frustrations.</p>
            </div>
            <div className="about-value-card reveal" style={{ '--delay': '0.2s' }}>
              <div className="about-value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
              <h3>Accessible Excellence</h3>
              <p>Premium learning tools shouldn't cost premium prices. We're committed to keeping our technology affordable for everyone worldwide.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="section cta">
        <div className="container cta-inner">
          <div>
            <h2>Ready to transform how you learn?</h2>
            <p className="lead">
              Download the app today and start capturing your lectures smarter.
            </p>
          </div>
          <Link className="btn primary" href="/get-started">
            Download App
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
