$("#submitButton").click(function(){

    var password1 = $("#pass1").val();
    var password2 = $("#pass2").val();

    if(password1 != "" && password2 != ""){

        if(password1 == password2){
            alert("Log in successfully");
        }else{
            alert("Denied log in");
        }


    }else{
        alert("Please enter a password");
    }


})