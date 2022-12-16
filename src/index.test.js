const capitalize = require("./index");

test("capitalize the first letter", () => {
  expect(capitalize("mangoes")).toBe("Mangoes");
});
