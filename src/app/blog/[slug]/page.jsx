import { blogPosts } from '../../../data/constants'

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const post = blogPosts.find((item) => item.slug === slug)

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.'
        }
    }

    return {
        title: `${post.title} - UniBand Blog`,
        description: post.excerpt || `Read ${post.title} on the UniBand Blog`,
    }
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params
    const post = blogPosts.find((item) => item.slug === slug)

    if (!post) {
        return (
            <main className="page">
                <section className="page-hero">
                    <div className="container">
                        <p className="eyebrow">UniBand</p>
                        <h1>Post not found</h1>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <p className="lead" style={{ color: 'var(--text-light-muted)' }}>
                            This post does not exist yet. Check back soon.
                        </p>
                        <a className="btn ghost-light" href="/blog">
                            Back to Blog
                        </a>
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main className="page">
            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">UniBand</p>
                    <h1>{post.title}</h1>
                    <p className="lead">{post.date} · {post.readTime}</p>
                </div>
            </section>
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
                        <a className="btn primary" href="/get-started" style={{ marginTop: '1rem' }}>
                            Join early access
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
