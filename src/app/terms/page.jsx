export const metadata = {
    title: 'Terms of Use - UniBand',
    description: 'A clear, student-friendly set of terms will live here.',
}

export default function TermsPage() {
    return (
        <main className="page">
            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">UniBand</p>
                    <h1>Terms of use</h1>
                </div>
            </section>
            <section className="section">
                <div className="container reveal">
                    <p className="lead" style={{ color: 'var(--text-light-muted)' }}>
                        A clear, student-friendly set of terms will live here.
                    </p>
                </div>
            </section>
        </main>
    )
}
