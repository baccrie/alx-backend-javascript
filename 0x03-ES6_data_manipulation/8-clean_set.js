export default function cleanSet(sets, start) {
  let retVal = '';
  if (start === '') {
    retVal = '';
  } else {
    for (const i of sets) {
      if (i.startsWith(start)) {
        retVal += `${i.slice(start.length)}-`;
      }
    }
    retVal = retVal.slice(0, -1);
  }
  return retVal;
}
