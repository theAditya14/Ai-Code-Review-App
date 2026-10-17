import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "process.env.Gemini_API_Key"});






async function generateContent(prompt){
const interaction = await ai.interactions.create({
  model: "gemini-3.8-flash",
  input: prompt,
});

return interaction.output_text;
}