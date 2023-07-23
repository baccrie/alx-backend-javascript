export default function getListStudentIds(objects) {
  // eslint-disable-next-line no-undef, no-unused-vars, valid-typeof
  if (!Array.isArray(objects)) {
    return [];
  }
  // eslint-disable-next-line no-unused-vars
  const newObj = objects.map((dict) => dict.id);
  return newObj;
}
