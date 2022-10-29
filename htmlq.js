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

quesArr.push(new Questions("01: What does HTML stand for?", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Langauge", "answer-01"));
quesArr.push(new Questions("02: Choose the correct HTML element for the largest heading:", "< heading >", "< h1 >", "< h6 >", "answer-02"));
quesArr.push(new Questions("03: What is the correct HTML element for inserting a line break?", "< br >", "< lb >", "< break >", "answer-01"));
quesArr.push(new Questions("04: What is the correct HTML for adding a background color?", "< body style = 'background-color:yellow'; >", "< body bg = 'yellow >", "< background >yellow</ background >", "answer-01"));
quesArr.push(new Questions("05: Who is the father of HTML?", "Rasmus Lerdorf", "Tim Berners-Lee", " Brendan Eich", "answer-02"));
quesArr.push(new Questions("06: What do you understand by HTML?" , " HTML describes the structure of a webpage" ," HTML is the standard markup language mainly used to create web pages", "All of the above" , "answer-03"));
quesArr.push(new Questions("07: Which is used to read an HTML page and render it?" , "Web network" , "Web matrix" , "Web browser" , "answer-03"));
quesArr.push(new Questions("08: Which is used to create Web Pages ?" , "Java" , "HTML" , "JVM" , "answer-02"));
quesArr.push(new Questions("09: HTML is a set of markup ___." , "tags" , "sets" , "attributes" , "answer-01"));
quesArr.push(new Questions("10: HTML program is saved using ___ extension." , ".htmn" , ".html" , ".htnl" , "answer-02"));


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
localStorage.setItem("Subject" , "Html");