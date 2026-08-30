import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { twoSum } from "~/easy/1. Two Sum";

type Solution = typeof twoSum;

const cases = [
  {
    input: [[2, 7, 11, 15], 9],
    output: [0, 1],
  },
  {
    input: [[3, 2, 4], 6],
    output: [1, 2],
  },
  {
    input: [[3, 3], 6],
    output: [0, 1],
  },
] satisfies TestCase<Solution>[];

describe("1. Two Sum", () => {
  cases.forEach(({ input, output }) => {
    it(`returns ${JSON.stringify(output)} for nums ${JSON.stringify(input[0])} and target ${input[1]}`, () => {
      expect(twoSum(...input)).toEqual(output);
    });
  });
});
