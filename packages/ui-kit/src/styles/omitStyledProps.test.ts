import { omitStyledProps } from './omitStyledProps';

describe('omitStyledProps', () => {
  it('returns a function that takes a prop name and decides if it should be passed', () => {
    const omitProps = omitStyledProps(['a', 'c']);

    expect(omitProps('a')).toEqual(false);
    expect(omitProps('b')).toEqual(true);
    expect(omitProps('c')).toEqual(false);
    expect(omitProps('d')).toEqual(true);
  });
});
