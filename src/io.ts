import fs from "fs";

import { Problem } from "./solver";

// Parses the input file and returns an array of problems.
const TARGET = 1;
export const parseInput = (filename: string) => {
  const lines = fs.readFileSync(filename, { encoding: "utf-8" }).split("\n");
  const totalCases = stringToNumber(lines[0]);
  const cases: Problem[] = [];

  let lineIndex = 1;
  for (let i = 0; i < totalCases; i++) {
    const [rows, cols] = lines[lineIndex++].split(" ").map(stringToNumber);
    const matrix = [];
    for (let j = 0; j < rows; j++) {
      const row = lines[lineIndex++].split("").map(stringToNumber);
      matrix.push(row);
    }
    cases.push({ rows, cols, matrix, target: TARGET });
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
