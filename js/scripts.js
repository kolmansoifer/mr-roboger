// User Interface

function robotSays(input) {
  let robotArray = [];
    for (let i = 0; i <= input; i ++) {
      let num = i.toString();
      if (num.includes("1")) {
        robotArray.push( " " + " Bleep");
      } else if (num.includes("2")) {
        robotArray.push(" Bloop!");
      } else if (num.includes("3")) {
        robotArray.push("Won't you be my neighbor?");
      } else {
        robotArray.push(" " + num)
      }
    }
    return robotArray;
  }


$(document).ready(function() {
  $("form#robot").submit(function(event) {
    event.preventDefault();
   
    const input = parseInt($("input#number").val());
    const robotSpeak = robotSays(input);
    
    $(".result").text(robotSpeak);
    $(".result").show();
        
  })
});    
