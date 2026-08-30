import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { longestCommonPrefix } from "~/easy/14. Longest Common Prefix";

type Solution = typeof longestCommonPrefix;

const cases = [
  {
    input: [["flower", "flow", "flight"]],
    output: "fl",
  },
  {
    input: [["dog", "racecar", "car"]],
    output: "",
  },
] satisfies TestCase<Solution>[];

describe("14. Longest Common Prefix", () => {
  cases.forEach(({ input, output }) => {
    it(`returns "${output}" for strs ${JSON.stringify(input[0])}`, () => {
      expect(longestCommonPrefix(...input)).toBe(output);
    });
  });
});
