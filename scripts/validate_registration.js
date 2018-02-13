/* eslint-env browser*/
/*eslint "no-console": "off" */


document.getElementById("firstName").onblur = onFirstNameFieldBlur;
function onFirstNameFieldBlur() {
    valdiateFirstName();
}

document.getElementById("lastName").onblur = onLastNameFieldBlur;
function onLastNameFieldBlur(){
    valdiateLastName();
}

document.getElementById("zipCode").onblur = onZipCodeFieldBlur;
function onZipCodeFieldBlur(){
    validateZipCode();
}

document.getElementById("phoneNumber").onblur = onPhoneNumberFieldBlur;
function onPhoneNumberFieldBlur(){
    valdiatePhoneNumber();
}

document.getElementById("email").onblur = onEmailFieldBlur;
function onEmailFieldBlur(){
    validateEmail();
}

document.getElementById("myForm").onsubmit = onFormSubmit;
function onFormSubmit(){
    return validateOnSubmit();
}
   
//MAIN FUNCTION OF SUBMIT    
function validateOnSubmit (){
    var checkAll = "";
    checkAll += valdiateFirstName();
    console.log(checkAll);
    alert ("");
    checkAll += valdiateLastName();
    console.log(checkAll);
    alert ("");
    checkAll += validateZipCode();
    console.log(checkAll);
    alert ("");
    checkAll += valdiatePhoneNumber();
    console.log(checkAll);
    alert ("");
    checkAll += validateEmail();
    console.log(checkAll);
    alert ("");
    checkAll += validateDateOfBirth();
    console.log(checkAll);
    alert ("");
    if (checkAll != ""){
        return false;
    }
    return true;
}
//SUB FUNCTIONS
function valdiateFirstName(fname){
    var error = "";
    fname = document.getElementById("firstName").value;
    if(fname == ""){
        document.getElementById("errorFName").innerHTML = "error";
        error = "Error_FirstName\n";
    }else{
        document.getElementById("errorFName").innerHTML = "";
    }
    return error;
}

function valdiateLastName(lname){
    var error = "";
    lname = document.getElementById("lastName").value;
    if(lname == ""){
         document.getElementById("errorLName").innerHTML = "error";
        error = "Error_LastName\n";
    }else{
            document.getElementById("errorLName").innerHTML = "";
        }
    return error;
}

function validateDateOfBirth(dateofbirth){
    var error = "";
    var birthDate = document.getElementById("birthDate").value;
    var currentYear = 2017;
    dateofbirth = /^\(?([0-9]{2})\)?[/]?([0-9]{2})[/]?([0-9]{4})$/;
    if(birthDate.search(dateofbirth) == -1){ 
        birthDate.split("/");
        if(currentYear - +birthDate = )
        error = "Error_BirthDate";
    }
    return error;
}

function validateZipCode(zcode){
    var error = "";
    zcode = /^\d{5}$/;
 if (document.getElementById("zipCode").value.search(zcode) == -1){
        document.getElementById("errorZipCode").innerHTML = "Zip Code must to be 5 digits";
        error = "Error_ZipCode\n";
    }else{
        document.getElementById("errorZipCode").innerHTML = "";
    }
    return error;
}

function valdiatePhoneNumber(pNumber){
    var error = "";
    pNumber = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
 if(document.getElementById("phoneNumber").value.search(pNumber) == -1){
        document.getElementById("errorPhoneNumber").innerHTML = "Insert a valid American standard Phone Number (123-123-1234) .";
        error = "Error_PhoneNumber\n"
    }else{
        document.getElementById("errorPhoneNumber").innerHTML = "";
    }
    return error;
}

function validateEmail(email){
    var error = "";
    email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(document.getElementById("email").value.search(email) == -1){
        document.getElementById("errorEmail").innerHTML = "Insert a valid email";
        error = "Error_Email\n";
    }else{
        document.getElementById("errorEmail").innerHTML = "";
    }
    return error;
}