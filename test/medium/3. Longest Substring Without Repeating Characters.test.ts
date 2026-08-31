import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringWithLastSeenIndex,
} from "~/medium/3. Longest Substring Without Repeating Characters";

type Solution = typeof lengthOfLongestSubstring;

const cases = [
  {
    input: ["abcabcbb"],
    output: 3,
  },
  {
    input: ["bbbbb"],
    output: 1,
  },
  {
    input: ["pwwkew"],
    output: 3,
  },
] satisfies TestCase<Solution>[];

describe("3. Longest Substring Without Repeating Characters", () => {
  describe("lengthOfLongestSubstring", () => {
    runCases(lengthOfLongestSubstring);
  });

  describe("lengthOfLongestSubstringWithLastSeenIndex", () => {
    runCases(lengthOfLongestSubstringWithLastSeenIndex);
  });
});

function runCases(solution: Solution): void {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for s "${input[0]}"`, () => {
      expect(solution(...input)).toBe(output);
    });
  });
}
