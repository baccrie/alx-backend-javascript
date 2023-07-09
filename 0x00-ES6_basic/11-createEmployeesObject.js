export default function createEmployeesObject(departmentName, employees) {
  const Employee = {
  };
  Employee[departmentName] = [...employees];

  return Employee;
}
