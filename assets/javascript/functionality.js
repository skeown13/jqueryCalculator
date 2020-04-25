$(document).ready(function() {

// Variables to store numbers/operators

  let firstNum;
  let firstFullNum = "";
  let op;
  let secondNum;
  let secondFullNum = "";

// Variables to grab the id from HTML

  let button1 = $("#button-1");
  let button2 = $("#button-2");
  let button3 = $("#button-3");
  let buttonPlus = $("#button-plus");
  let button4 = $("#button-4");
  let button5 = $("#button-5");
  let button6 = $("#button-6");
  let buttonMinus = $("#button-minus");
  let button7 = $("#button-7");
  let button8 = $("#button-8");
  let button9 = $("#button-9");
  let buttonMultiply = $("#button-multiply");
  let button0 = $("#button-0");
  let buttonDivide = $("#button-divide");
  let buttonPower = $("#button-power");
  let buttonEqual = $("#button-equal");
  let buttonClear = $("#button-clear");
  let firstNumber = $("#first-number");
  let operator = $("#operator");
  let secondNumber = $("#second-number");
  let result = $("#result");

// If assignment operator is clicked first, nothing happens

// First number(s) clicked get placed in #first-number and stored in a variable as a number

  $("#button-0, #button-1, #button-2, #button-3, #button-4, #button-5, #button-6, #button-7, #button-8, #button-9").on("click", function() {
    console.log(op, "op in first number");
    console.log(this, "what is this");
    if(op === undefined) {
      if (this.id === "button-0") {
        firstFullNum = firstFullNum + "0";
        firstNum = 0;
        console.log(firstFullNum);
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
    }
  });

// After some numbers are entered, when an operator is selected, store that in #operator and in it's variable -- the operator may be changed at any point after this

// After an operator is chosen, any additional numbers will be placed in # second-number and stored in a varable as a number -- no new numbers may be added to #first-number

// When the equal button is clicked, it will do the math operation of the operator stored in #operator of the #first-number and #second-number

// Make the #clear-button clear all variables and the result card







})