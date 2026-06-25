import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GiHerbsBundle } from "react-icons/gi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";

const languages = [
    { code: "en", label: "EN", full: "English" },
    { code: "hi", label: "हि", full: "हिन्दी" },
    { code: "kn", label: "ಕ", full: "ಕನ್ನಡ" },
];

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    const currentLang = i18n.language ? i18n.language.split("-")[0] : "en";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!langOpen) return;
        const closeDropdown = (e) => {
            if (!e.target.closest(".lang-switcher")) {
                setLangOpen(false);
            }
        };
        document.addEventListener("click", closeDropdown);
        return () => document.removeEventListener("click", closeDropdown);
    }, [langOpen]);

    const navLinks = [
        { key: "home", href: "#home" },
        { key: "plants", href: "#plants" },
        { key: "community", href: "#community" },
        { key: "aiAdvisor", href: "#ai" },
        { key: "selfie", href: "#selfie" },
        { key: "contact", href: "#contact" },
    ];

    const handleNav = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
            <div className="navbar__inner">
                {/* Logo */}
                <a className="navbar__logo" href="#home" onClick={(e) => { e.preventDefault(); handleNav("#home"); }}>
                    <GiHerbsBundle className="navbar__logo-icon" />
                    <span>HerbSphere</span>
                </a>

                {/* Desktop links */}
                <ul className="navbar__links">
                    {navLinks.map(({ key, href }) => (
                        <li key={key}>
                            <a
                                href={href}
                                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                                className="navbar__link"
                            >
                                {t(`nav.${key}`)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Language switcher */}
                <div className="lang-switcher">
                    <button
                        className="lang-switcher__btn"
                        onClick={() => setLangOpen((p) => !p)}
                        aria-label="Change language"
                    >
                        <MdLanguage size={18} />
                        <span>{languages.find((l) => l.code === currentLang)?.label || "EN"}</span>
                    </button>
                    {langOpen && (
                        <div className="lang-switcher__dropdown">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    className={`lang-switcher__option${currentLang === lang.code ? " active" : ""}`}
                                    onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                                >
                                    {lang.full}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="navbar__hamburger"
                    onClick={() => setMenuOpen((p) => !p)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="navbar__mobile">
                    {navLinks.map(({ key, href }) => (
                        <a
                            key={key}
                            href={href}
                            className="navbar__mobile-link"
                            onClick={(e) => { e.preventDefault(); handleNav(href); }}
                        >
                            {t(`nav.${key}`)}
                        </a>
                    ))}
                    <div className="navbar__mobile-langs">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className={`lang-pill${currentLang === lang.code ? " active" : ""}`}
                                onClick={() => { i18n.changeLanguage(lang.code); setMenuOpen(false); }}
                            >
                                {lang.full}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: background 0.3s, box-shadow 0.3s;
          padding: 0 24px;
        }
        .navbar--scrolled {
          background: rgba(27, 67, 50, 0.97);
          box-shadow: 0 2px 20px rgba(0,0,0,0.2);
          backdrop-filter: blur(12px);
        }
        .navbar__inner {
          max-width: 1200px;
          margin: 0 auto;
          height: 68px;
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          text-decoration: none;
          flex-shrink: 0;
        }
        .navbar__logo-icon {
          color: var(--light-green);
          font-size: 1.6rem;
        }
        .navbar__links {
          display: flex;
          list-style: none;
          gap: 4px;
          margin-left: auto;
        }
        .navbar__link {
          color: rgba(255,255,255,0.85);
          font-size: 0.88rem;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          text-decoration: none;
        }
        .navbar__link:hover {
          color: white;
          background: rgba(255,255,255,0.1);
        }
        .lang-switcher {
          position: relative;
          flex-shrink: 0;
        }
        .lang-switcher__btn {
          display: flex;
          align-items: center;
          gap: 6px;
          color: white;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .lang-switcher__btn:hover { background: rgba(255,255,255,0.2); }
        .lang-switcher__dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: white;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          overflow: hidden;
          min-width: 120px;
        }
        .lang-switcher__option {
          display: block;
          width: 100%;
          padding: 10px 16px;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 0.88rem;
          color: var(--text-dark);
          transition: background 0.15s;
        }
        .lang-switcher__option:hover { background: var(--pale-sage); }
        .lang-switcher__option.active {
          background: var(--pale-sage);
          color: var(--forest-green);
          font-weight: 600;
        }
        .navbar__hamburger {
          display: none;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          margin-left: auto;
        }
        .navbar__mobile {
          background: var(--deep-green);
          padding: 16px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .navbar__mobile-link {
          color: rgba(255,255,255,0.9);
          padding: 12px 8px;
          font-size: 1rem;
          font-weight: 500;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
        }
        .navbar__mobile-langs {
          display: flex;
          gap: 8px;
          margin-top: 16px;
        }
        .lang-pill {
          padding: 6px 16px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.3);
          background: none;
          color: rgba(255,255,255,0.8);
          font-size: 0.82rem;
          cursor: pointer;
        }
        .lang-pill.active {
          background: var(--light-green);
          color: var(--deep-green);
          border-color: var(--light-green);
          font-weight: 700;
        }
        @media (max-width: 768px) {
          .navbar__links { display: none; }
          .lang-switcher { display: none; }
          .navbar__hamburger { display: block; }
        }
      `}</style>
        </nav>
    );
}