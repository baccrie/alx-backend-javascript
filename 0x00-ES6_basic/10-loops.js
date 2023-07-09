export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line no-unused-vars
  for (let idx of array) {
    idx += appendString;
  }

  return array;
}
