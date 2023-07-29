export default function iterateThroughObject(reportWithIterator) {
  let retVal = '';
  for (const names of reportWithIterator) {
    retVal += `${names} | `;
  }
  retVal = retVal.slice(0, -3);
  return retVal;
}
