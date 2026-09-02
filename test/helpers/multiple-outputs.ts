import { isDeepStrictEqual } from "node:util";
import type { TestCase } from "../types";

/**
 * List every valid output in a test case only while the list remains readable.
 * Use a predicate-based assertion once the number of valid outputs exceeds this.
 */
const MAX_ENUMERATED_VALID_OUTPUTS = 5;

/**
 * Describes valid outputs for a test name.
 *
 * Lists each output while the list is readable; otherwise returns `fallback`.
 *
 * @param outputs Valid outputs for one test input
 * @param fallback Description to use when there are too many valid outputs
 * @returns A human-readable description of the expected output
 */
export function getOutputDescription<Output>(
  outputs: readonly Output[],
  fallback: string
): string {
  return outputs.length <= MAX_ENUMERATED_VALID_OUTPUTS
    ? outputs.map((output) => JSON.stringify(output)).join(" / ")
    : fallback;
}

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
 * @throws {Error} If one input is given the same output more than once
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
        if (
          group.outputs.some((output) =>
            isDeepStrictEqual(output, testCase.output)
          )
        ) {
          throw new Error("Duplicate output found for the same test input.");
        }

        group.outputs.push(testCase.output);
      } else {
        groups.push({ input: testCase.input, outputs: [testCase.output] });
      }

      return groups;
    },
    []
  );
}
