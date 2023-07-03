export default function updateStudentGradeByCity(students, city, newGrades) {
  const array = students.filter((student) => student.location === city);
  return array.map((item) => {
    const grade = newGrades.find((grade) => item.id === grade.studentId);
    if (grade !== undefined) {
      return { ...item, grade: grade.grade };
    }
    return { ...item, grade: 'N/A' };
  });
}
