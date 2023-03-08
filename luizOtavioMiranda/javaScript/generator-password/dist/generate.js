"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/scripts/generate.ts
var generate_exports = {};
__export(generate_exports, {
  default: () => generate_default
});
module.exports = __toCommonJS(generate_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
