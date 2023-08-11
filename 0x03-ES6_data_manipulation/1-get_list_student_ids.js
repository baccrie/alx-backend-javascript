export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  // eslint-disable-next-line no-unused-vars
  const newStudents = getListStudents.map((elem) => elem.id);
  return newStudents;
}
