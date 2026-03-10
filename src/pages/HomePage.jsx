import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'

export default function HomePage() {
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
            AI Note Taking
            <br />
            for Smarter Lectures
            <br />
            & <span className="accent-word">Faster Revision.</span>
          </h1>
          <p className="hero-subtitle hero-anim" style={{ '--anim-delay': '0.4s', marginBottom: '1rem' }}>
            UniBand is an AI note taking and lecture transcription tool designed for university students. Record lectures, generate clear summaries, and turn class content into searchable study material for faster revision.
          </p>
          <div className="muted hero-anim" style={{ '--anim-delay': '0.45s', marginBottom: '2.5rem', fontSize: '0.95rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: 'var(--radius)', display: 'inline-block' }}>
            <span style={{ marginRight: '0.5rem' }}></span> Limited Beta: Selected students receive early hardware access and 6 months of Pro features.
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
              Manual Note-Taking Slows Students Down.
            </h2>
            <p className="problem-desc">
              Traditional note-taking makes it difficult to capture every key point in fast-paced lectures. UniBand solves this with AI note taking, lecture transcription, and automatic lecture summaries that help students learn more efficiently.
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
              <span className="accent-word">AI Note Taking</span> Built for University Lectures.
            </h2>
            <p className="mission-desc">
              UniBand helps students record lectures, transcribe spoken content into text, and generate structured summaries for revision. This makes it easier to review lessons, find important ideas, and study more effectively.
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
              Learn More
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
              AI Note Taking, Lecture Transcription and Smart Study Tools
            </h2>
          </div>
          <div className="features-grid">
            {[
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>),
                title: 'AI Lecture Transcription',
                desc: 'Convert spoken lectures into structured text in real time, making it easier to review content and keep accurate lecture notes.',
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>),
                title: 'Automatic Lecture Summaries',
                desc: 'Generate clear lecture summaries, topic highlights, and revision points from your recorded sessions.',
              },
              {
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>),
                title: 'Study Tools for Students',
                desc: 'Search, organise, and revisit lecture content quickly using student-friendly AI study tools.',
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
