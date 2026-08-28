export type TestCase<T> = T extends (...args: infer Input) => infer Output
  ? {
      input: Input;
      output: Output;
    }
  : never;
