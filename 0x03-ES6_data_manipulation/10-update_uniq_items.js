export default function updateUniqueItems(mapsArg) {
  if (Object.getPrototypeOf(mapsArg) !== Map.prototype) {
    throw TypeError('Cannot process');
  }
  for (const [key, val] of mapsArg) {
    if (val === 1) {
      mapsArg.set(key, 100);
    }
  }
}
