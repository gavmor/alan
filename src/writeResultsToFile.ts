
export async function writeResultsToFile(write: (path: string, data: string) => Promise<void>, results: string): Promise<void> {
    await write("results.txt", results);
}
