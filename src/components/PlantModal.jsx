import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MdClose } from "react-icons/md";
import { FaLeaf, FaFlask, FaGlobeAsia, FaSeedling, FaStar } from "react-icons/fa";

export default function PlantModal({ plant, onClose }) {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language ? i18n.language.split("-")[0] : "en";
    const localData = plant ? (plant[currentLang] || plant.en) : null;

    // Close on Escape key
    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    if (!plant || !localData) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="modal-card"
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 30 }}
                    transition={{ type: "spring", stiffness: 280, damping: 26 }}
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                    aria-label={localData.name}
                >
                    {/* Header image */}
                    <div className="modal-img-wrap">
                        <img src={plant.image} alt={localData.name} className="modal-img" />
                        <div className="modal-img-overlay" />
                        <div className="modal-header-content">
                            <span className="modal-category" style={{ background: plant.color + "33", color: plant.color, border: `1px solid ${plant.color}55` }}>
                                {localData.category}
                            </span>
                            <h2 className="modal-title">{localData.name}</h2>
                            <p className="modal-sci">{plant.scientificName}</p>
                        </div>
                        <button className="modal-close" onClick={onClose} aria-label="Close">
                            <MdClose size={22} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="modal-body">
                        {/* Uses */}
                        <div className="modal-section">
                            <h4 className="modal-section-title">
                                <FaLeaf style={{ color: plant.color }} /> {t("modal.medicinalUses")}
                            </h4>
                            <ul className="modal-list">
                                {localData.uses.map((u) => <li key={u}>{u}</li>)}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="modal-section">
                            <h4 className="modal-section-title">
                                <FaFlask style={{ color: plant.color }} /> {t("modal.keyBenefits")}
                            </h4>
                            <ul className="modal-list">
                                {localData.benefits.map((b) => <li key={b}>{b}</li>)}
                            </ul>
                        </div>

                        {/* Traditional */}
                        <div className="modal-section">
                            <h4 className="modal-section-title">
                                <FaGlobeAsia style={{ color: plant.color }} /> {t("modal.traditionalUse")}
                            </h4>
                            <p className="modal-text">{localData.traditional}</p>
                        </div>

                        {/* Fact */}
                        <div className="modal-fact" style={{ borderLeft: `4px solid ${plant.color}` }}>
                            <FaStar style={{ color: plant.color }} />
                            <p>{localData.facts}</p>
                        </div>

                        {/* Meta */}
                        <div className="modal-meta">
                            <span className="modal-meta-item">
                                <FaGlobeAsia /> {t(`regions.${plant.region}`) || plant.region}
                            </span>
                            <span className="modal-meta-item">
                                <FaSeedling /> {t("modal.difficulty")}: {t(`modal.${plant.difficulty.toLowerCase()}`) || plant.difficulty}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10, 30, 20, 0.7);
          backdrop-filter: blur(6px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .modal-card {
          background: white;
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 24px 80px rgba(0,0,0,0.35);
        }
        .modal-img-wrap {
          position: relative;
          height: 240px;
          overflow: hidden;
          border-radius: var(--radius-xl) var(--radius-xl) 0 0;
        }
        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,30,20,0.8) 0%, transparent 50%);
        }
        .modal-header-content {
          position: absolute;
          bottom: 20px;
          left: 24px;
          right: 60px;
        }
        .modal-category {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
          display: inline-block;
          margin-bottom: 8px;
        }
        .modal-title {
          font-family: var(--font-display);
          font-size: 2rem;
          color: white;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .modal-sci {
          color: rgba(255,255,255,0.7);
          font-style: italic;
          font-size: 0.88rem;
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(4px);
          transition: background 0.2s;
        }
        .modal-close:hover { background: rgba(255,255,255,0.35); }
        .modal-body {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .modal-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-size: 0.95rem;
          color: var(--deep-green);
          margin-bottom: 10px;
          font-weight: 700;
        }
        .modal-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .modal-list li {
          font-size: 0.88rem;
          color: var(--text-mid);
          padding-left: 16px;
          position: relative;
          line-height: 1.5;
        }
        .modal-list li::before {
          content: "✦";
          position: absolute;
          left: 0;
          color: var(--mid-green);
          font-size: 0.6rem;
          top: 4px;
        }
        .modal-text {
          font-size: 0.88rem;
          color: var(--text-mid);
          line-height: 1.7;
        }
        .modal-fact {
          background: var(--pale-sage);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .modal-fact p {
          font-size: 0.85rem;
          color: var(--forest-green);
          line-height: 1.6;
          font-style: italic;
        }
        .modal-meta {
          display: flex;
          gap: 24px;
          padding-top: 8px;
          border-top: 1px solid var(--cream-dark);
        }
        .modal-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-light);
        }
        @media (max-width: 600px) {
          .modal-card { border-radius: var(--radius-lg); }
          .modal-title { font-size: 1.5rem; }
        }
      `}</style>
        </AnimatePresence>
    );
}