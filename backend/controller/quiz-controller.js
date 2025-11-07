import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// 🎯 Quiz Analysis Controller
export const analyzeQuiz = async (req, res) => {
  try {
    const { answers } = req.body;

    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ error: "Invalid or missing answers." });
    }

    const prompt = `
You are a mental health assistant. Analyze the following answers to a mental wellness quiz.
Provide a detailed, empathetic response in paragraphs with headings and actionable advice.
Each section should be clearly separated by line breaks.

Answers:
${answers.map((a, i) => `${i + 1}. ${a}`).join("\n")}
`;

    // ✅ Gemini API call (correct v1 endpoint)
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      { headers: { "Content-Type": "application/json" } }
    );

    // 🧠 Log Gemini output (for backend verification)
    const aiResponse =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    console.log("🧠 Gemini AI Response:", aiResponse.slice(0, 150) + "...");

    return res.status(200).json({ result: aiResponse });
  } catch (error) {
    console.error("❌ Error analyzing quiz:", error.response?.data || error.message);
    return res
      .status(500)
      .json({ error: "Error occurred while analyzing quiz results." });
  }
};
