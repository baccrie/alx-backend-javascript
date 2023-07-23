/* eslint-disable array-callback-return */
export default function getStudentsByLocation(getListStudents, city) {
  // eslint-disable-next-line consistent-return
  function filterCity(student) {
    return student.location === city;
  }

  const filtered = getListStudents.filter(filterCity);
  return filtered;
}
