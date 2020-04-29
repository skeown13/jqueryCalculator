$(document).ready(function() {

// Variables to store numbers/operators

  let firstFullNum = "";
  let op;
  let secondFullNum = "";
  let finalResult = false;

// Variables to grab the id from HTML

  let firstNumber = $("#first-number");
  let operator = $("#operator");
  let secondNumber = $("#second-number");
  let result = $("#result");

// If assignment operator is clicked first, nothing happens

// First number(s) clicked get placed in #first-number and stored in a variable as a number

  $(".number").on("click", function() {

    if(op === undefined) {
      firstFullNum += $(this).val();
      firstNumber.text(firstFullNum);

    } else if(op !== undefined && finalResult === false) { 
      secondFullNum += $(this).val();
      secondNumber.text(secondFullNum);

    };
  });

// After some numbers are entered, when an operator is selected, store that in #operator and in it's variable -- the operator may be changed at any point after this

  $(".operator").on("click", function() {
    if(firstFullNum !== "") {
      op = $(this).val();
      operator.text($(this).text());
    }
  });

// After an operator is chosen, any additional numbers will be placed in # second-number and stored in a varable as a number -- no new numbers may be added to #first-number

// When the equal button is clicked, it will do the math operation of the operator stored in #operator of the #first-number and #second-number

  $(".equal").on("click", function() {

    firstFullNum = parseInt(firstFullNum);
    secondFullNum = parseInt(secondFullNum);
  
    if(op === "plus") {
      result.text(firstFullNum + secondFullNum);
    } 
    
    else if (op === "minus") {
      result.text(firstFullNum - secondFullNum);
    } 
    
    else if (op === "times") {
      result.text(firstFullNum * secondFullNum);
    } 
    
    else if (op === "divide") {
      result.text(firstFullNum / secondFullNum);
    } 
    
    else if (op === "power") {
      result.text(Math.pow(firstFullNum), secondFullNum);
    } 

    finalResult = true;
    

  });

// Make the #clear-button clear all variables and the result card

  $("#button-clear").on("click", function(){

    firstNumber.empty();
    operator.empty();
    secondNumber.empty();
    result.empty();
    op = undefined;
    firstFullNum = "";
    secondFullNum = "";
    finalResult = false;

  });

});