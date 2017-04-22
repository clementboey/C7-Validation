/* globals $, document */
$(document).ready(function () {
    $("#wageform").validate({
        messages: {
            txtName: "employee name is required",
            txtRate: "rate must be a number greater than 0",
            txtMonths: "month must be a whole number",
        },
        rules: {
            txtMonths: {
                digits: true
            }, 
            
            txtRate: {
                min: 1
            }  
        },
        focusInvalid: false,
        submitHandler: function () {
            return false;
        }
    });
});