$(document).ready(function() {

  var boardView = new BoardView();
  var board = new Board();
  board.createBoard();
  boardView.renderBoard(board.grid);

  $('td').on('click', function(event) {
    var $target = $(event.target);
    $('.selected').removeClass('selected');
    $target.addClass('selected');

    var row  = $target.parent().attr('class').slice(-1);
    var col  = $target.attr('class').slice(-1);
    var tile = board.grid[row][col];

    $('body').on('click', function(event) {
      $('.selected').removeClass('selected');
    });

    $('#nums a').on('click', function(event) {
      var $target = $(event.target);
      var input   = $target.text();

      if(tile.isCorrect(input)) {
        boardView.revealNumber(input, row, col);
      } else {
        boardView.revealX(row, col);
      }

      if (boardView.isFull()) {
        boardView.finish();
      }
    });

  });

});