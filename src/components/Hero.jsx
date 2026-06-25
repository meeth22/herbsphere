import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaLeaf, FaUsers } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

export default function Hero() {
    const { t } = useTranslation();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="hero">
            {/* Background layers */}
            <div className="hero__bg" />
            <div className="hero__overlay" />

            {/* Floating botanical accents */}
            <div className="hero__floats" aria-hidden="true">
                {["🌿", "🌱", "🍃", "🌾", "🌺"].map((em, i) => (
                    <span key={i} className={`hero__float hero__float--${i + 1}`}>{em}</span>
                ))}
            </div>

            <div className="hero__content">
                {/* Label */}
                <motion.span
                    className="hero__label"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    <FaLeaf style={{ marginRight: 6 }} /> {t("hero.tagline")}
                </motion.span>

                {/* Main title */}
                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.7 }}
                >
                    🌿 {t("hero.title")}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    {t("hero.subtitle")}
                </motion.p>

                {/* Description */}
                <motion.p
                    className="hero__desc"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.7 }}
                >
                    {t("hero.description")}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="hero__actions"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <button className="btn btn-primary hero__btn-primary" onClick={() => scrollTo("plants")}>
                        <FaLeaf /> {t("hero.explorePlants")} <MdArrowForward />
                    </button>
                    <button className="btn btn-outline" onClick={() => scrollTo("community")}>
                        <FaUsers /> {t("hero.joinCommunity")}
                    </button>
                </motion.div>

                {/* Mini stats bar */}
                <motion.div
                    className="hero__stats"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    {[
                      ["500+", t("hero.plantsDocumented")],
                      ["2,500+", t("hero.communityMembers")],
                      ["100+", t("hero.eventsHeld")]
                    ].map(([num, label]) => (
                        <div key={label} className="hero__stat">
                            <strong>{num}</strong>
                            <span>{label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll cue */}
            <motion.div
                className="hero__scroll-cue"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
            >
                <span>↓</span>
            </motion.div>

            <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero__bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=80');
          background-size: cover;
          background-position: center;
          transform: scale(1.05);
          animation: heroZoom 20s ease-in-out infinite alternate;
        }
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.12); }
        }
        .hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(27, 67, 50, 0.88) 0%,
            rgba(45, 106, 79, 0.72) 50%,
            rgba(27, 67, 50, 0.82) 100%
          );
        }
        .hero__floats {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero__float {
          position: absolute;
          font-size: 2rem;
          opacity: 0.12;
          animation: floatDrift 12s ease-in-out infinite;
        }
        .hero__float--1 { top: 15%; left: 8%;  animation-delay: 0s;   font-size: 2.5rem; }
        .hero__float--2 { top: 65%; left: 5%;  animation-delay: 2s;   font-size: 1.8rem; }
        .hero__float--3 { top: 25%; right: 8%; animation-delay: 1s;   font-size: 3rem; }
        .hero__float--4 { top: 70%; right: 12%;animation-delay: 3s;   font-size: 2rem; }
        .hero__float--5 { top: 45%; left: 50%; animation-delay: 1.5s; font-size: 1.5rem; }
        @keyframes floatDrift {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-20px) rotate(8deg); }
        }
        .hero__content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 24px 80px;
          max-width: 760px;
          padding-left: 48px;
        }
        .hero__label {
          display: inline-flex;
          align-items: center;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          color: var(--light-green);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 24px;
        }
        .hero__title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 900;
          color: white;
          line-height: 1.1;
          margin-bottom: 16px;
          text-shadow: 0 2px 20px rgba(0,0,0,0.3);
        }
        .hero__subtitle {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          color: var(--light-green);
          font-style: italic;
          margin-bottom: 20px;
          font-weight: 400;
        }
        .hero__desc {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.82);
          line-height: 1.75;
          max-width: 560px;
          margin-bottom: 36px;
        }
        .hero__actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .hero__btn-primary {
          background: var(--light-green);
          color: var(--deep-green);
          font-weight: 700;
          box-shadow: 0 4px 20px rgba(116, 198, 157, 0.4);
        }
        .hero__btn-primary:hover {
          background: white;
          color: var(--deep-green);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255,255,255,0.3);
        }
        .hero__stats {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }
        .hero__stat {
          display: flex;
          flex-direction: column;
        }
        .hero__stat strong {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: white;
          line-height: 1;
        }
        .hero__stat span {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 4px;
        }
        .hero__scroll-cue {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          color: rgba(255,255,255,0.5);
          font-size: 1.4rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .hero__content { padding: 100px 24px 60px; max-width: 100%; }
          .hero__actions { flex-direction: column; }
          .hero__stats { gap: 20px; }
        }
      `}</style>
        </section>
    );
}