// Group Members: Daniel Mallia and Darren Zhang

// Parts 3 and 4 Code
function parts3And4CheckPassword() {
    let submittedPassword = document.querySelector("#Parts3and4Password").value;
    let statusField = document.querySelector("#Parts3and4FormStatus");

    statusField.innerText = "Form Status: ";

    if(submittedPassword === "12345678") {
        statusField.innerText += "Correct Password";
    } else {
        alert("Incorrect Password");
    }
}