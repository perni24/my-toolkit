# core-javascript

Utility JavaScript riutilizzabili del monorepo.

## Requisiti

Serve Node.js installato. Per controllare la versione:

```bash
node -v
npm -v
```

## Eseguire tutti i test

Dalla root del monorepo:

```bash
cd "C:\Users\SE-Luca Bellini\Documents\Luca\my-toolkit\core-javascript"
npm test
```

Comando equivalente senza npm:

```bash
node --test
```

## Eseguire un solo file di test

Per eseguire solo i test del file `numbers.test.js`:

```bash
npm test -- .\test\numbers.test.js
```

Comando equivalente senza npm:

```bash
node --test .\test\numbers.test.js
```

## Eseguire un singolo test per nome

Per eseguire solo il test chiamato `isNumber`:

```bash
npm test -- .\test\numbers.test.js --test-name-pattern "isNumber"
```

Comando equivalente senza npm:

```bash
node --test .\test\numbers.test.js --test-name-pattern "isNumber"
```

## Convenzione consigliata

Usa nomi di test semplici ma riconoscibili:

```js
test("isNumber", () => {
  // casi true e false
});
```

In questo modo puoi filtrare facilmente un test specifico con `--test-name-pattern`.
