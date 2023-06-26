export default function createReportObject(employeesList) {
  const myobject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return myobject;
}
