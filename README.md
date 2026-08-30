# LeetCode Practice (TypeScript)

Personal LeetCode practice solutions written in TypeScript.

## Setup

```bash
npm install
```

## Development

- Run a solution: open a `.ts` solution file and use VS Code Code Runner.
- Run a test: open a `*.test.ts` file and use VS Code Code Runner, or run:

  ```bash
  npx vitest run
  ```

- Lint the project:

  ```bash
  npx eslint .
  ```

## Structure

```text
src/         # LeetCode solutions, grouped by difficulty
  easy/
  medium/
  hard/
test/        # Vitest tests
  easy/
  medium/
  hard/
  helpers.ts # Shared test helpers
  types.ts   # Shared test types
```
