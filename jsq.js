import { auth, db } from "./config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { collection, addDoc, Timestamp, getDocs, where, query } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";



var question = document.querySelector("#question");
var option01 = document.querySelector("#option-01");
var option02 = document.querySelector("#option-02");
var option03 = document.querySelector("#option-03");
var submit = document.querySelector("button");
var answers = document.querySelectorAll(".input");
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































var quesArr = [];

quesArr.push(new Questions("01: Javascript is a _____ language.", "Programming", "Application", "Scripting", "answer-03"));
quesArr.push(new Questions("02: JavaScript is a _____ Side Scripting Language.", "server", "browser", "ISP", "answer-02"));
quesArr.push(new Questions("03: Which of the following purpose, JavaScript is designed for ?", "To Style HTML Pages", "To Perform Server Side Scripting Opertion", "To add interactivity to HTML Pages.", "answer-03"));
quesArr.push(new Questions("04: JavaScript can be written", "directly on the server script", "directly into HTML page", "All the above", "answer-02"));
quesArr.push(new Questions("05: JavaScript code is written inside file having extension", ".jvs", ".js", ".jsc", "answer-02"));
quesArr.push(new Questions("06: Why JavaScript is called as Lightweight Programming Language ?" , "because JS is available free of cost." ," because we can add programming functionality inside JS", " because JS can provide programming functionality inside but up to certain extend." , "answer-03"));
quesArr.push(new Questions("07: JavaScript is also called as" , "Server Side Scripting Language" , "Client Side Scripting Language" , "All of the above" , "answer-02"));
quesArr.push(new Questions("08: Local Browser used for validations on the Web Pages uses" , "Java" , "JS" , "CSS" , "answer-02"));
quesArr.push(new Questions("09:JavaScript code can be called by using" , "RMI" , "Function / Method" , "None of the above" , "answer-02"));
quesArr.push(new Questions("10:Which of the following is not javascript data types?" , "Null type" , "undefined type" , "All the above" , "answer-03"));


function Questions(question, opt01, opt02, opt03, answer) {
    this.question = question;
    this.option1 = opt01;
    this.option2 = opt02;
    this.option3 = opt03;
    this.ans = answer;
}
var totalQuestion = 0;
var score = 0;
var loadQuestion = function () {
    question.innerHTML = quesArr[totalQuestion].question;
    option01.innerHTML = quesArr[totalQuestion].option1;
    option02.innerHTML = quesArr[totalQuestion].option2;
    option03.innerHTML = quesArr[totalQuestion].option3;

}
loadQuestion();

var getCheckedAnswer = function () {
    var answer;
    answers.forEach(function (curAnsElem) {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    })
    return answer;

};

var deselectAll = function(){
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', function () {
    var checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quesArr[totalQuestion].ans) {
        score++;
    };
    totalQuestion++;
    deselectAll();

    if (totalQuestion < quesArr.length) {
        loadQuestion();
    } else {
        console.log(score + "/" + totalQuestion);
        window.location = "result.html";
        var totalSet = localStorage.setItem("total-Question", totalQuestion);
        var scoreSet = localStorage.setItem("score", score);
    }
});
localStorage.setItem("Subject" , "JavaScript");