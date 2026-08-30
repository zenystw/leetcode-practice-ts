import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import {
  isAnagram,
  isAnagramByCounting,
  isAnagramBySorting,
} from "~/easy/242. Valid Anagram";

type Solution = typeof isAnagram;

const cases = [
  {
    input: ["anagram", "nagaram"],
    output: true,
  },
  {
    input: ["rat", "car"],
    output: false,
  },
] satisfies TestCase<Solution>[];

describe("242. Valid Anagram", () => {
  describe("isAnagram", () => {
    runCases(isAnagram);
  });

  describe("isAnagramByCounting", () => {
    runCases(isAnagramByCounting);
  });

  describe("isAnagramBySorting", () => {
    runCases(isAnagramBySorting);
  });
});

function runCases(solution: Solution): void {
  cases.forEach(({ input, output }) => {
    it(`returns ${output} for s "${input[0]}" and t "${input[1]}"`, () => {
      expect(solution(...input)).toBe(output);
    });
  });
}
