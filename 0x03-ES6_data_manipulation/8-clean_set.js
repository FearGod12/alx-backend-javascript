export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || !set || !(set instanceof Set)) {
    return '';
  }
  const string = [];
  for (const each of set) {
    if (each.startsWith(startString) && typeof each === 'string') {
      const item = each.substring(startString.length);
      if (item && item !== each) {
        string.push(item);
      }
    }
  }
  return string.join('-');
}
