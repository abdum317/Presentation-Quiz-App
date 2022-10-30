import { db , auth } from "./config.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { collection, addDoc, Timestamp, getDocs, where, query, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";















let heading02 = document.querySelector("#h2");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname")
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.getElementById("login");
let loader = document.getElementById("loader");
let div = document.querySelector(".button");



button.addEventListener("click", async() => {
    div.style.visibility = "hidden";
    loader.style.display = "block";
    await createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            var firstN = localStorage.setItem("FirstName", firstName.value);
            let userDetail = collection(db, "UserDetail");
            await addDoc(userDetail, { FirstName:firstName.value,LastName:lastName.value, email: email.value, UID: auth.currentUser.uid , time: Timestamp.fromDate(new Date()) });
            window.location = "./index.html"
        })
        .catch((error) => {
            div.style.visibility = "visible";
            loader.style.display = "none";
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
            heading02.style.padding = "1rem";
            heading02.innerHTML = "INVALID EMAIL / ALREADY REGISTERED EMAIL";
            setTimeout(() => {
                heading02.style.padding = "0rem";
                heading02.innerHTML = "";
            }, 2000)
        });
})