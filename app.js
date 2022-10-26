import { auth } from "./config.js";
import { signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

let email = document.getElementById("emaill");
let password = document.getElementById("passwordd");
let button = document.getElementById("login");
let div = document.querySelector(".button");
let heading02 = document.querySelector("#h2");
let forgot = document.getElementById("forgot");

button.addEventListener("click", async () => {
    div.style.visibility = "hidden";
    loader.style.display = "block";
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            //   console.log(user);
            checkUserLoc();
            window.location = "./quiz.html";
        })
        .catch((error) => {
            div.style.visibility = "visible";
            loader.style.display = "none";
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            heading02.style.padding = "1rem";
            heading02.innerHTML = "PLEASE REGISTER FIRST";
            setTimeout(() => {
                heading02.style.padding = "0rem";
                heading02.innerHTML = "";
            }, 2000)
        });
})


forgot.addEventListener("click", () => {
    div.style.visibility = "hidden";
    loader.style.display = "block";
    sendPasswordResetEmail(auth, email.value)
        .then(() => {
            // Password reset email sent!
            // ..
            heading02.style.padding = "1rem";
            heading02.style.backgroundColor = "#10266b";
            heading02.innerHTML = "EMAIL VERIFICATION SEND";

            setTimeout(() => {
                heading02.style.padding = "0rem";
                heading02.innerHTML = "";
            }, 2000)

            div.style.visibility = "visible";
            loader.style.display = "none";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            heading02.style.padding = "1rem";
            heading02.innerHTML = "PLEASE ENTER EMAIL / EMAIL IS NOT REGISTERED";
            setTimeout(() => {
                heading02.style.padding = "0rem";
                heading02.innerHTML = "";
            }, 2000)
        });
})








function checkUserLoc(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(user);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
}