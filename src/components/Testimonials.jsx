import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.split("-")[0] : "en";

  const headers = {
    en: {
      label: "Testimonials",
      title: "What Our Community Says",
      subtitle: "Real stories of health, gardening, and community impact from HerbSphere members."
    },
    hi: {
      label: "प्रशंसापत्र",
      title: "हमारा समुदाय क्या कहता है",
      subtitle: "हर्बस्फेयर के सदस्यों से स्वास्थ्य, बागवानी और सामुदायिक प्रभाव की वास्तविक कहानियाँ।"
    },
    kn: {
      label: "ಪ್ರಶಂಸಾಪತ್ರಗಳು",
      title: "ನಮ್ಮ ಸಮುದಾಯ ಏನು ಹೇಳುತ್ತದೆ",
      subtitle: "ಹರ್ಬ್‌ಸ್ಫಿಯರ್ ಸದಸ್ಯರಿಂದ ಆರೋಗ್ಯ, ತೋಟಗಾರಿಕೆ ಮತ್ತು ಸಮುದಾಯ ಪ್ರಭಾವದ ನೈಜ ಕಥೆಗಳು."
    }
  };

  const reviews = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80",
      rating: 5,
      en: {
        name: "Dr. Ananya Rao",
        role: "Ayurvedic Practitioner",
        content: "HerbSphere has bridged the gap between traditional wisdom and modern technology. The AI plant advisor is remarkably helpful in introducing people to healing herbs safely and sustainably.",
      },
      hi: {
        name: "डॉ. अनन्या राव",
        role: "आयुर्वेदिक चिकित्सक",
        content: "हर्बस्फेयर ने पारंपरिक ज्ञान और आधुनिक तकनीक के बीच की खाई को पाटने का काम किया है। एआई प्लांट सलाहकार लोगों को सुरक्षित और स्थायी रूप से औषधीय पौधों से परिचित कराने में काफी मददगार है।",
      },
      kn: {
        name: "ಡಾ. ಅನನ್ಯ ರಾವ್",
        role: "ಆಯುರ್ವೇದ ವೈದ್ಯರು",
        content: "ಹರ್ಬ್‌ಸ್ಫಿಯರ್ ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನ ಮತ್ತು ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದ ನಡುವಿನ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡಿದೆ. ಗಿಡಮೂಲಿಕೆಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಪರಿಚಯಿಸಲು ಎಐ ಸಸ್ಯ ಸಲಹೆಗಾರನು ಸಹಕಾರಿಯಾಗಿದೆ.",
      }
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
      rating: 5,
      en: {
        name: "Rajesh Kumar",
        role: "Urban Community Gardener",
        content: "Participating in the HerbSphere community garden workshops has been highly rewarding. I've met passionate plant lovers, learned home composting, and now grow organic herbs on my small balcony.",
      },
      hi: {
        name: "राजेश कुमार",
        role: "शहरी सामुदायिक माली",
        content: "हर्बस्फेयर सामुदायिक उद्यान कार्यशालाओं में भाग लेना बहुत फलदायी रहा है। मैं उत्साही पौधा प्रेमियों से मिला, घर पर खाद बनाना सीखा, और अब अपनी छोटी बालकनी पर जैविक जड़ी-बूटियाँ उगाता हूँ।",
      },
      kn: {
        name: "ರಾಜೇಶ್ ಕುಮಾರ್",
        role: "ನಗರ ಸಮುದಾಯ ತೋಟಗಾರ",
        content: "ಹರ್ಬ್‌ಸ್ಫಿಯರ್ ಸಮುದಾಯ ಉದ್ಯಾನ ಕಾರ್ಯಾಗಾರಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದು ಪ್ರಯೋಜನಕಾರಿಯಾಗಿದೆ. ನಾನು ಗಿಡ ಪ್ರೇಮಿಗಳನ್ನು ಭೇಟಿಯಾದೆ, ಕಂಪೋಸ್ಟಿಂಗ್ ಕಲಿತೆ ಮತ್ತು ಈಗ ನನ್ನ ಬಾಲ್ಕನಿಯಲ್ಲಿ ಗಿಡಮೂಲಿಕೆಗಳನ್ನು ಬೆಳೆಯುತ್ತಿದ್ದೇನೆ.",
      }
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
      rating: 5,
      en: {
        name: "Sarah Jenkins",
        role: "Primary School Educator",
        content: "The HerbSphere school garden setup initiative was a huge success. The children thoroughly enjoyed planting native herbs and learning about their scientific classifications. Truly inspiring!",
      },
      hi: {
        name: "सारा जेन्किन्स",
        role: "प्राथमिक स्कूल शिक्षिका",
        content: "हर्बस्फेयर स्कूल गार्डन स्थापना पहल एक बड़ी सफलता थी। बच्चों ने देशी जड़ी-बूटियों को लगाने और उनके वैज्ञानिक वर्गीकरण के बारे में जानने का पूरा आनंद लिया। वास्तव में प्रेरणादायक!",
      },
      kn: {
        name: "ಸಾರಾ ಜೆಂಕಿನ್ಸ್",
        role: "ಪ್ರಾಥಮಿಕ ಶಾಲಾ ಶಿಕ್ಷಕಿ",
        content: "ಹರ್ಬ್‌ಸ್ಫಿಯರ್ ಶಾಲಾ ತೋಟದ ಉಪಕ್ರಮವು ಯಶಸ್ವಿಯಾಗಿದೆ. ಮಕ್ಕಳು ಗಿಡಮೂಲಿಕೆಗಳನ್ನು ನೆಡುವುದನ್ನು ಮತ್ತು ಅವುಗಳ ವೈಜ್ಞಾನಿಕ ವರ್ಗೀಕರಣವನ್ನು ಕಲಿಯುವುದನ್ನು ಬಹಳ ಆನಂದಿಸಿದರು. ನಿಜಕ್ಕೂ ಸ್ಪೂರ್ತಿದಾಯಕ!",
      }
    }
  ];

  const localHeaders = headers[currentLang] || headers.en;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="section testimonials-section">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{localHeaders.label}</span>
          <h2 className="section-title">{localHeaders.title}</h2>
          <p className="section-subtitle">{localHeaders.subtitle}</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="testimonials__grid grid-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reviews.map((rev) => {
            const localRev = rev[currentLang] || rev.en;
            return (
              <motion.div
                key={rev.id}
                className="testimonial-card glass-card"
                variants={cardVariants}
              >
                <FaQuoteLeft className="testimonial-card__quote-icon" />
                
                {/* Rating */}
                <div className="testimonial-card__rating">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <FaStar key={idx} className="star-icon" />
                  ))}
                </div>

                {/* Text */}
                <p className="testimonial-card__text">"{localRev.content}"</p>

                {/* Author */}
                <div className="testimonial-card__author">
                  <img
                    src={rev.avatar}
                    alt={localRev.name}
                    className="testimonial-card__avatar"
                    loading="lazy"
                  />
                  <div className="testimonial-card__author-info">
                    <h4 className="testimonial-card__author-name">{localRev.name}</h4>
                    <span className="testimonial-card__author-role">{localRev.role}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .testimonials-section {
          background: #fdfbf7;
          border-top: 1px solid var(--cream-dark);
          border-bottom: 1px solid var(--cream-dark);
          position: relative;
        }
        .testimonials__grid {
          margin-top: 12px;
        }
        .testimonial-card {
          background: white;
          border: 1px solid var(--cream-dark);
          border-radius: var(--radius-lg);
          padding: 40px 32px 32px;
          box-shadow: var(--shadow-card);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
          border-color: var(--sage);
        }
        .testimonial-card__quote-icon {
          position: absolute;
          top: 24px;
          right: 32px;
          font-size: 2.2rem;
          color: var(--pale-sage);
          opacity: 0.5;
        }
        .testimonial-card__rating {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }
        .star-icon {
          color: var(--soft-brown);
          font-size: 0.95rem;
        }
        .testimonial-card__text {
          font-size: 0.9rem;
          color: var(--text-mid);
          line-height: 1.7;
          margin-bottom: 28px;
          font-style: italic;
          flex: 1;
        }
        .testimonial-card__author {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 20px;
          border-top: 1px dashed var(--cream-dark);
        }
        .testimonial-card__avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--pale-sage);
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .testimonial-card__author-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .testimonial-card__author-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--deep-green);
        }
        .testimonial-card__author-role {
          font-size: 0.78rem;
          color: var(--text-light);
          font-weight: 500;
        }
        @media (max-width: 600px) {
          .testimonial-card {
            padding: 32px 24px 24px;
          }
          .testimonial-card__quote-icon {
            font-size: 1.8rem;
            top: 20px;
            right: 24px;
          }
        }
      `}</style>
    </section>
  );
}
