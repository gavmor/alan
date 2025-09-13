
import { describe, it, expect, mock } from "bun:test";
import { writeResultsToFile } from "../src/writeResultsToFile";

describe("writeResultsToFile", () => {
    it("is a function", () => {
        expect(typeof writeResultsToFile).toBe("function");
    });
    
    it("writes results to a file", async () => {
        const write = mock(() => {});
        // @ts-expect-error
        await writeResultsToFile(write, ["cat", "dog"]);
        expect(write).toHaveBeenCalledWith("results.txt", "Results: cat, dog\n");
    })
});