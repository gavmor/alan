import ollama from 'ollama'

export async function recognizeImage(image: Buffer): Promise<string> {
    const response = await ollama.chat({ 
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
