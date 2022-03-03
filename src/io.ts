import fs from "fs";

import { Problem } from "./solver";

// Parses the input file and returns an array of problems.
const TARGET = 1;
export const parseInput = (filename: string): Problem[] => {
  const input = fs.readFileSync(filename, "utf8"); // read the file
  const lines = input.split("\n"); // split on newline
  const testCases = stringToNumber(lines[0]); // number of test cases
  const cases: Problem[] = []; // array of test cases

  // Read the input for each case.
  let lineIndex = 1; // index of the current line
  for (let i = 0; i < testCases; i++) {
    // Read the first line.
    const [rows, cols] = lines[lineIndex++].split(" ").map(stringToNumber); // number of rows and columns
    const matrix = [];
    // Read the matrix.
    for (let j = 0; j < rows; j++) {
      const row = lines[lineIndex++].split("").map(stringToNumber); // read the row
      matrix.push(row); // add the row to the matrix
    }
    // add the test case to the array
    cases.push({
      rows,
      cols,
      matrix,
      target: TARGET,
    });
  }

  return cases;
};

// Convert a string to a decimal number.
const stringToNumber = (num: string) => parseInt(num, 10);

// Print the solution to the console.
export const printSolution = (solution: number[][]) => {
  for (const row of solution) {
    console.log(row.join(" "));
  }
};
