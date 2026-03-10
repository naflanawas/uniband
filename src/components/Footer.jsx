'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
    const pathname = usePathname()
    const isHome = pathname === '/'
    const variant = isHome ? 'dark' : 'light'
    return (
        <footer className={`footer ${variant}`}>
            {/* Main footer grid */}
            <div className="container footer-grid">
                <div>
                    <h4>Product</h4>
                    <div className="footer-links">
                        <Link href="/features">Features</Link>
                        <Link href="/get-started">Early Access</Link>
                        <span>Pricing (Coming Soon)</span>
                        <span>Docs (Coming Soon)</span>
                    </div>
                </div>
                <div>
                    <h4>Resources</h4>
                    <div className="footer-links">
                        <Link href="/blog">Blog</Link>
                        <Link href="/about">About Us</Link>
                        <span>Support</span>
                        <span>FAQ</span>
                    </div>
                </div>
                <div>
                    <h4>Company</h4>
                    <div className="footer-links">
                        <Link href="/about">Our Story</Link>
                        <a href="mailto:hello@uniband.app">Contact Us</a>
                        <span>Careers</span>
                        <span>Partners</span>
                    </div>
                </div>
                <div>
                    <h4>Legal</h4>
                    <div className="footer-links">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <span>Cookie Policy</span>
                    </div>
                </div>
                <div>
                    <h4>Download our Apps</h4>
                    <div className="footer-app-badges">
                        <a href="#" className="app-badge" aria-label="Download on App Store">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.56C5.55 8.1 7.13 7.18 8.82 7.16C10.1 7.14 11.32 8.03 12.11 8.03C12.89 8.03 14.37 6.96 15.92 7.12C16.57 7.15 18.39 7.39 19.56 9.04C19.47 9.1 17.39 10.28 17.41 12.79C17.44 15.79 20.06 16.77 20.09 16.78C20.06 16.85 19.67 18.23 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" /></svg>
                            <div>
                                <small>Download on the</small>
                                <strong>App Store</strong>
                            </div>
                        </a>
                        <a href="#" className="app-badge" aria-label="Get it on Google Play">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3.18 23.31C3.06 23.04 3 22.72 3 22.37V1.63C3 1.28 3.06 0.96 3.18 0.69L12.73 10.24L3.18 23.31ZM16.81 14.32L5.44 21.16L14.65 12.16L16.81 14.32ZM20.16 10.71C20.7 11.06 21 11.5 21 12C21 12.5 20.7 12.94 20.16 13.29L17.89 14.64L15.5 12.24L17.89 9.85L20.16 10.71ZM5.44 2.84L16.81 9.68L14.65 11.84L5.44 2.84Z" /></svg>
                            <div>
                                <small>Get it on</small>
                                <strong>Google Play</strong>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom-bar">
                <div className="container footer-bottom-inner">
                    <div className="footer-bottom-contact">
                        <span>Email: <a href="mailto:hello@uniband.app">hello@uniband.app</a></span>
                    </div>
                    <div className="footer-socials">
                        <span>Connect with us</span>
                        <div className="social-icons">
                            <a href="#" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                            <a href="#" aria-label="YouTube">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="container footer-copyright">
                <span>© 2026 UniBand. All rights reserved.</span>
            </div>
        </footer>
    )
}
