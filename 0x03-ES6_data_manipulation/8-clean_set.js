export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const string = [];
  set.forEach((each) => {
    if (each.startsWith(startString)) {
      string.push(each.slice(startString.length));
    }
  });
  return string.join('-');
}
