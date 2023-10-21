var signInDiv = document.getElementById("sign-in-box");
var registerDiv = document.getElementById("register-box");

function register(){
    signInDiv.style.display = "none";
    registerDiv.style.display="flex";
}

function signIn(){
    signInDiv.style.display = "flex";
    registerDiv.style.display="none";
}