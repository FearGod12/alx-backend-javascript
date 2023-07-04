export default function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set)) {
    return '';
  }
  const string = [];
  set.forEach((each) => {
    if (each.startsWith(startString) && typeof each === 'string') {
      string.push(each.slice(startString.length));
    }
  });
  return string.join('-');
}
