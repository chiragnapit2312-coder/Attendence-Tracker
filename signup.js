let signup = document.getElementById("signup");

signup.addEventListener("click", function () {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if(name=="" || email=="" || password==""){
        alert("Fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let check = users.find(function(user){
        return user.email == email;
    });

    if(check){
        alert("Email already exists");
        return;
    }

    users.push({
        name:name,
        email:email,
        password:password
    });

    localStorage.setItem("users",JSON.stringify(users));

    alert("Account Created");

    window.location.href="login.html";

});