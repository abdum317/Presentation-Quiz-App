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

quesArr.push(new Questions("01: CSS stands for ______", "Cascade Sheets Style", "Cascade Style Sheet", "Cascading Style Sheets", "answer-03"));
quesArr.push(new Questions("02: What is CSS?", "CSS is a style sheet language", "CSS is the language used to style the HTML documents", "All of the above", "answer-03"));
quesArr.push(new Questions("03: Which tag is used to embed CSS in HTML document?", "< CSS >", "< script >", "< style >", "answer-03"));
quesArr.push(new Questions("04: The < link > tag goes inside", "the body section", "the head section", "None of the above", "answer-02"));
quesArr.push(new Questions("05: What CSS define in HTML ?", "How to send HTML elements", "How to save HTML elements", " How to display HTML elements", "answer-03"));
quesArr.push(new Questions("06: Which HTML attribute is used to define inline styles ?" , "style" ," styles", "class" , "answer-02"));
quesArr.push(new Questions("07:  CSS is also created and maintained by group of people within" , "W3D" , "W3B" , "W3C" , "answer-03"));
quesArr.push(new Questions("08: CSS1 Developed in _____ by the W3C, describes CSS language and simple visual formatting for all HTML tags." , "1996" , "1994" , "1992" , "answer-01"));
quesArr.push(new Questions("09: From which version of CSS under development since the late 1990s, added a lot of extra features ?" , "CSS1" , "CSS2" , "CSS3" , "answer-03"));
quesArr.push(new Questions("10: How many types of levels in style sheets ?" , "two level" , "one level" , "three level" , "answer-03"));


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
        localStorage.setItem("Subject" , "CSS");
        console.log(score + "/" + totalQuestion);
        window.location = "result.html";
        var totalSet = localStorage.setItem("total-Question", totalQuestion);
        var scoreSet = localStorage.setItem("score", score);
    }
});
