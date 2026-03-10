export const metadata = {
    title: 'Privacy Policy - UniBand',
    description: 'We keep your recordings private and only process them after you sync.',
}

export default function PrivacyPage() {
    return (
        <main className="page">
            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">UniBand</p>
                    <h1>Privacy policy</h1>
                </div>
            </section>
            <section className="section">
                <div className="container reveal">
                    <p className="lead" style={{ color: 'var(--text-light-muted)' }}>
                        We keep your recordings private and only process them after you sync.
                    </p>
                </div>
            </section>
        </main>
    )
}
