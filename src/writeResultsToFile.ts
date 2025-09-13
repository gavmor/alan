import { writeFile } from "fs/promises";

export async function writeResultsToFile(write=writeFile, results: string[]): Promise<void> {
    const data = "Results: " + results.join(", ") + "\n";
    write("results.txt", data);
}
