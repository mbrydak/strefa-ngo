type SpaceArgs = [number] | [number, number] | [number, number, number] | [number, number, number, number];

const SPACE_BASE = 8; // Recommended 8 or 10
const MULTIPLIER = 20; // Space object will contain values from 0 to MULTIPLIER * SPACE_BASE

export const createSpacing = (base: number, multiplier = 1) => {
  return Array.from(Array(base * multiplier + 1).keys()).reduce<Record<number, number>>(
    (acc, cur) => ({
      ...acc,
      [cur / base]: cur,
    }),
    {},
  );
};

export const getSpaceValue = (...args: SpaceArgs): string => {
  return args.map((num) => `${num * SPACE_BASE}px`).join(' ');
};

export const spacing = {
  space: createSpacing(SPACE_BASE, MULTIPLIER),
  spacing: getSpaceValue,
};
