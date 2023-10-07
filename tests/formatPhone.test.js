import { formatPhone } from '../src/index';

describe('formatPhone', () => {
  it('should correctly format valid phone numbers', () => {
    expect(formatPhone('0123456789')).toBe('(012) 345-6789');
    expect(formatPhone('4155448375')).toBe('(415) 544-8375');
  });

  it('should throw an error for phone numbers with less than 10 numbers', () => {
    expect(() => formatPhone('153158935')).toThrow();
  });

  it('should throw an error for strings', () => {
    expect(() => formatPhone('abc')).toThrow();
  });

  it('should throw an error for strings with a length of 10', () => {
    expect(() => formatPhone('abcdefghij')).toThrow();
  });

  it('should throw an error for floats', () => {
    expect(() =>
      formatPhone('0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0')
    ).toThrow();
  });
});
