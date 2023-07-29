/* eslint-disable no-unused-vars */
export default function createIteratorObject(report) {
  const retVal = [];
  for (const [department, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) {
      retVal.push(employee);
    }
  }
  return retVal;
}
