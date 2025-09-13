import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

export async function recognizeImage(model: GenerativeModel, image: Buffer): Promise<string> {
    const prompt = "Describe what you see in this image in detail.";
    
    try {
        const result = await model.generateContent([
            {
                inlineData: {
                    mimeType: 'image/jpeg',
                    data: image.toString('base64')
                }
            },
            { text: prompt }
        ]);

        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Error generating content:', error);
        throw error;
    }
}
