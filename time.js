// time.js
const { printSevenSegmentDigit } = require("./sevenSeg.js");
const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

const formattedHours = String(hours).padStart(2, "0");
const formattedMinutes = String(minutes).padStart(2, "0");
const formattedSeconds = String(seconds).padStart(2, "0");

// Print each digit with proper formatting
console.log("Hours:");
printSevenSegmentDigit(parseInt(formattedHours)); // Print hours

console.log("\nMinutes:");
printSevenSegmentDigit(parseInt(formattedMinutes)); // Print minutes

console.log("\nSeconds:");
printSevenSegmentDigit(parseInt(formattedSeconds)); // Print seconds
