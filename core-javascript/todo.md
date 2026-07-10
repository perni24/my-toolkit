# core-javascript TODO

## numbers.js

Funzioni numeriche da implementare per esercitarsi su clean code, naming, gestione degli edge case e test mirati.

### `isEven(value)`

Verifica se un valore e' un numero intero pari. Deve escludere decimali e valori non numerici.

### `isOdd(value)`

Verifica se un valore e' un numero intero dispari. Deve gestire correttamente anche numeri negativi e input non numerici.

### `toNumber(value, fallback)`

Converte un valore in numero quando possibile. Se la conversione non produce un numero valido, deve restituire un valore di fallback.

### `clamp(value, min, max)`

Limita un numero dentro un intervallo minimo e massimo. Deve restituire il minimo se il valore e' troppo basso, il massimo se e' troppo alto, altrimenti il valore originale.

### `roundTo(value, decimals)`

Arrotonda un numero a un numero specifico di cifre decimali. Deve considerare decimali pari a zero, valori negativi e input non validi.

### `percentage(value, total)`

Calcola che percentuale rappresenta un valore rispetto a un totale. Deve gestire il caso in cui il totale sia zero.

### `sum(values)`

Somma una lista di numeri. Deve chiarire come comportarsi con array vuoti e valori non numerici dentro l'array.

### `average(values)`

Calcola la media di una lista di numeri. Deve gestire array vuoti e dovrebbe riutilizzare la logica di somma in modo leggibile.

## Suggested workflow

1. Scrivi prima i casi di test.
2. Implementa una funzione alla volta.
3. Esegui solo il test della funzione su cui stai lavorando.
4. Rivedi naming, edge case e leggibilita' prima di passare alla funzione successiva.
