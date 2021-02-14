// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AsyncFunction<Args extends any[] = any[], Result = any> = (...args: Args) => Promise<Result>;
