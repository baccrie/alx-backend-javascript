export default function hasValuesFromArray(sets, arrays) {
  let retVal;
  for (const elem of arrays) {
    if (sets.has(elem)) {
      retVal = true;
    } else {
      retVal = false;
    }
  }
  return retVal;
}
