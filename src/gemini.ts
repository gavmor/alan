import { GoogleGenerativeAI } from "@google/generative-ai";

// Make sure to set your Google API key in your environment variables
const GOOGLE_API_KEY = process.env.GEMINI_API_KEY;
if (!GOOGLE_API_KEY) { throw new Error("Please set the GEMINI_API_KEY environment variable"); }
export const model = new GoogleGenerativeAI(GOOGLE_API_KEY)
    .getGenerativeModel({ model: "gemini-2.0-flash" });
