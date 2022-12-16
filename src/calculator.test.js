const calculator = require("./calculator");

test("addition", () => {
  expect(calculator.add(10, 5)).toBe(15);
});

test("subtraction", () => {
  expect(calculator.subtract(1, 0.5)).toBe(0.5);
});

test("division", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("multiplication", () => {
  expect(calculator.multiply(10, 10)).toBe(100);
});
