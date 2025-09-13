
export async function writeResultsToFile(write: (path: string, data: string) => Promise<void>, results: string): Promise<void> {
    const timestamp = new Date().toISOString();
    const entry = `[${timestamp}] ${results}\n\n`;
    await write("results.txt", entry);
}
