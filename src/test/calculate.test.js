import calculate from '../logic/calculate';

describe(' If there is no operation, update next and clear the value', () => {
  it('should return null object if it is AC', () => {
    const result = calculate({ total: null, next: null, operation: null }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
});
