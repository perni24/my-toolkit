# core-javascript

Utility JavaScript riutilizzabili del monorepo.

## Requisiti

Serve Node.js installato. Per controllare la versione:

```powershell
node -v
npm -v
```

## Eseguire tutti i test

Dalla root del monorepo:

```powershell
cd core-javascript
npm test
```

Comando equivalente senza npm:

```powershell
node --test
```

## Eseguire un solo file di test

Per eseguire solo i test del file `numbers.test.js`:

```powershell
npm test -- .\test\numbers.test.js
```

Comando equivalente senza npm:

```powershell
node --test .\test\numbers.test.js
```

## Eseguire un singolo test per nome

Per eseguire solo il test chiamato `isNumber`:

```powershell
npm test -- --test-name-pattern "isNumber" .\test\numbers.test.js
```

Comando equivalente senza npm:

```powershell
node --test --test-name-pattern "isNumber" .\test\numbers.test.js
```

## Convenzione consigliata

Usa nomi di test semplici ma riconoscibili:

```js
test("isNumber", () => {
  // casi true e false
});
```

In questo modo puoi filtrare facilmente un test specifico con `--test-name-pattern`.
