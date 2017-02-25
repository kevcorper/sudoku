$(document).ready(function() {

  var boardView = new BoardView();
  var board = new Board();
  board.createBoard();
  boardView.renderBoard(board.grid);

  $(window).click(function(e) {
    var $target     = $(event.target);
    var isTile      = $target.hasClass('tile');
    var tileIsEmpty = $target.text() === '';
    if ($target.hasClass('selected')) {
      $target.removeClass('selected');
    } else if (isTile && tileIsEmpty) {
        $('.selected').removeClass('selected');
        $target.addClass('selected');

        var row  = $target.parent().attr('class').slice(-1);
        var col  = $target.attr('class').slice(-1);
        var tile = board.grid[row][col];
    } else if ($('.selected') && $target.hasClass('num')) {
        var input = $target.text();
        $('.selected').text(input);
        $('.selected').addClass('full');
        $('.selected').removeClass('selected');
        if(tile.isCorrect(input)) {
          boardView.revealNumber(input, row, col);
        } else {
          boardView.revealX(row, col);
        }

        if (boardView.isFull()) {
          boardView.finish();
        }      
    } else {
        $('.selected').removeClass('selected');
    }
  });
});

