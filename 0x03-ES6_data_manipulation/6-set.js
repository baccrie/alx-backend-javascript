export default function setFromArray(setFromArray) {
  const retVal = new Set([...setFromArray]);
  return retVal;
}
