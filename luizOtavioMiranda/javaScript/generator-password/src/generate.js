/*48 a 57 numeros*/
// 65 a 90 letras maiusculas
// 97 a 122 letras minusculas

const generateASCII = (number) => String.fromCharCode(number);

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const symbols = '.,:;/|\!@#$%^&*(){}[]_+-=><~`"';

const generateUppercase = () => generateASCII(rand(65, 90));
const generateSymbols = () => symbols[rand(0, 22)];
const generateLowcase = () =>  generateASCII(rand(97, 122));
const generateNumbers = () => generateASCII(rand(48, 57));

const generatePassword = ({ quantity, symbol, uppercase, lowcase, numbers }) => {
    const passwordArray= [];
    const quantityIsNumber= parseInt(quantity)

    for(let i = 0; i < quantityIsNumber; i++){
        uppercase && passwordArray.push(generateUppercase())
        symbol && passwordArray.push(generateSymbols())
        lowcase && passwordArray.push(generateLowcase())
        numbers && passwordArray.push(generateNumbers())
    }
    return passwordArray.join('').slice(0,quantityIsNumber)
    }
export default generatePassword;

// /*48 a 57 numeros*/
// // 65 a 90 letras maiusculas
// // 97 a 122 letras minusculas

// const generateASCII = (number) => String.fromCharCode(number);

// const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
// const symbols = '.,:;/|\!@#$%^&*(){}[]_+-=><~`"';

// const generateUppercase = (): string => generateASCII(rand(65, 90));
// const generateSymbols = (): string => symbols[rand(0, 22)];
// const generateLowcase = (): string =>  generateASCII(rand(97, 122));
// const generateNumbers = (): string => generateASCII(rand(48, 57));

// interface PasswordOptions {
//     quantity?: string;
//     symbol?: boolean;
//     uppercase?: boolean;
//     lowcase?: boolean;
//     numbers?: boolean;
//   }

// const generatePassword = ({ quantity = "10", symbol = false, uppercase = false, lowcase = false, numbers = false }: PasswordOptions = {}): string => {
//     const passwordArray: string[] = [];
//     const quantityIsNumber: number = parseInt(quantity)

//     for(let i = 0; i < quantityIsNumber; i++){
//         uppercase && passwordArray.push(generateUppercase())
//         symbol && passwordArray.push(generateSymbols())
//         lowcase && passwordArray.push(generateLowcase())
//         numbers && passwordArray.push(generateNumbers())
//     }
//     return passwordArray.join('').slice(0,quantityIsNumber)
//     }
// export default generatePassword;