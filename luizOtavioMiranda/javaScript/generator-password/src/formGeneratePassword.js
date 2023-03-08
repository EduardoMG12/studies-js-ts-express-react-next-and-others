import generatePassword from "./generate";

const showPassword = document.getElementById("showPassword");
const NumbersQuantity = document.getElementById("inputNumbersQuantity");
const Letters = document.getElementById("checkboxLetters");
const Uppercase = document.getElementById("checkboxUppercase");
const Numbers = document.getElementById("checkboxNumbers");
const Symbols = document.getElementById("checkboxSymbols");
const buttonGeneratePassword = document.getElementById("generatePassword");


export default () => {
    buttonGeneratePassword?.addEventListener('click', () => {
        const password = generate();
        if (password) {
            showPassword.innerHTML = password;
        }else {
            showPassword.innerHTML = "nada selecionado";
            
        }
    })
    }

const generate = () => {
    const passwordOptions = {
        quantity: NumbersQuantity?.value ?? "0",
        letters: Letters.checked,
        uppercase: Uppercase.checked,
        numbers: Numbers.checked,
        symbols: Symbols.checked,
    };
    const password = generatePassword(passwordOptions);
    return password;
}


// import generatePassword from "./generate"

// const showPassword = document.getElementById("showPassword") as HTMLElement;
// const NumbersQuantity = document.getElementById("inputNumbersQuantity") as HTMLInputElement;
// const Letters = document.getElementById("checkboxLetters") as HTMLInputElement;
// const Uppercase = document.getElementById("checkboxUppercase") as HTMLInputElement;
// const Numbers = document.getElementById("checkboxNumbers") as HTMLInputElement;
// const Symbols = document.getElementById("checkboxSymbols") as HTMLInputElement;
// const buttonGeneratePassword = document.getElementById("generatePassword")


// export default () => {
//     buttonGeneratePassword?.addEventListener('click', () => {
//         const password = generate();
//         if (password) {
//             showPassword.innerHTML = password;
//         }else {
//             showPassword.innerHTML = "nada selecionado";
            
//         }
//     })
//     }

// interface PasswordOptions {
//     quantity: string
//     letters: boolean;
//     uppercase: boolean;
//     numbers: boolean;
//     symbols: boolean;
// }

// const generate = () => {
//     const passwordOptions: PasswordOptions = {
//         quantity: NumbersQuantity?.value ?? "0",
//         letters: Letters.checked,
//         uppercase: Uppercase.checked,
//         numbers: Numbers.checked,
//         symbols: Symbols.checked,
//     };
//     const password = generatePassword(passwordOptions);
//     return password;
// }
