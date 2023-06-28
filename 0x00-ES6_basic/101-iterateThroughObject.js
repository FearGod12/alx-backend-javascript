export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  let result = reportWithIterator.next();
  while (!result.done) {
    string += result.value;
    result = reportWithIterator.next();
    if (!result.done) {
      string += ' | ';
    }
  }
  return string;
}
