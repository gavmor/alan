import { recognizeImage } from "./recognizeImage";
import { takeScreenshot } from "./takeScreenshot";
import { writeResultsToFile } from "./writeResultsToFile";

export async function main() {
    const screenshot = await takeScreenshot();

    // Feed the screenshot to the image recognition model
    const results = await recognizeImage(screenshot);

    // Write the results to a text file
    await writeResultsToFile(results);

    // Wait for a short period before taking the next screenshot
    await new Promise(resolve => setTimeout(resolve, 0));
}
