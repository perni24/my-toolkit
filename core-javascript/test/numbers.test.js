import test from "node:test";
import assert from "node:assert/strict";
import * as numbers from "../src/numbers.js";

test("isNumber", () => {
  assert.equal(numbers.isNumber(10), true);
  assert.equal(numbers.isNumber(10.5), true);
  assert.equal(numbers.isNumber(-3), true);
  assert.equal(numbers.isNumber("10"), false);
  assert.equal(numbers.isNumber(null), false);
  assert.equal(numbers.isNumber(undefined), false);
  assert.equal(numbers.isNumber(true), false);
  assert.equal(numbers.isNumber(NaN), false);
  assert.equal(numbers.isNumber(Infinity), false);
  assert.equal(numbers.isNumber(-Infinity), false);
});

test("isInteger", () => {
  assert.equal(numbers.isInteger(10), true);
  assert.equal(numbers.isInteger(-3), true);
  assert.equal(numbers.isInteger(0), true);
  assert.equal(numbers.isInteger(10.5), false);
  assert.equal(numbers.isInteger("10"), false);
  assert.equal(numbers.isInteger(null), false);
  assert.equal(numbers.isInteger(true), false);
  assert.equal(numbers.isInteger(NaN), false);
  assert.equal(numbers.isInteger(Infinity), false);
  assert.equal(numbers.isInteger(-Infinity), false);
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
  assert.equal(numbers.isPositive(-Infinity), false);
});

test("isNegative", () => {
  assert.equal(numbers.isNegative(-10), true);
  assert.equal(numbers.isNegative(-0.5), true);
  assert.equal(numbers.isNegative(0), false);
  assert.equal(numbers.isNegative(3), false);
  assert.equal(numbers.isNegative("-10"), false);
  assert.equal(numbers.isNegative(null), false);
  assert.equal(numbers.isNegative(NaN), false);
  assert.equal(numbers.isNegative(Infinity), false);
  assert.equal(numbers.isNegative(-Infinity), false);
});

test("isEven", () => {
  assert.equal(numbers.isEven(10), true);
  assert.equal(numbers.isEven(0), true);
  assert.equal(numbers.isEven(-4), true);
  assert.equal(numbers.isEven(7), false);
  assert.equal(numbers.isEven(-3), false);
  assert.equal(numbers.isEven(2.5), false);
  assert.equal(numbers.isEven("10"), false);
  assert.equal(numbers.isEven(null), false);
  assert.equal(numbers.isEven(NaN), false);
  assert.equal(numbers.isEven(Infinity), false);
});

test("isOdd", () => {
  assert.equal(numbers.isOdd(7), true);
  assert.equal(numbers.isOdd(-3), true);
  assert.equal(numbers.isOdd(0), false);
  assert.equal(numbers.isOdd(10), false);
  assert.equal(numbers.isOdd(-4), false);
  assert.equal(numbers.isOdd(2.5), false);
  assert.equal(numbers.isOdd("7"), false);
  assert.equal(numbers.isOdd(null), false);
  assert.equal(numbers.isOdd(NaN), false);
  assert.equal(numbers.isOdd(Infinity), false);
});

test("toNumber", () => {
  assert.equal(numbers.toNumber(10, 0), 10);
  assert.equal(numbers.toNumber(-3.5, 0), -3.5);
  assert.equal(numbers.toNumber(0, 99), 0);
  assert.equal(numbers.toNumber(1, 99), 1);
  assert.equal(numbers.toNumber("42", 0), 42);
  assert.equal(numbers.toNumber(" 4.5 ", 0), 4.5);
  assert.equal(numbers.toNumber("0", 99), 0);
  assert.equal(numbers.toNumber("0.0", 99), 0);
  assert.equal(numbers.toNumber("1", 99), 1);
  assert.equal(numbers.toNumber("1.0", 99), 1);
  assert.equal(numbers.toNumber("0x10", 99), 16);
  assert.equal(numbers.toNumber("", 99), 99);
  assert.equal(numbers.toNumber("   ", 99), 99);
  assert.equal(numbers.toNumber("12abc", 99), 99);
  assert.equal(numbers.toNumber(null, 99), 99);
  assert.equal(numbers.toNumber(undefined, 99), 99);
  assert.equal(numbers.toNumber(true, 99), 99);
  assert.equal(numbers.toNumber(false, 99), 99);
  assert.equal(numbers.toNumber([], 99), 99);
  assert.equal(numbers.toNumber(["42"], 99), 99);
  assert.equal(numbers.toNumber({}, 99), 99);
  assert.equal(numbers.toNumber(NaN, 99), 99);
  assert.equal(numbers.toNumber(Infinity, 99), 99);
  assert.equal(numbers.toNumber(-Infinity, 99), 99);
  assert.equal(numbers.toNumber("Infinity", 99), 99);
  assert.equal(numbers.toNumber("-Infinity", 99), 99);
});
