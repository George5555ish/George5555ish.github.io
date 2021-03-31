const acBtn = document.getElementById("acBtn");
const clearBtn = document.getElementById("clearBtn");
const percentBtn = document.getElementById("percentBtn");
const divideBtn = document.getElementById("divideBtn");

const sevenBtn = document.getElementById("sevenBtn");
const eightBtn = document.getElementById("eightBtn");
const nineBtn = document.getElementById("nineBtn");
const multiplyBtn = document.getElementById("multiplyBtn");

const fourBtn = document.getElementById("fourBtn");
const fiveBtn = document.getElementById("fiveBtn");
const sixBtn = document.getElementById("sixBtn");
const minusBtn = document.getElementById("minusBtn");

const oneBtn = document.getElementById("oneBtn");
const twoBtn = document.getElementById("twoBtn");
const threeBtn = document.getElementById("threeBtn");
const addBtn = document.getElementById("addBtn");

const zeroBtn = document.getElementById("zeroBtn");
const decimalBtn = document.getElementById("decimalBtn");

const equalsBtn = document.getElementById("equalsBtn");

//  Display
const userText = document.getElementById("userText");
const finalAnswer = document.getElementById("finalAnswer");

let result = "";
let operationCount = 0;
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

acBtn.addEventListener("click", () => {
  result = "";
  finalAnswer.innerText = result;
  userText.innerText = result;
  operationCount = 0;
});

clearBtn.addEventListener("click", () => {
  result = result
    .split("")
    .slice(0, result.length - 1)
    .join("");
  userText.innerText = result;
 
});
function displayDigits(digit) {

    if (operationCount == 0 && (digit == "x" || digit == "-" ||digit == "+" || digit == "/")){
        operationCount++;
    }else if(operationCount == 1 && (digit == "x" || digit == "-" ||digit == "+" || digit == "/")){
        finalSolution();
    }
  result = result + digit;

  userText.innerText = result;
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

function subtractNumbers(num1, num2) {
  return num1 - num2;
}
function addNumbers(num1, num2) {
  return +num1 + +num2;
}

function divideNumbers(num1, num2) {
  return num1 / num2;
}

function handleLogic(firstNum, secondNum, operator) {
  if (operator === "x") {
    return multiplyNumbers(firstNum, secondNum);
  }

  if (operator === "-") {
    return subtractNumbers(firstNum, secondNum);
  }

  if (operator === "/") {
    return divideNumbers(firstNum, secondNum);
  }

  if (operator === "+") {
    return addNumbers(firstNum, secondNum);
  }
}

function handleOperation(result, operatorArr) {
  let firstNum = 0;
  let secondNum = 0;
  let operatorIndex = [];
  let operatorValue = [];

  for (var i = 0; i < operatorArr.length; i++) {
    operatorValue.push(operatorArr[i][0]);
    operatorIndex.push(operatorArr[i][1]);
  }
  if (operatorArr.length == 1) {
    firstNum = result.slice(0, operatorArr[0][1]);
    secondNum = result.slice(operatorArr[0][1] + 1, result.length);

    return handleLogic(firstNum, secondNum, operatorArr[0][0]);
    // console.log(firstNum, secondNum);
  } else if (operatorArr.length > 1) {
    let num1 = 0;
    let num2 = 0;
    let answer;
    let solution;
 

    for (var i = 0; i <= operatorIndex.length; i++) {
      if (i == 0) {
        num1 = result.slice(0, operatorIndex[i]);
        num2 = result.slice(operatorIndex[i] + 1, operatorIndex[i + 1]);

        answer = handleLogic(num1, num2, operatorValue[i]);
        // console.log(answer)
      }

    //   console.log(answer)

      if (operatorIndex.length > 2 && i > 0 && operatorIndex[i + 1]){
         var secondNumber = result.slice(operatorIndex[i] + 1, operatorIndex[i + 1]);

        //  console.log(answer,  parseInt(secondNumber), operatorValue[i + 1])
         answer = handleLogic(answer, parseInt(secondNumber), operatorValue[i]);
      }
  
      if (i == operatorIndex.length) {
        num2 = result.slice(operatorIndex[i - 1] + 1, result.length);
     
     
        solution = handleLogic(answer, parseInt(num2), operatorValue[i - 1]);
        // console.log(solution)
      }
    }

    return solution;
  }
}
function finalSolution() {
  // BODMAS


  var test = result.split("");
  let operatorArr = [];
  finalAnswer.innerText = result;
  console.log(test);

  test.map((num, index) => {
    if (num === "x" || num == "-" || num == "/" || num == "+") {
      if (index === 0 && (num == "-" || num == "+")) {
        console.log("testing value");
      } else {
        operatorArr.push([num, index]);
      }
    }
  });

  console.log(operatorArr);

  const answer = handleOperation(result, operatorArr);

  finalAnswer.innerText = answer;
}

sevenBtn.addEventListener("click", () => displayDigits(7));
eightBtn.addEventListener("click", () => displayDigits(8));
nineBtn.addEventListener("click", () => displayDigits(9));
fourBtn.addEventListener("click", () => displayDigits(4));
fiveBtn.addEventListener("click", () => displayDigits(5));
sixBtn.addEventListener("click", () => displayDigits(6));
oneBtn.addEventListener("click", () => displayDigits(1));
twoBtn.addEventListener("click", () => displayDigits(2));
threeBtn.addEventListener("click", () => displayDigits(3));

zeroBtn.addEventListener("click", () => displayDigits(0));
decimalBtn.addEventListener("click", () => displayDigits("."));
equalsBtn.addEventListener("click", () => finalSolution());

addBtn.addEventListener("click", () => displayDigits("+"));
minusBtn.addEventListener("click", () => displayDigits("-"));
multiplyBtn.addEventListener("click", () => displayDigits("x"));
divideBtn.addEventListener("click", () => displayDigits("/"));
