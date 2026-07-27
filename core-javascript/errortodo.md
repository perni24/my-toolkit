# core-javascript Error TODO

Elenco dei problemi individuati nelle funzioni numeriche. Correggere un punto alla volta e rieseguire il test della funzione interessata.

## Errori funzionali

- [x] `median(values)` lascia invariato l'array originale durante l'ordinamento.
- [x] `product(values)` valida tutti gli elementi prima di calcolare il risultato.
- [x] `product([0, Symbol("x")])` restituisce `NaN`, non `0`.
- [x] `isBetween(value, min, max)` valida gli argomenti prima di confrontare `min` e `max`.
- [x] `isBetween(5, Symbol("1"), 10)` restituisce `false` senza generare `TypeError`.
- [x] `isBetween(5, 1, Symbol("10"))` restituisce `false` senza generare `TypeError`.
- [ ] Definire e implementare il comportamento di `roundTo(1.005, 2)`.

## Test da ripristinare o aggiungere

- [ ] Verificare che `median(values)` lasci invariato l'array ricevuto.
- [ ] Aggiungere il caso `product([0, Symbol("x")])`.
- [ ] Aggiungere limiti di tipo `Symbol` ai test di `isBetween`.
- [ ] Riattivare il test `roundTo(1.005, 2)` dopo aver definito il risultato atteso.
- [x] Riattivare i test degli array sparsi in `sum`, `average`, `min` e `max`.

## Clean code

- [x] Rimuovere la variabile `error` inutilizzata da `sum(values)`.
- [x] Rimuovere da `isNumber(value)` i controlli gia' coperti dalla verifica del tipo numerico.
- [x] Evitare conversioni ridondanti in `toNumber(value, fallback)`.
- [x] Usare `const` per le variabili che non vengono riassegnate.
- [ ] Semplificare la validazione degli array.
- [ ] Ridurre la duplicazione della validazione tra `sum`, `min`, `max`, `product` e `median`.
- [x] Evitare confronti deboli come `== null`.
- [x] Uniformare indentazione, spaziatura e punti e virgola.

## Verifica finale

- [x] Eseguire `npm test` (18 test superati).
- [ ] Verificare che tutti i test siano attivi e che non ci siano asserzioni commentate.
- [ ] Aggiornare `todo.md` quando una funzione e' completata.
