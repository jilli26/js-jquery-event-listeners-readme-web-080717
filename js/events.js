//define functions here

function getIt() {
  $('p').on("click", function(){
      alert("Hey!")
  })
}

/*Define a function frameIt that does not accept a parameter.
The function should bind the load event that adds
the class tasty to the image to add a red frame to the image.*/

function frameIt() {
  $('img').on("load", function(){
    $('img').addClass('tasty')
  })
}

// ) Selectors submitIt() binds an event that alerts "Your form is going to be submitted now." when the form is submitted
function submitIt() {
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}

// Selectors pressIt() pressIt() binds an event that alerts the user when the G key was pressed down:
function pressIt() {
  $('#typing').on('keydown', function(key){
    if (key.which === 71){
      alert('g was pressed')
    }
  })
}



$(document).ready(function(){
  getIt()
// call functions here

});
