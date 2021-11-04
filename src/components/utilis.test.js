import { add, divide, multiply, subtract } from './utilis';

describe('utils file', () => {
    

  it('testing the add function', () => {
    const sum = add(1, 2);
    expect(sum).toBe(3);
  });

  it('testing the subtract function', () => {
    const sub = subtract(2, 2);
    expect(sub).toBe(0);
  });

  it('testing the multiple function',  () => {
    const product = multiply(2, 2);
    expect(product).toBe(4);
  });

  it('testing the divide function', async () => {
    const divided = divide(2, 2);
    expect(divided).toBe(1);
  });

});
