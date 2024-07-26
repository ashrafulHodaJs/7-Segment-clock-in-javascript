const { printSevenSegmentDigit } = require("./sevenSeg.js");
const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

const formattedHours = String(hours).padStart(2, "0");
const formattedMinutes = String(minutes).padStart(2, "0");
const formattedSeconds = String(seconds).padStart(2, "0");


console.log("Hours:");
printSevenSegmentDigit(parseInt(formattedHours)); // Print hours in 7segDisplay

console.log("\nMinutes:");
printSevenSegmentDigit(parseInt(formattedMinutes)); // Print minutes in 7segDisplay

console.log("\nSeconds:");
printSevenSegmentDigit(parseInt(formattedSeconds)); // Print seconds in 7segDisplay
