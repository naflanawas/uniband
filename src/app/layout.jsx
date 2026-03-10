import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollObserver from '../components/ScrollObserver'

export const metadata = {
    title: 'uniband | AI Lecture Recorder & Smart Note-Taking',
    description: 'Capture every word with the UniBand AI lecture recorder wearable. Get real-time transcriptions, smart summaries, and translated notes effortlessly.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
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
