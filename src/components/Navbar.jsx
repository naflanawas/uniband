'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '../data/constants'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()
    const isHome = pathname === '/'
    const variant = isHome ? 'dark' : 'light'

    return (
        <header className={`navbar ${variant}`}>
            <div className="container navbar-inner">
                <Link className="logo" href="/" onClick={() => setMenuOpen(false)}>
                    UniBand
                </Link>

                {/* Hamburger toggle (mobile only) */}
                <button
                    className={`nav-toggle ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            href={item.to}
                            className={`nav-link ${pathname === item.to ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        className="btn primary nav-cta"
                        href="/get-started"
                        onClick={() => setMenuOpen(false)}
                    >
                        Download App
                    </Link>
                </nav>

                {/* Desktop CTA (visible only on larger screens) */}
                <Link className="btn primary desktop-cta" href="/get-started">
                    Download App
                </Link>
            </div>
        </header>
    )
}
