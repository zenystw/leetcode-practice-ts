/**
 * @see https://leetcode.com/problems/course-schedule-ii/
 *
 * There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`.
 * You are given an array `prerequisites` where `prerequisites[i] = [a_i, b_i]` indicates that you **must** take course `b_i` first if you want to take course `a_i`.
 *
 * - For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.
 *
 * Return *the ordering of courses you should take to finish all courses*.
 * If there are many valid answers, return **any** of them.
 * If it is impossible to finish all courses, return **an empty array**.
 *
 * ***
 * **Constraints:**
 * - `1 <= numCourses <= 2000`
 * - `0 <= prerequisites.length <= numCourses * (numCourses - 1)`
 * - `prerequisites[i].length == 2`
 * - `0 <= a_i, b_i < numCourses`
 * - `a_i != b_i`
 * - All the pairs `[a_i, b_i]` are distinct.
 */
export function findOrder(
  numCourses: number,
  prerequisites: number[][]
): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const indegree: number[] = Array.from({ length: numCourses }, () => 0);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    indegree[course]++;
  }

  const queue: number[] = [];

  indegree.forEach((degree, course) => {
    if (degree === 0) {
      queue.push(course);
    }
  });

  if (!queue.length) {
    return [];
  }

  let queueIdx = 0;

  while (queueIdx < queue.length) {
    const curCourse = queue[queueIdx];

    graph[curCourse].forEach((nextCourse) => {
      indegree[nextCourse]--;

      if (indegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    });

    queueIdx++;
  }

  return queue.length === numCourses ? queue : [];
}
