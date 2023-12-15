function validateForm(){
    let errors = "";

    let firstName = document.getElementById('firstNameInput').value;
    if(firstName==""){
        errors += "<li>Please enter First Name</li>";
    }

    // We have validation errors in our form
    if(errors!=""){
        document.getElementById('errorList').innerHTML = errors;
        return false;
    }
    else{
        // form is valid
        document.getElementById('errorList').innerHTML = "";
        return true;
    }
}

function resetErrors(){
    document.getElementById('errorList').innerHTML = "";
}