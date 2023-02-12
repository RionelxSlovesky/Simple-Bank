
userEmail = document.getElementById("user-email");
userPassword = document.getElementById("user-password");
loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function(){

    if(userEmail.value!="misteradnan1@gmail.com"){
        alert("Wrong Email")
    }else if(userPassword.value!="lolol"){
        alert("Wrong Password")
    }else{

        alert("You are in!");
        location.href = 'bank.html';
    }
})
