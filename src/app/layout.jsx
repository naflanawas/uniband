import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollObserver from '../components/ScrollObserver'
import Script from 'next/script'

export const metadata = {
    title: 'uniband | AI Lecture Recorder & Smart Note-Taking',
    description: 'Capture every word with the UniBand AI lecture recorder wearable. Get real-time transcriptions, smart summaries, and translated notes effortlessly.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Google tag (gtag.js) */}
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-5D7ZC7KKXW"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-5D7ZC7KKXW');
                        `,
                    }}
                />
            </head>
            <body>
                <div className="app">
                    <Navbar />
                    {children}
                    <Footer />
                    <ScrollObserver />
                </div>
            </body>
        </html>
    )
}
