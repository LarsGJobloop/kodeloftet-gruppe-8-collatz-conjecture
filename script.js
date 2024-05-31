// Først finne form elementet
const inputForm = document.getElementById("collatz-input")
inputForm.addEventListener("submit", (event) => {
    event.preventDefault()

    collatz(100)
})


function collatz(number) {
    // Noe logikk
    console.log(number)

    const newNumber = number - 1

    if (newNumber <= 1) {
        return newNumber
    } else {
        // Rekursjon, 
        return collatz(newNumber)
    }
}
