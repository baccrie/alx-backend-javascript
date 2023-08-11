export default function cleanSet(sets, startswith) {
  let retVal = '';
  if (startswith === '') {
    retVal = sets;
  } else {
    for (const i of sets) {
      if (i.startsWith(startswith)) {
        retVal += `${i.slice(startswith.length)}-`;
      }
    }
    retVal = retVal.slice(0, -1);
  }
  return retVal;
}
