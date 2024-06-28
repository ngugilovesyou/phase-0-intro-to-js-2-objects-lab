const employee={
    name:"employeName",
    streetAddress:"address",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
   //return {
   const updatedEmployee={...employee};
    updatedEmployee [key]=value
    return updatedEmployee;
   //}
}
updateEmployeeWithKeyAndValue(employee,"Sam", "11 BroadWay");


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue("name"," Sam", "streetAddress", "12 Broadway")

function deleteFromEmployeeByKey(employee, key){
   const newEmployee={...employee}
   delete newEmployee[key];
   return newEmployee;
}
deleteFromEmployeeByKey;

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}
