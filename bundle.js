var EmployeeDetailsSpace;
(function (EmployeeDetailsSpace) {
    function employeeDetail(employee) {
        console.log("The Details of the Employee is: Name: " + employee.name + " , City:" + employee.city + ",state:" + employee.state);
    }
    EmployeeDetailsSpace.employeeDetail = employeeDetail;
})(EmployeeDetailsSpace || (EmployeeDetailsSpace = {}));
/// < reference path=interface.ts" />
var myEmployee = { name: "abc", city: "hyderabad", state: "Andhra Pradesh" };
EmployeeDetailsSpace.employeeDetail(myEmployee);
