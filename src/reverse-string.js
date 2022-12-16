function reverseString(data) {
  let string1 = data.split("").reverse();
  let string2 = string1.join("");
  return string2;
}
module.exports = reverseString;
