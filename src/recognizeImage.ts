import type { Ollama } from "ollama";
export async function recognizeImage(inferenceProvider: Ollama, image: Buffer): Promise<string> {
    const response = await inferenceProvider.chat({ 
        model: "gemma3:27b",
        messages: [
            {
                role: "user",
                content: "Describe this image:",
                images: [image.toBase64()]
            }
        ]
    });
    return response.message.content;
}
