# kodeloftet-gruppe-8-collatz-conjecture

## Algoritmen

Start med et valgfritt tall

Viss tallet er et partall
- Del tallet på 2 ( n / 2)

Viss taller er et oddetall
- Gang med 3 og legg til 1 ( (n * 3) + 1)

repeter til tallet er 1

## Oppgave

### Steg 1

- Ta inn en tall verdi via et input element
- Bruk til å kjøre den gjennom Collatz' Formodning
- Print alle tallen til konsollen

### Steg 2

- Oppsummer resultatet og vis det i et HTML element

### Optional 3

- Gjør kalkulasjonen i en egen tråd

    [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

## Snippets

### Functions og Arrow Functions
```javascript
function handleSubmit(event) {
    // Stopper form submit fra å refresh nettsiden
    event.preventDefault()

    console.log("hello world")
}
// Arrow function, anonymous function, lambda function
(event) => {
    // Stopper form submit fra å refresh nettsiden
    event.preventDefault()

    console.log("Hello world")
}
```

### Collatz
```
// Med rekursjon
function collatzA(number) {
    // Avslutt viss tallet er 1
    if (number === 1) {
        console.log(number + " is final")
        return
    }

    // finne ut om tallet er et partall eller oddetall
    const isEven = (number % 2) === 0

    if (isEven) {
        // Partalls logikk
        console.log(number + " is even")

        number = number / 2
    } else {
        // Oddetalls logikk
        console.log(number + " is odd")

        number = (number * 3) + 1
    }

    // Gå igjennom algoritmen på nytt (via rekursjon)
    collatzA(number)
}

// Via en while løkke
function collatzB(number) {
    const numberRow = []
    numberRow.push(number)

    while (number > 1) {

        const isEven = (number % 2) === 0
        if (isEven) {
            number = number / 2
        } else {
            number = (number * 3) + 1
        }

        numberRow.push(number)
    }

    return numberRow
}
```


## Lenker

- [Collatz' Formodning](https://no.wikipedia.org/wiki/Collatz%E2%80%99_formodning)
- [Collatz Conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture)
