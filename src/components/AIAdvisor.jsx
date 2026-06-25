import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf, FaCompass, FaHeartbeat } from "react-icons/fa";
import { getPlantRecommendation } from "../services/geminiService.js";
import { plants } from "../data/plants.js";

export default function AIAdvisor() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.split("-")[0] : "en";

  const fallbackTranslations = {
    en: {
      intro: "Our smart local recommendation engine selected these powerful medicinal plants from our database to fit your needs:",
      goalFit: "Health Goal Fit",
      excellent: "Excellent for",
      benefits: "Benefits include",
      growing: "Growing",
      climate: "climate",
      difficulty: "Difficulty",
      growsIn: "grows naturally in",
      greatAddition: "regions, making it a great addition to your garden.",
      usage: "Usage",
      applied: "Traditionally applied in"
    },
    hi: {
      intro: "हमारे स्मार्ट स्थानीय अनुशंसा इंजन ने आपकी आवश्यकताओं के अनुसार हमारे डेटाबेस से इन शक्तिशाली औषधीय पौधों को चुना है:",
      goalFit: "स्वास्थ्य लक्ष्य अनुकूलता",
      excellent: "उत्कृष्ट है",
      benefits: "लाभों में शामिल हैं",
      growing: "उगाना",
      climate: "जलवायु",
      difficulty: "कठिनाई",
      growsIn: "प्राकृतिक रूप से",
      greatAddition: "क्षेत्रों में उगता है, जिससे यह आपके बगीचे के लिए एक बढ़िया विकल्प बनता है।",
      usage: "उपयोग",
      applied: "पारंपरिक रूप से उपयोग किया जाता है"
    },
    kn: {
      intro: "ನಮ್ಮ ಸ್ಮಾರ್ಟ್ ಸ್ಥಳೀಯ ಶಿಫಾರಸು ಎಂಜಿನ್ ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ತಕ್ಕಂತೆ ನಮ್ಮ ಡೇಟಾಬೇಸ್‌ನಿಂದ ಈ ಶಕ್ತಿಶಾಲಿ ಔಷಧೀಯ ಸಸ್ಯಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿದೆ:",
      goalFit: "ಆರೋಗ್ಯ ಗುರಿ ಹೊಂದಾಣಿಕೆ",
      excellent: "ಉತ್ತಮವಾಗಿದೆ",
      benefits: "ಪ್ರಯೋಜನಗಳು ಸೇರಿವೆ",
      growing: "ಬೆಳೆಯುವುದು",
      climate: "ಹವಾಮಾನ",
      difficulty: "ಕಠಿಣತೆ",
      growsIn: "ನೈಸರ್ಗಿಕವಾಗಿ",
      greatAddition: "ಪ್ರದೇಶಗಳಲ್ಲಿ ಬೆಳೆಯುತ್ತದೆ, ಇದು ನಿಮ್ಮ ತೋಟಕ್ಕೆ ಉತ್ತಮ ಸೇರ್ಪಡೆಯಾಗಿದೆ.",
      usage: "ಬಳಕೆ",
      applied: "ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ"
    }
  };

  const [healthGoal, setHealthGoal] = useState("");
  const [customGoal, setCustomGoal] = useState("");
  const [space, setSpace] = useState("");
  const [climate, setClimate] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState("");
  const [localRecommendationPlants, setLocalRecommendationPlants] = useState([]);
  const [isLocalFallback, setIsLocalFallback] = useState(false);

  const goalOptions = [
    { value: "Immunity Boost", label: t("ai.goalOptions.immunity") },
    { value: "Stress Relief & Anxiety", label: t("ai.goalOptions.stress") },
    { value: "Digestive Health", label: t("ai.goalOptions.digestion") },
    { value: "Sleep Improvement", label: t("ai.goalOptions.sleep") },
    { value: "Respiratory Support", label: t("ai.goalOptions.respiratory") },
    { value: "Skin Care & Healing", label: t("ai.goalOptions.skin") },
    { value: "other", label: t("ai.goalOptions.other") }
  ];

  const spaceOptions = [
    { value: "Balcony", label: t("ai.spaceOptions.balcony") },
    { value: "Backyard Garden", label: t("ai.spaceOptions.backyard") },
    { value: "Indoor Windowsill", label: t("ai.spaceOptions.windowsill") },
    { value: "Terrace", label: t("ai.spaceOptions.terrace") }
  ];

  const climateOptions = [
    { value: "Tropical", label: t("ai.climateOptions.tropical") },
    { value: "Temperate", label: t("ai.climateOptions.temperate") },
    { value: "Dry / Arid", label: t("ai.climateOptions.dry") },
    { value: "Cold / Alpine", label: t("ai.climateOptions.cold") }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalGoal = healthGoal === "other" ? customGoal : healthGoal;
    if (!finalGoal || !space || !climate) return;

    setLoading(true);
    setRecommendation("");
    setLocalRecommendationPlants([]);
    setIsLocalFallback(false);

    // Call Gemini Service
    const aiResponse = await getPlantRecommendation(finalGoal, space, climate, currentLang);

    if (aiResponse) {
      setRecommendation(aiResponse);
      setIsLocalFallback(false);
    } else {
      // SMART RULE-BASED FALLBACK
      // Analyze keywords in health goal to select top 2 matching plants from database
      const goalText = finalGoal.toLowerCase();
      let matched = [];

      if (goalText.includes("immune") || goalText.includes("fever") || goalText.includes("protect") || goalText.includes("infect")) {
        matched = [plants[0], plants[7]]; // Tulsi & Giloy
      } else if (goalText.includes("stress") || goalText.includes("anxi") || goalText.includes("relax") || goalText.includes("calm")) {
        matched = [plants[3], plants[11]]; // Ashwagandha & Lavender
      } else if (goalText.includes("skin") || goalText.includes("burn") || goalText.includes("wound") || goalText.includes("acne") || goalText.includes("beauty")) {
        matched = [plants[1], plants[2]]; // Aloe Vera & Neem
      } else if (goalText.includes("digest") || goalText.includes("stomach") || goalText.includes("bloat") || goalText.includes("gut")) {
        matched = [plants[5], plants[4]]; // Mint & Turmeric
      } else if (goalText.includes("respir") || goalText.includes("lung") || goalText.includes("cough") || goalText.includes("cold") || goalText.includes("throat")) {
        matched = [plants[10], plants[0]]; // Eucalyptus & Tulsi
      } else if (goalText.includes("brain") || goalText.includes("memor") || goalText.includes("focus") || goalText.includes("cognit") || goalText.includes("study")) {
        matched = [plants[8], plants[9]]; // Brahmi & Amla
      } else {
        // Default to highly versatile adaptogens/healers if no keywords match
        matched = [plants[0], plants[4]]; // Tulsi & Turmeric
      }

      setLocalRecommendationPlants(matched);
      setIsLocalFallback(true);
    }

    setLoading(false);
  };

  // Basic markdown helper for rendering Gemini response beautifully
  const renderAIResponse = (text) => {
    return text.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("###")) {
        return <h4 key={i} className="ai-res__h4">{trimmed.replace("###", "").trim()}</h4>;
      }
      if (trimmed.startsWith("##")) {
        return <h3 key={i} className="ai-res__h3">{trimmed.replace("##", "").trim()}</h3>;
      }
      if (trimmed.startsWith("#")) {
        return <h2 key={i} className="ai-res__h2">{trimmed.replace("#", "").trim()}</h2>;
      }
      if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
        return <li key={i} className="ai-res__li">{trimmed.substring(1).trim()}</li>;
      }
      if (trimmed === "") {
        return <div key={i} className="ai-res__spacer" />;
      }
      // Simple bold replacements
      const boldRegex = /\*\*(.*?)\*\*/g;
      if (boldRegex.test(trimmed)) {
        const parts = trimmed.split(boldRegex);
        return (
          <p key={i} className="ai-res__p">
            {parts.map((part, index) => index % 2 === 1 ? <strong key={index}>{part}</strong> : part)}
          </p>
        );
      }
      return <p key={i} className="ai-res__p">{trimmed}</p>;
    });
  };

  return (
    <section className="section advisor-section" id="ai">
      <div className="section-inner">
        {/* Header */}
        <motion.div 
          className="section-header centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t("ai.label")}</span>
          <h2 className="section-title">{t("ai.title")}</h2>
          <p className="section-subtitle">{t("ai.subtitle")}</p>
        </motion.div>

        <div className="advisor__content grid-2">
          {/* Form Side */}
          <motion.div 
            className="advisor__form-card glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="advisor__form-header">
              <FaLeaf className="advisor__form-icon" />
              <h3>{t("ai.consultTitle")}</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="advisor__form">
              {/* Health Goal */}
              <div className="advisor__form-group">
                <label className="advisor__label">
                  <FaHeartbeat /> {t("ai.healthGoal")}
                </label>
                <select 
                  className="advisor__select"
                  value={healthGoal}
                  onChange={(e) => setHealthGoal(e.target.value)}
                  required
                >
                  <option value="" disabled>{t("ai.healthGoalPlaceholder")}</option>
                  {goalOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>

                {healthGoal === "other" && (
                  <motion.input 
                    type="text"
                    className="advisor__input mt-2"
                    placeholder={t("ai.customGoalPlaceholder")}
                    value={customGoal}
                    onChange={(e) => setCustomGoal(e.target.value)}
                    required
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  />
                )}
              </div>

              {/* Space */}
              <div className="advisor__form-group">
                <label className="advisor__label">
                  <FaCompass /> {t("ai.space")}
                </label>
                <select 
                  className="advisor__select"
                  value={space}
                  onChange={(e) => setSpace(e.target.value)}
                  required
                >
                  <option value="" disabled>{t("ai.spacePlaceholder")}</option>
                  {spaceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Climate */}
              <div className="advisor__form-group">
                <label className="advisor__label">
                  <FaLeaf /> {t("ai.climate")}
                </label>
                <select 
                  className="advisor__select"
                  value={climate}
                  onChange={(e) => setClimate(e.target.value)}
                  required
                >
                  <option value="" disabled>{t("ai.climatePlaceholder")}</option>
                  {climateOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary advisor__submit-btn" 
                disabled={loading}
              >
                {loading ? t("ai.loading") : t("ai.getRecommendation")}
              </button>
            </form>
          </motion.div>

          {/* Results Side */}
          <div className="advisor__results-column">
            <AnimatePresence mode="wait">
              {loading && (
                <motion.div 
                  key="loading"
                  className="advisor__results-card glass-card loading-card text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="spinner" style={{ marginBottom: 20 }} />
                  <p className="loading-text">{t("ai.loading")}</p>
                  <p className="loading-sub">{t("ai.loadingSub")}</p>
                </motion.div>
              )}

              {!loading && !recommendation && localRecommendationPlants.length === 0 && (
                <motion.div 
                  key="empty"
                  className="advisor__results-card glass-card empty-card text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="empty-icon-wrap">
                    <FaLeaf />
                  </div>
                  <h3>Waiting for consultation</h3>
                  <p>Provide your details in the form to generate a personalized recommendation plan instantly.</p>
                </motion.div>
              )}

              {!loading && recommendation && (
                <motion.div 
                  key="gemini"
                  className="advisor__results-card glass-card success-card"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="advisor__results-header">
                    <span className="pill-badge">Gemini AI</span>
                    <h3>{t("ai.results")}</h3>
                  </div>
                  <div className="advisor__results-body">
                    {renderAIResponse(recommendation)}
                  </div>
                  <div className="advisor__results-footer">
                    <span className="caution-tag">⚠️ {t("ai.caution")}: Always consult a health professional before therapeutic herbal consumption.</span>
                  </div>
                </motion.div>
              )}

              {!loading && isLocalFallback && localRecommendationPlants.length > 0 && (
                <motion.div 
                  key="fallback"
                  className="advisor__results-card glass-card success-card"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="advisor__results-header">
                    <span className="pill-badge fallback">Local Expert Advisor</span>
                    <h3>{t("ai.results")}</h3>
                  </div>
                  <div className="advisor__results-body">
                    <p className="fallback-intro">
                      {fallbackTranslations[currentLang]?.intro || fallbackTranslations.en.intro}
                    </p>

                    <div className="fallback-grid">
                      {localRecommendationPlants.map((plant) => {
                        const localPlant = plant[currentLang] || plant.en;
                        const trans = fallbackTranslations[currentLang] || fallbackTranslations.en;
                        return (
                          <div key={plant.id} className="fallback-plant-item" style={{ borderLeft: `4px solid ${plant.color}` }}>
                            <div className="fallback-plant-header">
                              <span className="fallback-plant-name">{localPlant.name}</span>
                              <span className="fallback-plant-sci">({plant.scientificName})</span>
                            </div>
                            
                            <div className="fallback-plant-detail">
                              <strong>🎯 {trans.goalFit}:</strong>
                              <p>{trans.excellent} {localPlant.category.toLowerCase()}. {trans.benefits}: {localPlant.benefits[0]} &amp; {localPlant.benefits[2]}.</p>
                            </div>
                            
                            <div className="fallback-plant-detail">
                              <strong>🌱 {trans.growing} in a {space} ({climate} {trans.climate}):</strong>
                              <p>This is an <strong>{plant.difficulty}</strong> plant to grow. {localPlant.name} {trans.growsIn} {plant.region} {trans.greatAddition}</p>
                            </div>

                            <div className="fallback-plant-detail">
                              <strong>💡 {trans.usage}:</strong>
                              <p>{trans.applied}: {localPlant.uses.slice(0, 2).join(", ")}.</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="advisor__results-footer">
                    <span className="caution-tag">⚠️ {t("ai.caution")}: Always consult a health professional before therapeutic herbal consumption.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .advisor-section {
          background: var(--cream);
          border-bottom: 1px solid var(--cream-dark);
        }
        .advisor__form-card {
          background: white;
          border: 1px solid var(--cream-dark);
          padding: 40px;
          box-shadow: var(--shadow-card);
        }
        .advisor__form-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          border-bottom: 1px solid var(--cream-dark);
          padding-bottom: 16px;
        }
        .advisor__form-header h3 {
          font-family: var(--font-display);
          color: var(--deep-green);
          font-size: 1.4rem;
          font-weight: 700;
        }
        .advisor__form-icon {
          font-size: 1.8rem;
          color: var(--forest-green);
        }
        .advisor__form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .advisor__form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .advisor__label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-dark);
          letter-spacing: 0.02em;
        }
        .advisor__label svg {
          color: var(--mid-green);
        }
        .advisor__select, .advisor__input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid var(--cream-dark);
          font-family: var(--font-body);
          font-size: 0.9rem;
          background: var(--cream);
          color: var(--text-dark);
          outline: none;
          transition: var(--transition);
        }
        .advisor__select:focus, .advisor__input:focus {
          border-color: var(--mid-green);
          background: white;
        }
        .advisor__submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 10px;
          font-size: 0.95rem;
        }
        .advisor__results-column {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .advisor__results-card {
          background: white;
          border: 1px solid var(--cream-dark);
          box-shadow: var(--shadow-card);
          padding: 40px;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 450px;
        }
        .loading-card {
          justify-content: center;
          align-items: center;
        }
        .loading-text {
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--deep-green);
        }
        .loading-sub {
          font-size: 0.85rem;
          color: var(--text-light);
          margin-top: 4px;
        }
        .empty-card {
          justify-content: center;
          align-items: center;
        }
        .empty-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: var(--pale-sage);
          color: var(--forest-green);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .empty-card h3 {
          font-family: var(--font-display);
          font-size: 1.3rem;
          color: var(--deep-green);
          margin-bottom: 8px;
        }
        .empty-card p {
          color: var(--text-light);
          font-size: 0.88rem;
          max-width: 320px;
          line-height: 1.6;
        }
        .advisor__results-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--cream-dark);
        }
        .advisor__results-header h3 {
          font-family: var(--font-display);
          color: var(--deep-green);
          font-size: 1.4rem;
        }
        .pill-badge {
          align-self: flex-start;
          font-size: 0.68rem;
          font-weight: 700;
          color: white;
          background: var(--forest-green);
          padding: 3px 10px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .pill-badge.fallback {
          background: var(--soft-brown);
        }
        .advisor__results-body {
          flex: 1;
          overflow-y: auto;
          max-height: 400px;
          padding-right: 10px;
        }
        .advisor__results-footer {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid var(--cream-dark);
        }
        .caution-tag {
          font-size: 0.78rem;
          color: var(--text-light);
          line-height: 1.5;
          display: block;
        }
        .fallback-intro {
          font-size: 0.9rem;
          color: var(--text-mid);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .fallback-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .fallback-plant-item {
          background: var(--cream);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .fallback-plant-header {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 6px;
          border-bottom: 1px dashed var(--cream-dark);
          padding-bottom: 8px;
        }
        .fallback-plant-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--deep-green);
        }
        .fallback-plant-sci {
          font-size: 0.78rem;
          color: var(--text-light);
          font-style: italic;
        }
        .fallback-plant-detail {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .fallback-plant-detail strong {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: var(--text-dark);
        }
        .fallback-plant-detail p {
          font-size: 0.85rem;
          color: var(--text-mid);
          line-height: 1.5;
        }
        .mt-2 {
          margin-top: 8px;
        }
        
        /* Rendered AI response markdown styles */
        .ai-res__h2 {
          font-family: var(--font-display);
          font-size: 1.3rem;
          color: var(--deep-green);
          margin: 16px 0 8px;
        }
        .ai-res__h3 {
          font-family: var(--font-display);
          font-size: 1.15rem;
          color: var(--deep-green);
          margin: 14px 0 8px;
        }
        .ai-res__h4 {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-dark);
          margin: 12px 0 6px;
        }
        .ai-res__p {
          font-size: 0.88rem;
          color: var(--text-mid);
          line-height: 1.65;
          margin-bottom: 12px;
        }
        .ai-res__li {
          font-size: 0.88rem;
          color: var(--text-mid);
          margin-left: 20px;
          margin-bottom: 6px;
          list-style-type: square;
          line-height: 1.6;
        }
        .ai-res__spacer {
          height: 12px;
        }
        @media (max-width: 768px) {
          .advisor__form-card {
            padding: 24px;
          }
          .advisor__results-card {
            padding: 24px;
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
