import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GiHerbsBundle, GiPlantRoots } from "react-icons/gi";
import { MdSmartToy, MdGroups, MdCameraAlt } from "react-icons/md";

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.13, duration: 0.55, ease: "easeOut" },
    }),
};

export default function Features() {
    const { t } = useTranslation();

    const features = [
        {
            icon: <GiHerbsBundle size={32} />,
            color: "#52b788",
            bg: "#d8f3dc",
            titleKey: "features.medicinalPlants",
            descKey: "features.medicinalPlantsDesc",
            href: "#plants",
        },
        {
            icon: <MdSmartToy size={32} />,
            color: "#40916c",
            bg: "#b7e4c7",
            titleKey: "features.aiAdvisor",
            descKey: "features.aiAdvisorDesc",
            href: "#ai",
        },
        {
            icon: <MdGroups size={32} />,
            color: "#2d6a4f",
            bg: "#95d5b2",
            titleKey: "features.communityGarden",
            descKey: "features.communityGardenDesc",
            href: "#community",
        },
        {
            icon: <MdCameraAlt size={32} />,
            color: "#8b6914",
            bg: "#fef9ee",
            titleKey: "features.selfieGarden",
            descKey: "features.selfieGardenDesc",
            href: "#selfie",
        },
    ];

    return (
        <section className="section features-section">
            <div className="section-inner">
                <motion.div
                    className="section-header centered"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    <span className="section-label">{t("features.label")}</span>
                    <h2 className="section-title">{t("features.title")}</h2>
                    <p className="section-subtitle">{t("features.subtitle")}</p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feat, i) => (
                        <motion.a
                            href={feat.href}
                            key={i}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="feature-card"
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.querySelector(feat.href);
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <div className="feature-card__icon" style={{ background: feat.bg, color: feat.color }}>
                                {feat.icon}
                            </div>
                            <h3 className="feature-card__title">{t(feat.titleKey)}</h3>
                            <p className="feature-card__desc">{t(feat.descKey)}</p>
                            <span className="feature-card__cta" style={{ color: feat.color }}>
                                {t("features.explore")} →
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>

            <style>{`
        .features-section {
          background: var(--cream);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .feature-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: 32px 24px;
          box-shadow: var(--shadow-card);
          transition: var(--transition);
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border: 1px solid var(--cream-dark);
          cursor: pointer;
        }
        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
          border-color: var(--sage);
        }
        .feature-card__icon {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }
        .feature-card__title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          color: var(--deep-green);
          font-weight: 700;
        }
        .feature-card__desc {
          font-size: 0.88rem;
          color: var(--text-light);
          line-height: 1.65;
          flex: 1;
        }
        .feature-card__cta {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
}