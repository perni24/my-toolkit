# core-javascript TODO

## numbers.js

Funzioni numeriche da implementare per esercitarsi su clean code, naming, gestione degli edge case e test mirati.

### `max(values)`

Restituisce il valore massimo di una lista di numeri. Deve gestire gli stessi casi limite di `min` mantenendo un comportamento coerente.

### `product(values)`

Moltiplica tutti i numeri di una lista. Deve stabilire il risultato per array vuoti e come gestire `0`, `NaN`, infinito e valori non numerici.

### `isBetween(value, min, max)`

Verifica se un numero appartiene a un intervallo. Deve chiarire se i limiti sono inclusi e come comportarsi quando `min` e' maggiore di `max`.

### `isCloseTo(value, target, tolerance)`

Verifica se due numeri sono sufficientemente vicini entro una tolleranza. Deve gestire tolleranze negative, zero, valori non numerici e infinito.

### `median(values)`

Calcola il valore centrale di una lista ordinata numericamente. Deve gestire liste pari, liste dispari, array vuoti e non modificare l'array originale.

### `mode(values)`

Restituisce il valore piu' frequente in una lista. Deve definire il comportamento in caso di parita' tra piu' valori e per array vuoti.

### `countOccurrences(values, target)`

Conta quante volte un valore compare in una lista. Deve chiarire come confrontare `NaN`, `0`, `-0` e valori di tipo diverso.

### `uniqueNumbers(values)`

Restituisce una lista contenente una sola occorrenza per ogni numero. Deve preservare l'ordine, gestire `NaN` e decidere cosa fare con valori non numerici.

## Suggested workflow

1. Scrivi prima i casi di test.
2. Implementa una funzione alla volta.
3. Esegui solo il test della funzione su cui stai lavorando.
4. Rivedi naming, edge case e leggibilita' prima di passare alla funzione successiva.
