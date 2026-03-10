import { Helmet } from 'react-helmet-async'

import PageShell from '../components/PageShell'

export default function SimplePage({ title, body }) {
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
