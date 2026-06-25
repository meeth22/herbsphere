import React from "react";
import { useTranslation } from "react-i18next";
import { GiHerbsBundle } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { key: "home", href: "#home" },
    { key: "plants", href: "#plants" },
    { key: "community", href: "#community" },
    { key: "aiAdvisor", href: "#ai" },
    { key: "selfie", href: "#selfie" },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="footer__top">
        <div className="footer__inner grid-4">
          
          {/* Column 1: Brand About */}
          <div className="footer__column brand-col">
            <a className="footer__logo" href="#home" onClick={(e) => { e.preventDefault(); handleNav("#home"); }}>
              <GiHerbsBundle className="footer__logo-icon" />
              <span>HerbSphere</span>
            </a>
            <p className="footer__desc">
              {t("footer.desc")}
            </p>
            <div className="footer__socials">
              <a href="#" className="social-link" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-link" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="social-link" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-link" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__column links-col">
            <h4 className="footer__title">{t("footer.quickLinks")}</h4>
            <ul className="footer__list">
              {quickLinks.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNav(href); }}
                    className="footer__link"
                  >
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer__column contact-col">
            <h4 className="footer__title">{t("footer.contact")}</h4>
            <ul className="footer__contact-list">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>12 Eco-Valley Park, Indiranagar, Bangalore, KA, India</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:hello@herbsphere.org">hello@herbsphere.org</a>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <a href="tel:+918023456789">+91 80 2345 6789</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Impact Statement */}
          <div className="footer__column newsletter-col">
            <h4 className="footer__title">{t("footer.visionTitle")}</h4>
            <p className="vision-text">
              "{t("footer.visionDesc")}"
            </p>
            <div className="footer__badges">
              <span className="footer-badge">☘️ {t("footer.ecoCertified")}</span>
              <span className="footer-badge">🤝 {t("footer.communityDriven")}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <div className="footer__copy-sig">
            <p>&copy; {new Date().getFullYear()} HerbSphere. {t("footer.rights")}</p>
            <p className="footer__signature">{t("footer.builtWith")}</p>
          </div>
          <div className="footer__bottom-links">
            <a href="#">{t("footer.privacyPolicy")}</a>
            <span>&bull;</span>
            <a href="#">{t("footer.termsOfService")}</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: #1b4332;
          color: rgba(255, 255, 255, 0.8);
          font-family: var(--font-body);
        }
        .footer__top {
          padding: 80px 24px 60px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .footer__inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer__column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .footer__logo {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
        }
        .footer__logo-icon {
          color: var(--light-green);
          font-size: 1.8rem;
        }
        .footer__desc {
          font-size: 0.88rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.7);
        }
        .footer__socials {
          display: flex;
          gap: 12px;
          margin-top: 4px;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: white;
          font-size: 0.95rem;
          transition: var(--transition);
        }
        .social-link:hover {
          background: var(--light-green);
          color: var(--deep-green);
          transform: translateY(-2px);
        }
        .footer__title {
          font-family: var(--font-display);
          color: white;
          font-size: 1.15rem;
          font-weight: 700;
          position: relative;
          padding-bottom: 12px;
        }
        .footer__title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 2px;
          background: var(--light-green);
        }
        .footer__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer__link {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.75);
          transition: var(--transition);
          text-decoration: none;
        }
        .footer__link:hover {
          color: white;
          padding-left: 6px;
        }
        .footer__contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer__contact-list li {
          display: flex;
          gap: 12px;
          font-size: 0.88rem;
          line-height: 1.5;
        }
        .contact-icon {
          color: var(--light-green);
          font-size: 1rem;
          margin-top: 3px;
          flex-shrink: 0;
        }
        .footer__contact-list a {
          color: inherit;
          transition: var(--transition);
          text-decoration: none;
        }
        .footer__contact-list a:hover {
          color: white;
        }
        .vision-text {
          font-size: 0.88rem;
          line-height: 1.65;
          font-style: italic;
          color: rgba(255, 255, 255, 0.65);
        }
        .footer__badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }
        .footer-badge {
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(116, 198, 157, 0.12);
          color: var(--light-green);
          border: 1px solid rgba(116, 198, 157, 0.25);
          padding: 4px 10px;
          border-radius: 4px;
        }
        .footer__bottom {
          padding: 28px 24px;
          background: #123023;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .footer__bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer__copy-sig {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        @media (max-width: 768px) {
          .footer__copy-sig {
            align-items: center;
          }
        }
        .footer__signature {
          font-size: 0.78rem;
          color: var(--light-green);
          font-weight: 500;
        }
        .footer__bottom-links {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .footer__bottom-links a {
          color: inherit;
          transition: var(--transition);
          text-decoration: none;
        }
        .footer__bottom-links a:hover {
          color: rgba(255, 255, 255, 0.8);
        }
        @media (max-width: 768px) {
          .footer__top {
            padding: 60px 24px 40px;
          }
          .footer__bottom {
            padding: 24px;
          }
          .footer__bottom-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
