import { auth, db } from "./config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { collection, addDoc, Timestamp, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";










function checkUserLoc() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            getResult(user)
        } else {
            // User is signed out
            // ...
            signOut(auth).then(() => {
                // Sign-out successful.
                // alert("Sign-out successful.");
                window.location = "./index.html";
            }).catch((error) => {
                // An error happened.

            });
        }
    });
}
checkUserLoc()









let div = document.querySelector(".allresult");
let names = document.getElementById("names");
let subject = document.querySelector("#subject");





function getResult(user){
    let result = collection(db, "result");
const q = query(result, where("uid", "==", user.auth.currentUser.uid));
getDocs(q)
    .then((items) => {
        items.docs.forEach(doc => {
            console.log(doc.data().subject);
            names.textContent = doc.data().name;
            subject.textContent = doc.data().subject
        });
    })
}



names.value = "abdullah"













let circle = document.querySelector(".circle");
let percentage = document.querySelector(".percentage").textContent = "30%";
console.log(percentage);

circle.setAttribute("stroke-dasharray", "30,100");