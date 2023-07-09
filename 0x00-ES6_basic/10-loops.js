export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line no-unused-vars
  const newArray = [];
  let newV;
  for (const idx of array) {
    newV = appendString + idx;
    newArray.push(newV);
  }
  // eslint-disable-next-line no-param-reassign
  array = newArray;
  return array;
}
