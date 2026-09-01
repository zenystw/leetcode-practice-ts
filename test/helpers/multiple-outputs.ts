import { isDeepStrictEqual } from "node:util";
import type { TestCase } from "../types";

type GroupedCases<Solution> =
  TestCase<Solution> extends {
    output: infer Output;
  }
    ? Array<Omit<TestCase<Solution>, "output"> & { outputs: Output[] }>
    : never;

/**
 * Groups test cases by input so one input can accept multiple valid outputs.
 *
 * @param cases Test cases to compare and group by deeply equal `input` values
 * @returns Test cases grouped by input with valid outputs collected in `outputs`
 */
export function groupCasesByInput<Input extends unknown[], Output>(
  cases: readonly TestCase<(...args: Input) => Output>[]
): GroupedCases<(...args: Input) => Output> {
  return cases.reduce<GroupedCases<(...args: Input) => Output>>(
    (groups, testCase) => {
      const group = groups.find(({ input }) =>
        isDeepStrictEqual(input, testCase.input)
      );

      if (group) {
        group.outputs.push(testCase.output);
      } else {
        groups.push({ input: testCase.input, outputs: [testCase.output] });
      }

      return groups;
    },
    []
  );
}
