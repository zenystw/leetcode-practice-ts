/**
 * @see https://leetcode.com/problems/daily-temperatures
 *
 * Given an array of integers `temperatures` represents the daily temperatures, return *an array* `answer` *such that* `answer[i]` *is the number of days you have to wait after the* `i^{th}` *day to get a warmer temperature*.
 * If there is no future day for which this is possible, keep `answer[i] == 0` instead.
 *
 * ***
 * **Constraints:**
 * - `1 <= temperatures.length <= 10^5`
 * - `30 <= temperatures[i] <= 100`
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const waitingIdxs: number[] = [];
  const daysToWait: number[] = Array.from(
    { length: temperatures.length },
    () => 0
  );

  temperatures.forEach((curTemp, curIdx) => {
    let prevTemp = temperatures[waitingIdxs[waitingIdxs.length - 1]];

    while (waitingIdxs.length && curTemp > prevTemp) {
      const prevIdx = waitingIdxs.pop()!;
      daysToWait[prevIdx] = curIdx - prevIdx;
      prevTemp = temperatures[waitingIdxs[waitingIdxs.length - 1]];
    }

    waitingIdxs.push(curIdx);
  });

  return daysToWait;
}
