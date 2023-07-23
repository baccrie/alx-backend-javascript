export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  // eslint-disable-next-line no-unused-vars
  let retval = '';
  for (const a of set) {
    if (a.startsWith(startString)) {
      // eslint-disable-next-line no-restricted-globals, no-undef
      retval += `${a.slice((startString).length)}-`;
    }
  }

  retval = retval.slice(0, -1);
  return retval;
}
