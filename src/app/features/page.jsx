
export const metadata = {
  title: 'Features - UniBand AI Lecture Transcription & Summaries',
  description: "Explore UniBand's powerful AI features: real-time transcription, smart summaries, multi-language translation, and more.",
}

import Link from 'next/link'
import PageShell from '../../components/PageShell'

export default function FeaturesPage() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
      ),
      title: 'One-Tap Lecture Recording',
      desc: 'Start recording lectures instantly with a single tap, creating organised session files ready for transcription and review.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
      ),
      title: 'AI-Powered Lecture Transcription',
      desc: 'Convert lectures into searchable text with AI-powered transcription, making it easier to review key terms, definitions, and explanations.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
      ),
      title: 'Automatic Lecture Summaries and Revision Points',
      desc: 'Generate lecture summaries, key topic sections, and revision points that help students prepare for exams more efficiently.',
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
      title: 'Student Study Support Tools',
      desc: 'Use built-in study support tools to review class content, clarify concepts, and prepare revision material from recorded lectures.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
      ),
      title: 'Searchable Lecture Archive',
      desc: 'Search your lecture history by keyword, topic, or module to quickly find important sections from previous classes.',
    },
  ]

  return (
    <PageShell
      title="Lecture Transcription and AI Summaries for Students"
      subtitle="Everything you need to record lectures, transcribe spoken content into text, and generate summaries that make studying easier."
    >

      {/* Mission statement */}
      <section className="section features-mission">
        <div className="container">
          <p className="eyebrow reveal" style={{ color: 'var(--accent)', textAlign: 'center' }}>Our Features</p>
          <h2 className="features-mission-heading reveal" style={{ '--delay': '0.1s' }}>
            Turn Lectures into Searchable Notes and Summaries
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
          <h2 className="pricing-heading reveal" style={{ '--delay': '0.05s' }}>Student-Friendly Pricing for AI Lecture Transcription</h2>
          <p className="pricing-subtitle reveal" style={{ '--delay': '0.1s' }}>Start free. Upgrade when you need more power.</p>

          <div className="pricing-positioning reveal" style={{ '--delay': '0.12s', textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto', color: 'var(--text-light-muted)', lineHeight: '1.6' }}>
            <p><strong>UniBand gives students affordable access to lecture recording, AI note taking, transcription, and summaries in one platform.</strong></p>
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
              <Link className="btn ghost pricing-btn" href="/get-started">Get Started</Link>
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
              <Link className="btn primary pricing-btn" href="/get-started">Get Started</Link>
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
              <Link className="btn ghost pricing-btn" href="/get-started">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Try Lecture Transcription and AI Note Taking?</h2>
            <p className="lead">
              Join early access and explore how UniBand helps students record, transcribe, and summarise lectures more effectively.
            </p>
          </div>
          <Link className="btn primary" href="/get-started">
            Join Early Access
          </Link>
        </div>
      </section >
    </PageShell >
  )
}
