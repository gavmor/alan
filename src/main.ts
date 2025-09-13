import { recognizeImage } from "./recognizeImage";
import { takeScreenshot } from "./takeScreenshot";
import { writeResultsToFile } from "./writeResultsToFile";
import { appendFile } from "fs/promises";
import { model } from "./gemini";

export async function main() {
    const screenshot = await takeScreenshot();

    // Feed the screenshot to the Gemini model
    const results = await recognizeImage(model, screenshot);

    // Append the results to the text file
    await writeResultsToFile(appendFile, results);

    // Wait for a short period before taking the next screenshot
    await new Promise(resolve => setTimeout(resolve, 0));
}
