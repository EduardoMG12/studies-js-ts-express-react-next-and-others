/*48 a 57 numeros*/
// 65 a 90 letras maiusculas
// 97 a 122 letras minusculas

const generateASCII = (numberASCII:number) => String.fromCharCode(numberASCII);

const rand = (min:number, max:number) => Math.floor(Math.random() * (max - min) + min);
const symbols = '.,:;/|\!@#$%^&*(){}[]_+-=><~`"';

const beginUppercaseASCIILetters = 65
const finalUppercaseASCIILetters = 90
const beginLowcaseASCIILetters = 97
const finalLowcaseASCIILetters = 122
const beginNumbersASCIILetters = 48
const finalNumbersASCIILetters = 57
const beginSymbolsArray = 0
const finalSymbolsArray = 30

const generateUppercase = (): string => generateASCII(rand(beginUppercaseASCIILetters, finalUppercaseASCIILetters));
const generateSymbols = (): string => symbols[rand(beginSymbolsArray, finalSymbolsArray)];
const generateLowcase = (): string =>  generateASCII(rand(beginLowcaseASCIILetters, finalLowcaseASCIILetters));
const generateNumbers = (): string => generateASCII(rand(beginNumbersASCIILetters, finalNumbersASCIILetters));

export interface IPasswordOptions {
    quantity?: string;
    symbol?: boolean;
    uppercase?: boolean;
    lowcase?: boolean;
    numbers?: boolean;
  }

    const generatePassword = ({ quantity = "10", symbol = false, uppercase = false, lowcase = false, numbers = false }: IPasswordOptions = {}): string => {
        const passwordArray: string[] = [];
        const quantityIsNumber: number = parseInt(quantity)
        if (quantityIsNumber > 128) return "o tanto de letras esta excedendo o limite de 128."
        else{
            for(let i = 0; i < quantityIsNumber; i++){
                uppercase && passwordArray.push(generateUppercase())
                symbol && passwordArray.push(generateSymbols())
                lowcase && passwordArray.push(generateLowcase())
                numbers && passwordArray.push(generateNumbers())
            }
            return passwordArray.join('').slice(0,quantityIsNumber)
        }
    }

export default generatePassword;