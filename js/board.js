var Board = function() {
  this.grid = 
  [[1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [9, 1, 2, 3, 4, 5, 6, 7, 8]];

  this.range = [1,2,3,4,5,6,7,8,9];
}

Array.prototype.equals = function (array) {
  if (!array)
    return false;
  if (this.length != array.length)
    return false;
  for (var i = 0; i < array.length; i++) {
    if (this[i] != array[i]) { 
      return false;   
    }           
  }       
  return true;
}

Board.prototype.lineIsCorrect = function(line) {
  var sorted = line.slice().sort();
  return sorted.equals(this.range);
}

Board.prototype.createColumn = function(col) {
  var vertical = [];
  for (var i = 0; i < 9; i++) {
    vertical.push(this.grid[i][col]);
  }
  return vertical;
}

Board.prototype.createBox = function(box) {
  var box = [];
  var rowStart = (box/3 * 3);
  var colStart = (box % 3 * 3);

  for (var row = rowStart; row < (rowStart+3); row++) {
    for (var col = (colStart); col < (colStart+3); col++) {
      box.push(this.grid[row][col]);
    }
  }
  return box;
}

Board.prototype.indexIsCorrect = function(idx) {
  return this.lineIsCorrect(this.grid[idx]) 
  && this.lineIsCorrect(this.createColumn(idx)) 
  && this.lineIsCorrect(this.createBox(idx));
}

Board.prototype.isCorrect = function() {
  for (var i = 0; i < 9; i++) {
    if (!this.indexIsCorrect(i)) {
      return false;
    }
  }
  return true;
}

Board.prototype.createBoard = function() {  
}