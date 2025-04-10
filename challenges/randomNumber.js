// 1. Generate a random floating-point number between 0 (inclusive) and 1 (exclusive)
let randomNumber0to1 = Math.random();
console.log("Random number (0 to <1):", randomNumber0to1);

// 2. Generate a random integer within a specific range (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomInt1to10 = getRandomInt(1, 10);
console.log("Random integer (1 to 10):", randomInt1to10);

let randomIntNegative5to5 = getRandomInt(-5, 5);
console.log("Random integer (-5 to 5):", randomIntNegative5to5);

// 3. Generate a random floating-point number within a specific range (inclusive min, exclusive max)
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

let randomFloat0to5 = getRandomFloat(0, 5);
console.log("Random float (0 to <5):", randomFloat0to5);

let randomFloat10to20 = getRandomFloat(10, 20);
console.log("Random float (10 to <20):", randomFloat10to20);

// 4. Generate a random number with a specific number of decimal places
function getRandomFloatFixed(min, max, decimals) {
  const random = Math.random() * (max - min) + min;
  return parseFloat(random.toFixed(decimals));
}

let randomFloat2Decimals = getRandomFloatFixed(0, 1, 2);
console.log("Random float (0 to <1, 2 decimals):", randomFloat2Decimals);

// Examples for specific scenarios:

// Simulate a coin flip (0 or 1)
let coinFlip = Math.round(Math.random()); // 0 or 1
console.log("Coin flip (0 or 1):", coinFlip);

// Simulate rolling a six-sided die (1 to 6)
let dieRoll = getRandomInt(1, 6);
console.log("Die roll (1 to 6):", dieRoll);

// Generate a random number between 0 and 100 (inclusive)
let randomNumber0to100 = getRandomInt(0, 100);
console.log("Random number (0 to 100):", randomNumber0to100);
