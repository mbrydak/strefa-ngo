export const createSelectControl = <T extends string[] | readonly string[]>(options: T) => {
  return { control: { type: 'select' as const, options } };
};
