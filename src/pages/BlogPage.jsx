import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PageShell from '../components/PageShell'
import { blogPosts } from '../data/constants'

export default function BlogPage() {
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
