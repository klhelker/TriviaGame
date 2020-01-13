
var count = 0;
var number = 120;
var questions=[{
   id:"question1",
question: "what does “intergluteal cleft” stand for?",
answer: "butt crack",
answers:  ["butt crack", "armpit", "valley between two moutains", "buttock surgery"],
},
{
  id:"question2",
question: "how many teeth do snails have?", 
answer: "14,000",
answers:  ["25", "4", "14,000", "600"],
},
{
  id:"question3",
question:  "In 2005, a fortune cookie company called Wonton Food Inc, predicted how many winning lottery ticket numbers?",
answer: "110",
answers:  ["5", "938", "50", "110"], 
},
{
  id:"question4",
question: "Which of these is not something that Elephants do?",
answer: "eat peanuts",
answers: ["make friends", "bury their dead", "travel for funerals", "eat peanuts"],
},
{
  id:"question5",
question: "What year did the Boston Marathon allow female runners?",
answer:  "1972",
answers:  ["1940", "1969", "1972", "1976"], 
},
{
  id:"question5",
question:  "Which animal is reponsible for the most power outages?",
answer: "squirrel", 
answers: ["monkey", "bird", "squirrel", "racoons"],
},
{
  id:"question6",
question:  "What nut is a member of the peach family?",
answer: "almond",
answers:  ["pistachio", "walnut", "brazilian", "almond"],
},
{
  id:"question7",
question:  "The largest living organism is?",
answer: "aspen grove",
answers:  ["blue whale", "aspen grove", "honey fungus"],
}]

$("#start").on("click", run, (event)=>{
//  prevent default//
   event.preventDefault()
   console.log("click working")
   setInterval
   printQuestions()
   
 

})
var number = 100;

var intervalId;



function run() {

  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#show-number").html("<h2>" + number + "</h2>");

  if (number === 0) {
    stop();
    alert("Time Up!");
    //count answers right 
    //count answers wrong
    //display on screen
    
  }
}

function stop() {
  clearInterval(intervalId);
}

run();

function printQuestions(){
  $("#game-container").empty()
  var gameContainer= $("#game-container")
  //appending div to container
  // gameContainer.append(question)
  //Looping through object at answers key at integer count
  //Go to whatever integer index is in questions
  //find answers key
  //loop through to print answers

  //this loop prints each button to a list so that we can add it underneath our answer
  
  for(let q = 0; q < questions.length; q++){
    var question = $("<h3>").text(questions[q].question)
    gameContainer.append(question)
    var answerList=$("<ul>")
    for(i=0;i < questions[q].answers.length;i++){
      const li = $("<li>")
      //ListItem holds each item that is a radio button
      let inputItem = $("<input type='radio' class='answer-button'>").attr("name", questions[q].id).attr("value", questions[q].answers[i])
      let answerText = $("<div>").append(questions[q].answers[i])
      //append each list item with a button to the answerList
      inputItem.appendTo(li)
      answerText.appendTo(li)
      answerList.append(li)
  }
  gameContainer.append(answerList)
}
  var submitButton = $("<button>").attr("id", "submit");

  gameContainer.append(submitButton)

  $("#submit").on("click",function() {
    var radioValue = $("input:checked");
    
    console.log("clicking")
    var gameContainer= $("#game-container")
    for(let i=0; i<radioValue.length;i++){
      var question = $("<h3>").text(radioValue[i].name)
      gameContainer.append(question)
      var answer = $("<div>").text(radioValue[i].value)
      gameContainer.append(answer)
    }
 
  })

}

  