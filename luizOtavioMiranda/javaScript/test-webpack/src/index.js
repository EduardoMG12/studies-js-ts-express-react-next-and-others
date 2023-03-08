const container = document.getElementById("containerNumbers")
const button = document.getElementById("buttonRandomNumbers")

const randomNumbers = () => {
    const randomNumbersArray = []

    for (i = 0; i >= 10; i++) {
        const randomNumber = Math.random() * (100 - 0) + 0;
        randomNumbersArray.push(randomNumber)
    }
    return randomNumbersArray
}

button.addEventListener((event) => {
    event.preventeDefault()
    randomNumbers().map((response) => container.innerHTML = `<p>${response}</p>`)

})
