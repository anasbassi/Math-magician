import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should return an object', () => {
    const result = calculate({ total: null, next: null, operation: null }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
});
