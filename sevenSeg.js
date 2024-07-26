// sevenSeg.js
function printSevenSegmentDigit(digit) {
  const segments = {
    0: [" _ ", "| |", "|_|"],
    1: ["   ", "  |", "  |"],
    2: [" _ ", " _|", "|_ "],
    3: [" _ ", " _|", " _|"],
    4: ["   ", "|_|", "  |"],
    5: [" _ ", "|_ ", " _|"],
    6: [" _ ", "|_ ", "|_|"],
    7: [" _ ", "  |", "  |"],
    8: [" _ ", "|_|", "|_|"],
    9: [" _ ", "|_|", " _|"],
  };

  if (digit >= 0 && digit <= 99) {
    const unitPlace = digit % 10;
    const tensPlace = Math.floor(digit / 10);

    let output = [
      `${segments[tensPlace][0]} ${segments[unitPlace][0]}`,
      `${segments[tensPlace][1]} ${segments[unitPlace][1]}`,
      `${segments[tensPlace][2]} ${segments[unitPlace][2]}`,
    ];

    console.log(output.join("\n"));
  } 

module.exports = { printSevenSegmentDigit }; //exporting printSevenSegmentDigit fun
