export default function updateUniqueItems(mapsArg)  {
  for (const [key, val] of mapsArg) {
    if (val === 1) {
      try {
        mapsArg.set(key, 100);
      } catch (err) {
        throw new Error('Cannot process');
      }
    }
  }
}
