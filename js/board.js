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
};

Board.prototype.createBoard = function() {
	//create tile objects
}