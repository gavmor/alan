import { describe, expect, it } from "bun:test";
import { recognizeImage } from "./recognizeImage";
import { readFile } from "fs/promises";

describe("recognizeImage", () => {
    it("returns a string description, given an image buffer", async () => {
        const imageBuffer: Buffer = await readFile("./src/dog.jpg");
        await recognizeImage(imageBuffer).then(result => {
        expect(result).toBe("string");
     });   
    });
});