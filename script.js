// Getting the SignIn and Register divs and storing them in variables. 
var signInDiv = document.getElementById("sign-in-box");
var registerDiv = document.getElementById("register-box");

// Created a function to toggle between Login and Register options on client side using DOM maipulation.
function toggle(){
    if (registerDiv.style.display === "none"){
        signInDiv.style.display = "none";
        registerDiv.style.display = "flex";
    } else{
        signInDiv.style.display = "flex";
        registerDiv.style.display = "none"; 
    }
}