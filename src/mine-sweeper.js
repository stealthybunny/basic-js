const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// let matrix = [
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]
// ];
// console.log(minesweeper(matrix))

function minesweeper(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[i].push(0);
    }
  }

for (let i = 0; i < newMatrix.length; i++) {
  for (let j = 0; j < newMatrix[i].length; j++) {
    if (matrix[i][j] === true) {
      if (typeof newMatrix[i][j - 1] === 'number') newMatrix[i][j - 1] += 1;
      if (typeof newMatrix[i][j + 1] === 'number') newMatrix[i][j + 1] += 1;
   if (i > 0) {
     if (typeof newMatrix[i - 1][j - 1] === 'number') newMatrix[i - 1][j - 1] += 1;
      if (typeof newMatrix[i - 1][j] === 'number') newMatrix[i - 1][j] += 1;
      if (typeof newMatrix[i - 1][j + 1] === 'number') newMatrix[i - 1][j + 1] += 1;
   }
 
      
      if (typeof newMatrix[i + 1][j - 1] === 'number') newMatrix[i + 1][j - 1] += 1;
      if (typeof newMatrix[i + 1][j] === 'number') newMatrix[i + 1][j] += 1;
      if (typeof newMatrix[i + 1][j + 1] === 'number') newMatrix[i + 1][j + 1] += 1;
      }
    }
  }
return newMatrix;
}

module.exports = {
  minesweeper
};
