
$('.mybtn').on('click', function(event) {
    event.preventDefault(); 
    var url = $(this).data('target');
    location.replace(url);
});


.
$("button").click(addTask);

// Add a listener to the document.
// It should keep an ear out for a click on elements with an id of "delete".
// We can't use .click, because the element is dynamically created.
$(document).on("click", "#delete", removeTask);

// When a user presses any key on their keyboard,
$("input").keypress(function(event) {

  // listen to see that key was "enter."
  if (event.which === 13) {

    // If so, run addTask.
    addTask();
  }
});