export default function hasValuesFromArray(sets, arry) {
  // eslint-disable-next-line no-unused-vars
  let i;
  for (const val of arry) {
    if (!sets.has(val)) {
      i = false;
    } else {
      i = true;
    }
  }
  return i;
}
