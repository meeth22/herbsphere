import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { plants, categories } from "../data/plants.js";
import PlantCard from "./PlantCard.jsx";

export default function PlantDirectory({ onSelectPlant }) {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter plants based on search query and selected category
  const filteredPlants = useMemo(() => {
    const currentLang = i18n.language ? i18n.language.split("-")[0] : "en";

    return plants.filter((plant) => {
      const matchesCategory =
        selectedCategory === "All" ||
        plant.category.toLowerCase() === selectedCategory.toLowerCase();

      const searchLower = searchQuery.toLowerCase();
      const localData = plant[currentLang] || plant.en;

      const matchesLocal =
        localData.name.toLowerCase().includes(searchLower) ||
        localData.uses.some((use) => use.toLowerCase().includes(searchLower)) ||
        localData.benefits.some((benefit) => benefit.toLowerCase().includes(searchLower));

      const matchesEnglish =
        plant.en.name.toLowerCase().includes(searchLower) ||
        plant.en.uses.some((use) => use.toLowerCase().includes(searchLower)) ||
        plant.en.benefits.some((benefit) => benefit.toLowerCase().includes(searchLower));

      const matchesScientific = plant.scientificName.toLowerCase().includes(searchLower);

      const matchesSearch = matchesLocal || matchesEnglish || matchesScientific;

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, i18n.language]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="section directory-section" id="plants">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t("directory.label")}</span>
          <h2 className="section-title">{t("directory.title")}</h2>
          <p className="section-subtitle">{t("directory.subtitle")}</p>
        </motion.div>

        {/* Search & Filter Controls */}
        <div className="directory__controls">
          {/* Search Bar */}
          <div className="directory__search-wrapper">
            <FiSearch className="directory__search-icon" />
            <input
              type="text"
              placeholder={t("directory.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="directory__search-input"
              aria-label="Search medicinal plants"
            />
            {searchQuery && (
              <button
                className="directory__clear-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="directory__filters">
            {categories.map((cat) => {
              const displayLabel = cat === "All" ? t("directory.allCategories") : t(`category.${cat}`);
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  className={`directory__filter-btn${isActive ? " active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {displayLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Plant Grid */}
        <AnimatePresence mode="wait">
          {filteredPlants.length > 0 ? (
            <motion.div
              className="directory__grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              key={selectedCategory + searchQuery}
            >
              {filteredPlants.map((plant) => (
                <motion.div key={plant.id} variants={itemVariants} layout>
                  <PlantCard plant={plant} onClick={onSelectPlant} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="directory__no-results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p>{t("directory.noResults")}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .directory-section {
          background: #fdfbf7;
          border-top: 1px solid var(--cream-dark);
          border-bottom: 1px solid var(--cream-dark);
        }
        .directory__controls {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 48px;
        }
        .directory__search-wrapper {
          position: relative;
          max-width: 600px;
          width: 100%;
          margin: 0 auto;
        }
        .directory__search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
          font-size: 1.2rem;
          pointer-events: none;
        }
        .directory__search-input {
          width: 100%;
          padding: 16px 48px 16px 52px;
          border-radius: 50px;
          border: 2px solid var(--cream-dark);
          background: white;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-dark);
          outline: none;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(27, 67, 50, 0.04);
        }
        .directory__search-input:focus {
          border-color: var(--mid-green);
          box-shadow: 0 8px 24px rgba(64, 145, 108, 0.12);
        }
        .directory__clear-btn {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.4rem;
          color: var(--text-light);
          cursor: pointer;
          line-height: 1;
        }
        .directory__clear-btn:hover {
          color: var(--text-dark);
        }
        .directory__filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .directory__filter-btn {
          background: white;
          border: 1px solid var(--cream-dark);
          color: var(--text-mid);
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: var(--font-accent);
          transition: var(--transition);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }
        .directory__filter-btn:hover {
          border-color: var(--light-green);
          color: var(--forest-green);
          background: var(--pale-sage);
        }
        .directory__filter-btn.active {
          background: var(--forest-green);
          border-color: var(--forest-green);
          color: white;
          box-shadow: 0 4px 12px rgba(45, 106, 79, 0.25);
        }
        .directory__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .directory__grid > div {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .directory__no-results {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: var(--radius-lg);
          border: 1px dashed var(--cream-dark);
          color: var(--text-light);
          font-size: 1.05rem;
        }
        @media (max-width: 1200px) {
          .directory__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 900px) {
          .directory__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .directory__grid {
            grid-template-columns: 1fr;
          }
          .directory__search-input {
            padding: 14px 40px 14px 44px;
            font-size: 0.9rem;
          }
          .directory__filters {
            gap: 8px;
          }
          .directory__filter-btn {
            padding: 6px 14px;
            font-size: 0.78rem;
          }
        }
      `}</style>
    </section>
  );
}
