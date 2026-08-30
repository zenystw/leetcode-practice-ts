import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import {
  isPalindrome,
  isPalindromeByReversingNumber,
} from "~/easy/9. Palindrome Number";

type Solution = typeof isPalindrome;

const cases = [
  {
    input: [121],
    output: true,
  },
  {
    input: [-121],
    output: false,
  },
  {
    input: [10],
    output: false,
  },
  {
    input: [1000021],
    output: false,
  },
] satisfies TestCase<Solution>[];

describe("9. Palindrome Number", () => {
  describe("isPalindrome", () => {
    runCases(isPalindrome);
  });

  describe("isPalindromeByReversingNumber", () => {
    runCases(isPalindromeByReversingNumber);
  });
});

function runCases(solution: Solution): void {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for x ${input[0]}`, () => {
      expect(solution(...input)).toBe(output);
    });
  });
}
