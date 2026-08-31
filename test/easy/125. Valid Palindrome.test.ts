import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import {
  isPalindrome,
  isPalindromeSpaceOptimized,
} from "~/easy/125. Valid Palindrome";

type Solution = typeof isPalindrome;

const cases = [
  {
    input: ["A man, a plan, a canal: Panama"],
    output: true,
  },
  {
    input: ["race a car"],
    output: false,
  },
  {
    input: [" "],
    output: true,
  },
] satisfies TestCase<Solution>[];

describe("125. Valid Palindrome", () => {
  describe("isPalindrome", () => {
    runCases(isPalindrome);
  });

  describe("isPalindromeSpaceOptimized", () => {
    runCases(isPalindromeSpaceOptimized);
  });
});

function runCases(solution: Solution): void {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for s "${input[0]}"`, () => {
      expect(solution(...input)).toBe(output);
    });
  });
}
