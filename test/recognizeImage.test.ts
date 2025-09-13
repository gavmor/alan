import { describe, expect, it, mock } from "bun:test";
import { recognizeImage } from "../src/recognizeImage";
import { readFile } from "fs/promises";
import type { Ollama } from "ollama";

describe("recognizeImage", () => {
    it("returns a string description, given an image buffer", async () => {
        const imageBuffer: Buffer = await readFile("./test/fixtures/dog.jpg");
        const inferenceProvider = {
            chat: mock(() => Promise.resolve({message:{content:"a dog"}}))
        } as never as Ollama;
        await recognizeImage(inferenceProvider, imageBuffer).then(result => {
        expect(inferenceProvider).toHaveBeenCalled()
     });   
    });
});