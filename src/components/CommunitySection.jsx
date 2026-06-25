import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCalendarAlt, FaMapMarkerAlt, FaClock, 
  FaDownload, FaBookOpen, FaSeedling, 
  FaHandsHelping, FaCheckCircle 
} from "react-icons/fa";

export default function CommunitySection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.split("-")[0] : "en";

  const [activeTab, setActiveTab] = useState("events");
  const [registeredEvents, setRegisteredEvents] = useState({});
  const [signedUpVolunteers, setSignedUpVolunteers] = useState({});

  const toggleEventRegistration = (eventId) => {
    setRegisteredEvents((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  const toggleVolunteerSignUp = (volId) => {
    setSignedUpVolunteers((prev) => ({
      ...prev,
      [volId]: !prev[volId],
    }));
  };

  const handleDownload = (fileName) => {
    // Simulating file download
    const element = document.createElement("a");
    const file = new Blob(["Simulated PDF Content for " + fileName], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${fileName.replace(/\s+/g, "_").toLowerCase()}_guide.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const eventsData = [
    {
      id: "ev1",
      color: "#2d6a4f",
      en: {
        title: "Tree Plantation Drive",
        date: "July 05, 2026",
        time: "08:00 AM - 12:00 PM",
        location: "Greenwood Forest Reserve",
        description: "Join us in our mission to plant 500 indigenous saplings and restore the local canopy. Saplings and tools provided.",
        btnRegister: "Register Now",
        btnRegistered: "Registered"
      },
      hi: {
        title: "वृक्षारोपण अभियान",
        date: "05 जुलाई, 2026",
        time: "08:00 पूर्वाह्न - 12:00 अपराह्न",
        location: "ग्रीनवुड वन रिजर्व",
        description: "500 स्वदेशी पौधे लगाने और स्थानीय चंदवा को बहाल करने के हमारे मिशन में शामिल हों। पौधे और उपकरण प्रदान किए जाएंगे।",
        btnRegister: "अभी पंजीकरण करें",
        btnRegistered: "पंजीकृत"
      },
      kn: {
        title: "ಮರ ನೆಡುವ ಅಭಿಯಾನ",
        date: "ಜುಲೈ 05, 2026",
        time: "08:00 AM - 12:00 PM",
        location: "ಗ್ರೀನ್‌ವುಡ್ ಅರಣ್ಯ ಮೀಸಲು",
        description: "500 ಸಸಿಗಳನ್ನು ನೆಡುವ ಮತ್ತು ಪರಿಸರವನ್ನು ಮರುಸ್ಥಾಪಿಸುವ ನಮ್ಮ ಮಿಷನ್‌ನಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ. ಸಸಿಗಳು ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ನೀಡಲಾಗುವುದು.",
        btnRegister: "ಈಗಲೇ ನೋಂದಾಯಿಸಿ",
        btnRegistered: "ನೋಂದಾಯಿಸಲಾಗಿದೆ"
      }
    },
    {
      id: "ev2",
      color: "#40916c",
      en: {
        title: "Herbal Garden Workshop",
        date: "July 18, 2026",
        time: "10:00 AM - 01:00 PM",
        location: "HerbSphere Community Center",
        description: "Learn how to build and maintain a functional medicinal kitchen garden in small spaces, from containers to balconies.",
        btnRegister: "Register Now",
        btnRegistered: "Registered"
      },
      hi: {
        title: "हर्बल गार्डन कार्यशाला",
        date: "18 जुलाई, 2026",
        time: "10:00 पूर्वाह्न - 01:00 अपराह्न",
        location: "हर्बस्फेयर सामुदायिक केंद्र",
        description: "सीखें कि कैसे कंटेनर से लेकर बालकनी तक, छोटे स्थानों में एक कार्यात्मक औषधीय रसोई उद्यान का निर्माण और रखरखाव किया जाए।",
        btnRegister: "अभी पंजीकरण करें",
        btnRegistered: "पंजीकृत"
      },
      kn: {
        title: "ಗಿಡಮೂಲಿಕೆ ತೋಟದ ಕಾರ್ಯಾಗಾರ",
        date: "ಜುಲೈ 18, 2026",
        time: "10:00 AM - 01:00 PM",
        location: "ಹರ್ಬ್‌ಸ್ಫಿಯರ್ ಸಮೂದಾಯ ಕೇಂದ್ರ",
        description: "ಕುಂಡಗಳಿಂದ ಹಿಡಿದು ಬಾಲ್ಕನಿಗಳವರೆಗೆ ಸಣ್ಣ ಜಾಗಗಳಲ್ಲಿ ಕ್ರಿಯಾತ್ಮಕ ಗಿಡಮೂಲಿಕೆಗಳ ಅಡುಗೆ ತೋಟವನ್ನು ಹೇಗೆ ನಿರ್ಮಿಸುವುದು ಮತ್ತು ನಿರ್ವಹಿಸುವುದು ಎಂದು ತಿಳಿಯಿರಿ.",
        btnRegister: "ಈಗಲೇ ನೋಂದಾಯಿಸಿ",
        btnRegistered: "ನೋಂದಾಯಿಸಲಾಗಿದೆ"
      }
    },
    {
      id: "ev3",
      color: "#8b6914",
      en: {
        title: "Organic Farming Meetup",
        date: "August 02, 2026",
        time: "03:00 PM - 06:00 PM",
        location: "Eco-Valley Farms",
        description: "A networking session for local growers to exchange sustainable farming tips, composting methodologies, and organic pest remedies.",
        btnRegister: "Register Now",
        btnRegistered: "Registered"
      },
      hi: {
        title: "जैविक खेती बैठक",
        date: "02 अगस्त, 2026",
        time: "03:00 अपराह्न - 06:00 अपराह्न",
        location: "इको-वैली फार्म",
        description: "स्थानीय उत्पादकों के लिए टिकाऊ कृषि युक्तियों, खाद बनाने के तरीकों और जैविक कीट उपचारों का आदान-प्रदान करने के लिए एक नेटवर्किंग सत्र।",
        btnRegister: "अभी पंजीकरण करें",
        btnRegistered: "पंजीकृत"
      },
      kn: {
        title: "ಸಾವಯವ ಕೃಷಿ ಸಭೆ",
        date: "ಆಗಸ್ಟ್ 02, 2026",
        time: "03:00 PM - 06:00 PM",
        location: "Eco-Valley Farms",
        description: "ಸ್ಥಳೀಯ ಬೆಳೆಗಾರರಿಗೆ ಸುಸ್ಥಿರ ಬೇಸಾಯದ ಸಲಹೆಗಳು, ಕಂಪೋಸ್ಟಿಂಗ್ ವಿಧಾನಗಳು ಮತ್ತು ಸಾವಯವ ಕೀಟ ನಿವಾರಕಗಳನ್ನು ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳಲು ನೆಟ್‌ವರ್ಕಿಂಗ್ ಸೆಷನ್.",
        btnRegister: "ಈಗಲೇ ನೋಂದಾಯಿಸಿ",
        btnRegistered: "ನೋಂದಾಯಿಸಲಾಗಿದೆ"
      }
    }
  ];

  const resourcesData = [
    {
      id: "res1",
      icon: <FaBookOpen />,
      en: {
        title: "Gardening Guide PDF",
        size: "4.2 MB",
        type: "E-Book",
        description: "Comprehensive starter guide covering soil preparation, sowing calendars, and basic pest management for 20+ medicinal herbs.",
        btnGet: "Get Resource"
      },
      hi: {
        title: "बागवानी गाइड PDF",
        size: "4.2 MB",
        type: "ई-बुक",
        description: "मिट्टी की तैयारी, बुवाई कैलेंडर, और 20+ औषधीय जड़ी-बूटियों के लिए बुनियादी कीट प्रबंधन को कवर करने वाली व्यापक स्टार्टर गाइड।",
        btnGet: "संसाधन प्राप्त करें"
      },
      kn: {
        title: "ತೋಟಗಾರಿಕೆ ಕೈಪಿಡಿ PDF",
        size: "4.2 MB",
        type: "ಇ-ಪುಸ್ತಕ",
        description: "ಮಣ್ಣಿನ ತಯಾರಿಕೆ, ಬಿತ್ತನೆ ಕ್ಯಾಲೆಂಡರ್‌ಗಳು ಮತ್ತು 20+ ಔಷಧೀಯ ಗಿಡಮೂಲಿಕೆಗಳ ಮೂಲ ಕೀಟ ನಿರ್ವಹಣೆಯನ್ನು ಒಳಗೊಂಡಿರುವ ಕೈಪಿಡಿ.",
        btnGet: "ಸಂಪನ್ಮೂಲ ಪಡೆಯಿರಿ"
      }
    },
    {
      id: "res2",
      icon: <FaSeedling />,
      en: {
        title: "Composting Tips",
        size: "1.8 MB",
        type: "Infographic",
        description: "A visual step-by-step guide to setting up a zero-odor, rich compost bin in your home using kitchen waste and dry leaves.",
        btnGet: "Get Resource"
      },
      hi: {
        title: "कम्पोस्टिंग युक्तियाँ",
        size: "1.8 MB",
        type: "इन्फोग्राफिक",
        description: "रसोई के कचरे और सूखी पत्तियों का उपयोग करके आपके घर में शून्य-गंध, समृद्ध खाद बिन स्थापित करने के लिए एक दृश्य चरण-दर-चरण मार्गदर्शिका।",
        btnGet: "संसाधन प्राप्त करें"
      },
      kn: {
        title: "ಕಂಪೋಸ್ಟಿಂಗ್ ಸಲಹೆಗಳು",
        size: "1.8 MB",
        type: "ಇನ್ಫೋಗ್ರಾಫಿಕ್",
        description: "ಅಡುಗೆಮನೆಯ ತ್ಯಾಜ್ಯ ಮತ್ತು ಒಣ ಎಲೆಗಳನ್ನು ಬಳಸಿ ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಶೂನ್ಯ-ವಾಸನೆ, ಶ್ರೀಮಂತ ಗೊಬ್ಬರ ಬಿನ್ ಅನ್ನು ಹೊಂದಿಸಲು ಹಂತ-ಹಂತದ ಮಾರ್ಗದರ್ಶಿ.",
        btnGet: "ಸಂಪನ್ಮೂಲ ಪಡೆಯಿರಿ"
      }
    },
    {
      id: "res3",
      icon: <FaDownload />,
      en: {
        title: "Seed Exchange Network",
        size: "Web Portal",
        type: "Interactive Directory",
        description: "Access our peer-to-peer directory to trade native, organic heirloom seeds with other gardeners in your zip code.",
        btnGet: "Visit Portal"
      },
      hi: {
        title: "बीज विनिमय नेटवर्क",
        size: "वेब पोर्टल",
        type: "इंटरैक्टिव निर्देशिका",
        description: "अपने ज़िप कोड में अन्य बागवानों के साथ देशी, जैविक विरासत बीजों का व्यापार करने के लिए हमारी पीयर-टू-पीयर निर्देशिका तक पहुँचें।",
        btnGet: "पोर्टल पर जाएं"
      },
      kn: {
        title: "ಬೀಜ ವಿನಿಮಯ ಜಾಲ",
        size: "ವೆಬ್ ಪೋರ್ಟಲ್",
        type: "ಸಂವಾದಾತ್ಮಕ ಡೈರೆಕ್ಟರಿ",
        description: "ನಿಮ್ಮ ಪಿನ್ ಕೋಡ್‌ನಲ್ಲಿರುವ ಇತರ ತೋಟಗಾರರೊಂದಿಗೆ ಸಾವಯವ ಬೀಜಗಳನ್ನು ವ್ಯಾಪಾರ ಮಾಡಲು ನಮ್ಮ ಡೈರೆಕ್ಟರಿಯನ್ನು ಪ್ರವೇಶಿಸಿ.",
        btnGet: "ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ"
      }
    }
  ];

  const volunteerData = [
    {
      id: "vol1",
      en: {
        role: "Community Garden Maintenance",
        commitment: "4 hrs/week",
        location: "Central Urban Park",
        description: "Help water, weed, prune, and harvest herbs in the public community garden. Beginners welcome.",
        btnSignUp: "Sign Up to Volunteer",
        btnSignedUp: "Signed Up!"
      },
      hi: {
        role: "सामुदायिक उद्यान रखरखाव",
        commitment: "4 घंटे/सप्ताह",
        location: "सेंट्रल अर्बन पार्क",
        description: "सार्वजनिक सामुदायिक उद्यान में जड़ी-बूटियों को पानी देने, खरपतवार निकालने, छंटाई करने और कटाई करने में मदद करें। नौसिखियों का स्वागत है।",
        btnSignUp: "स्वयंसेवक के रूप में शामिल हों",
        btnSignedUp: "शामिल हो गए!"
      },
      kn: {
        role: "ಸಮುದಾಯ ಉದ್ಯಾನ ನಿರ್ವಹಣೆ",
        commitment: "4 ಗಂಟೆ/ವಾರ",
        location: "ಸೆಂಟ್ರಲ್ ಅರ್ಬನ್ ಪಾರ್ಕ್",
        description: "ಸಾರ್ವಜನಿಕ ಸಮುದಾಯ ಉದ್ಯಾನದಲ್ಲಿ ಗಿಡಮೂಲಿಕೆಗಳಿಗೆ ನೀರುಣಿಸಲು, ಕಳೆ ತೆಗೆಯಲು ಮತ್ತು ಕಟಾವು ಮಾಡಲು ಸಹಾಯ ಮಾಡಿ. ಆರಂಭಿಕರಿಗೂ ಸ್ವಾಗತ.",
        btnSignUp: "ಸ್ವಯಂಸೇವಕರಾಗಿ ಸೇರಿ",
        btnSignedUp: "ಸೇರಲಾಗಿದೆ!"
      }
    },
    {
      id: "vol2",
      en: {
        role: "School Herbal Garden Setup",
        commitment: "One-time event (6 hrs)",
        location: "Oakridge Primary School",
        description: "Assist in setting up an educational herb garden for kids, laying brick pathways, and labeling planting beds.",
        btnSignUp: "Sign Up to Volunteer",
        btnSignedUp: "Signed Up!"
      },
      hi: {
        role: "स्कूल हर्बल गार्डन स्थापना",
        commitment: "एक बार का कार्यक्रम (6 घंटे)",
        location: "ओकरीज प्राइमरी स्कूल",
        description: "बच्चों के लिए एक शैक्षिक हर्बल गार्डन स्थापित करने, ईंट के रास्ते बिछाने और रोपण क्यारियों पर लेबल लगाने में सहायता करें।",
        btnSignUp: "स्वयंसेवक के रूप में शामिल हों",
        btnSignedUp: "शामिल हो गए!"
      },
      kn: {
        role: "ಶಾಲಾ ಗಿಡಮೂಲಿಕೆ ತೋಟದ ಸ್ಥಾಪನೆ",
        commitment: "ಒಂದು ಬಾರಿ (6 ಗಂಟೆಗಳು)",
        location: "ಓಕೃಡ್ಜ್ ಪ್ರಾಥಮಿಕ ಶಾಲೆ",
        description: "ಮಕ್ಕಳಿಗಾಗಿ ಶೈಕ್ಷಣಿಕ ಗಿಡಮೂಲಿಕೆ ತೋಟವನ್ನು ಹೊಂದಿಸಲು, ಇಟ್ಟಿಗೆ ಮಾರ್ಗಗಳನ್ನು ಹಾಕಲು ಮತ್ತು ನೆಟ್ಟ ಬೆಡ್‌ಗಳನ್ನು ಲೇಬಲ್ ಮಾಡಲು ಸಹಾಯ ಮಾಡಿ.",
        btnSignUp: "ಸ್ವಯಂಸೇವಕರಾಗಿ ಸೇರಿ",
        btnSignedUp: "ಸೇರಲಾಗಿದೆ!"
      }
    },
    {
      id: "vol3",
      en: {
        role: "Neighborhood Clean-up",
        commitment: "3 hrs (Monthly)",
        location: "Riverside Boulevard",
        description: "Help collect litter, clear invasive weeds, and restore nature trails along the riverside parkway.",
        btnSignUp: "Sign Up to Volunteer",
        btnSignedUp: "Signed Up!"
      },
      hi: {
        role: "पड़ोस की सफाई अभियान",
        commitment: "3 घंटे (मासिक)",
        location: "रिवरसाइड बुलेवार्ड",
        description: "कचरा इकट्ठा करने, आक्रामक खरपतवारों को साफ करने और नदी के किनारे पार्कवे के साथ प्रकृति ट्रेल्स को बहाल करने में मदद करें।",
        btnSignUp: "स्वयंसेवक के रूप में शामिल हों",
        btnSignedUp: "शामिल हो गए!"
      },
      kn: {
        role: "ನೆರೆಹೊರೆಯ ಸ್ವಚ್ಛತಾ ಕಾರ್ಯಕ್ರಮ",
        commitment: "3 ಗಂಟೆ (ಮಾಸಿಕ)",
        location: "ರಿವರ್ಸೈಡ್ ಬೌಲೆವರ್ಡ್",
        description: "ಕಸ ಸಂಗ್ರಹಿಸಲು, ಕಳೆಗಳನ್ನು ತೆರವುಗೊಳಿಸಲು ಮತ್ತು ನದಿಯ ದಡದಲ್ಲಿ ಪ್ರಕೃತಿ ಹಾದಿಗಳನ್ನು ಮರುಸ್ಥಾಪಿಸಲು ಸಹಾಯ ಮಾಡಿ.",
        btnSignUp: "ಸ್ವಯಂಸೇವಕರಾಗಿ ಸೇರಿ",
        btnSignedUp: "ಸೇರಲಾಗಿದೆ!"
      }
    }
  ];

  const volunteerLabels = {
    en: { commitment: "Commitment" },
    hi: { commitment: "प्रतिबद्धता" },
    kn: { commitment: "ಬದ್ಧತೆ" }
  };

  const currentVolLabel = volunteerLabels[currentLang] || volunteerLabels.en;

  const tabVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="section community-section" id="community">
      <div className="section-inner">
        {/* Header */}
        <motion.div 
          className="section-header centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t("community.label")}</span>
          <h2 className="section-title">{t("community.title")}</h2>
          <p className="section-subtitle">{t("community.subtitle")}</p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="community__tabs">
          {[
            { id: "events", label: t("community.events"), count: eventsData.length },
            { id: "resources", label: t("community.resources"), count: resourcesData.length },
            { id: "volunteer", label: t("community.volunteer"), count: volunteerData.length },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`community__tab-btn${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              <span className="community__tab-badge">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="community__tab-content">
          <AnimatePresence mode="wait">
            {activeTab === "events" && (
              <motion.div 
                key="events" 
                variants={tabVariants} 
                initial="hidden" 
                animate="visible" 
                exit="hidden"
                className="community__grid grid-3"
              >
                {eventsData.map((ev) => {
                  const isRegistered = registeredEvents[ev.id];
                  const localEv = ev[currentLang] || ev.en;
                  return (
                    <div key={ev.id} className="community-card event-card">
                      <div className="event-card__badge" style={{ background: ev.color }}>
                        {t("community.active")}
                      </div>
                      <h3 className="community-card__title">{localEv.title}</h3>
                      
                      <div className="event-card__details">
                        <div className="event-card__detail">
                          <FaCalendarAlt className="event-card__icon" style={{ color: ev.color }} />
                          <span>{localEv.date}</span>
                        </div>
                        <div className="event-card__detail">
                          <FaClock className="event-card__icon" style={{ color: ev.color }} />
                          <span>{localEv.time}</span>
                        </div>
                        <div className="event-card__detail">
                          <FaMapMarkerAlt className="event-card__icon" style={{ color: ev.color }} />
                          <span>{localEv.location}</span>
                        </div>
                      </div>
                      
                      <p className="community-card__desc">{localEv.description}</p>
                      
                      <button 
                        className={`btn community-card__btn ${isRegistered ? "btn-outline-green" : "btn-green"}`}
                        onClick={() => toggleEventRegistration(ev.id)}
                        style={isRegistered ? { background: "var(--pale-sage)", color: "var(--forest-green)" } : {}}
                      >
                        {isRegistered ? (
                          <>
                            <FaCheckCircle /> {localEv.btnRegistered}
                          </>
                        ) : (
                          localEv.btnRegister
                        )}
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === "resources" && (
              <motion.div 
                key="resources" 
                variants={tabVariants} 
                initial="hidden" 
                animate="visible" 
                exit="hidden"
                className="community__grid grid-3"
              >
                {resourcesData.map((res) => {
                  const localRes = res[currentLang] || res.en;
                  return (
                    <div key={res.id} className="community-card resource-card">
                      <div className="resource-card__icon-wrapper">
                        {res.icon}
                      </div>
                      <span className="resource-card__meta">{localRes.type} &bull; {localRes.size}</span>
                      <h3 className="community-card__title">{localRes.title}</h3>
                      <p className="community-card__desc">{localRes.description}</p>
                      
                      <button 
                        className="btn btn-primary community-card__btn"
                        onClick={() => handleDownload(localRes.title)}
                      >
                        <FaDownload /> {localRes.btnGet}
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === "volunteer" && (
              <motion.div 
                key="volunteer" 
                variants={tabVariants} 
                initial="hidden" 
                animate="visible" 
                exit="hidden"
                className="community__grid grid-3"
              >
                {volunteerData.map((vol) => {
                  const isSignedUp = signedUpVolunteers[vol.id];
                  const localVol = vol[currentLang] || vol.en;
                  return (
                    <div key={vol.id} className="community-card volunteer-card">
                      <div className="volunteer-card__header">
                        <FaHandsHelping className="volunteer-card__main-icon" />
                        <div>
                          <span className="volunteer-card__label">{currentVolLabel.commitment}</span>
                          <p className="volunteer-card__meta-val">{localVol.commitment}</p>
                        </div>
                      </div>
                      <h3 className="community-card__title">{localVol.role}</h3>
                      <div className="volunteer-card__loc">
                        <FaMapMarkerAlt /> <span>{localVol.location}</span>
                      </div>
                      <p className="community-card__desc">{localVol.description}</p>
                      
                      <button 
                        className={`btn community-card__btn ${isSignedUp ? "btn-outline-green" : "btn-green"}`}
                        onClick={() => toggleVolunteerSignUp(vol.id)}
                        style={isSignedUp ? { background: "var(--pale-sage)", color: "var(--forest-green)" } : {}}
                      >
                        {isSignedUp ? (
                          <>
                            <FaCheckCircle /> {localVol.btnSignedUp}
                          </>
                        ) : (
                          localVol.btnSignUp
                        )}
                      </button>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .community-section {
          background: linear-gradient(180deg, #fdfbf7 0%, var(--cream) 100%);
        }
        .community__tabs {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 44px;
        }
        .community__tab-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          border: 1px solid var(--cream-dark);
          color: var(--text-mid);
          padding: 12px 28px;
          border-radius: 50px;
          font-family: var(--font-accent);
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
        }
        .community__tab-btn:hover {
          border-color: var(--sage);
          color: var(--forest-green);
          background: var(--pale-sage);
        }
        .community__tab-btn.active {
          background: var(--forest-green);
          color: white;
          border-color: var(--forest-green);
          box-shadow: 0 8px 24px rgba(45, 106, 79, 0.3);
        }
        .community__tab-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.08);
          color: inherit;
          width: 20px;
          height: 20px;
          font-size: 0.72rem;
          font-weight: 700;
          border-radius: 50%;
        }
        .community__tab-btn.active .community__tab-badge {
          background: rgba(255, 255, 255, 0.2);
        }
        .community__grid {
          margin-top: 12px;
        }
        .community-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: 32px 24px;
          border: 1px solid var(--cream-dark);
          box-shadow: var(--shadow-card);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .community-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
          border-color: var(--sage);
        }
        .community-card__title {
          font-family: var(--font-display);
          color: var(--deep-green);
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .community-card__desc {
          font-size: 0.88rem;
          color: var(--text-mid);
          line-height: 1.65;
          margin-bottom: 24px;
          flex: 1;
        }
        .community-card__btn {
          width: 100%;
          justify-content: center;
          font-size: 0.85rem;
          padding: 12px 20px;
        }
        
        /* Event Card specific */
        .event-card__badge {
          position: absolute;
          top: 16px;
          right: 20px;
          color: white;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 3px 10px;
          border-radius: 20px;
        }
        .event-card__details {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px dashed var(--cream-dark);
        }
        .event-card__detail {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          color: var(--text-light);
        }
        .event-card__icon {
          font-size: 0.95rem;
          flex-shrink: 0;
        }

        /* Resource Card specific */
        .resource-card__icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          background: var(--pale-sage);
          color: var(--forest-green);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 16px;
        }
        .resource-card__meta {
          font-size: 0.75rem;
          color: var(--text-light);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 6px;
        }

        /* Volunteer Card specific */
        .volunteer-card__header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px dashed var(--cream-dark);
        }
        .volunteer-card__main-icon {
          font-size: 1.8rem;
          color: var(--mid-green);
        }
        .volunteer-card__label {
          font-size: 0.68rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .volunteer-card__meta-val {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-top: -2px;
        }
        .volunteer-card__loc {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-light);
          margin-bottom: 12px;
        }
        
        .btn-outline-green {
          background: transparent;
          border: 2px solid var(--forest-green);
          color: var(--forest-green);
        }
        .btn-outline-green:hover {
          background: var(--pale-sage);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .community__tabs {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
          .community__tab-btn {
            width: 100%;
            max-width: 320px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
