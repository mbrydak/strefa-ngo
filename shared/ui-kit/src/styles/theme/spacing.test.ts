import { createSpacing, getSpaceValue } from './spacing';

describe('createSpacing', () => {
  it('creates a spacing object where the number of elements equals at least space base value', () => {
    const spacing1 = createSpacing(8);
    const spacing2 = createSpacing(10);

    expect(spacing1).toEqual({
      '0': 0,
      '0.125': 1,
      '0.25': 2,
      '0.375': 3,
      '0.5': 4,
      '0.625': 5,
      '0.75': 6,
      '0.875': 7,
      '1': 8,
    });

    expect(spacing2).toEqual({
      '0': 0,
      '0.1': 1,
      '0.2': 2,
      '0.3': 3,
      '0.4': 4,
      '0.5': 5,
      '0.6': 6,
      '0.7': 7,
      '0.8': 8,
      '0.9': 9,
      '1': 10,
    });
  });

  it('uses multiplier to determine how many elements we want to have in the spacing object', () => {
    const spacing = createSpacing(8, 2);

    expect(spacing).toEqual({
      '0': 0,
      '0.125': 1,
      '0.25': 2,
      '0.375': 3,
      '0.5': 4,
      '0.625': 5,
      '0.75': 6,
      '0.875': 7,
      '1': 8,
      '1.125': 9,
      '1.25': 10,
      '1.375': 11,
      '1.5': 12,
      '1.625': 13,
      '1.75': 14,
      '1.875': 15,
      '2': 16,
    });
  });
});

describe('getSpaceValue', () => {
  it('returns margin for one to four values where each of the provided values is multiplied by the base space', () => {
    const margin1 = getSpaceValue(1);
    const margin2 = getSpaceValue(1, 1.5);
    const margin3 = getSpaceValue(1, 1.5, 2);
    const margin4 = getSpaceValue(1, 1.5, 2, 5);

    expect(margin1).toBe('8px');
    expect(margin2).toBe('8px 12px');
    expect(margin3).toBe('8px 12px 16px');
    expect(margin4).toBe('8px 12px 16px 40px');
  });
});
