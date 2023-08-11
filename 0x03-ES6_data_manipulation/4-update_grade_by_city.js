/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(studentsList, city, gradesList) {
  const retArray = studentsList.filter((students) => students.location === city).map((elem) => {
    for (const grad of gradesList) {
      if (grad.studentId === elem.id) {
        elem.grade = grad.grade;
      } else {
        elem.grade = 'N/A';
      }
      return elem;
    }
  });
  return retArray;
}
