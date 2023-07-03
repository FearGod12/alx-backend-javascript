export default function hasValuesFromArray(set, array) {
  const arrset = new Set(array);
  for (const item of arrset) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
