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






// let table = document.querySelector(".table");
// let tableRow = document.getElementById("tr");
let div = document.querySelector(".table");
let tables = document.getElementById("table");
let loading = document.querySelector(".gif");
let signOuts = document.getElementById("head");


signOuts.addEventListener("click" , ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        // alert("Sign-out successful.");
        window.location = "./index.html";
    }).catch((error) => {
        // An error happened.
        
    });
    window.location = ("./index.html");
})





function getResult(user) {
    let result = collection(db, "result");
    const q = query(result, where("uid", "==", user.auth.currentUser.uid));
    getDocs(q)
        .then((items) => {
            items.docs.forEach(doc => {
                // console.log(doc.data());
                loading.style.display = "none"
                // names.textContent = doc.data().name;
                // subject.textContent = doc.data().subject
                div.style.visibility =  "visible";

                tables.innerHTML = tables.innerHTML+ 
            `<tr>
            <td>Web Development</td>
            <td>${doc.data().subject}</td>
            <td>${doc.data().percentage}%</td>
            </tr>` 
            });
        })
}













// let circle = document.querySelector(".circle");
// let percentage = document.querySelector(".percentage").textContent = "30%";
// console.log(percentage);

// circle.setAttribute("stroke-dasharray", "30,100");