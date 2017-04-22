/*global $, round */
var logicWages = (function() {

    return {
        wages: wages,
        tax: tax, 
        calculateSalary: calculateSalary
    };    
    
    function wages(hoursWorked, hourlyRate){
        var totalsalary = hoursWorked * hourlyRate;
	   return totalsalary;
    }
    
    function tax(taxrate, salary){
        return taxrate * salary;
    }
    
function calculateSalary(){
    var employeename, months, rate, role, salary;
    employeename = $("#txtName").val();
    months = $("#txtMonths").val();
    rate = $("#txtRate").val();
    role = $("#selRole").val();

    salary = round(months*rate*role, 1);

    if (getRadioValue("rdoDiscipline") == "TRUE"){
        salary = round(salary * 0.8, 1);
    }

    validationMsgs("Your Salary is " + salary, "Information", "OK"); 
}

})();