$(document).ready(function() {

// Variables to store numbers/operators

  let firstNum;
  let firstFullNum = "";
  let op;
  let secondNum;
  let secondFullNum = "";
  let finalResult = false;

// Variables to grab the id from HTML

  let firstNumber = $("#first-number");
  let operator = $("#operator");
  let secondNumber = $("#second-number");
  let result = $("#result");

// If assignment operator is clicked first, nothing happens

// First number(s) clicked get placed in #first-number and stored in a variable as a number

  $("#button-0, #button-1, #button-2, #button-3, #button-4, #button-5, #button-6, #button-7, #button-8, #button-9").on("click", function() {

    if(op === undefined) {
      if (this.id === "button-0") {
        firstFullNum = firstFullNum + "0";
        firstNum = 0;
      } else if (this.id === "button-1") {
        firstFullNum = firstFullNum + "1";
        firstNum = 1;
      } else if (this.id === "button-2") {
        firstFullNum = firstFullNum + "2";
        firstNum = 2;
      } else if (this.id === "button-3") {
        firstFullNum = firstFullNum + "3";
        firstNum = 3;
      } else if (this.id === "button-4") {
        firstFullNum = firstFullNum + "4";
        firstNum = 4;
      } else if (this.id === "button-5") {
        firstFullNum = firstFullNum + "5";
        firstNum = 5;
      } else if (this.id === "button-6") {
        firstFullNum = firstFullNum + "6";
        firstNum = 6;
      } else if (this.id === "button-7") {
        firstFullNum = firstFullNum + "7";
        firstNum = 7;
      } else if (this.id === "button-8") {
        firstFullNum = firstFullNum + "8";
        firstNum = 8;
      } else if (this.id === "button-9") {
        firstFullNum = firstFullNum + "9";
        firstNum = 9;
      };

      firstNumber.append(firstNum);

    } else if(op !== undefined && finalResult === false) { 
      if (this.id === "button-0") {
        secondFullNum = secondFullNum + "0";
        secondNum = 0;
      } else if (this.id === "button-1") {
        secondFullNum = secondFullNum + "1";
        secondNum = 1;
      } else if (this.id === "button-2") {
        secondFullNum = secondFullNum + "2";
        secondNum = 2;
      } else if (this.id === "button-3") {
        secondFullNum = secondFullNum + "3";
        secondNum = 3;
      } else if (this.id === "button-4") {
        secondFullNum = secondFullNum + "4";
        secondNum = 4;
      } else if (this.id === "button-5") {
        secondFullNum = secondFullNum + "5";
        secondNum = 5;
      } else if (this.id === "button-6") {
        secondFullNum = secondFullNum + "6";
        secondNum = 6;
      } else if (this.id === "button-7") {
        secondFullNum = secondFullNum + "7";
        secondNum = 7;
      } else if (this.id === "button-8") {
        secondFullNum = secondFullNum + "8";
        secondNum = 8;
      } else if (this.id === "button-9") {
        secondFullNum = secondFullNum + "9";
        secondNum = 9;
      };

      secondNumber.append(secondNum);
      
    };
  });

// After some numbers are entered, when an operator is selected, store that in #operator and in it's variable -- the operator may be changed at any point after this

  $("#button-plus, #button-minus, #button-multiply, #button-divide, #button-power").on("click", function() {
    if(firstNum !== undefined) {
      if(this.id === "button-plus") {
        op = "+";
      } else if (this.id === "button-minus") {
        op = "-";
      } else if (this.id === "button-multiply") {
        op = "*";
      } else if (this.id === "button-divide") {
        op = "/";
      } else if (this.id === "button-power") {
        op = "^";
      }

      operator.empty().append(op);
    }
  });

// After an operator is chosen, any additional numbers will be placed in # second-number and stored in a varable as a number -- no new numbers may be added to #first-number

// When the equal button is clicked, it will do the math operation of the operator stored in #operator of the #first-number and #second-number

  $("#button-equal").on("click", function() {

    if(secondNum !== undefined && finalResult === false) {
      if(op === "+") {
        result.append(parseInt(firstFullNum) + parseInt(secondFullNum));
      } else if (op === "-") {
        result.append(parseInt(firstFullNum) - parseInt(secondFullNum));
      } else if (op === "*") {
        result.append(parseInt(firstFullNum) * parseInt(secondFullNum));
      } else if (op === "/") {
        result.append(parseInt(firstFullNum) / parseInt(secondFullNum));
      } else if (op === "^") {
        result.append(Math.pow(parseInt(firstFullNum), parseInt(secondFullNum)));
      } 
      finalResult = true;
    }

  });

// Make the #clear-button clear all variables and the result card

  $("#button-clear").on("click", function(){

    firstNumber.empty();
    operator.empty();
    secondNumber.empty();
    result.empty();
    firstNum = undefined;
    op = undefined;
    secondNum = undefined;
    firstFullNum = "";
    secondFullNum = "";
    finalResult = false;

  });

});