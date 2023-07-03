let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");
// let maxAllowedChars = productNameInputElement.maxLength;
function updateRemainingChars(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;
  let remainingCharacters = 60 - enteredTextLength
  remainingCharsElement.textContent = remainingCharacters;
  if (remainingCharacters === 0) {
    productNameInputElement.classList.add("error")
    remainingCharsElement.classList.add("error")
  }
  else if (remainingCharacters <= 10) {
    productNameInputElement.classList.add("warning")
    remainingCharsElement.classList.add("warning")

  }
  else {
    productNameInputElement.classList.remove("warning", "error")
    remainingCharsElement.classList.remove("warning", "error")

  }
}
productNameInputElement.addEventListener("input", updateRemainingChars);
remainingChars = document.getElementById("product-name")


// let username = "abdul"
// if (username=="abdul"){
//     console.log('User name is abdul')
// }
//     else{
//         console.log("user is not logged in")
//     }

//for loop
// for (let i = 0; i < 100; i++) {
//     console.log(i)

// }
/// for of loop
// let users = ["abdul","bayees","abuhusaina"]
// for (let user of users) {
//     console.log(user)
// }

///for in loop
// const LoggedinUSer = {
//     name:"abdul bayees",
//     age:32,
//     isAdmin:true
// }
// for (const propertyName in LoggedinUSer) {
//     console.log(propertyName)



//While Loop
// let isFininshed = false
// while (!isFininshed) {
//     isFininshed= confirm("Do You Really wanna see this website")
// }
// console.log("User Agreed")

let calculateBtn = document.querySelector("#calculate-sum button");
let display = document.querySelector("#calculate-sum .display");

calculateBtn.addEventListener("click", calculateSum);

function calculateSum() {
  let numberInput = document.getElementById("num");
  let enteredNumber = parseInt(numberInput.value);
  let sumUp = 0;

  for (let i = 1; i <= enteredNumber; i++) {
    sumUp += i;
  }

  display.textContent = "Sum: " + sumUp;
  display.style.display = "block";
}

let highlightBtn = document.querySelector("#btn-highlight")
highlightBtn.addEventListener("click", changeColor)
function changeColor() {
  const highlightTexts = document.querySelectorAll("#highlight strong")
  for (const highlightText of highlightTexts) {
    highlightText.classList.add("strongAll")


  }
}

let displayBtn = document.querySelector("#display-btn");
displayBtn.addEventListener("click", showDetails);

function showDetails() {
  let outputDataElement = document.querySelector("#show-details");
  outputDataElement.innerHTML = "";

  const details = {
    name: "Abdul Bayees",
    age: 20,
    occupation: "Software Engineer",
  };

  for (const detail in details) {
    let newUser = document.createElement("li");
    let outputText = detail.toUpperCase() + ": " + details[detail];
    newUser.textContent = outputText;
    outputDataElement.append(newUser);
  }
}



let rollBtn = document.querySelector("#roll-btn")


function rollTheDice() {
  let listElements = document.querySelector("#dice-rolls")
  let number = document.querySelector("#targetedNumber")
  let enteredNum = number.value
  listElements.innerHTML = ""
  let hasRolledTargetNumber = false
  let numberOfRolls = 0
  while (!hasRolledTargetNumber) {
    const rolledNumber = rollingCount()
    numberOfRolls++
    const newRollList = document.createElement("li")
    const outputTextt = "ROLL" + numberOfRolls + ": " + rolledNumber
    newRollList.textContent = outputTextt
    listElements.append(newRollList)
    hasRolledTargetNumber = (rolledNumber == enteredNum)
  }
  let outputTotalRolls = document.querySelector("#output-total-rolls")
  let outputTargetNumber = document.querySelector("#output-target-number")
  outputTargetNumber.textContent = enteredNum
  outputTotalRolls.textContent = numberOfRolls
}
function rollingCount() {
  return Math.floor(Math.random() * 6)+1
}
rollBtn.addEventListener("click", rollTheDice)