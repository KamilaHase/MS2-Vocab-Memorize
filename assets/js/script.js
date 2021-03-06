/*--------------------------SHUFFLE THE CARDS AND PICK TWO RANDOM ONES-------------------------------------------------*/
//adapted from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?noredirect=1&lq=1
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var arr = $('.draggable-cards');
shuffle(arr);
$('#draggable-cards').append(arr);
$(arr).slice(2).hide();
 


//--------BUTTON RELOAD---------------

$(".btn-reload-page").click(function(){
location.reload(true);
});


/*---------------------------------QUIZ-------------------*/
// ----VERSION FOR SMALL AND TOUCH SCREENS
// adapted from https://www.youtube.com/watch?v=1SxMWhqYQ4k&t=1588s and https://www.youtube.com/watch?v=C7NsIRhoWuE 

let correctScore = 0;

function check() {
let postylka = $("#input-postylka").val();
let okno = $("#input-okno").val();
let kocka = $("#input-kocka").val();
let zachod = $("#input-zachod").val();
let vaza = $("#input-vaza").val();
let lednice = $("#input-lednice").val();


if (postylka == "4") {
  correctScore++;
  $("#input-postylka").css("background-color", "#caf3e8"); //correct answer
} else {
  $("#input-postylka").css("background-color", "#ffded6"); //incorrect answer
}

if (okno == "2") {
  correctScore++;
  $("#input-okno").css("background-color", "#caf3e8"); //correct answer
} else {
  $("#input-okno").css("background-color", "#ffded6"); //incorrect answer
}

if (kocka == "1") {
  correctScore++;
  $("#input-kocka").css("background-color", "#caf3e8"); //correct answer
} else {
  $("#input-kocka").css("background-color", "#ffded6"); //incorrect answer
}

if (zachod == "3") {
  correctScore++;
  $("#input-zachod").css("background-color", "#caf3e8"); //correct answer
} else {
  $("#input-zachod").css("background-color", "#ffded6"); //incorrect answer
}

if (vaza == "5") {
  correctScore++;
  $("#input-vaza").css("background-color", "#caf3e8"); //correct answer
} else {
  $("#input-vaza").css("background-color", "#ffded6"); //incorrect answer
}

if (lednice == "6") {
  correctScore++;
  $("#input-lednice").css("background-color", "#caf3e8"); //correct answer
} else {
  $("#input-lednice").css("background-color", "#ffded6"); //incorrect answer
}

$("#results-correct").css("visibility","visible").addClass("after-submit");
$("#results-correct").html("You got " + correctScore + " correct.");


};

// ----VERSION FOR LARGE SCREENS - DRAG AND DROP

// jquery

let correct = 0;

$(function() {
  
$( "#postylka, #okno, #kocka, #zachod, #vaza, #lednice" ).draggable();

$( "#drop-postylka" ).droppable({
  accept: "#postylka",
  
  drop: function() {
    $( this )
    .addClass("drop-correct");      
    correct++;
  }
});

$( "#drop-okno" ).droppable({
  accept: "#okno",

  drop: function( event, ui ) {
    $( this )
        .addClass("drop-correct");  
        correct++;
  }
});

$( "#drop-kocka" ).droppable({
  accept: "#kocka",

  drop: function( event, ui ) {
    $( this )
        .addClass("drop-correct");  
        correct++;
  }
});

$( "#drop-zachod" ).droppable({
  accept: "#zachod",
  
  drop: function( event, ui ) {
    $( this )
        .addClass("drop-correct");    
        correct++;
  }
});

$( "#drop-vaza" ).droppable({
  accept: "#vaza",

  drop: function( event, ui ) {
    $( this )
        .addClass("drop-correct");
        correct++;
  }
});

$( "#drop-lednice" ).droppable({
  accept: "#lednice",

  drop: function( event, ui ) {
    $( this )
        .addClass("drop-correct");
        correct++;
    }
  });

});

function checkLg() {
  if (correct > 2){
    correct = 2;
  }
  $(".drop-correct").css("visibility","visible");
  $("#results-correct").css("visibility","visible").addClass("after-submit");
  $("#results-correct").html("You got " + correct + " correct.");
}

/* adapted from https://stackoverflow.com/questions/8752541/jquery-delay-after-click/8752555 */

$("#check-lg").click(
    function() {
      setTimeout(
          function() {
            if (correct === 2) {
              $("#congratulations").css("display","block");
            } else {
              $("#another-try").css("display","block");
            }
          },
          500);
  });

  $("#check-sm").click(
    function() {
      setTimeout(
          function() {
            if (correctScore === 2) {
              $("#congratulations").css("display","block");
            } else {
              $("#another-try").css("display","block");
            }
          },
          500);
  });
 

  function hide() {
    $("#congratulations").css("display","none");
    $("#another-try").css("display","none");
    $("#detailed-instructions-lg").css("display", "none");
    $("#detailed-instructions-sm").css("display", "none");
  }

  function instructionsLg() {
    $("#detailed-instructions-lg").css("display","block").addClass("detailed-instructions-lg");
  }

  function instructionsSm() {
  $("#detailed-instructions-sm").css("display","block").addClass("detailed-instructions-sm");
  }