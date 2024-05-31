// Først finne form elementet
/**
 * @type {HTMLFormElement}
 */
const inputForm = document.getElementById("collatz-input")
inputForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const inputElement = document.getElementById("input-number")
    const input = inputElement.value

    // Sjekk om verdien som er skrevet inn er gyldig
    if (!(input > 0)) {
        return
    }

    const result = collatz(input) // Prossere input
    const newElement = createElement(result) // Lag et nytt resultat element
    const resultContainer = document.getElementById("result-container") // hent ut hvor det skal settes inn
    resultContainer.appendChild(newElement) // sett inn i dokumentet

    // Reset input feltet
    inputForm.reset()
})

/**
 * Denne funksjon går igjennom collatz conjecture
 * med tallet den får
 * 
 * @param {number} number 
 * @returns 
 */
function collatz(number) {
    // Noe logikk
    console.log(number)

    const newNumber = number - 1

    if (newNumber <= 0) {
        return newNumber
    } else {
        // Rekursjon, 
        return collatz(newNumber)
    }
}

function isEven(number) {
    return number % 2 === 0
}

function createElement(number) {
    const element = document.createElement("li")
    element.textContent = number
    return element
}
