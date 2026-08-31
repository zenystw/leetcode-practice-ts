/**
 * @see https://leetcode.com/problems/course-schedule
 *
 * There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`.
 * You are given an array `prerequisites` where `prerequisites[i] = [a_i, b_i]` indicates that you **must** take course `b_i` first if you want to take course `a_i`.
 *
 * - For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.
 *
 * Return `true` if you can finish all courses.
 * Otherwise, return `false`.
 *
 * ***
 * **Constraints:**
 * - `1 <= numCourses <= 2000`
 * - `0 <= prerequisites.length <= 5000`
 * - `prerequisites[i].length == 2`
 * - `0 <= a_i, b_i < numCourses`
 * - All the pairs `prerequisites[i]` are **unique**.
 */
export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
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
    return false;
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

  return queueIdx === numCourses;
}
