var count = 0;
var questions=[{

question: "what does “intergluteal cleft” stand for?",
answer: "butt crack",
answers:  ["butt crack", "armpit", "valley between two moutains", "buttock surgery"],

question: "how many teeth do snails have?", 
answer: "14,000",
answers:  ["25", "4", "14,000", "600"],

question:  "In 2005, a fortune cookie company called Wonton Food Inc, predicted how many winning lottery ticket numbers?",
answer: "110",
answers:  ["5", "938", "50", "110"], 

question: "Which of these is not something that Elephants do?",
answer: "eat peanuts",
answers: ["make friends", "bury their dead", "travel for funerals", "eat peanuts"],

question: "What year did the Boston Marathon allow female runners?",
answer:  "1972",
answers:  ["1940", "1969", "1972", "1976"], 

question:  "Which animal is reponsible for the most power outages?",
answer: "squirrel", 
answers: ["monkey", "bird", "squirrel", "racoons"],

question:  "What nut is a member of the peach family?",
answer: "almond",
answers:  ["pistachio", "walnut", "brazilian", "almond"],

question:  "The largest living organism is?",
answer: "aspen grove",
answers:  ["blue whale", "aspen grove", "honey fungus"],

}]
// console.log("script");
// this onclick is based on the ID for Start button//
//.on = listener
$("#start").on("click",(event)=>{
//  prevent default//
   event.preventDefault()
   console.log("click working");
   printQuestions()
   

})

function printQuestions(){
  $("#game-container").empty();
  var gameContainer= $("#game-container")
  var question = $("<h3>").text(questions[count].question)
  //appending div to container
  gameContainer.append(question);
  //Looping through object at answers key at integer count
  //Go to whatever integer index is in questions
  //find answers key
  //lopp through to print answers
  var answerList=$("<ul>")
  //this loop prints each button to a list so that we can add it underneath our answer
 


  for(i=0;i<questions[count].answers.length;i++){
    //ListItem holds each item that is a radio button
    var listItem = $("<li>").append("<button>").attr("type", "radio").attr("name", "answer").addClass("answer-button").text(questions[count].answers[i]);
    //append each list item with a button to the answerList
    answerList.append(listItem)
    
  }
  //append finalized list to game container
  gameContainer.append(answerList);

  //create submit button
  var submitButton = $("<button>").attr("id", "submit");
  // //append button to gameContainer
  gameContainer.append(submitButton);


count += 1;
console.log("count",count);

}
