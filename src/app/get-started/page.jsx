
export const metadata = {
  title: 'Get Started - Join the Beta Program',
  description: 'Apply to test our intelligent wearable and AI-powered application before the official public release.',
}

import Link from 'next/link'
import PageShell from '../../components/PageShell'

export default function GetStartedPage() {
  return (
    <PageShell
      title="Apply for Early Access"
      subtitle="Be among the first to test our smart device and AI-powered application before the official release."
    >

      <section className="section">
        <div className="container contact-grid-centered">
          <div className="contact-form-wrap reveal" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h2 className="contact-form-title" style={{ marginBottom: '1rem' }}>Secure your spot</h2>
            <div className="muted" style={{ fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: '1.6', textAlign: 'left' }}>
              We're accepting a limited number of early applicants. Selected participants receive:
              <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>• Priority shipment of the wearable device</li>
                <li style={{ marginBottom: '0.5rem' }}>• 6 months of premium software features</li>
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
              Apply Now &nbsp;→
            </a>
          </div>

        </div>
      </section>

      {/* Early Access Benefits Section */}
      <section className="section benefits-section" style={{ borderTop: '1px solid var(--light-border)', background: 'var(--white)' }}>
        <div className="container">
          <div className="benefits-header reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>Why join early?</h2>
            <p className="lead" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Pioneer members get exclusive perks and help shape the future of our platform.
            </p>
          </div>

          <div className="early-benefits-grid">
            <div className="benefit-card reveal" style={{ '--delay': '0.1s' }}>
              <div className="benefit-icon" style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#eab308' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.91 8.18L16.14 16.8a2 2 0 0 1-1.74 1h-8.8a2 2 0 0 1-1.74-1l-4.77-8.62a2 2 0 0 1 0-2l4.77-8.62a2 2 0 0 1 1.74-1h8.8a2 2 0 0 1 1.74 1l4.77 8.62a2 2 0 0 1 0 2z" /><path d="M12 22v-4" /><path d="M12 6V2" /></svg>
              </div>
              <h3>6 Months Pro Access</h3>
              <p>Exclusive for undergraduates. Sign up with your university email and get six months of advanced features completely free.</p>
            </div>

            <div className="benefit-card reveal" style={{ '--delay': '0.15s' }}>
              <div className="benefit-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
              </div>
              <h3>Priority Hardware Delivery</h3>
              <p>Be among the very first to receive our intelligent hardware and AI software before the general launch.</p>
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
