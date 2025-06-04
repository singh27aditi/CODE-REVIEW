//in this file we create function that accepts a prompt and returns generated text ressponse and export it to use elsewhere
const { GoogleGenerativeAI } =  require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY); //create an instance of google's genai
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); //select model which you want to use

const prompt = "";

async function generateContent(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent;