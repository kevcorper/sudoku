function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

var Board = function() {
  this.grid = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]
  ];
}

Board.prototype.noDuplicates = function(line, num) {
  for (var i = 0; i < line.length; i++) {
    if (line[i] == num) {
        return false;
    }
  }
  return true;
}

Board.prototype.createColumn = function(col) {
  var vertical = [];
  for (var i = 0; i < 9; i++) {
    vertical.push(this.grid[i][col]);
  }
  return vertical;
}

Board.prototype.createBox = function(col,row) {
  var box = [];
  var rowStart = Math.floor(row / 3) * 3;
  var colStart = Math.floor(col / 3) * 3;

  for (var row = rowStart; row < (rowStart+3); row++) {
    for (var col = (colStart); col < (colStart+3); col++) {
      box.push(this.grid[row][col]);
    }
  }
  return box;
}

Board.prototype.numIsPlausible = function(row, col, num) {
  return this.noDuplicates(this.grid[row], num) 
  && this.noDuplicates(this.createColumn(col), num) 
  && this.noDuplicates(this.createBox(col,row), num);
}

Board.prototype.firstEmptySlot = function() {
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      if (this.grid[row][col] == 0) {
        return [row,col];
      }
    }
  }
  return [-1,-1];
}

Board.prototype.createBoard = function() { 
  var cell = this.firstEmptySlot();
  var row = cell[0];
  var col = cell[1];

  if (row == -1) {
    return true;
  }

  var range = [1,2,3,4,5,6,7,8,9];
  shuffle(range);

  for (var i = 0; i < 9; i++) {
    var num = range[i];

    if (this.numIsPlausible(row, col, num)) {   
      this.grid[row][col] = num;
      if (this.createBoard()) {                
        return true;
      }
      this.grid[row][col] = 0;
    }
  }
  return false;
}

Board.prototype.pretty = function() {
  for (var i = 0; i < 9; i++) {
    console.log(this.grid[i]);
  }
}
