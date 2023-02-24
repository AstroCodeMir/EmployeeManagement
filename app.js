// var attempt = 3;

// var button = document.getElementById("btnsignin");

// button.addEventListener("click" , function () {
//         validate();
//     });


// function validate(){
    
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     console.log("validating" , {email,password});
//     if (email == "admin@gmail.com" && password == "123456"){
//         alert ("Login Successfuly");
//         window.location = "employment.html";
//         // return false;
//     }
//     else{
//         attempt --;
//         alert ("you have "+attempt+" attempt;");
//         if (attempt == 0){
//             document.getElementById("email").disabled = true;
//             document.getElementById("password").disabled = true;
//             document.getElementById("submit").disabled = true;
//                 return false;
//             }
//     }
// }



// var button = document.getElementById("btnAddnew");

// button.addEventListener("click" , function () {
//         reload();
//     });
//     function reload (){
   
//         var firstname = document.getElementById("firstname").value; 
//         var lastname = document.getElementById("lastname").value;
    
//         console.log( {firstname,lastname});
//     }

// var age = 68 ;
// if (age >= 65) {
//     console.log("You are a senior");
// }

// else if(age >= 18 ){
//     console.log("You are an adult!");
// }
// else if (age < 0) {
//         console.log("You are not born yet!");
// }

// else{
//     console.log("You are a child");
// }

var button = document.getElementById("btnAddnew");

button.addEventListener("click" , function () {
        output();
    });
    function output (){

        var firstname = document.getElementById("firstname").value; 
     var lastname = document.getElementById("lastname").value;
     var email = document.getElementById("email");

        console.log({firstname,lastname,email});
    }
