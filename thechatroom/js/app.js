$(document).foundation()
function validateForm() {
    var x = document.forms["myform"]["fname"].value;
    if (x == null || x == "") {
        alert("The email section must be filled out");
        return false;
    }
}


