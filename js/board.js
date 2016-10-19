var Board = function() {
   this.grid = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9] 
  [4, 5, 6, 7, 8, 9, 1, 2, 3] 
  [7, 8, 9, 1, 2, 3, 4, 5, 6] 
  [2, 3, 4, 5, 6, 7, 8, 9, 1] 
  [5, 6, 7, 8, 9, 1, 2, 3, 4] 
  [8, 9, 1, 2, 3, 4, 5, 6, 7] 
  [3, 4, 5, 6, 7, 8, 9, 1, 2] 
  [6, 7, 8, 9, 1, 2, 3, 4, 5] 
  [9, 1, 2, 3, 4, 5, 6, 7, 8]
  ];

  this.range = [1,2,3,4,5,6,7,8,9];
}

Board.prototype.lineIsCorrect = function(line) {
  return line.sort() === this.range;
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

  for (var row = rowStart; row < (rowStart+3); i++) {
    for (var col = (colStart); i2 < (colStart+3); i++) {
      box.push(this.grid[row][col]);
    }
  }
  return box;
}

Board.prototype.isCorrect = function() {
  for (var i = 0; i < 9; i++) {
    if (!(this.lineIsCorrect(this.grid[i])) || 
         this.lineIsCorrect(this.createColumn(i)) || 
         this.lineIsCorrect(this.createBox(i))) {
      return false
    }
  }
  return true
}

Board.prototype.createBoard = function() {  
}