var counter = 60;

var intervalId;

var answer=0;

var wrongAnswers=0;


var questions=[{
   id:"question1",
question: "What does “intergluteal cleft” stand for?",
answer: "butt crack",
answers:  ["butt crack", "armpit", "valley between two moutains", "buttock surgery"],
},
{
  id:"question2",
question: "How many teeth do snails have?", 
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
  id:"question6",
question:  "Which animal is reponsible for the most power outages?",
answer: "squirrel", 
answers: ["monkey", "bird", "squirrel", "racoons"],
},
{
  id:"question7",
question:  "What nut is a member of the peach family?",
answer: "almond",
answers:  ["pistachio", "walnut", "brazilian", "almond"],
},
{
  id:"question8",
question:  "The largest living organism is?",
answer: "aspen grove",
answers:  ["blue whale", "aspen grove", "honey fungus"],
}]

$("#start").on("click", (event)=>{
//  prevent default//
   divClone=$("#game-container").clone(true)
   event.preventDefault()
   console.log("click working")
   printQuestions()
   run()
   $("#game-container").prepend("<div id ='show-number'>")

   

})

// var counter = 30;

// var intervalId;

// var answer=0;

// var wrongAnswers=0;

function run() {

  clearInterval(intervalId);
  counter = 60;
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  console.log(counter);
  counter--;
  $("#show-number").html("<h2>" + "You have " + counter + " seconds to complete the quiz!"+ "</h2>");
  if (counter === 0) {
    stop();
    var radioValue = $("input:checked");
    
    console.log("clicking")
       
    var gameContainer= $("#game-container")
    gameContainer.hide()
       
    for(var i=0; i<radioValue.length;i++){

      if (radioValue === (questions[i].question.answer)){
        answer ++;
      }
      else{

        wrongAnswers ++;

      }
    }
       result = $("<div id ='results'>");
       
       result.html("You got " + answer + " answers right. You got " + wrongAnswers + " wrong!");
       $("body").html(result)
       $("body").append("<button id='reset'> reset game </button>")
       $("#reset").on("click",function() {
        ("body").html(divClone.clone(true))
          
          run()
        
       })
    
  }

}
function stop() {
  clearInterval(intervalId);
}

function printQuestions(){
    
    $("#game-container").empty()
     var gameContainer= $("#game-container")
 
     for(let q = 0; q < questions.length; q++){
          var question = $("<h3>").text(questions[q].question)
          gameContainer.append(question)
          var answerList=$("<ul>")
   
          for(i=0;i < questions[q].answers.length;i++){
           const li = $("<li>")
      //ListItem holds each item that is a radio button
           var inputItem = $("<input type='radio' class='answer-button'>").attr("name", questions[q].id).attr("value", questions[q].answers[i])
           var answerText = $("<div>").append(questions[q].answers[i])
      //append each list item with a button to the answerList
              inputItem.appendTo(li)
              answerText.appendTo(li)
              answerList.append(li)
  }
       gameContainer.append(answerList)
}

      var submitButton = $("<button id= 'Submit'> Submit </button >").attr("id", "submit");

      gameContainer.append(submitButton)

     $("#submit").on("click",function() {
      
        $(window).scrollTop(0); 
    
        var radioValue = $("input:checked");
    
        console.log("clicking")
           
        var gameContainer= $("#game-container")
        gameContainer.hide()
           
        for(var i=0; i<radioValue.length;i++){

          if (radioValue === (questions[i].question.answer)){
            answer ++;
          }
          else{

            wrongAnswers ++;

          }
        }


           result = $("<div id ='results'>");
           
           result.html("You got " + answer + " answers right. You got " + wrongAnswers + " wrong!");
           $("body").html(result)
           $("body").append("<button id='reset'> reset game </button>")
           $("#reset").on("click",function() {
              $("body").html(divClone.clone(true))
              
              run()
            
           })
          })}