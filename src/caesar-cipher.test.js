const caesarCipher = require("./caesar-cipher");

test("shift the letter corresponding to the digit input", () => {
  expect(caesarCipher("cat", 1)).toBe("dbu");
});

test("shift letters at the end of the alphabet to the beginning", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
