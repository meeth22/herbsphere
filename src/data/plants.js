// src/data/plants.js
// Multilingual medicinal plant database for HerbSphere (EN, HI, KN)

export const plants = [
    {
        id: 1,
        scientificName: "Ocimum tenuiflorum",
        image: "https://images.unsplash.com/photo-1664289283342-7dfd936b4b99?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        region: "South Asia",
        difficulty: "Easy",
        color: "#52b788",
        category: "Immunity",
        uses: ["Respiratory disorders", "Fever reduction", "Stress relief", "Skin care"],
        benefits: ["Powerful adaptogen", "Rich in antioxidants", "Natural antimicrobial", "Boosts immune system"],
        en: {
            name: "Tulsi",
            category: "Immunity",
            uses: ["Respiratory disorders", "Fever reduction", "Stress relief", "Skin care"],
            benefits: [
                "Powerful adaptogen that helps body cope with stress",
                "Rich in antioxidants including eugenol and rosmarinic acid",
                "Natural antimicrobial and anti-inflammatory properties",
                "Boosts immune system and helps fight infections"
            ],
            traditional: "Sacred in Ayurvedic medicine for over 3,000 years, Tulsi is called the 'Queen of Herbs'. Used in daily religious rituals and as a household remedy across India.",
            facts: "A single Tulsi plant can purify the air within a 100-meter radius. It emits oxygen 20 hours a day and absorbs harmful CO₂, CO, and SO₂."
        },
        hi: {
            name: "तुलसी",
            category: "प्रतिरोधक क्षमता",
            uses: ["श्वसन संबंधी विकार", "बुखार में कमी", "तनाव से राहत", "त्वचा की देखभाल"],
            benefits: [
                "शक्तिशाली एडाप्टोजेन जो शरीर को तनाव से निपटने में मदद करता है",
                "यूजेनॉल और रोज़मारिनिक एसिड सहित एंटीऑक्सिडेंट से भरपूर",
                "प्राकृतिक रोगाणुरोधी और सूजन-रोधी गुण",
                "प्रतिरक्षा प्रणाली को बढ़ाता है और संक्रमण से लड़ने में मदद करता है"
            ],
            traditional: "3,000 से अधिक वर्षों से आयुर्वेदिक चिकित्सा में पवित्र, तुलसी को 'जड़ी-बूटियों की रानी' कहा जाता है। भारत भर में दैनिक धार्मिक अनुष्ठानों और घरेलू उपचार के रूप में उपयोग किया जाता है।",
            facts: "एक अकेला तुलसी का पौधा 100 मीटर के दायरे में हवा को शुद्ध कर सकता है। यह दिन में 20 घंटे ऑक्सीजन छोड़ता है और हानिकारक कार्बन मोनोऑक्साइड और सल्फर डाइऑक्साइड को अवशोषित करता है।"
        },
        kn: {
            name: "ತುಳಸಿ",
            category: "ರೋಗನಿರೋಧಕ ಶಕ್ತಿ",
            uses: ["ಉಸಿರಾಟದ ತೊಂದರೆಗಳು", "ಜ್ವರ ನಿವಾರಣೆ", "ಒತ್ತಡ ಪರಿಹಾರ", "ತ್ವಚೆಯ ಆರೈಕೆ"],
            benefits: [
                "ಒತ್ತಡವನ್ನು ನಿಭಾಯಿಸಲು ಸಹಾಯ ಮಾಡುವ ಪ್ರಬಲ ಅಡಾಪ್ಟೋಜೆನ್",
                "ಯುಜೆನಾಲ್ ಮತ್ತು ರೋಸ್ಮರಿನಿಕ್ ಆಮ್ಲ ಸೇರಿದಂತೆ ಉತ್ಕರ್ಷಣ ನಿರೋಧಕಗಳಿಂದ ಸಮೃದ್ಧವಾಗಿದೆ",
                "ನೈಸರ್ಗಿಕ ನಂಜುನಿರೋಧಕ ಮತ್ತು ಉರಿಯೂತ ವಿರೋಧಿ ಗುಣಲಕ್ಷಣಗಳು",
                "ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ ಮತ್ತು ಸೋಂಕುಗಳ ವಿರುದ್ಧ ಹೋರಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ"
            ],
            traditional: "3,000 ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳಿಂದ ಆಯುರ್ವೇದ ವೈದ್ಯಕೀಯದಲ್ಲಿ ಪವಿತ್ರವಾದ ತುಳಸಿಯನ್ನು 'ಗಿಡಮೂಲಿಕೆಗಳ ರಾಣಿ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಭಾರತದಾದ್ಯಂತ ದೈನಂದಿನ ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳಲ್ಲಿ ಮತ್ತು ಮನೆಮದ್ದಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.",
            facts: "ಒಂದು ತುಳಸಿ ಗಿಡವು 100 ಮೀಟರ್ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಗಾಳಿಯನ್ನು ಶುದ್ಧೀಕರಿಸುತ್ತದೆ. ಇದು ದಿನಕ್ಕೆ 20 ಗಂಟೆಗಳ ಕಾಲ ಆಮ್ಲಜನಕವನ್ನು ಬಿಡುಗಡೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಹಾನಿಕಾರಕ ಅನಿಲಗಳನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತದೆ."
        }
    },
    {
        id: 2,
        scientificName: "Aloe barbadensis miller",
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=600&q=80",
        region: "Africa / Mediterranean",
        difficulty: "Easy",
        color: "#95d5b2",
        category: "Skin Care",
        uses: ["Burns and wounds", "Digestive health", "Skin moisturizing", "Hair care"],
        benefits: ["75+ active compounds", "Accelerates wound healing", "Natural laxative", "Anti-aging properties"],
        en: {
            name: "Aloe Vera",
            category: "Skin Care",
            uses: ["Burns and wounds", "Digestive health", "Skin moisturizing", "Hair care"],
            benefits: [
                "Contains 75+ active compounds including vitamins, minerals, and enzymes",
                "Accelerates wound healing by up to 9 days",
                "Natural laxative for constipation relief",
                "Anti-aging properties reduce wrinkles and fine lines"
            ],
            traditional: "Used by ancient Egyptians as the 'Plant of Immortality'. Cleopatra used it as part of her beauty regimen. Referenced in ancient texts from Greece, Rome, India, and China.",
            facts: "Aloe vera is 99% water. The inner gel contains acemannan, a polysaccharide that stimulates immune function and has antiviral properties."
        },
        hi: {
            name: "एलोवेरा",
            category: "त्वचा की देखभाल",
            uses: ["जलन और घाव", "पाचन स्वास्थ्य", "त्वचा को नमी देना", "बालों की देखभाल"],
            benefits: [
                "विटामिन, खनिज और एंजाइम सहित 75+ सक्रिय यौगिक शामिल हैं",
                "घाव भरने की गति को 9 दिनों तक बढ़ा देता है",
                "कब्ज से राहत के लिए प्राकृतिक रेचक",
                "एंटी-एजिंग गुण झुर्रियों और महीन रेखाओं को कम करते हैं"
            ],
            traditional: "प्राचीन मिस्रवासियों द्वारा 'अमरता के पौधे' के रूप में उपयोग किया जाता था। क्लियोपेट्रा ने इसे अपने सौंदर्य शासन के हिस्से के रूप में इस्तेमाल किया। यूनान, रोम, भारत और चीन के प्राचीन ग्रंथों में संदर्भित।",
            facts: "एलोवेरा 99% पानी है। इसके आंतरिक जेल में एसेमनन होता है, जो एक पॉलीसेकेराइड है जो प्रतिरक्षा कार्य को उत्तेजित करता है।"
        },
        kn: {
            name: "ಅಲೋವೆರಾ",
            category: "ತ್ವಚೆಯ ಆರೈಕೆ",
            uses: ["ಸುಟ್ಟ ಗಾಯಗಳು", "ಜೀರ್ಣಕಾರಿ ಆರೋಗ್ಯ", "ತ್ವಚೆಯ ತೇವಾಂಶ", "ಕೂದಲಿನ ಆರೈಕೆ"],
            benefits: [
                "ವಿಟಮಿನ್ಗಳು, ಖನಿಜಗಳು ಮತ್ತು ಕಿಣ್ವಗಳು ಸೇರಿದಂತೆ 75+ ಸಕ್ರಿಯ ಸಂಯುಕ್ತಗಳನ್ನು ಒಳಗೊಂಡಿದೆ",
                "ಗಾಯ ವಾಸಿಯಾಗುವುದನ್ನು 9 ದಿನಗಳವರೆಗೆ ವೇಗಗೊಳಿಸುತ್ತದೆ",
                "ಮಲಬದ್ಧತೆ ನಿವಾರಣೆಗೆ ನೈಸರ್ಗಿಕ ವಿರೇಚಕ",
                "ವಯಸ್ಸಾಗುವಿಕೆ ವಿರೋಧಿ ಗುಣಗಳು ಸುಕ್ಕುಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ"
            ],
            traditional: "ಪ್ರಾಚೀನ ಈಜಿಪ್ಟಿನವರು ಇದನ್ನು 'ಅಮರತ್ವದ ಸಸ್ಯ' ಎಂದು ಬಳಸುತ್ತಿದ್ದರು. ಕ್ಲಿಯೋಪಾತ್ರ ತನ್ನ ಸೌಂದರ್ಯ ದಿನಚರಿಯ ಭಾಗವಾಗಿ ಇದನ್ನು ಬಳಸಿದಳು. ಗ್ರೀಸ್, ರೋಮ್, ಭಾರತ ಮತ್ತು ಚೀನಾದ ಪ್ರಾಚೀನ ಗ್ರಂಥಗಳಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",
            facts: "ಅಲೋವೆರಾ 99% ನೀರು ಆಗಿದೆ. ಒಳಗಿನ ಜೆಲ್ ಅಸೆಮನ್ನನ್ ಅನ್ನು ಹೊಂದಿರುತ್ತದೆ, ಇದು ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ."
        }
    },
    {
        id: 3,
        scientificName: "Azadirachta indica",
        image: "https://images.unsplash.com/photo-1687945906634-25c66199d941?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        region: "South Asia",
        difficulty: "Medium",
        color: "#1b4332",
        category: "Antimicrobial",
        uses: ["Dental hygiene", "Skin disorders", "Blood purification", "Pest control"],
        benefits: ["Contains nimbidin", "Antibacterial & antifungal", "Lowers blood sugar", "Anti-inflammatory"],
        en: {
            name: "Neem",
            category: "Antimicrobial",
            uses: ["Dental hygiene", "Skin disorders", "Blood purification", "Pest control"],
            benefits: [
                "Contains nimbidin — one of the most powerful antibacterial compounds in nature",
                "Effective against 40+ species of bacteria and fungi",
                "Lowers blood sugar and helps manage diabetes",
                "Strong anti-inflammatory for arthritis and joint pain"
            ],
            traditional: "Called 'Village Pharmacy' in India. Every part — leaf, bark, seed, flower, root — has medicinal applications. Used for millennia in Ayurveda, Unani, and Siddha medicine.",
            facts: "Neem can live up to 200 years. Its oil is used in over 100 commercial products worldwide including toothpaste, soaps, cosmetics, and agricultural pesticides."
        },
        hi: {
            name: "नीम",
            category: "रोगाणुरोधी",
            uses: ["दंत स्वच्छता", "त्वचा रोग", "रक्त शोधन", "कीट नियंत्रण"],
            benefits: [
                "निम्बिडिन शामिल है — जो प्रकृति में सबसे शक्तिशाली जीवाणुरोधी यौगिकों में से एक है",
                "बैक्टीरिया और कवक की 40+ प्रजातियों के खिलाफ प्रभावी",
                "रक्त शर्करा को कम करता है और मधुमेह को प्रबंधित करने में मदद करता है",
                "गठिया और जोड़ों के दर्द के लिए मजबूत सूजन-रोधी"
            ],
            traditional: "भारत में 'विलेज फार्मेसी' कहा जाता है। पत्ती, छाल, बीज, फूल, जड़ — हर हिस्से के औषधीय अनुप्रयोग हैं। आयुर्वेद, यूनानी और सिद्ध चिकित्सा में सदियों से उपयोग किया जाता है।",
            facts: "नीम 200 साल तक जीवित रह सकता है। इसके तेल का उपयोग दुनिया भर में टूथपेस्ट, साबुन और सौंदर्य प्रसाधनों में किया जाता है।"
        },
        kn: {
            name: "ಬೇವು",
            category: "ಆಂಟಿಮೈಕ್ರೊಬಿಯಲ್",
            uses: ["ದಂತ ನೈರ್ಮಲ್ಯ", "ತ್ವಚೆಯ ಕಾಯಿಲೆಗಳು", "ರಕ್ತ ಶುದ್ಧೀಕರಣ", "ಕೀಟ ನಿಯಂತ್ರಣ"],
            benefits: [
                "ನಿಂಬಿಡಿನ್ ಅನ್ನು ಒಳಗೊಂಡಿದೆ — ಇದು ಪ್ರಕೃತಿಯ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ಬ್ಯಾಕ್ಟೀರಿಯಾ ವಿರೋಧಿ ಸಂಯುಕ್ತಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ",
                "ಬ್ಯಾಕ್ಟೀರಿಯಾ ಮತ್ತು ಶಿಲೀಂಧ್ರಗಳ 40+ ಪ್ರಭೇದಗಳ ವಿರುದ್ಧ ಪರಿಣಾಮಕಾರಿಯಾಗಿದೆ",
                "ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಮಧುಮೇಹವನ್ನು ನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ",
                "ಸಂಧಿವಾತ ಮತ್ತು ಕೀಲು ನೋವಿಗೆ ಪ್ರಬಲ ಉರಿಯೂತ ವಿರೋಧಿಯಾಗಿದೆ"
            ],
            traditional: "ಭಾರತದಲ್ಲಿ 'ಹಳ್ಳಿ ಔಷಧಾಲಯ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಎಲೆ, ತೊಗಟೆ, ಬೀಜ, ಹೂವು, ಬೇರು — ಪ್ರತಿಯೊಂದು ಭಾಗವು ಔಷಧೀಯ ಅನ್ವಯಿಕೆಗಳನ್ನು ಹೊಂದಿದೆ. ಆಯುರ್ವೇದದಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ.",
            facts: "ಬೇವು 200 ವರ್ಷಗಳವರೆಗೆ ಬದುಕಬಲ್ಲದು. ಇದರ ಎಣ್ಣೆಯನ್ನು ಟೂತ್‌ಪೇಸ್ಟ್, ಸೋಪುಗಳು ಮತ್ತು ಸೌಂದರ್ಯವರ್ಧಕಗಳಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ."
        }
    },
    {
        id: 4,
        scientificName: "Withania somnifera",
        image: "https://images.unsplash.com/photo-1569936906148-06de87cb0681?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        region: "India / Middle East / Africa",
        difficulty: "Medium",
        color: "#d4a017",
        category: "Adaptogen",
        uses: ["Stress reduction", "Energy boost", "Sleep improvement", "Hormonal balance"],
        benefits: ["Reduces cortisol", "Increases muscle strength", "Improves memory", "Thyroid support"],
        en: {
            name: "Ashwagandha",
            category: "Adaptogen",
            uses: ["Stress reduction", "Energy boost", "Sleep improvement", "Hormonal balance"],
            benefits: [
                "Reduces cortisol levels by up to 30% in clinical studies",
                "Increases muscle mass and strength significantly",
                "Improves brain function, memory, and reaction time",
                "Balances thyroid hormones naturally"
            ],
            traditional: "A cornerstone of Rasayana (rejuvenation) therapy in Ayurveda for over 3,000 years. Its name means 'smell of horse' — indicating it gives the strength and vigor of a horse.",
            facts: "Modern clinical trials confirm Ashwagandha reduces anxiety and depression comparable to some pharmaceutical drugs, with fewer side effects."
        },
        hi: {
            name: "अश्वगंधा",
            category: "एडाप्टोजेन",
            uses: ["तनाव में कमी", "ऊर्जा बढ़ाना", "नींद में सुधार", "हार्मोनल संतुलन"],
            benefits: [
                "नैदानिक ​​अध्ययनों में कोर्टिसोल के स्तर को 30% तक कम करता है",
                "मांसपेशियों के द्रव्यमान और ताकत में काफी वृद्धि करता है",
                "मस्तिष्क के कार्य, स्मृति और प्रतिक्रिया समय में सुधार करता है",
                "थायराइड हार्मोन को प्राकृतिक रूप से संतुलित करता है"
            ],
            traditional: "3,000 से अधिक वर्षों से आयुर्वेद में रसायन (कायाकल्प) चिकित्सा की आधारशिला। इसके नाम का अर्थ है 'घोड़े की गंध' — जो दर्शाता है कि यह घोड़े जैसी ताकत और जीवन शक्ति देता है।",
            facts: "आधुनिक नैदानिक ​​परीक्षणों से पुष्टि होती है कि अश्वगंधा चिंता और अवसाद को कम करता है, जो कुछ दवाओं के तुलनीय है।"
        },
        kn: {
            name: "ಅಶ್ವಗಂಧ",
            category: "ಅಡಾಪ್ಟೋಜೆನ್",
            uses: ["ಒತ್ತಡ ಕಡಿತ", "ಶಕ್ತಿ ವರ್ಧನೆ", "ನಿದ್ರೆಯ ಸುಧಾರಣೆ", "ಹಾರ್ಮೋನ್ ಸಮತೋಲನ"],
            benefits: [
                "ಕ್ಲಿನಿಕಲ್ ಅಧ್ಯಯನಗಳಲ್ಲಿ ಕಾರ್ಟಿಸೋಲ್ ಮಟ್ಟವನ್ನು 30% ರಷ್ಟು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ",
                "ಸ್ನಾಯುವಿನ ದ್ರವ್ಯರಾಶಿ ಮತ್ತು ಬಲವನ್ನು ಗಮನಾರ್ಹವಾಗಿ ಹೆಚ್ಚಿಸುತ್ತದೆ",
                "ಮಿದುಳಿನ ಕಾರ್ಯನಿರ್ವಹಣೆ, ನೆನಪಿನ ಶಕ್ತಿ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ ಸಮಯವನ್ನು ಸುಧಾರಿಸುತ್ತದೆ",
                "ಥೈರಾಯ್ಡ್ ಹಾರ್ಮೋನ್‌ಗಳನ್ನು ನೈಸರ್ಗಿಕವಾಗಿ ಸಮತೋಲನಗೊಳಿಸುತ್ತದೆ"
            ],
            traditional: "ಆಯುರ್ವೇದದಲ್ಲಿ 3,000 ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳಿಂದ ಪುನರ್ಯೌವನ ಚಿಕಿತ್ಸೆಯ ಮೂಲಾಧಾರವಾಗಿದೆ. ಇದರ ಹೆಸರು 'ಕುದುರೆಯ ವಾಸನೆ' ಎಂದರ್ಥ — ಇದು ಕುದುರೆಯ ಶಕ್ತಿಯನ್ನು ನೀಡುತ್ತದೆ ಎಂಬುದನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
            facts: "ಅಶ್ವಗಂಧವು ಆತಂಕ ಮತ್ತು ಖಿನ್ನತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಎಂದು ಆಧುನಿಕ ಕ್ಲಿನಿಕಲ್ ಪ್ರಯೋಗಗಳು ಖಚಿತಪಡಿಸುತ್ತವೆ."
        }
    },
    {
        id: 5,
        scientificName: "Curcuma longa",
        image: "https://images.unsplash.com/photo-1583949885751-23b7d1909378?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        region: "South Asia / Southeast Asia",
        difficulty: "Medium",
        color: "#e9c46a",
        category: "Anti-inflammatory",
        uses: ["Joint pain relief", "Liver health", "Wound healing", "Digestive aid"],
        benefits: ["Curcumin content", "Antioxidant capacity", "Brain neuroplasticity", "Cancer preventive potential"],
        en: {
            name: "Turmeric",
            category: "Anti-inflammatory",
            uses: ["Joint pain relief", "Liver health", "Wound healing", "Digestive aid"],
            benefits: [
                "Curcumin — its active compound — is one of the most anti-inflammatory substances known",
                "Dramatically improves antioxidant capacity of the body",
                "Linked to improved brain neuroplasticity and lower risk of brain diseases",
                "Can prevent and possibly treat various types of cancer"
            ],
            traditional: "Used in Indian cooking and medicine for 4,000+ years. Applied as a paste on wounds, used in wedding rituals (haldi ceremony), and as a daily tonic.",
            facts: "Curcumin only constitutes about 3% of turmeric by weight. Combining it with black pepper (piperine) increases its bioavailability by 2,000%."
        },
        hi: {
            name: "हल्दी",
            category: "सूजन-रोधी",
            uses: ["जोड़ों के दर्द में राहत", "लिवर स्वास्थ्य", "घाव भरना", "पाचन सहायता"],
            benefits: [
                "करक्यूमिन — इसका सक्रिय यौगिक — ज्ञात सबसे शक्तिशाली सूजन-रोधी पदार्थों में से एक है",
                "शरीर की एंटीऑक्सीडेंट क्षमता में नाटकीय रूप से सुधार करता है",
                "बेहतर मस्तिष्क न्यूरोप्लास्टिकिटी और मस्तिष्क रोगों के कम जोखिम से जुड़ा है",
                "कैंसर को रोक सकता है और संभवतः उसका इलाज कर सकता है"
            ],
            traditional: "4,000+ वर्षों से भारतीय खाना पकाने और चिकित्सा में उपयोग किया जाता है। घावों पर पेस्ट के रूप में लगाया जाता है और दैनिक टॉनिक के रूप में उपयोग किया जाता है।",
            facts: "करक्यूमिन वजन के हिसाब से हल्दी का केवल 3% हिस्सा होता है। इसे काली मिर्च के साथ मिलाने से इसकी जैव उपलब्धता 2,000% बढ़ जाती है।"
        },
        kn: {
            name: "ಅರಿಶಿನ",
            category: "ವಿರೋಧಿ ಉರಿಯೂತದ",
            uses: ["ಕೀಲು ನೋವು ಪರಿಹಾರ", "ಯಕೃತ್ತಿನ ಆರೋಗ್ಯ", "ಗಾಯ ವಾಸಿಯಾಗುವುದು", "ಜೀರ್ಣಕಾರಿ ನೆರವು"],
            benefits: [
                "ಕರ್ಕ್ಯುಮಿನ್ — ಇದರ ಸಕ್ರಿಯ ಸಂಯುಕ್ತ — ತಿಳಿದಿರುವ ಅತ್ಯಂತ ಪ್ರಬಲ ಉರಿಯೂತ ನಿವಾರಕಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ",
                "ದೇಹದ ಉತ್ಕರ್ಷಣ ನಿರೋಧಕ ಸಾಮರ್ಥ್ಯವನ್ನು ಗಮನಾರ್ಹವಾಗಿ ಸುಧಾರಿಸುತ್ತದೆ",
                "ಮಿದುಳಿನ ಸುಧಾರಿತ ಕಾರ್ಯನಿರ್ವಹಣೆಗೆ ಮತ್ತು ಮಿದುಳಿನ ಕಾಯಿಲೆಗಳ ಕಡಿಮೆ ಅಪಾಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದೆ",
                "ವಿವಿಧ ರೀತಿಯ ಕ್ಯಾನ್ಸರ್ ತಡೆಗಟ್ಟಬಹುದು ಮತ್ತು ಚಿಕಿತ್ಸೆ ನೀಡಬಹುದು"
            ],
            traditional: "4,000 ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳಿಂದ ಭಾರತೀಯ ಅಡುಗೆ ಮತ್ತು ವೈದ್ಯಕೀಯದಲ್ಲಿ ಬಳಸಲಾಗುತ್ತಿದೆ. ಗಾಯಗಳ ಮೇಲೆ ಪೇಸ್ಟ್ ಆಗಿ ಹಚ್ಚಲಾಗುತ್ತದೆ ಮತ್ತು ದೈನಂದಿನ ಆರೋಗ್ಯಕ್ಕೆ ಬಳಸಲಾಗುತ್ತದೆ.",
            facts: "ಕರ್ಕ್ಯುಮಿನ್ ಅರಿಶಿನದ ತೂಕದ ಸುಮಾರು 3% ರಷ್ಟು ಮಾತ್ರ ಇರುತ್ತದೆ. ಇದನ್ನು ಕರಿಮೆಣಸಿನೊಂದಿಗೆ ಸಂಯೋಜಿಸುವುದರಿಂದ ಅದರ ಹೀರಿಕೊಳ್ಳುವಿಕೆ 2,000% ರಷ್ಟು ಹೆಚ್ಚುತ್ತದೆ."
        }
    },
    {
        id: 6,
        scientificName: "Mentha piperita",
        image: "https://images.unsplash.com/photo-1618130070080-91f4d55a2383?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        region: "Europe / Middle East",
        difficulty: "Easy",
        color: "#80b918",
        category: "Digestive",
        uses: ["Digestive relief", "Headache treatment", "Oral health", "Respiratory aid"],
        benefits: ["Menthol cooling", "Relieves IBS symptoms", "Fresh breath", "Improves alertness"],
        en: {
            name: "Mint",
            category: "Digestive",
            uses: ["Digestive relief", "Headache treatment", "Oral health", "Respiratory aid"],
            benefits: [
                "Menthol activates cold-sensitive receptors, creating natural cooling sensation",
                "Relieves IBS symptoms including bloating and abdominal pain",
                "Natural breath freshener with antibacterial properties",
                "Improves alertness and cognitive function"
            ],
            traditional: "Used since ancient Egypt — dried mint leaves found in Egyptian tombs dating to 1000 BC. Greek mythology says the nymph Minthe was transformed into the plant by Persephone.",
            facts: "Mint spreads aggressively underground via runners (rhizomes). A single mint plant can take over an entire garden bed within one growing season."
        },
        hi: {
            name: "पुदीना",
            category: "पाचन",
            uses: ["पाचन में राहत", "सिरदर्द का इलाज", "मौखिक स्वास्थ्य", "श्वसन सहायता"],
            benefits: [
                "मेन्थॉल ठंड-संवेदनशील रिसेप्टर्स को सक्रिय करता है, जिससे प्राकृतिक शीतलन सनसनी पैदा होती है",
                "पेट फूलना और पेट दर्द सहित आईबीएस के लक्षणों से राहत देता है",
                "जीवाणुरोधी गुणों वाला प्राकृतिक सांस फ्रेशनर",
                "सतर्कता और संज्ञानात्मक कार्य में सुधार करता है"
            ],
            traditional: "प्राचीन मिस्र के समय से उपयोग किया जाता है। यूनानी पौराणिक कथाओं का कहना है कि अप्सरा मिन्थे को पर्सपेफोन द्वारा पौधे में बदल दिया गया था।",
            facts: "पुदीना भूमिगत धावकों (राइजोम) के माध्यम से तेजी से फैलता है। एक अकेला पुदीने का पौधा एक ही मौसम में पूरे बगीचे पर कब्जा कर सकता है।"
        },
        kn: {
            name: "ಪುದೀನಾ",
            category: "ಜೀರ್ಣಕಾರಿ",
            uses: ["ಜೀರ್ಣಕಾರಿ ಪರಿಹಾರ", "ತಲೆನೋವು ಚಿಕಿತ್ಸೆ", "ಬಾಯಿಯ ಆರೋಗ್ಯ", "ಉಸಿರಾಟದ ನೆರವು"],
            benefits: [
                "ಮೆಂತಾಲ್ ಶೀತ-ಸೂಕ್ಷ್ಮ ಗ್ರಾಹಕಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ, ನೈಸರ್ಗಿಕ ತಂಪಾದ ಅನುಭವವನ್ನು ನೀಡುತ್ತದೆ",
                "ಹೊಟ್ಟೆಯ ಉಬ್ಬರ ಸೇರಿದಂತೆ ಐಬಿಎಸ್ ರೋಗಲಕ್ಷಣಗಳನ್ನು ನಿವಾರಿಸುತ್ತದೆ",
                "ಬ್ಯಾಕ್ಟೀರಿಯಾ ವಿರೋಧಿ ಗುಣಗಳನ್ನು ಹೊಂದಿರುವ ನೈಸರ್ಗिक ಉಸಿರಾಟದ ಫ್ರೆಶ್ನರ್",
                "ಜಾಗರೂಕತೆ ಮತ್ತು ಅರಿವಿನ ಕಾರ್ಯವನ್ನು ಸುಧಾರಿಸುತ್ತದೆ"
            ],
            traditional: "ಪ್ರಾಚೀನ ಈಜಿಪ್ಟ್‌ನಿಂದಲೂ ಬಳಸಲಾಗುತ್ತಿದೆ. ಗ್ರೀಕ್ ಪುರಾಣಗಳು ನಿಂಫ್ ಮಿಂಥೆಯನ್ನು ಪರ್ಸೆಫೋನ್ ಸಸ್ಯವಾಗಿ ಪರಿವರ್ತಿಸಿದಳು ಎಂದು ಹೇಳುತ್ತದೆ.",
            facts: "ಪುದೀನಾ ಭೂಗತ ಬೇರುಗಳ ಮೂಲಕ ಆಕ್ರಮಣಕಾರಿಯಾಗಿ ಹರಡುತ್ತದೆ. ಒಂದು ಪುದೀನಾ ಗಿಡವು ಒಂದು ಬೆಳೆಯುವ ಅವಧಿಯಲ್ಲಿ ಇಡೀ ತೋಟವನ್ನು ಆವರಿಸಿಕೊಳ್ಳಬಹುದು."
        }
    },
    {
        id: 7,
        scientificName: "Cymbopogon citratus",
        image: "https://images.unsplash.com/photo-1560705889-dc78ff46bbd6?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        region: "Southeast Asia / Africa",
        difficulty: "Easy",
        color: "#c9b826",
        category: "Antifungal",
        uses: ["Fever reduction", "Anxiety relief", "Digestive health", "Mosquito repellent"],
        benefits: ["Contains citral", "Cell protection", "Supports heart health", "Natural detoxifier"],
        en: {
            name: "Lemongrass",
            category: "Antifungal",
            uses: ["Fever reduction", "Anxiety relief", "Digestive health", "Mosquito repellent"],
            benefits: [
                "Contains citral — a powerful antifungal and antibacterial agent",
                "Rich in antioxidants that protect cells from free radical damage",
                "Lowers LDL cholesterol and supports heart health",
                "Natural detoxifier that cleanses liver and kidney"
            ],
            traditional: "Integral to Southeast Asian healing traditions. Used in Thai, Vietnamese, and Indonesian traditional medicine for centuries as a digestive tonic and fever remedy.",
            facts: "Lemongrass essential oil is used in 80% of mosquito repellent products globally. It contains geraniol and citronellal which are toxic to mosquitoes."
        },
        hi: {
            name: "लेमनग्रास",
            category: "कवकरोधी",
            uses: ["बुखार में कमी", "तनाव से राहत", "पाचन स्वास्थ्य", "मच्छर भगाने वाला"],
            benefits: [
                "सिट्रल शामिल है — एक शक्तिशाली कवकनाशी और जीवाणुरोधी एजेंट",
                "एंटीऑक्सिडेंट से भरपूर जो कोशिकाओं को मुक्त कणों से बचाते हैं",
                "एलडीएल कोलेस्ट्रॉल को कम करता है और हृदय स्वास्थ्य का समर्थन करता है",
                "प्राकृतिक डिटॉक्सीफायर जो लिवर और किडनी को साफ करता है"
            ],
            traditional: "दक्षिण पूर्व एशियाई चिकित्सा परंपराओं का अभिन्न अंग। थाई, वियतनामी और इंडोनेशियाई पारंपरिक चिकित्सा में सदियों से उपयोग किया जाता है।",
            facts: "लेमनग्रास आवश्यक तेल का उपयोग दुनिया भर में 80% मच्छर भगाने वाले उत्पादों में किया जाता है। इसमें जेरानियोल और सिट्रोनेलाल होता है।"
        },
        kn: {
            name: "ನಿಂಬೆ ಹುಲ್ಲು",
            category: "ಆಂಟಿಫಂಗಲ್",
            uses: ["ಜ್ವರ ನಿವಾರಣೆ", "ಆತಂಕ ಪರಿಹಾರ", "ಜೀರ್ಣಕಾರಿ ಆರೋಗ್ಯ", "ಸೊಳ್ಳೆ ವಿಕರ್ಷಕ"],
            benefits: [
                "ಸಿಟ್ರಾಲ್ ಅನ್ನು ಒಳಗೊಂಡಿದೆ — ಪ್ರಬಲ ಆಂಟಿಫಂಗಲ್ ಮತ್ತು ಬ್ಯಾಕ್ಟೀರಿಯಾ ವಿರೋಧಿ ಏಜೆಂಟ್",
                "ಕೋಶಗಳನ್ನು ಹಾನಿಯಿಂದ ರಕ್ಷಿಸುವ ಉತ್ಕರ್ಷಣ ನಿರೋಧಕಗಳಿಂದ ಸಮೃದ್ಧವಾಗಿದೆ",
                "ಕೊಲೆಸ್ಟ್ರಾಲ್ ಅನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಹೃದಯದ ಆರೋಗ್ಯವನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ",
                "ಯಕೃತ್ತು ಮತ್ತು ಮೂತ್ರಪಿಂಡವನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸುವ ನೈಸರ್ಗಿಕ ಶೋಧಕ"
            ],
            traditional: "ಆಗ್ನೇಯ ಏಷ್ಯಾದ ಹೀಲಿಂಗ್ ಸಂಪ್ರದಾಯಗಳಿಗೆ ಅವಿಭಾಜ್ಯವಾಗಿದೆ. ಜೀರ್ಣಕಾರಿ ಟಾನಿಕ್ ಮತ್ತು ಜ್ವರ ನಿವಾರಕವಾಗಿ ಶತಮಾನಗಳಿಂದ ಬಳಸಲಾಗುತ್ತಿದೆ.",
            facts: "ನಿಂಬೆ ಹುಲ್ಲಿನ ಸಾರಭೂತ ತೈಲವನ್ನು ಜಾಗತಿಕವಾಗಿ 80% ಸೊಳ್ಳೆ ವಿಕರ್ಷಕ ಉತ್ಪನ್ನಗಳಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ. ಇದು ಸೊಳ್ಳೆಗಳಿಗೆ ವಿಷಕಾರಿಯಾದ ಅಂಶಗಳನ್ನು ಹೊಂದಿದೆ."
        }
    },
    {
        id: 8,
        scientificName: "Tinospora cordifolia",
        image: "https://media.istockphoto.com/id/2278272097/photo/vibrant-green-heart-shaped-leaf-on-a-delicate-vine.webp?a=1&b=1&s=612x612&w=0&k=20&c=5_kDcYvMJqLIyOMdDbDqBbouo5qQ_ae_TaMxb0-LTYU=",
        region: "India / Sri Lanka",
        difficulty: "Medium",
        color: "#52b788",
        category: "Immunity",
        uses: ["Dengue fever", "Arthritis treatment", "Diabetes management", "Liver detox"],
        benefits: ["Immune-boosting", "Increases platelet count", "Anti-arthritic", "Hypoglycemic effect"],
        en: {
            name: "Giloy",
            category: "Immunity",
            uses: ["Dengue fever", "Arthritis treatment", "Diabetes management", "Liver detox"],
            benefits: [
                "One of the most potent immune-boosting herbs in Ayurveda",
                "Proven effective against dengue and chikungunya by increasing platelet count",
                "Anti-arthritic — reduces inflammation and relieves joint pain",
                "Hypoglycemic — helps manage type 2 diabetes"
            ],
            traditional: "Called 'Amrita' (divine nectar) in Sanskrit. Ayurvedic texts describe it as the 'root of immortality'. Used for 3,000+ years in classical Ayurvedic formulations.",
            facts: "Giloy is a climbing vine that can grow up a neem tree. When it does, it absorbs neem's properties — making it even more powerful medicinally."
        },
        hi: {
            name: "गिलोय",
            category: "प्रतिरोधक क्षमता",
            uses: ["डेंगू बुखार", "गठिया का इलाज", "मधुमेह प्रबंधन", "लिवर डिटॉक्स"],
            benefits: [
                "आयुर्वेद में सबसे शक्तिशाली प्रतिरक्षा-बढ़ाने वाली जड़ी-बूटियों में से एक",
                "प्लेटलेट काउंट बढ़ाकर डेंगू और चिकनगुनिया के खिलाफ प्रभावी साबित हुआ",
                "गठिया-रोधी — सूजन को कम करता है और जोड़ों के दर्द से राहत देता है",
                "हाइपोग्लाइसेमिक — टाइप 2 मधुमेह को प्रबंधित करने में मदद करता है"
            ],
            traditional: "संस्कृत में 'अमृत' कहा जाता है। आयुर्वेदिक ग्रंथ इसे 'अमरता की जड़' बताते हैं। शास्त्रीय आयुर्वेदिक योगों में 3,000+ वर्षों से उपयोग किया जाता है।",
            facts: "गिलोय एक चढ़ने वाली बेल है जो नीम के पेड़ पर चढ़ सकती है। जब ऐसा होता है, तो यह नीम के गुणों को अवशोषित कर लेती है।"
        },
        kn: {
            name: "ಗಿಲೋಯ್",
            category: "ರೋಗನಿರೋಧಕ ಶಕ್ತಿ",
            uses: ["ಡೆಂಗ್ಯೂ ಜ್ವರ", "ಸಂಧಿವಾತ ಚಿಕಿತ್ಸೆ", "ಮಧುಮೇಹ ನಿರ್ವಹಣೆ", "ಯಕೃತ್ತಿನ ನಿರ್ವಿಷೀಕರಣ"],
            benefits: [
                "ಆಯುರ್ವೇದದಲ್ಲಿ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಹೆಚ್ಚಿಸುವ ಗಿಡಮೂಲಿಕೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ",
                "ಪ್ಲೇಟ್‌ಲೆಟ್ ಸಂಖ್ಯೆಯನ್ನು ಹೆಚ್ಚಿಸುವ ಮೂಲಕ ಡೆಂಗ್ಯೂ ವಿರುದ್ಧ ಪರಿಣಾಮಕಾರಿ ಎಂದು ಸಾಬೀತಾಗಿದೆ",
                "ಸಂಧಿವಾತ ವಿರೋಧಿ — ಉರಿಯೂತವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಕೀಲು ನೋವನ್ನು ನಿವಾರಿಸುತ್ತದೆ",
                "ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಮಟ್ಟವನ್ನು ನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ"
            ],
            traditional: "ಸಂಸ್ಕೃತದಲ್ಲಿ 'ಅಮೃತ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಆಯುರ್ವೇದ ಗ್ರಂಥಗಳು ಇದನ್ನು 'ಅಮರತ್ವದ ಬೇರು' ಎಂದು ಬಣ್ಣಿಸುತ್ತವೆ. 3,000 ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳಿಂದ ಬಳಸಲಾಗುತ್ತಿದೆ.",
            facts: "ಗಿಲೋಯ್ ಒಂದು ಹತ್ತುವ ಬಳ್ಳಿಯಾಗಿದ್ದು ಅದು ಬೇವಿನ ಮರದ ಮೇಲೆ ಬೆಳೆಯಬಲ್ಲದು. ಬೇವಿನ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಹೀರಿಕೊಳ್ಳುವುದರಿಂದ ಇದು ಹೆಚ್ಚು ಶಕ್ತಿಯುತವಾಗುತ್ತದೆ."
        }
    },
    {
        id: 9,
        scientificName: "Bacopa monnieri",
        image: "https://images.unsplash.com/photo-1621515378278-91fe29fce73e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        region: "India / Wetlands globally",
        difficulty: "Hard",
        color: "#74c69d",
        category: "Cognitive",
        uses: ["Memory enhancement", "ADHD", "Anxiety reduction", "Epilepsy support"],
        benefits: ["Enhances nerve impulses", "Improves memory retention", "Reduces anxiety", "Neuroprotective"],
        en: {
            name: "Brahmi",
            category: "Cognitive",
            uses: ["Memory enhancement", "ADHD", "Anxiety reduction", "Epilepsy support"],
            benefits: [
                "Bacosides — its active compounds — enhance nerve impulse transmission",
                "Proven to improve memory formation and retention in multiple clinical trials",
                "Reduces anxiety and depression without sedation",
                "Neuroprotective — helps prevent cognitive decline"
            ],
            traditional: "Named after Brahma, the Hindu god of creation. Used by Vedic scholars to memorize lengthy scriptures. Considered the most important herb for brain health in Ayurveda.",
            facts: "Studies show Brahmi supplementation for 12 weeks significantly improves spatial working memory and information processing in older adults."
        },
        hi: {
            name: "ब्राह्मी",
            category: "संज्ञानात्मक",
            uses: ["याददाश्त बढ़ाना", "एडीएचडी", "तनाव में कमी", "मिर्गी सहायता"],
            benefits: [
                "बाकोसाइड्स — इसके सक्रिय यौगिक — तंत्रिका आवेग संचरण को बढ़ाते हैं",
                "कई नैदानिक ​​परीक्षणों में स्मृति गठन और प्रतिधारण में सुधार करने के लिए सिद्ध",
                "बिना बेहोशी के चिंता और अवसाद को कम करता है",
                "न्यूरोप्रोटेक्टिव — संज्ञानात्मक गिरावट को रोकने में मदद करता है"
            ],
            traditional: "सृष्टि के हिंदू देवता ब्रह्मा के नाम पर रखा गया। वैदिक विद्वानों द्वारा लंबे शास्त्रों को याद रखने के लिए उपयोग किया जाता था। आयुर्वेद में मस्तिष्क स्वास्थ्य के लिए सबसे महत्वपूर्ण।",
            facts: "अध्ययनों से पता चलता है कि 12 सप्ताह तक ब्राह्मी का सेवन करने से वृद्ध वयस्कों में काम करने की याददाश्त में काफी सुधार होता है।"
        },
        kn: {
            name: "ಬ್ರಾಹ್ಮಿ",
            category: "ಅರಿವಿನ",
            uses: ["ನೆನಪಿನ ಶಕ್ತಿ ಹೆಚ್ಚಳ", "ಎಡಿಎಚ್‌ಡಿ", "ಆತಂಕ ಕಡಿತ", "ಅಪಸ್ಮಾರದ ಬೆಂಬಲ"],
            benefits: [
                "ಬಾಕೋಸೈಡ್ಸ್ — ಇದರ ಸಕ್ರಿಯ ಸಂಯುಕ್ತಗಳು — ನರಗಳ ಪ್ರಚೋದನೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ",
                "ಹಲವಾರು ಕ್ಲಿನಿಕಲ್ ಪ್ರಯೋಗಗಳಲ್ಲಿ ನೆನಪಿನ ಶಕ್ತಿ ಮತ್ತು ಧಾರಣ ಶಕ್ತಿಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ ಎಂದು ಸಾಬೀತಾಗಿದೆ",
                "ಮಾದಕತೆಯಿಲ್ಲದೆ ಆತಂಕ ಮತ್ತು ಖಿನ್ನತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ",
                "ನರರಕ್ಷಕ — ಅರಿವಿನ ಅವನತಿಯನ್ನು ತಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ"
            ],
            traditional: "ಹಿಂದೂ ಸೃಷ್ಟಿಕರ್ತ ಬ್ರಹ್ಮನ ಹೆಸರನ್ನು ಇಡಲಾಗಿದೆ. ಸುದೀರ್ಘ ಧರ್ಮಗ್ರಂಥಗಳನ್ನು ನೆನಪಿಟ್ಟುಕೊಳ್ಳಲು ವೇದ ವಿದ್ವಾಂಸರು ಬಳಸುತ್ತಿದ್ದರು. ಆಯುರ್ವೇದದಲ್ಲಿ ಮಿದುಳಿನ ಆರೋಗ್ಯಕ್ಕೆ ಪ್ರಮುಖ ಮೂಲಿಕೆ.",
            facts: "12 ವಾರಗಳ ಕಾಲ ಬ್ರಾಹ್ಮಿ ಸೇವನೆಯು ವಯಸ್ಸಾದವರಲ್ಲಿ ನೆನಪಿನ ಶಕ್ತಿ ಮತ್ತು ಮಾಹಿತಿ ಸಂಸ್ಕರಣೆಯನ್ನು ಗಮನಾರ್ಹವಾಗಿ ಸುಧಾರಿಸುತ್ತದೆ ಎಂದು ಅಧ್ಯಯನಗಳು ತೋರಿಸುತ್ತವೆ."
        }
    },
    {
        id: 10,
        scientificName: "Phyllanthus emblica",
        image: "https://images.unsplash.com/photo-1676043967557-2b70d9facd71?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        region: "South Asia",
        difficulty: "Medium",
        color: "#f4a261",
        category: "Antioxidant",
        uses: ["Hair growth", "Vitamin C boost", "Digestion", "Heart health"],
        benefits: ["20x more Vitamin C", "Rich source of antioxidants", "Promotes hair growth", "Lowers cholesterol"],
        en: {
            name: "Amla",
            category: "Antioxidant",
            uses: ["Hair growth", "Vitamin C boost", "Digestion", "Heart health"],
            benefits: [
                "Contains 20x more Vitamin C than oranges per gram",
                "One of the richest sources of natural antioxidants in the world",
                "Promotes hair growth and prevents premature graying",
                "Lowers cholesterol and reduces risk of heart disease"
            ],
            traditional: "Central to Chyawanprash — a 3,000-year-old Ayurvedic health supplement still widely consumed. Amla is mentioned in the ancient Charaka Samhita as a rasayana (life-extending) herb.",
            facts: "Amla's Vitamin C is heat-stable due to the presence of tannins — unlike most fruits where Vitamin C degrades when cooked. Dried amla retains its nutritional value."
        },
        hi: {
            name: "आंवला",
            category: "एंटीऑक्सीडेंट",
            uses: ["बालों का विकास", "विटामिन सी बढ़ावा", "पाचन", "हृदय स्वास्थ्य"],
            benefits: [
                "प्रति ग्राम संतरे की तुलना में 20 गुना अधिक विटामिन सी होता है",
                "दुनिया में प्राकृतिक एंटीऑक्सीडेंट के सबसे अमीर स्रोतों में से एक",
                "बालों के विकास को बढ़ावा देता है और समय से पहले सफेद होने से रोकता है",
                "कोलेस्ट्रॉल कम करता है और हृदय रोग के जोखिम को कम करता है"
            ],
            traditional: "च्यवनप्राश का केंद्र — एक 3,000 साल पुराना आयुर्वेदिक स्वास्थ्य पूरक। प्राचीन चरक संहिता में आंवला का उल्लेख जीवन विस्तार करने वाली जड़ी-बूटी के रूप में है।",
            facts: "टैनिन की उपस्थिति के कारण आंवला का विटामिन सी गर्मी-स्थिर होता है — अधिकांश फलों के विपरीत जहां पकाने पर विटामिन सी नष्ट हो जाता है।"
        },
        kn: {
            name: "ನೆಲ್ಲಿಕಾಯಿ",
            category: "ಉತ್ಕರ್ಷಣ ನಿರೋಧಕ",
            uses: ["ಕೂದಲಿನ ಬೆಳವಣಿಗೆ", "ವಿಟಮಿನ್ ಸಿ ವರ್ಧನೆ", "ಜೀರ್ಣಕ್ರಿಯೆ", "ಹೃದಯದ ಆರೋಗ್ಯ"],
            benefits: [
                "ಪ್ರತಿ ಗ್ರಾಂಗೆ ಕಿತ್ತಳೆಗಿಂತ 20 ಪಟ್ಟು ಹೆಚ್ಚು ವಿಟಮಿನ್ ಸಿ ಹೊಂದಿದೆ",
                "ವಿಶ್ವದಲ್ಲೇ ನೈಸರ್ಗಿಕ ಉತ್ಕರ್ಷಣ ನಿರೋಧಕಗಳ ಶ್ರೀಮಂತ ಮೂಲಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ",
                "ಕೂದಲಿನ ಬೆಳವಣಿಗೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ ಮತ್ತು ಅಕಾಲಿಕ ನರೆಗೂದಲನ್ನು ತಡೆಯುತ್ತದೆ",
                "ಕೊಲೆಸ್ಟ್ರಾಲ್ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಹೃದಯ ಕಾಯಿಲೆಯ ಅಪಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ"
            ],
            traditional: "ಚ್ಯವನಪ್ರಾಶದ ಪ್ರಮುಖ ಅಂಶವಾಗಿದೆ — 3,000 ವರ್ಷಗಳ ಹಳೆಯ ಆಯುರ್ವೇದ ಆರೋಗ್ಯ ಪೂರಕ. ಆಯುಷ್ಯವನ್ನು ವೃದ್ಧಿಸುವ ಗಿಡಮೂಲಿಕೆಯಾಗಿ ಪ್ರಾಚೀನ ಚರಕ ಸಂಹಿತೆಯಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",
            facts: "ಟ್ಯಾನಿನ್‌ಗಳ ಉಪಸ್ಥಿತಿಯಿಂದಾಗಿ ನೆಲ್ಲಿಕಾಯಿಯಲ್ಲಿನ ವಿಟಮಿನ್ ಸಿ ಬಿಸಿಗೆ ಸ್ಥಿರವಾಗಿರುತ್ತದೆ — ಹೆಚ್ಚಿನ ಹಣ್ಣುಗಳಂತೆ ಬೇಯಿಸಿದಾಗ ವಿಟಮಿನ್ ಸಿ ನಶಿಸುವುದಿಲ್ಲ."
        }
    },
    {
        id: 11,
        scientificName: "Eucalyptus globulus",
        image: "https://plus.unsplash.com/premium_photo-1674248075482-ac8d5f4ea6f6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        region: "Australia / Global",
        difficulty: "Hard",
        color: "#264653",
        category: "Respiratory",
        uses: ["Cold and flu", "Wound antiseptic", "Pain relief", "Dental care"],
        benefits: ["Bronchodilator effect", "Combats MRSA", "Reduces blood sugar", "Relieves joint pain"],
        en: {
            name: "Eucalyptus",
            category: "Respiratory",
            uses: ["Cold and flu", "Wound antiseptic", "Pain relief", "Dental care"],
            benefits: [
                "Cineole (eucalyptol) — its main compound — is a potent mucolytic and bronchodilator",
                "Proven effective against drug-resistant bacteria including MRSA",
                "Reduces blood sugar in type 2 diabetics",
                "Anti-inflammatory for arthritis and muscle pain"
            ],
            traditional: "Aboriginal Australians used eucalyptus leaves to bind wounds and treat infections for thousands of years. European settlers learned of its uses in the 18th century.",
            facts: "Eucalyptus trees are among the fastest-growing trees on Earth. Some species grow 10+ feet per year. They have been planted globally to drain swamps and reduce malaria."
        },
        hi: {
            name: "नीलगिरी",
            category: "श्वसन",
            uses: ["सर्दी और फ्लू", "घाव एंटीसेप्टिक", "दर्द से राहत", "दंत चिकित्सा"],
            benefits: [
                "सिनियोल (नीलगिरी) — इसका मुख्य यौगिक — एक शक्तिशाली म्यूकोलिटिक और ब्रोन्कोडायलेटर है",
                "एमआरएसए सहित दवा प्रतिरोधी बैक्टीरिया के खिलाफ प्रभावी साबित हुआ",
                "टाइप 2 मधुमेह रोगियों में रक्त शर्करा को कम करता है",
                "गठिया और मांसपेशियों के दर्द के लिए सूजन-रोधी"
            ],
            traditional: "आदिवासी आस्ट्रेलियाई लोगों ने घावों को बांधने और संक्रमण के इलाज के लिए हजारों वर्षों तक नीलगिरी के पत्तों का उपयोग किया। यूरोपीय लोगों ने 18वीं शताब्दी में इसके बारे में सीखा।",
            facts: "नीलगिरी के पेड़ पृथ्वी पर सबसे तेजी से बढ़ने वाले पेड़ों में से हैं। दलदलों को सुखाने और मलेरिया को कम करने के लिए इन्हें विश्व स्तर पर लगाया गया है।"
        },
        kn: {
            name: "ನೀಲಗಿರಿ",
            category: "ಉಸಿರಾಟದ",
            uses: ["ನೆಗಡಿ ಮತ್ತು ಜ್ವರ", "ಗಾಯದ ನಂಜುನಿರೋಧಕ", "ನೋವು ಪರಿಹಾರ", "ದಂತ ರಕ್ಷಣೆ"],
            benefits: [
                "ಸಿನಿಯೋಲ್ (ಯುಕಲಿಪ್ಟೋಲ್) — ಇದರ ಪ್ರಮುಖ ಸಂಯುಕ್ತ — ಪ್ರಬಲ ಬ್ರಾಂಕೋಡೈಲೇಟರ್ ಆಗಿದೆ",
                "ಎಂಆರ್ಎಸ್ಎ ಸೇರಿದಂತೆ ಔಷಧ-ನಿರೋಧಕ ಬ್ಯಾಕ್ಟೀರಿಯಾಗಳ ವಿರುದ್ಧ ಪರಿಣಾಮಕಾರಿ ಎಂದು ಸಾಬೀತಾಗಿದೆ",
                "ಟೈಪ್ 2 ಮಧುಮೇಹಿಗಳಲ್ಲಿ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ",
                "ಸಂಧಿವಾತ ಮತ್ತು ಸ್ನಾಯು ನೋವಿಗೆ ಉರಿಯೂತ ಶಾಮಕವಾಗಿದೆ"
            ],
            traditional: "ಆಸ್ಟ್ರೇಲಿಯಾದ ಮೂಲನಿವಾಸಿಗಳು ಗಾಯಗಳನ್ನು ಗುಣಪಡಿಸಲು ಮತ್ತು ಸೋಂಕುಗಳಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡಲು ಸಾವಿರಾರು ವರ್ಷಗಳಿಂದ ನೀಲಗಿರಿ ಎಲೆಗಳನ್ನು ಬಳಸುತ್ತಿದ್ದರು. ಯುರೋಪಿಯನ್ನರು 18 ನೇ ಶತಮಾನದಲ್ಲಿ ಇದರ ಬಗ್ಗೆ ತಿಳಿದುಕೊಂಡರು.",
            facts: "ನೀಲಗಿರಿ ಮರಗಳು ಭೂಮಿಯ ಮೇಲೆ ಅತ್ಯಂತ ವೇಗವಾಗಿ ಬೆಳೆಯುವ ಮರಗಳಲ್ಲಿ ಸೇರಿವೆ. ಜಾಗತಿಕವಾಗಿ ಜೌಗು ಪ್ರದೇಶಗಳನ್ನು ಒಣಗಿಸಲು ಮತ್ತು ಮಲೇರಿಯಾವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಇವುಗಳನ್ನು ನೆಡಲಾಗಿದೆ."
        }
    },
    {
        id: 12,
        scientificName: "Lavandula angustifolia",
        image: "https://images.unsplash.com/photo-1445510491599-c391e8046a68?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        region: "Mediterranean / Europe",
        difficulty: "Easy",
        color: "#9b72cf",
        category: "Relaxation",
        uses: ["Sleep improvement", "Anxiety relief", "Headache relief", "Burn treatment"],
        benefits: ["Reduces anxiety", "Improves sleep quality", "Reduces pain perception", "Antimicrobial properties"],
        en: {
            name: "Lavender",
            category: "Relaxation",
            uses: ["Sleep improvement", "Anxiety relief", "Headache relief", "Burn treatment"],
            benefits: [
                "Linalool — its key compound — interacts with GABA receptors to reduce anxiety",
                "Clinically proven to improve sleep quality and duration",
                "Reduces pain perception — effective for migraines and post-surgical pain",
                "Antimicrobial against 12 strains of bacteria and 17 fungal strains"
            ],
            traditional: "Romans added lavender to bath water (lavare = 'to wash'). Used in ancient Egypt for mummification. Worn by medieval peasants to ward off plague.",
            facts: "René-Maurice Gattefossé, the French chemist who discovered aromatherapy, plunged his burned hand into lavender oil by accident in 1910 — and observed remarkable healing."
        },
        hi: {
            name: "लैवेंडर",
            category: "विश्राम",
            uses: ["नींद में सुधार", "तनाव से राहत", "सिरदर्द से राहत", "जलन का इलाज"],
            benefits: [
                "लिनालूल — इसका प्रमुख यौगिक — चिंता को कम करने के लिए जीएबीए रिसेप्टर्स के साथ बातचीत करता है",
                "नींद की गुणवत्ता और अवधि में सुधार करने के लिए नैदानिक ​​रूप से सिद्ध",
                "दर्द की धारणा को कम करता है — माइग्रेन और सर्जरी के बाद के दर्द के लिए प्रभावी",
                "बैक्टीरिया के 12 उपभेदों और 17 फंगल उपभेदों के खिलाफ रोगाणुरोधी"
            ],
            traditional: "रोमनों ने स्नान के पानी में लैवेंडर मिलाया (लैवारे = 'धोना')। ममीकरण के लिए प्राचीन मिस्र में उपयोग किया जाता था। प्लेग से बचने के लिए मध्ययुगीन किसानों द्वारा पहना जाता था।",
            facts: "एरोमाथेरेपी की खोज करने वाले फ्रांसीसी रसायनशास्त्री रेने-मौरिस गैटेफॉसे ने 1910 में दुर्घटनावश अपना जला हुआ हाथ लैवेंडर के तेल में डुबो दिया — और उल्लेखनीय उपचार देखा।"
        },
        kn: {
            name: "ಲ್ಯಾವೆಂಡರ್",
            category: "ವಿಶ್ರಾಂತಿ",
            uses: ["ನಿದ್ರೆಯ ಸುಧಾರಣೆ", "ಆತಂಕ ಪರಿಹಾರ", "ತಲೆನೋವು ಪರಿಹಾರ", "ಸುಟ್ಟ ಗಾಯದ ಚಿಕಿತ್ಸೆ"],
            benefits: [
                "ಲಿನಾಲೂಲ್ — ಇದರ ಪ್ರಮುಖ ಸಂಯುಕ್ತ — ಆತಂಕವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಗ್ರಾಹಕಗಳೊಂದಿಗೆ ಸಂವಹನ ನಡೆಸುತ್ತದೆ",
                "ನಿದ್ರೆಯ ಗುಣಮಟ್ಟ ಮತ್ತು ಅವಧಿಯನ್ನು ಸುಧಾರಿಸಲು ಕ್ಲಿನಿಕಲ್ ಆಗಿ ಸಾಬೀತಾಗಿದೆ",
                "ನೋವಿನ ಗ್ರಹಿಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ — ಮೈಗ್ರೇನ್ ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರದ ನೋವಿಗೆ ಪರಿಣಾಮಕಾರಿ",
                "ಬ್ಯಾಕ್ಟೀರಿಯಾದ 12 ತಳಿಗಳು ಮತ್ತು 17 ಶಿಲೀಂಧ್ರಗಳ ತಳಿಗಳ ವಿರುದ್ಧ ನಂಜುನಿರೋಧಕ"
            ],
            traditional: "ರೋಮನ್ನರು ಸ್ನಾನದ ನೀರಿಗೆ ಲ್ಯಾವೆಂಡರ್ ಅನ್ನು ಸೇರಿಸಿದರು. ಪ್ರಾಚೀನ ಈಜಿಪ್ಟಿನಲ್ಲಿ ಮಮ್ಮಿಫಿಕೇಶನ್ಗಾಗಿ ಬಳಸಲಾಗುತ್ತಿತ್ತು. ಪ್ಲೇಗ್ ಅನ್ನು ತಡೆಯಲು ಮಧ್ಯಕಾಲೀನ ರೈತರು ಧರಿಸುತ್ತಿದ್ದರು.",
            facts: "ಅರೋಮಾಥೆರಪಿಯನ್ನು ಕಂಡುಹಿಡಿದ ಫ್ರೆಂಚ್ ರಸಾಯನಶಾಸ್ತ್ರಜ್ಞ ರೆನೆ-ಮೌರಿಸ್ ಗ್ಯಾಟೆಫೊಸ್ಸೆ 1910 ರಲ್ಲಿ ಆಕಸ್ಮಿಕವಾಗಿ ಸುಟ್ಟ ತನ್ನ ಕೈಯನ್ನು ಲ್ಯಾವೆಂಡರ್ ಎಣ್ಣೆಯಲ್ಲಿ ಮುಳುಗಿಸಿದರು — ಮತ್ತು ಅದ್ಭುತ ಗುಣಮುಖವನ್ನು ಗಮನಿಸಿದರು."
        }
    }
];

// Category list for filtering
export const categories = [
    "All",
    "Immunity",
    "Skin Care",
    "Antimicrobial",
    "Adaptogen",
    "Anti-inflammatory",
    "Digestive",
    "Antifungal",
    "Cognitive",
    "Antioxidant",
    "Respiratory",
    "Relaxation"
];