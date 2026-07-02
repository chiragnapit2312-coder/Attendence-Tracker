let login = document.getElementById("login");

login.addEventListener("click", function () {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(function(item){
        return item.email == email && item.password == password;
    });

    if(user){

        localStorage.setItem("login", JSON.stringify(user));

        window.location.href = "index.html";

    }
    else{

        alert("Invalid Email or Password");

    }

});