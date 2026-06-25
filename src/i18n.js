// src/i18n.js
// Internationalization configuration for HerbSphere

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            // Navbar
            nav: {
                home: "Home",
                plants: "Plants",
                community: "Community",
                aiAdvisor: "AI Advisor",
                selfie: "Selfie Garden",
                contact: "Contact"
            },
            // Hero
            hero: {
                title: "HerbSphere",
                subtitle: "Grow Health, Grow Community.",
                description:
                    "Discover medicinal plants, connect with community gardens, and receive AI-powered recommendations for healthier living.",
                explorePlants: "Explore Plants",
                joinCommunity: "Join Community",
                tagline: "Nature's Healing Intelligence",
                plantsDocumented: "Plants Documented",
                communityMembers: "Community Members",
                eventsHeld: "Events Organized"
            },
            // Features
            features: {
                label: "What We Offer",
                title: "Everything You Need to Grow",
                subtitle:
                    "From discovering ancient healing herbs to connecting with your local gardening community.",
                medicinalPlants: "Medicinal Plants",
                medicinalPlantsDesc:
                    "Explore a curated directory of herbs and medicinal plants with detailed benefits and uses.",
                aiAdvisor: "AI Plant Advisor",
                aiAdvisorDesc:
                    "Get personalized plant recommendations based on your health goals, space, and climate.",
                communityGarden: "Community Gardening",
                communityGardenDesc:
                    "Participate in local gardening initiatives, volunteer drives, and eco events.",
                selfieGarden: "Selfie Garden",
                selfieGardenDesc:
                    "Capture and share your green moments with our plant-themed selfie portal.",
                explore: "Explore"
            },
            // Directory
            directory: {
                label: "Plant Directory",
                title: "Medicinal Plant Library",
                subtitle:
                    "Browse our curated collection of nature's most powerful healing herbs.",
                searchPlaceholder: "Search plants by name, use, or benefit...",
                learnMore: "Learn More",
                allCategories: "All",
                noResults: "No plants match your search. Try a different term."
            },
            // Community
            community: {
                label: "Community",
                title: "Grow Together",
                subtitle: "Join thousands of herb enthusiasts in building greener, healthier communities.",
                events: "Upcoming Events",
                resources: "Resources",
                volunteer: "Volunteer",
                active: "Active"
            },
            // AI
            ai: {
                label: "AI-Powered",
                title: "Your Personal Plant Advisor",
                subtitle: "Tell us your health goals and we'll recommend the perfect medicinal plants.",
                healthGoal: "Health Goal",
                healthGoalPlaceholder: "e.g. Boost immunity, reduce stress, improve digestion",
                space: "Available Space",
                spacePlaceholder: "e.g. Balcony, Garden, Indoor windowsill",
                climate: "Your Climate",
                climatePlaceholder: "e.g. Tropical, Temperate, Dry, Cold",
                getRecommendation: "Get Recommendation",
                loading: "Analyzing your needs...",
                results: "Your Personalized Recommendations",
                spaceTip: "Growing in Your Space",
                climateTip: "Climate Advice",
                caution: "Safety Note",
                consultTitle: "Consult Your Advisor",
                customGoalPlaceholder: "Describe your custom health concern...",
                loadingSub: "Connecting with organic intelligence...",
                waitingTitle: "Waiting for consultation",
                waitingDesc: "Provide your details in the form to generate a personalized recommendation plan instantly.",
                goalOptions: {
                    immunity: "Boost Immunity & Prevent Infections",
                    stress: "Relieve Stress & Anxiety",
                    digestion: "Improve Digestion & Relieve Bloating",
                    sleep: "Combat Insomnia & Improve Sleep Quality",
                    respiratory: "Relieve Colds, Coughs & Congestion",
                    skin: "Soothe Skin, Burns & Promote Healing",
                    other: "Other / Write Your Own..."
                },
                spaceOptions: {
                    balcony: "Balcony (Moderate sun, container growth)",
                    backyard: "Backyard Garden (Direct sun, open soil)",
                    windowsill: "Indoor Windowsill (Limited space/sun)",
                    terrace: "Terrace (Abundant sun, pots/raised beds)"
                },
                climateOptions: {
                    tropical: "Tropical (Warm, high humidity)",
                    temperate: "Temperate (Mild seasons, moderate rain)",
                    dry: "Dry / Arid (Hot, low rainfall)",
                    cold: "Cold (Cool summers, snowy winters)"
                }
            },
            // Selfie
            selfie: {
                label: "Selfie Garden",
                title: "Plant Selfie Garden",
                description: "Capture your green moments and share your love for medicinal plants.",
                openCamera: "Open Camera",
                capturePhoto: "Capture Photo",
                download: "Download Photo",
                retake: "Retake",
                cameraOffline: "Camera is offline",
                cameraOfflineDesc: "Start your camera, strike a pose with your favorite plant, and capture the green vibes!",
                cameraError: "Unable to access camera. Please check permissions and try again.",
                cancel: "Cancel"
            },
            // Stats
            stats: {
                label: "Our Impact",
                title: "Growing Together, Growing Strong",
                plants: "Plants Documented",
                events: "Events Organized",
                members: "Community Members",
                hours: "Volunteer Hours"
            },
            // Footer
            footer: {
                tagline: "Grow Health, Grow Community.",
                about: "About",
                quickLinks: "Quick Links",
                contact: "Contact",
                rights: "All rights reserved.",
                desc: "Discover medicinal plants, connect with community gardens, and receive AI-powered recommendations for healthier, sustainable living.",
                visionTitle: "Our Vision",
                visionDesc: "To create a world where every community grows its own medicine, breathes clean air, and walks in harmony with nature.",
                ecoCertified: "Eco Certified",
                communityDriven: "Community Driven",
                privacyPolicy: "Privacy Policy",
                termsOfService: "Terms of Service",
                builtWith: "Built with ❤️ by Meeth & Malatesh"
            },
            // Modal labels
            modal: {
                medicinalUses: "Medicinal Uses",
                keyBenefits: "Key Benefits",
                traditionalUse: "Traditional Use",
                difficulty: "Difficulty",
                easy: "Easy",
                medium: "Medium",
                hard: "Hard"
            },
            // Region labels
            regions: {
                "South Asia": "South Asia",
                "Africa / Mediterranean": "Africa / Mediterranean",
                "India / Middle East / Africa": "India / Middle East / Africa",
                "South Asia / Southeast Asia": "South Asia / Southeast Asia",
                "Europe / Middle East": "Europe / Middle East",
                "Southeast Asia / Africa": "Southeast Asia / Africa",
                "India / Sri Lanka": "India / Sri Lanka",
                "India / Wetlands globally": "India / Wetlands globally",
                "Australia / Global": "Australia / Global",
                "Mediterranean / Europe": "Mediterranean / Europe"
            },
            category: {
                "Immunity": "Immunity",
                "Skin Care": "Skin Care",
                "Antimicrobial": "Antimicrobial",
                "Adaptogen": "Adaptogen",
                "Anti-inflammatory": "Anti-inflammatory",
                "Digestive": "Digestive",
                "Antifungal": "Antifungal",
                "Cognitive": "Cognitive",
                "Antioxidant": "Antioxidant",
                "Respiratory": "Respiratory",
                "Relaxation": "Relaxation"
            }
        }
    },
    hi: {
        translation: {
            nav: {
                home: "होम",
                plants: "पौधे",
                community: "समुदाय",
                aiAdvisor: "AI सलाहकार",
                selfie: "सेल्फी गार्डन",
                contact: "संपर्क"
            },
            hero: {
                title: "हर्बस्फेयर",
                subtitle: "स्वास्थ्य उगाएं, समुदाय उगाएं।",
                description:
                    "औषधीय पौधों की खोज करें, सामुदायिक बगीचों से जुड़ें, और AI-संचालित अनुशंसाओं से स्वस्थ जीवन पाएं।",
                explorePlants: "पौधे देखें",
                joinCommunity: "समुदाय जुड़ें",
                tagline: "प्रकृती की उपचार बुद्धिमत्ता",
                plantsDocumented: "दर्ज पौधे",
                communityMembers: "सामुदायिक सदस्य",
                eventsHeld: "आयोजित कार्यक्रम"
            },
            features: {
                label: "हमारी सेवाएं",
                title: "बढ़ने के लिए सब कुछ",
                subtitle: "प्राचीन औषधीय जड़ी-बूटियों से लेकर स्थानीय बागवानी समुदाय तक।",
                medicinalPlants: "औषधीय पौधे",
                medicinalPlantsDesc: "विस्तृत लाभ और उपयोग के साथ जड़ी-बूटियों का संग्रह।",
                aiAdvisor: "AI पौध सलाहकार",
                aiAdvisorDesc: "आपके स्वास्थ्य लक्ष्यों के आधार पर व्यक्तिगत सुझाव।",
                communityGarden: "सामुदायिक बागवानी",
                communityGardenDesc: "स्थानीय बागवानी पहल और स्वयंसेवी कार्यक्रमों में भाग लें।",
                selfieGarden: "सेल्फी गार्डन",
                selfieGardenDesc: "पौधों के साथ अपने हरे पलों को कैप्चर करें।",
                explore: "अन्वेषण करें"
            },
            directory: {
                label: "पौध निर्देशिका",
                title: "औषधीय पौध पुस्तकालय",
                subtitle: "प्रकृति की सबसे शक्तिशाली जड़ी-बूटियों का संग्रह।",
                searchPlaceholder: "पौधे खोजें...",
                learnMore: "और जानें",
                allCategories: "सभी",
                noResults: "कोई परिणाम नहीं मिला।"
            },
            community: {
                label: "समुदाय",
                title: "साथ उगाएं",
                subtitle: "हरे-भरे, स्वस्थ समुदायों के निर्माण में हजारों उत्साहियों के साथ जुड़ें।",
                events: "आगामी कार्यक्रम",
                resources: "संसाधन",
                volunteer: "स्वयंसेवी",
                active: "सक्रिय"
            },
            ai: {
                label: "AI-संचालित",
                title: "आपका व्यक्तिगत पौध सलाहकार",
                subtitle: "अपने स्वास्थ्य लक्ष्य बताएं और हम सही औषधीय पौधे सुझाएंगे।",
                healthGoal: "स्वास्थ्य लक्ष्य",
                healthGoalPlaceholder: "जैसे: प्रतिरोधक क्षमता बढ़ाएं, तनाव कम करें",
                space: "उपलब्ध जगह",
                spacePlaceholder: "जैसे: बालकनी, बगीचा, कमरे में",
                climate: "आपकी जलवायु",
                climatePlaceholder: "जैसे: उष्णकटिबंधीय, शीतोष्ण",
                getRecommendation: "सुझाव पाएं",
                loading: "विश्लेषण हो रहा है...",
                results: "आपकी व्यक्तिगत अनुशंसाएं",
                spaceTip: "आपकी जगह में उगाएं",
                climateTip: "जलवायु सलाह",
                caution: "सुरक्षा नोट",
                consultTitle: "अपने सलाहकार से परामर्श करें",
                customGoalPlaceholder: "अपनी पसंद के स्वास्थ्य संबंधी चिंता का वर्णन करें...",
                loadingSub: "जैविक बुद्धिमत्ता से जुड़ रहा है...",
                waitingTitle: "परामर्श की प्रतीक्षा की जा रही है",
                waitingDesc: "तुरंत व्यक्तिगत अनुशंसा योजना उत्पन्न करने के लिए फॉर्म में अपना विवरण प्रदान करें।",
                goalOptions: {
                    immunity: "प्रतिरोधक क्षमता बढ़ाएं और संक्रमण से बचाएं",
                    stress: "तनाव और चिंता से राहत पाएं",
                    digestion: "पाचन में सुधार करें और पेट फूलने से राहत पाएं",
                    sleep: "अनिद्रा से लड़ें और नींद की गुणवत्ता में सुधार करें",
                    respiratory: "सर्दी, खांसी और जमाव से राहत पाएं",
                    skin: "त्वचा, जलन को शांत करें और उपचार को बढ़ावा दें",
                    other: "अन्य / अपना खुद का लिखें..."
                },
                spaceOptions: {
                    balcony: "बालकनी (मध्यम धूप, गमले में विकास)",
                    backyard: "पिछवाड़े का बगीचा (सीधी धूप, खुली मिट्टी)",
                    windowsill: "इनडोर खिड़की (सीमित स्थान/धूप)",
                    terrace: "छत (प्रचुर मात्रा में धूप, गमले/उठे हुए क्यारी)"
                },
                climateOptions: {
                    tropical: "उष्णकटिबंधीय (गर्म, उच्च आर्द्रता)",
                    temperate: "शीतोष्ण (सौम्य मौसम, मध्यम वर्षा)",
                    dry: "शुष्क (गर्म, कम वर्षा)",
                    cold: "ठंडा (ठंडी गर्मियां, बर्फीली सर्दियां)"
                }
            },
            selfie: {
                label: "सेल्फी गार्डन",
                title: "पौध सेल्फी गार्डन",
                description: "अपने हरे पलों को कैप्चर करें।",
                openCamera: "कैमरा खोलें",
                capturePhoto: "फोटो लें",
                download: "डाउनलोड करें",
                retake: "फिर से लें",
                cameraOffline: "कैमरा ऑफलाइन है",
                cameraOfflineDesc: "अपना कैमरा शुरू करें, अपने पसंदीदा पौधे के साथ एक पोज़ दें, और हरी तरंगों को कैप्चर करें!",
                cameraError: "कैमरा एक्सेस करने में असमर्थ। कृपया अनुमतियों की जांच करें और पुनः प्रयास करें।",
                cancel: "रद्द करें"
            },
            stats: {
                label: "हमारा प्रभाव",
                title: "साथ बढ़ें, मजबूत बढ़ें",
                plants: "दर्ज पौधे",
                events: "आयोजित कार्यक्रम",
                members: "सामुदायिक सदस्य",
                hours: "स्वयंसेवी घंटे"
            },
            footer: {
                tagline: "स्वास्थ्य उगाएं, समुदाय उगाएं।",
                about: "हमारे बारे में",
                quickLinks: "त्वरित लिंक",
                contact: "संपर्क",
                rights: "सर्वाधिकार सुरक्षित।",
                desc: "औषधीय पौधों की खोज करें, सामुदायिक बगीचों से जुड़ें, और स्वस्थ, टिकाऊ जीवन के लिए AI-संचालित अनुशंसाएं प्राप्त करें।",
                visionTitle: "हमारा दृष्टिकोण",
                visionDesc: "एक ऐसी दुनिया का निर्माण करना जहां हर समुदाय अपनी खुद की दवा उगाए, स्वच्छ हवा में सांस ले, और प्रकृति के साथ सद्भाव में चले।",
                ecoCertified: "पर्यावरण प्रमाणित",
                communityDriven: "समुदाय संचालित",
                privacyPolicy: "गोपनीयता नीति",
                termsOfService: "सेवा की शर्तें",
                builtWith: "मीथ और मलातेश द्वारा ❤️ के साथ निर्मित"
            },
            modal: {
                medicinalUses: "औषधीय उपयोग",
                keyBenefits: "मुख्य लाभ",
                traditionalUse: "पारंपरिक उपयोग",
                difficulty: "कठिनाई",
                easy: "आसान",
                medium: "मध्यम",
                hard: "कठिन"
            },
            regions: {
                "South Asia": "दक्षिण एशिया",
                "Africa / Mediterranean": "अफ्रीका / भूमध्य",
                "India / Middle East / Africa": "भारत / मध्य पूर्व / अफ्रीका",
                "South Asia / Southeast Asia": "दक्षिण एशिया / दक्षिण पूर्व एशिया",
                "Europe / Middle East": "यूरोप / मध्य पूर्व",
                "Southeast Asia / Africa": "दक्षिण पूर्व एशिया / अफ्रीका",
                "India / Sri Lanka": "भारत / श्रीलंका",
                "India / Wetlands globally": "भारत / वैश्विक आर्द्रभूमि",
                "Australia / Global": "ऑस्ट्रेलिया / वैश्विक",
                "Mediterranean / Europe": "भूमध्य सागर / यूरोप"
            },
            category: {
                "Immunity": "प्रतिरोधक क्षमता",
                "Skin Care": "त्वचा की देखभाल",
                "Antimicrobial": "रोगाणुरोधी",
                "Adaptogen": "एडाप्टोजेन",
                "Anti-inflammatory": "सूजन-रोधी",
                "Digestive": "पाचन",
                "Antifungal": "कवकरोधी",
                "Cognitive": "संज्ञानात्मक",
                "Antioxidant": "एंटीऑक्सीडेंट",
                "Respiratory": "श्वसन संबंधी",
                "Relaxation": "विश्राम"
            }
        }
    },
    kn: {
        translation: {
            nav: {
                home: "ಮುಖಪುಟ",
                plants: "ಸಸ್ಯಗಳು",
                community: "ಸಮುದಾಯ",
                aiAdvisor: "AI ಸಲಹೆಗಾರ",
                selfie: "ಸೆಲ್ಫಿ ಗಾರ್ಡನ್",
                contact: "ಸಂಪರ್ಕ"
            },
            hero: {
                title: "ಹರ್ಬ್‌ಸ್ಫಿಯರ್",
                subtitle: "ಆರೋಗ್ಯ ಬೆಳೆಸಿ, ಸಮುದಾಯ ಬೆಳೆಸಿ.",
                description:
                    "ಔಷಧೀಯ ಸಸ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, ಸಮುದಾಯ ಉದ್ಯಾನಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ, ಮತ್ತು AI ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ.",
                explorePlants: "ಸಸ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
                joinCommunity: "ಸಮುದಾಯ ಸೇರಿ",
                tagline: "ಪ್ರಕೃತಿಯ ಹೀಲಿಂಗ್ ಬುದ್ಧಿಮತ್ತೆ",
                plantsDocumented: "ದಾಖಲಾದ ಸಸ್ಯಗಳು",
                communityMembers: "ಸಮುದಾಯ ಸದಸ್ಯರು",
                eventsHeld: "ಆಯೋಜಿಸಿದ ಕಾರ್ಯಕ್ರಮಗಳು"
            },
            features: {
                label: "ನಾವು ನೀಡುವುದು",
                title: "ಬೆಳೆಯಲು ಬೇಕಾದ ಎಲ್ಲವೂ",
                subtitle: "ಪ್ರಾಚೀನ ಔಷಧೀಯ ಗಿಡಮೂಲಿಕೆಗಳಿಂದ ಸ್ಥಳೀಯ ತೋಟಗಾರಿಕಾ ಸಮುದಾಯದವರೆಗೆ.",
                medicinalPlants: "ಔಷಧೀಯ ಸಸ್ಯಗಳು",
                medicinalPlantsDesc: "ವಿವರವಾದ ಪ್ರಯೋಜನಗಳೊಂದಿಗೆ ಗಿಡಮೂಲಿಕೆಗಳ ಸಂಗ್ರಹ.",
                aiAdvisor: "AI ಸಸ್ಯ ಸಲಹೆಗಾರ",
                aiAdvisorDesc: "ನಿಮ್ಮ ಆರೋಗ್ಯ ಗುರಿಗಳ ಆಧಾರದ ಮೇಲೆ ವ್ಯಕ್ತಿಗತ ಶಿಫಾರಸುಗಳು.",
                communityGarden: "ಸಮುದಾಯ ತೋಟಗಾರಿಕೆ",
                communityGardenDesc: "ಸ್ಥಳೀಯ ತೋಟಗಾರಿಕಾ ಉಪಕ್ರಮಗಳಲ್ಲಿ भागವಹಿಸಿ.",
                selfieGarden: "ಸೆಲ್ಫಿ ಗಾರ್ಡನ್",
                selfieGardenDesc: "ಸಸ್ಯಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಹಸಿರು ಕ್ಷಣಗಳನ್ನು ಸೆರೆಹಿಡಿಯಿರಿ.",
                explore: "ಅನ್ವೇಷಿಸಿ"
            },
            directory: {
                label: "ಸಸ್ಯ ನಿರ್ದೇಶಿಕೆ",
                title: "ಔಷಧೀಯ ಸಸ್ಯ ಗ್ರಂಥಾಲಯ",
                subtitle: "ಪ್ರಕೃತಿಯ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಗಿಡಮೂಲಿಕೆಗಳ ಸಂಗ್ರಹ.",
                searchPlaceholder: "ಸಸ್ಯಗಳನ್ನು ಹುಡುಕಿ...",
                learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
                allCategories: "ಎಲ್ಲಾ",
                noResults: "ಯಾವುದೇ ಸಸ್ಯ ಕಂಡುಬಂದಿಲ್ಲ."
            },
            community: {
                label: "ಸಮುದಾಯ",
                title: "ಒಟ್ಟಿಗೆ ಬೆಳೆಯಿರಿ",
                subtitle: "ಹಸಿರು, ಆರೋಗ್ಯಕರ ಸಮುದಾಯಗಳನ್ನು ನಿರ್ಮಿಸಲು ಸಾವಿರಾರು ಉತ್ಸಾಹಿಗಳೊಂದಿಗೆ ಸೇರಿ.",
                events: "ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳು",
                resources: "ಸಂಪನ್ಮೂಲಗಳು",
                volunteer: "ಸ್ವಯಂಸೇವಕ",
                active: "ಸಕ್ರಿಯ"
            },
            ai: {
                label: "AI-ಚಾಲಿತ",
                title: "ನಿಮ್ಮ ವ್ಯಕ್ತಿಗತ ಸಸ್ಯ ಸಲಹೆಗಾರ",
                subtitle: "ನಿಮ್ಮ ಆರೋಗ್ಯ ಗುರಿಗಳನ್ನು ಹೇಳಿ ಮತ್ತು ನಾವು ಸರಿಯಾದ ಸಸ್ಯಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ.",
                healthGoal: "ಆರೋಗ್ಯ ಗುರಿ",
                healthGoalPlaceholder: "ಉದಾ: ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಹೆಚ್ಚಿಸಿ",
                space: "ಲಭ್ಯ ಜಾಗ",
                spacePlaceholder: "ಉದಾ: ಬಾಲ್ಕನಿ, ತೋಟ, ಒಳಾಂಗಣ",
                climate: "ನಿಮ್ಮ ಹವಾಮಾನ",
                climatePlaceholder: "ಉದಾ: ಉಷ್ಣವಲಯ, ಸಮಶೀತೋಷ್ಣ",
                getRecommendation: "ಶಿಫಾರಸು ಪಡೆಯಿರಿ",
                loading: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
                results: "ನಿಮ್ಮ ವ್ಯಕ್ತಿಗತ ಶಿಫಾರಸುಗಳು",
                spaceTip: "ನಿಮ್ಮ ಜಾಗದಲ್ಲಿ ಬೆಳೆಯಿರಿ",
                climateTip: "ಹವಾಮಾನ ಸಲಹೆ",
                caution: "ಸುರಕ್ಷತಾ ಸೂಚನೆ",
                consultTitle: "ನಿಮ್ಮ ಸಲಹೆಗಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ",
                customGoalPlaceholder: "ನಿಮ್ಮ ಕಸ್ಟಮ್ ಆರೋಗ್ಯ ಕಾಳಜಿಯನ್ನು ವಿವರಿಸಿ...",
                loadingSub: "ಸಾವಯವ ಬುದ್ಧಿಮತ್ತೆಯೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ...",
                waitingTitle: "ಸಂಪರ್ಕಕ್ಕಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ",
                waitingDesc: "ವೈಯಕ್ತಿಕ ಶಿಫಾರಸು ಯೋಜನೆಯನ್ನು ತಕ್ಷಣವೇ ರಚಿಸಲು ಫಾರ್ಮ್‌ನಲ್ಲಿ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಒದಗಿಸಿ.",
                goalOptions: {
                    immunity: "ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಹೆಚ್ಚಿಸಿ ಮತ್ತು ಸೋಂಕು ತಡೆಯಿರಿ",
                    stress: "ಒತ್ತಡ ಮತ್ತು ಆತಂಕದಿಂದ ಪರಿಹಾರ ಪಡೆಯಿರಿ",
                    digestion: "ಜೀರ್ಣಕ್ರಿಯೆ ಸುಧಾರಿಸಿ ಮತ್ತು ಉಬ್ಬರ ಕಡಿಮೆ ಮಾಡಿ",
                    sleep: "ನಿದ್ರಾಹೀನತೆ ನಿವಾರಿಸಿ ಮತ್ತು ನಿದ್ರೆಯ ಗುಣಮಟ್ಟ ಸುಧಾರಿಸಿ",
                    respiratory: "ಶೀತ, ಕೆಮ್ಮು ಮತ್ತು ಉಸಿರಾಟದ ತೊಂದರೆ ನಿವಾರಿಸಿ",
                    skin: "ತ್ವಚೆ, ಸುಟ್ಟ ಗಾಯಗಳನ್ನು ಉಪಶಮನಗೊಳಿಸಿ ಮತ್ತು ಗುಣಪಡಿಸುವಿಕೆಯನ್ನು ಉತ್ತೇಜಿಸಿ",
                    other: "ಇತರೆ / ನಿಮ್ಮ ಸ್ವಂತದ್ದನ್ನು ಬರೆಯಿರಿ..."
                },
                spaceOptions: {
                    balcony: "ಬಾಲ್ಕನಿ (ಮಧ್ಯಮ ಬಿಸಿಲು, ಕುಂಡದಲ್ಲಿ ಬೆಳವಣಿಗೆ)",
                    backyard: "ಹಿತ್ತಲಿನ ತೋಟ (ನೇರ ಬಿಸಿಲು, ತೆರೆದ ಮಣ್ಣು)",
                    windowsill: "ಒಳಾಂಗಣ ಕಿಟಕಿ (ಸೀಮಿತ ಸ್ಥಳ/ಬಿಸಿಲು)",
                    terrace: "ಟೆರೇಸ್ (ಹೆಚ್ಚು ಬಿಸಿಲು, ಕುಂಡಗಳು)"
                },
                climateOptions: {
                    tropical: "ಉಷ್ಣವಲಯ (ಬೆಚ್ಚಗಿನ, ಹೆಚ್ಚಿನ ಆರ್ದ್ರತೆ)",
                    temperate: "ಸಮಶೀತೋಷ್ಣ (ಸೌಮ್ಯ ಕಾಲೋಚಿತ, ಮಧ್ಯಮ ಮಳೆ)",
                    dry: "ಶುಷ್ಕ (ಬಿಸಿಲು, ಕಡಿಮೆ ಮಳೆ)",
                    cold: "ಶೀತ (ತಂಪಾದ ಬೇಸಿಗೆ, ಹಿಮಭರಿತ ಚಳಿಗಾಲ)"
                }
            },
            selfie: {
                label: "ಸೆಲ್ಫಿ ಗಾರ್ಡನ್",
                title: "ಸಸ್ಯ ಸೆಲ್ಫಿ ಗಾರ್ಡನ್",
                description: "ನಿಮ್ಮ ಹಸಿರು ಕ್ಷಣಗಳನ್ನು ಸೆರೆಹಿಡಿಯಿರಿ.",
                openCamera: "ಕ್ಯಾಮೆರಾ ತೆರೆಯಿರಿ",
                capturePhoto: "ಫೋಟೋ ತೆಗೆಯಿರಿ",
                download: "ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
                retake: "ಮತ್ತೆ ತೆಗೆಯಿರಿ",
                cameraOffline: "ಕ್ಯಾಮೆರಾ ಆಫ್‌ಲೈನ್ ಆಗಿದೆ",
                cameraOfflineDesc: "ನಿಮ್ಮ ಕ್ಯಾಮರಾವನ್ನು ಪ್ರಾರಂಭಿಸಿ, ನಿಮ್ಮ ನೆಚ್ಚಿನ ಸಸ್ಯದೊಂದಿಗೆ ಫೋಸ್ ನೀಡಿ ಮತ್ತು ಹಸಿರು ಕ್ಷಣವನ್ನು ಸೆರೆಹಿಡಿಯಿರಿ!",
                cameraError: "ಕ್ಯಾಮೆರಾ ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಅನುಮತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
                cancel: "ರದ್ದುಮಾಡು"
            },
            stats: {
                label: "ನಮ್ಮ ಪ್ರಭಾವ",
                title: "ಒಟ್ಟಿಗೆ ಬೆಳೆಯಿರಿ, ಬಲವಾಗಿ ಬೆಳೆಯಿರಿ",
                plants: "ದಾಖಲಾದ ಸಸ್ಯಗಳು",
                events: "ಆಯೋಜಿಸಿದ ಕಾರ್ಯಕ್ರಮಗಳು",
                members: "ಸಮುದಾಯ ಸದಸ್ಯರು",
                hours: "ಸ್ವಯಂಸೇವಕ ಗಂಟೆಗಳು"
            },
            footer: {
                tagline: "ಆರೋಗ್ಯ ಬೆಳೆಸಿ, ಸಮುದಾಯ ಬೆಳೆಸಿ.",
                about: "ನಮ್ಮ ಬಗ್ಗೆ",
                quickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
                contact: "ಸಂಪರ್ಕ",
                rights: "ಎಲ್ಲ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
                desc: "ಔಷಧೀಯ ಸಸ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, ಸಮುದಾಯ ಉದ್ಯಾನಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ಆರೋಗ್ಯಕರ, ಸುಸ್ಥಿರ ಜೀವನಕ್ಕಾಗಿ AI-ಚಾಲಿತ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ.",
                visionTitle: "ನಮ್ಮ ದೃಷ್ಟಿ",
                visionDesc: "ಪ್ರತಿಯೊಂದು ಸಮುದಾಯವು ತನ್ನದೇ ಆದ ಔಷಧವನ್ನು ಬೆಳೆಯುವ, ಶುದ್ಧ ಗಾಳಿಯನ್ನು ಉಸಿರಾಡುವ ಮತ್ತು ಪ್ರಕೃತಿಯೊಂದಿಗೆ ಸಾಮರಸ್ಯದಿಂದ ನಡೆಯುವ ಜಗತ್ತನ್ನು ಸೃಷ್ಟಿಸುವುದು.",
                ecoCertified: "ಪರಿಸರ ಪ್ರಮಾಣೀಕೃತ",
                communityDriven: "ಸಮುದಾಯ ಚಾಲಿತ",
                privacyPolicy: "ಗೌಪ್ಯತಾ ನೀತಿ",
                termsOfService: "ಸೇವಾ ನಿಯಮಗಳು",
                builtWith: "ಮೀತ್ ಮತ್ತು ಮಲತೇಶ್ ಅವರಿಂದ ❤️ ನೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾಗಿದೆ"
            },
            modal: {
                medicinalUses: "ಔಷಧೀಯ ಉಪಯೋಗಗಳು",
                keyBenefits: "ಪ್ರಮುಖ ಪ್ರಯೋಜನಗಳು",
                traditionalUse: "ಸಾಂಪ್ರದಾಯಿಕ ಬಳಕೆ",
                difficulty: "ಕಠಿಣತೆ",
                easy: "ಸುಲಭ",
                medium: "ಮಧ್ಯಮ",
                hard: "ಕಠಿಣ"
            },
            regions: {
                "South Asia": "ದಕ್ಷಿಣ ಏಷ್ಯಾ",
                "Africa / Mediterranean": "ಆಫ್ರಿಕಾ / ಮೆಡಿಟರೇನಿಯನ್",
                "India / Middle East / Africa": "ಭಾರತ / ಮಧ್ಯಪ್ರಾಚ್ಯ / ಆಫ್ರಿಕಾ",
                "South Asia / Southeast Asia": "ದಕ್ಷಿಣ ಏಷ್ಯಾ / ಆಗ್ನೇಯ ಏಷ್ಯಾ",
                "Europe / Middle East": "ಯುರೋಪ್ / ಮಧ್ಯಪ್ರಾಚ್ಯ",
                "Southeast Asia / Africa": "ಆಗ್ನೇಯ ಏಷ್ಯಾ / ಆಫ್ರಿಕಾ",
                "India / Sri Lanka": "ಭಾರತ / ಶ್ರೀಲಂಕಾ",
                "India / Wetlands globally": "ಭಾರತ / ಜಾಗತಿಕ ಜೌಗು ಪ್ರದೇಶಗಳು",
                "Australia / Global": "ಆಸ್ಟ್ರೇಲಿಯಾ / ಜಾಗತಿಕ",
                "Mediterranean / Europe": "ಮೆಡಿಟರೇನಿಯನ್ / ಯುರೋಪ್"
            },
            category: {
                "Immunity": "ರೋಗನಿರೋಧಕ ಶಕ್ತಿ",
                "Skin Care": "ತ್ವಚೆಯ ಆರೈಕೆ",
                "Antimicrobial": "ಆಂಟಿಮೈಕ್ರೊಬಿಯಲ್",
                "Adaptogen": "ಅಡಾಪ್ಟೋಜೆನ್",
                "Anti-inflammatory": "ಉರಿಯೂತ ವಿರೋಧಿ",
                "Digestive": "ಜೀರ್ಣಕಾರಿ",
                "Antifungal": "ಆಂಟಿಫಂಗಲ್",
                "Cognitive": "ಅರಿವಿನ",
                "Antioxidant": "ಉತ್ಕರ್ಷಣ ನಿರೋಧಕ",
                "Respiratory": "ಉಸಿರಾಟದ",
                "Relaxation": "ವಿಶ್ರಾಂತಿ"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;