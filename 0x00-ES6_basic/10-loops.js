export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const array1 = array;
  for (const idx of array) {
    const value = idx;
    array1[i] = appendString + value;
    i += 1;
  }

  return array;
}
