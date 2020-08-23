
  // User Interface
$(document).ready(function() {
  $("#robot").submit(function(event) {
    event.preventDefault();
    $(".result").hide();
    const input = parseInt($("input#number").val());

    if (input === 1) {
      $(".result").text("Bleep!");
    }
    else if (input === 2) {
      $(".result").text("Bloop!");
    }
    else if (input === 3) {
      $(".result").text("Won't you be my neighbor?")
    }

    $(".result").text();
    $(".result").show();
        

  })
});    
