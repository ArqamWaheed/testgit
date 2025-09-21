import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index.js";

test('Capitalizes the first letter', () => {
  expect(capitalize("hello")).toBe("Hello");
});

test('Reverses a string', () => {
  expect(reverseString("hello")).toBe("olleh");
});

test('Addition of two numbers', () => {
  expect(calculator.add(10, 2)).toBe(12);
});

test('Subtraction of two numbers', () => {
  expect(calculator.subtract(10, 2)).toBe(8);
});

test('Division of two numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('Multiplication of two numbers', () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});

test('Cipher textWrapping', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Cipher upperCase', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Cipher Punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Analyze array function', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
   average: 4,
   min: 1,
   max: 8,
   length: 6
  });
})