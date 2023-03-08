import generatePassword from "./generate"
import { IPasswordOptions } from "./generate";
const showPassword = document.getElementById("showPassword") as HTMLElement;
const NumbersQuantity = document.getElementById("inputNumbersQuantity") as HTMLInputElement;
const Lowcase = document.getElementById("checkboxLetters") as HTMLInputElement;
const Uppercase = document.getElementById("checkboxUppercase") as HTMLInputElement;
const Numbers = document.getElementById("checkboxNumbers") as HTMLInputElement;
const Symbols = document.getElementById("checkboxSymbols") as HTMLInputElement;
const buttonGeneratePassword = document.getElementById("generatePassword")



    buttonGeneratePassword?.addEventListener('click', () => {
        console.log("button")
        const password = generate();
        if (password) {
            showPassword.innerHTML = password;
        }else {
            showPassword.innerHTML = "nada selecionado";
            
        }
    })
    
const generate = () => {
    const passwordOptions: IPasswordOptions = {
        quantity: NumbersQuantity?.value ?? "8",
        lowcase: Lowcase.checked,
        uppercase: Uppercase.checked,
        numbers: Numbers.checked,
        symbol: Symbols.checked,
    };

    const password = generatePassword(passwordOptions);
    return password;
}
