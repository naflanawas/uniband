import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../data/constants'

export default function Navbar({ variant = 'dark' }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    return (
        <header className={`navbar ${variant}`}>
            <div className="container navbar-inner">
                <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
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
                            to={item.to}
                            className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        className="btn primary nav-cta"
                        to="/get-started"
                        onClick={() => setMenuOpen(false)}
                    >
                        Join Early Access
                    </Link>
                </nav>

                {/* Desktop CTA (visible only on larger screens) */}
                <Link className="btn primary desktop-cta" to="/get-started">
                    Join Early Access
                </Link>
            </div>
        </header>
    )
}
