import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { arrayToList, cloneList, listToArray } from "../helpers/linked-list";
import {
  reverseList,
  reverseListByRecursion,
} from "~/easy/206. Reverse Linked List";

type Solution = typeof reverseList;

const cases = [
  {
    input: [arrayToList([1, 2, 3, 4, 5])],
    output: arrayToList([5, 4, 3, 2, 1]),
  },
  {
    input: [arrayToList([1, 2])],
    output: arrayToList([2, 1]),
  },
  {
    input: [arrayToList([])],
    output: arrayToList([]),
  },
] satisfies TestCase<Solution>[];

describe("206. Reverse Linked List", () => {
  describe("reverseList", () => {
    runCases(reverseList);
  });

  describe("reverseListByRecursion", () => {
    runCases(reverseListByRecursion);
  });
});

function runCases(solution: Solution): void {
  cases.forEach(({ input, output }) => {
    it(`returns ${JSON.stringify(listToArray(output))} for head ${JSON.stringify(
      listToArray(input[0])
    )}`, () => {
      expect(solution(cloneList(input[0]))).toEqual(output);
    });
  });
}
