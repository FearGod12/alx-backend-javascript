export default function createIteratorObject(report) {
  const myarray = [];
  for (const key of Object.keys(report.allEmployees)) {
    myarray.push(...report.allEmployees[key]);
  }
  return myarray[Symbol.iterator]();
}
