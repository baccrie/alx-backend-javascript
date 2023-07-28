export default function appendToEachArrayValue(array, appendString) {
  const arry = [];
  for (let val of array) {
    val = `${appendString}${val}`;
    arry.push(val);
  }

  return arry;
}
