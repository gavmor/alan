
import { describe, it, expect, mock } from "bun:test";
import { writeResultsToFile } from "../src/writeResultsToFile";

describe("writeResultsToFile", () => {
    it("is a function", () => {
        expect(typeof writeResultsToFile).toBe("function");
    });
    
    it("writes results to a file", async () => {
        const write = mock(() => {}) as never as (path: string, data: string) => Promise<void>;
        await writeResultsToFile(write, "dog");
        expect(write).toHaveBeenCalledWith("results.txt", "dog");
    })
});