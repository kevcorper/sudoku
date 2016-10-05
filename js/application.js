$(document).ready(function() {

  var boardView = new BoardView();
  var board = new Board();
  board.createBoard();
  boardView.renderBoard(board.createStarter());

  // $(td).on('click', function(event) {
  //   var $target = event.target;

  //   var row  = $target.parent().attr('class')[-1];
  //   var col  = $taget.attr('class')[-1];
  //   var tile = board.grid[row][col];

  //   $(td).on('keyup', function(event) {
  //     var input = String.fromCharCode(event.keyCode)

  //     if(tile.isCorrect(input)) {
  //       boardView.revealNumber(input, row, col);
  //     } else {
  //       boardView.revealX(row, col);
  //     }

  //     if (boardView.isFull()) {
  //       boardView.finish();
  //     }
  //   });
  // });

});