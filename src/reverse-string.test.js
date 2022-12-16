const reverseString = require("./reverse-string");

test("reverses the string", () => {
  expect(reverseString("java")).toBe("avaj");
});
