# LeetCode Practice (TypeScript)

Personal LeetCode practice solutions written in TypeScript.

## Setup

```bash
npm install
```

## Development

- Run a solution file: open a `.ts` solution file and use VS Code Code Runner.

- Run a test file: open a `*.test.ts` file and use VS Code Code Runner.

- Run all checks:

  ```bash
  npm run check
  ```

- Run all tests:

  ```bash
  npm run test
  ```

- Type-check with TypeScript:

  ```bash
  npm run typecheck
  ```

- Lint with ESLint:

  ```bash
  npm run lint
  ```

- Check formatting with Prettier:

  ```bash
  npm run format:check
  ```

- Format with Prettier:

  ```bash
  npm run format
  ```

## Structure

```text
src/         # LeetCode solutions
  easy/
  medium/
  hard/
  types/     # Shared solution types
test/        # Vitest tests
  easy/
  medium/
  hard/
  helpers/   # Shared test helpers
  types.ts   # Shared test types
```
