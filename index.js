// Declare the username variable at the beginning
let username;
let password 

// Assign onclick event handler to the element with id "dd"
document.getElementById("dd").onclick = function () {
    // Get value from input element and log it
    username = document.getElementById("input").value;
    console.log(username);
    password=document.getElementById('passcode').value;
    console.log(password);
};