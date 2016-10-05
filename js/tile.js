var Tile = function() {
  this.row    = null;
  this.col    = null;
  this.number = null;
};

Tile.prototype.isCorrect = function(input) {
  return input == this.number;
}