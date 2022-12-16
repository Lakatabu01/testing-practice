function capitalize(data) {
  let word = data;
  let result = word.charAt(0).toUpperCase() + word.slice(1);
  return result;
}
module.exports = capitalize;
