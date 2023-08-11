export default function getStudentIdsSum(students) {
  // eslint-disable-next-line no-unused-vars
  const newArray = students.reduce((result, item) => result + item.id, 0);
  return newArray;
}
