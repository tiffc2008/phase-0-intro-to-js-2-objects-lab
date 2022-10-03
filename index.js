const employee = {
    name: "Tiff",
    streetAddress: "123 Address",}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee
}

    employee.name = "Jen";
    employee.streetAddress = "123 Main St";

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}

