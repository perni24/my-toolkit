import test from "node:test";
import assert from "node:assert/strict";
import * as numbers from "../src/numbers.js";

test("isNumber", () => {
  assert.equal(numbers.isNumber(10), true);
  assert.equal(numbers.isNumber(10.5), true);
  assert.equal(numbers.isNumber(-3), true);
  assert.equal(numbers.isNumber("10"), false);
  assert.equal(numbers.isNumber(null), false);
  assert.equal(numbers.isNumber(NaN), false);
});

test("isInteger", () => {
  assert.equal(numbers.isInteger(10), true);
  assert.equal(numbers.isInteger(-3), true);
  assert.equal(numbers.isInteger(0), true);
  assert.equal(numbers.isInteger(10.5), false);
  assert.equal(numbers.isInteger("10"), false);
  assert.equal(numbers.isInteger(null), false);
  assert.equal(numbers.isInteger(NaN), false);
  assert.equal(numbers.isInteger(Infinity), false);
});

test("isPositive", () => {
  assert.equal(numbers.isPositive(10), true);
  assert.equal(numbers.isPositive(0.5), true);
  assert.equal(numbers.isPositive(0), false);
  assert.equal(numbers.isPositive(-3), false);
  assert.equal(numbers.isPositive("10"), false);
  assert.equal(numbers.isPositive(null), false);
  assert.equal(numbers.isPositive(NaN), false);
  assert.equal(numbers.isPositive(Infinity), false);
});
