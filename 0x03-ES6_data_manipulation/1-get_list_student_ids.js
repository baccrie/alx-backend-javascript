export default function getListStudentIds(students) {
  // check arg is an array and confirm before using map
  if (Array.isArray(students)) {
    return students.map((items) => items.id);
  }
  return [];
}
