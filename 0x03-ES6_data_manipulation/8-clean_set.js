export default function cleanSet(sets, start) {
  let retVal = '';
  if (start === '') {
    retVal = '';
  } else {
    for (const i of sets) {
      if (i && i.startsWith(start)) {
        retVal += i.replace(start, '-');
      }
    }
    if (retVal.length) {
      retVal = retVal.slice(1);
    }
  }
  return retVal;
}
