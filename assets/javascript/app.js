var count = 0;
var questions=[{

question: "what is color of sky",
answer: "blue",
answers:  ["blue", "yellow", "green", "red"]
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
  //append button to gameContainer
  gameContainer.append(submitButton);


count += 1;
console.log("count",count);

}
