function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;

  var percentage = 0;

// question1
  if (question1 == "never"){
      percentage = percentage + 2
    }
  else if (question1 == "rarely"){
      percentage = percentage + 4
    }
  else if (question1 == "sometimes") {
      percentage = percentage + 6
  }
  else if (question1 == "often"){
    percentage = percentage + 8
  }
  else if (question1 == "always") {
    percentage = percentage + 10
  }

// question2
  if (question2 == "never"){
    percentage = percentage + 2
  }
  else if (question2 == "rarely"){
    percentage = percentage + 4
  }
  else if (question2 == "sometimes") {
    percentage = percentage + 6
  }
  else if (question2 == "often"){
    percentage = percentage + 8
  }
  else if (question2 == "always") {
    percentage = percentage + 10
  }

// question3
  if (question3 == "never"){
    percentage = percentage + 2
  }
  else if (question3 == "rarely"){
    percentage = percentage + 4
  }
  else if (question3 == "sometimes") {
    percentage = percentage + 6
  }
  else if (question3 == "often"){
    percentage = percentage + 8
  }
  else if (question3 == "always") {
    percentage = percentage + 10
  }

// question4
  if (question4 == "never"){
    percentage = percentage + 2
  }
  else if (question4 == "rarely"){
    percentage = percentage + 4
  }
  else if (question4 == "sometimes") {
    percentage = percentage + 6
  }
  else if (question4 == "often"){
    percentage = percentage + 8
  }
  else if (question4 == "always") {
    percentage = percentage + 10
  }

// question5
  if (question5 == "never"){
    percentage = percentage + 2
  }
  else if (question5 == "rarely"){
    percentage = percentage + 4
  }
  else if (question5 == "sometimes") {
    percentage = percentage + 6
  }
  else if (question5 == "often"){
    percentage = percentage + 8
  }
  else if (question5 == "always"){
    percentage = percentage + 10
  }

// question6
  if (question6 == "never"){
    percentage = percentage + 2
  }
  else if (question6 == "rarely"){
    percentage = percentage + 4
  }
  else if (question6 == "sometimes") {
    percentage = percentage + 6
  }
  else if (question6 == "often"){
    percentage = percentage + 8
  }
  else if (question6 == "always") {
    percentage = percentage + 10
  }

// question 7
  if (question7 == "never"){
      percentage = percentage + 2
    }
  else if (question7 == "rarely"){
      percentage = percentage + 4
    }
  else if (question7 == "sometimes"){
      percentage = percentage + 6
  }
  else if (question7 == "often"){
    percentage = percentage + 8
  }
  else if (question7 == "always") {
    percentage = percentage + 10
  }

// question8
  if (question8 == "never"){
    percentage = percentage + 2
  }
  else if (question8 == "rarely"){
    percentage = percentage + 4
  }
  else if (question8 == "sometimes") {
    percentage = percentage + 6
  }
  else if (question8 == "often"){
    percentage = percentage + 8
  }
  else if (question8 == "always"){
    percentage = percentage + 10
  }

// question9
  if (question9 == "never"){
    percentage = percentage + 2
  }
  else if (question9 == "rarely"){
    percentage = percentage + 4
  }
  else if (question9 == "sometimes") {
    percentage = percentage + 6
  }
  else if (question9 == "often"){
    percentage = percentage + 8
  }
  else if (question9 == "always"){
    percentage = percentage + 10
  }

// question10
  if (question10 == "never"){
    percentage = percentage + 2
  }
  else if (question10 == "rarely"){
    percentage = percentage + 4
  }
  else if (question10 == "sometimes"){
    percentage = percentage + 6
  }
  else if (question10 == "often"){
    percentage = percentage + 8
  }
  else if (question10 == "always") {
    percentage = percentage + 10
  }


//Messages
var messages = ["Your score suggests that you are seriously unhappy. Although this is not a recognised test, please seek help from a specialist. Also, click the link below to find some happy habits.",
"Your score suggests that you are quite unhappy, following just a few of our recommendations could help increase your happiness.", "Your score suggests that you are quite unhappy, following just a few of our recommendations could help increase your happiness.",
"Your score suggests that you are slightly below average happiness. Consider taking up a few of our happy habits!",
"Your score suggests that your level of happiness is about normal. Whilst no action is necessary, to further improve your happiness, follow the link below",
"Your score suggests that you are quite happy. For tips on how to keep this up, follow the link below",
"You are very happy. For tips on how to keep this up, follow the link below ",
"You are extremeley happy. Keep it up!",
"Your happiness levels are throug the roof!"];

var range;

if (percentage < 21) {
  range = 0
}
if (percentage > 20 && percentage < 31) {
  range = 1
}
if (percentage > 30 && percentage < 41) {
  range = 2
}
if (percentage > 40 && percentage < 51) {
  range = 3
}
if (percentage > 50 && percentage < 61) {
  range = 4
}
if (percentage > 60 && percentage < 71) {
  range = 5
}
if (percentage > 70 && percentage < 81) {
  range = 6
}
if (percentage > 80 && percentage < 91) {
  range = 7
}
if (percentage > 90) {
  range = 8
}

document.getElementById("after_submit").style.visibility = "visible"

document.getElementById("message").innerHTML = messages[range];
document.getElementById("percentage_score").innerHTML = "Your happiness score is " + percentage + "%";

document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

var parent = document.getElementById("start")
var child = document.getElementById("quiz");
parent.removeChild(child);

document.getElementById("surface").style.visibility = "visible";

var a = document.createElement("IMG");
a.setAttribute("src", "Stars.jpg");
a.setAttribute("width", "100%");
a.setAttribute("height", "100%");
document.body.appendChild(a);


}
