import { auth, db } from "./config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { collection, addDoc, Timestamp, getDocs, where, query } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


let h1 = document.getElementById("head");


function checkUserLoc() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            getdocument(user);

            // ...
        } else {
            // User is signed out
            // ...
            signOut(auth).then(() => {
                // Sign-out successful.
                // alert("Sign-out successful.");
                window.location = "./signup.html";
            }).catch((error) => {
                // An error happened.
        
            });
        }
    });
}
checkUserLoc()
// console.log(auth);
function getdocument(user) {
    console.log(user);
    let userDetail = collection(db, "UserDetail");
    // console.log(user.auth.currentUser.uid);
    const q = query(userDetail, where("UID", "==", auth.currentUser.uid));
    getDocs(q)
        .then((items) => {
            items.docs.forEach(doc => {
                // console.log(doc.data());
                h1.innerHTML = doc.data().FirstName.toUpperCase();
            });
        })
}



let result = document.getElementById("result");
result.addEventListener("click" , ()=>{
    window.location = "./allresult.html"
})
