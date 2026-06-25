import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaLeaf } from "react-icons/fa";

export default function PlantCard({ plant, onClick }) {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language ? i18n.language.split("-")[0] : "en";
    const localData = plant[currentLang] || plant.en;

    return (
        <motion.div
            className="plant-card"
            whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(27,67,50,0.18)" }}
            transition={{ duration: 0.25 }}
            onClick={() => onClick(plant)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onClick(plant)}
            aria-label={`${t("directory.learnMore")} - ${localData.name}`}
        >
            {/* Image */}
            <div className="plant-card__img-wrap">
                <img
                    src={plant.image}
                    alt={localData.name}
                    className="plant-card__img"
                    loading="lazy"
                />
                <span className="plant-card__category" style={{ background: plant.color + "22", color: plant.color }}>
                    {localData.category}
                </span>
            </div>

            {/* Body */}
            <div className="plant-card__body">
                <h3 className="plant-card__name">{localData.name}</h3>
                <p className="plant-card__sci">{plant.scientificName}</p>

                {/* Uses preview */}
                <div className="plant-card__uses">
                    {localData.uses.slice(0, 3).map((use) => (
                        <span key={use} className="plant-card__use-tag">
                            <FaLeaf size={9} style={{ marginRight: 4 }} />
                            {use}
                        </span>
                    ))}
                </div>

                <button className="plant-card__btn">{t("directory.learnMore")}</button>
            </div>

            <style>{`
        .plant-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          cursor: pointer;
          border: 1px solid var(--cream-dark);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .plant-card__img-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .plant-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .plant-card:hover .plant-card__img {
          transform: scale(1.07);
        }
        .plant-card__category {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 20px;
          backdrop-filter: blur(6px);
        }
        .plant-card__body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .plant-card__name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          color: var(--deep-green);
          font-weight: 700;
          line-height: 1.2;
        }
        .plant-card__sci {
          font-size: 0.78rem;
          color: var(--text-light);
          font-style: italic;
          margin-top: -4px;
        }
        .plant-card__uses {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 4px 0;
        }
        .plant-card__use-tag {
          display: inline-flex;
          align-items: center;
          background: var(--pale-sage);
          color: var(--forest-green);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
        }
        .plant-card__btn {
          margin-top: auto;
          padding: 10px 0;
          background: var(--pale-sage);
          color: var(--forest-green);
          font-weight: 700;
          font-size: 0.82rem;
          border-radius: var(--radius-sm);
          border: none;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          letter-spacing: 0.03em;
        }
        .plant-card__btn:hover {
          background: var(--forest-green);
          color: white;
        }
      `}</style>
        </motion.div>
    );
}