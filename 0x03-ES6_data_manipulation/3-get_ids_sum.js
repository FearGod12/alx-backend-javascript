export default function getStudentIdsSum(students) {
  const array = students.map((student) => student.id);
  return array.reduce((acc, cur) => acc + cur);
}
