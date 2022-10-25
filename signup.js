import { db , auth } from "./config.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";















let heading02 = document.querySelector("#h2");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname")
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.getElementById("login");
// function local(){
//    var mail01 = localStorage.setItem("email" , emaill.value);
//    var pass01 =  localStorage.setItem("password" , password.value);
//    var firstN = localStorage.setItem("FirstName" , firstName.value);

//    if(firstName.value === "" || lastName.value === ""){
//     heading02.style.padding = "1rem";
//     heading02.innerHTML ="PLEASE FILL THE FORM CORRECTLY" ;
//     setTimeout(function clearr(){
//         heading02.style.padding = "0rem";
//         heading02.innerHTML = "";
//     },2000)
//    }
//    else if(emaill.value === "" || password.value === ""){
//     heading02.style.padding = "1rem";
//     heading02.innerHTML ="PLEASE FILL THE FORM CORRECTLY" ;
//     setTimeout(function clearr(){
//         heading02.style.padding = "0rem";
//         heading02.innerHTML = "";
//     },2000)
//    }
//    else{
//     window.location = "index.html";
//    }

// }




button.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            var firstN = localStorage.setItem("FirstName", firstName.value);
            window.location = "./index.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
            heading02.style.padding = "1rem";
            heading02.innerHTML = "INVALID EMAIL";
            setTimeout(() => {
                heading02.style.padding = "0rem";
                heading02.innerHTML = "";
            }, 2000)
        });
})