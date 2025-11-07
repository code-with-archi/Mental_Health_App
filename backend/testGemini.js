import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const GEMINI_KEY = process.env.GEMINI_API_KEY;

const testGemini = async () => {
  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_KEY}`,
      {
        contents: [
          {
            parts: [{ text: "Hello Gemini! Can you confirm you are connected?" }],
          },
        ],
      },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("✅ Gemini API working! Response:");
    console.log(res.data);
  } catch (err) {
    console.error("❌ Gemini test failed:");
    console.error(err.response?.data || err.message);
  }
};

testGemini();
