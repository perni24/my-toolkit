# core-javascript TODO

## numbers.js

Funzioni numeriche da implementare per esercitarsi su clean code, naming, gestione degli edge case e test mirati.

## Prossimi esercizi

### `safeDivide(dividend, divisor, fallback)`

Esegue una divisione senza propagare risultati non validi. Deve restituire `fallback` quando gli argomenti non sono numeri validi o il divisore e' zero.

Utile per percentuali, medie, report e valori provenienti da input esterni.

### `percentageChange(previousValue, currentValue)`

Calcola la variazione percentuale tra un valore precedente e uno corrente. Deve definire chiaramente il comportamento quando il valore precedente e' zero.

Utile per prezzi, metriche, statistiche e dashboard.

### `mapRange(value, inputMin, inputMax, outputMin, outputMax)`

Converte un valore da un intervallo a un altro mantenendone la posizione relativa. Deve gestire intervalli invertiti, valori fuori intervallo e intervalli con estremi uguali.

Utile per progress bar, grafici, sensori, animazioni e conversioni di scala.

### `normalize(value, min, max)`

Converte un valore appartenente a un intervallo in un valore compreso tra `0` e `1`. Deve decidere se limitare oppure accettare valori esterni all'intervallo.

Utile per confrontare dati con scale differenti e preparare valori per grafici o algoritmi.

### `lerp(start, end, amount)`

Restituisce un valore intermedio tra `start` ed `end`. Deve definire se `amount` e' ammesso soltanto tra `0` e `1` oppure anche fuori da questo intervallo.

Utile per animazioni, transizioni e variazioni graduali.

### `randomInteger(min, max)`

Genera un numero intero casuale compreso tra due estremi. Deve chiarire se gli estremi sono inclusi e cosa accade quando non sono interi o sono invertiti.

Utile per identificatori temporanei, simulazioni, giochi e selezioni casuali.

### `range(start, end, step)`

Genera un array di numeri seguendo un intervallo e un incremento. Deve gestire intervalli crescenti, decrescenti, `step` uguale a zero e direzione incompatibile.

Utile per paginazione, cicli numerici, dati di test e generazione di sequenze.

### `weightedAverage(values, weights)`

Calcola la media assegnando un peso diverso a ogni valore. Deve verificare che i due array abbiano la stessa lunghezza e definire il comportamento quando la somma dei pesi e' zero.

Utile per voti, punteggi, prezzi medi e metriche aggregate.

### `standardDeviation(values)`

Misura quanto i valori sono dispersi rispetto alla media. Prima dell'implementazione deve essere deciso se calcolare la deviazione della popolazione o quella del campione.

Utile per analisi statistiche, monitoraggio delle metriche e rilevamento di valori anomali.

## Suggested workflow

1. Scrivi prima i casi di test.
2. Implementa una funzione alla volta.
3. Esegui solo il test della funzione su cui stai lavorando.
4. Rivedi naming, edge case e leggibilita' prima di passare alla funzione successiva.
