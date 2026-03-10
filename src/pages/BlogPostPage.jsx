import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { blogPosts } from '../data/constants'

export default function BlogPostPage() {
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
