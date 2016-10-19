var Board = function() {
  this.grid = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [new Tile(),0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
	];

  this.range = [1,2,3,4,5,6,7,8,9];
};

Board.prototype.createBoard = function() {	
}

Board.prototype.isCorrectHorizontal = function() {
  for (var i = 0; i < 9; i++) {
    if (this.grid[i].sort() !== this.range) {
      return false;
    }
  } 
  return true; 
}

Board.prototype.isCorrectVertical = function() {  
  for (var i = 0; i < 9; i++) {

  }
}

Board.prototype.isCorrectBox = function() {  
}