export default function PageShell({ title, subtitle, children }) {
    return (
        <main className="page">
            <section className="page-hero">
                <div className="container">
                    <p className="eyebrow">UniBand</p>
                    <h1>{title}</h1>
                    {subtitle ? <p className="lead">{subtitle}</p> : null}
                </div>
            </section>
            {children}
        </main>
    )
}
