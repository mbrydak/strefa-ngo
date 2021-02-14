export type GetProperty<Obj extends Record<string, unknown>, Key extends string> = Obj extends {
  [key in Key]: infer Value;
}
  ? Value
  : never;
