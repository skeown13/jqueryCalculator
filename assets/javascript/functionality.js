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

// When you click on a number, if an operator has not yet been assigned the number will go in the #first-number slot. If an operator has been assigned and the equals button has not yet been clicked, the number will go in the #second-number slot.

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

  $(".clear").on("click", function(){

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