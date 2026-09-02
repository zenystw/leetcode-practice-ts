import { describe, expect, it } from "vitest";
import type { TestCase } from "../types";
import { cyclicListToObject, objectToCyclicList } from "../helpers/linked-list";
import { hasCycle } from "~/easy/141. Linked List Cycle";

type Solution = typeof hasCycle;

const cases = [
  {
    input: [
      objectToCyclicList({
        arr: [3, 2, 0, -4],
        pos: 1,
      }),
    ],
    output: true,
  },
  {
    input: [
      objectToCyclicList({
        arr: [1, 2],
        pos: 0,
      }),
    ],
    output: true,
  },
  {
    input: [
      objectToCyclicList({
        arr: [1],
        pos: -1,
      }),
    ],
    output: false,
  },
] satisfies TestCase<Solution>[];

describe("141. Linked List Cycle", () => {
  cases.forEach(({ input, output }) => {
    const { arr, pos } = cyclicListToObject(input[0]);

    it(`returns ${output} for head ${JSON.stringify(arr)} with pos ${pos}`, () => {
      expect(hasCycle(...input)).toBe(output);
    });
  });
});
