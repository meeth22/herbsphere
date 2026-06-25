import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

/**
 * Generates personalized medicinal plant recommendations using Gemini AI.
 * Responds in the requested language (en, hi, kn).
 * 
 * @param {string} healthGoal 
 * @param {string} space 
 * @param {string} climate 
 * @param {string} language The active language key (en, hi, kn)
 * @returns {Promise<string|null>} The generated recommendation text or null.
 */
export async function getPlantRecommendation(healthGoal, space, climate, language = "en") {
  if (!apiKey) {
    console.warn("VITE_GEMINI_API_KEY is not defined. Falling back to local smart advisor.");
    return null;
  }

  const langNames = {
    en: "English",
    hi: "Hindi (हिन्दी)",
    kn: "Kannada (ಕನ್ನಡ)"
  };
  const targetLang = langNames[language] || "English";

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a professional Ayurvedic practitioner, botanist, and expert herbalist. 
Recommend 2 medicinal plants that best match the following user requirements:
- Health Goal: ${healthGoal}
- Available Space: ${space}
- Climate: ${climate}

For each plant, provide the following structured details:
1. **Plant Name** (with a suitable plant emoji)
2. **Scientific Name** (italicized)
3. **Medicinal Benefits**: Explain how this plant directly addresses the health goal: "${healthGoal}"
4. **Cultivation Guide**: Give specific, actionable advice on how to grow it successfully in a "${space}" environment under a "${climate}" climate.
5. **Safety / Usage Note**: Highlight any safety precautions, dosage advice, or contraindications.

Format the output clearly using Markdown with nice headings, bullet points, and clean spacing.
CRITICAL: You MUST write the entire response in ${targetLang}. Use appropriate native terminology.
Do not write an intro or outro; start directly with the recommendations.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating recommendation from Gemini API:", error);
    return null;
  }
}
