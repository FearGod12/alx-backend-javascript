export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filtered = Array.from(set).filter((item) => item.startsWith(startString));
  const mapped = filtered.map((item) => item.slice(startString.length));
  return mapped.join('-');
}
