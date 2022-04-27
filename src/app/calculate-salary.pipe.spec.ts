import { CalculateSalaryPipe } from './calculate-salary.pipe';

describe('CalculateSalaryPipe', () => {
  it('create an instance', () => {
    const pipe = new CalculateSalaryPipe();
    expect(pipe).toBeTruthy();
  });
});
