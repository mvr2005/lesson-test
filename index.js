const capitalize = (text) => {
  const firstChar = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`
};

console.log(capitalize('hello'));

export default capitalize;
