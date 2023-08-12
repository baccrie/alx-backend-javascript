export default function cleanSet(sets, start) {
  let retVal = '';
  if (start === '' || !start) {
    retVal = '';
  } else {
    for (const i of sets) {
      if (i && i.startsWith(start)) {
        retVal += retVal.length === 0 ? i.replace(start, '') : i.replace(start, '-');
      }
    }
  }
  return retVal;
}
