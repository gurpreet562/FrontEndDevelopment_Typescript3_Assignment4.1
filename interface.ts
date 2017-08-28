namespace EmployeeDetailsSpace{
    export interface Employee{
        name:string;
        city:string;
        state:string;
    }
    export function employeeDetail(employee:Employee){
        console.log(`The Details of the Employee is: Name: ${employee.name} , City:${employee.city},state:${employee.state}`);
    }

}