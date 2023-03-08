"use strict";

// src/scripts/generate.ts
var generateASCII = (numberASCII) => String.fromCharCode(numberASCII);
var rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
var symbols = '.,:;/|!@#$%^&*(){}[]_+-=><~`"';
var beginUppercaseASCIILetters = 65;
var finalUppercaseASCIILetters = 90;
var beginLowcaseASCIILetters = 97;
var finalLowcaseASCIILetters = 122;
var beginNumbersASCIILetters = 48;
var finalNumbersASCIILetters = 57;
var beginSymbolsArray = 0;
var finalSymbolsArray = 30;
var generateUppercase = () => generateASCII(rand(beginUppercaseASCIILetters, finalUppercaseASCIILetters));
var generateSymbols = () => symbols[rand(beginSymbolsArray, finalSymbolsArray)];
var generateLowcase = () => generateASCII(rand(beginLowcaseASCIILetters, finalLowcaseASCIILetters));
var generateNumbers = () => generateASCII(rand(beginNumbersASCIILetters, finalNumbersASCIILetters));
var generatePassword = ({ quantity = "10", symbol = false, uppercase = false, lowcase = false, numbers = false } = {}) => {
  const passwordArray = [];
  const quantityIsNumber = parseInt(quantity);
  console.log(lowcase);
  console.log(symbol);
  for (let i = 0; i < quantityIsNumber; i++) {
    uppercase && passwordArray.push(generateUppercase());
    symbol && passwordArray.push(generateSymbols());
    lowcase && passwordArray.push(generateLowcase());
    numbers && passwordArray.push(generateNumbers());
  }
  return passwordArray.join("").slice(0, quantityIsNumber);
};
var generate_default = generatePassword;

// src/scripts/formGeneratePassword.ts
var showPassword = document.getElementById("showPassword");
var NumbersQuantity = document.getElementById("inputNumbersQuantity");
var Lowcase = document.getElementById("checkboxLetters");
var Uppercase = document.getElementById("checkboxUppercase");
var Numbers = document.getElementById("checkboxNumbers");
var Symbols = document.getElementById("checkboxSymbols");
var buttonGeneratePassword = document.getElementById("generatePassword");
buttonGeneratePassword == null ? void 0 : buttonGeneratePassword.addEventListener("click", () => {
  console.log("button");
  const password = generate();
  if (password) {
    showPassword.innerHTML = password;
  } else {
    showPassword.innerHTML = "nada selecionado";
  }
});
var generate = () => {
  var _a;
  const passwordOptions = {
    quantity: (_a = NumbersQuantity == null ? void 0 : NumbersQuantity.value) != null ? _a : "8",
    lowcase: Lowcase.checked,
    uppercase: Uppercase.checked,
    numbers: Numbers.checked,
    symbol: Symbols.checked
  };
  const password = generate_default(passwordOptions);
  return password;
};
