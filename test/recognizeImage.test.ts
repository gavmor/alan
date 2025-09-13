import { describe, expect, it, mock } from "bun:test";
import { recognizeImage } from "../src/recognizeImage";
import { readFile } from "fs/promises";
import type { GenerativeModel } from "@google/generative-ai";

describe("recognizeImage", () => {
    it("returns a string description, given an image buffer", async () => {
        const imageBuffer: Buffer = await readFile("./test/fixtures/dog.jpg");
        const model = {
            generateContent: mock(() => Promise.resolve({response: Promise.resolve({text: () => "This is a dog"})}))
        } as never as GenerativeModel;
        await recognizeImage(model, imageBuffer).then(result => {
        expect(model.generateContent).toHaveBeenCalled()
     });   
    });
});