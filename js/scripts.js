
  // User Interface
$(document).ready(function(){
  $("form#robot").submit(function(event){
    event.preventDefault();
    $(".result").hide();

    const input = parseInt




  })
});    






// Business Interface
/*
function friendlyNumber(number) {
  let numberArray = []
  for (let i = 0; i <= number; i=+) {
    numberArray.push(i.toString());
  }
  numberArray.forEach(function(number)) {
    if (number.indexOf("1") >= 0) {
      numberArray{}
  
  let arrayInput = userInput.split()
  if (userInput <=0) {
    alert("Please enter a human number greater than 0"); 
  } 
    
  $(".input").text(userInput);

};
/*

// Behavior Order:

// Describe: `mr-robogers-neighborhood()`
// Test: The program will return a range of numbers from 0 to the users inputted number.
// Expect(friendlyNumber(5)).toEqual("1,2,3,4,5");

// Test: The program will convert an input that contains 1 into "Beep!"
// Expect(friendlyNumber(1)).toEqual("Beep!");

// Test: The program will convert an input that contains 2 into "Boop!"
// Expect(friendlyNumber(2)).toEqual("Boop!")'

// Test: The program will convert an input that contains 3 into "Won't you be my neighbor?"
// Expect(friendlyNumber(3)).toEqual("Won't you be my neighbor?");