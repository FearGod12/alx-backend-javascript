export default function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set)) {
    return '';
  }
  const string = [];
  set.forEach((each) => {
    if (each.startsWith(startString) && typeof each === 'string') {
      const item = each.slice(startString.length);
      if (item && item !== each) {
        string.push(item);
      }
    }
  });
  return string.join('-');
}
