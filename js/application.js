$(document).ready(function() {

  var boardView = new BoardView();
  var board     = new Board();
  var tile      = null;
  var points    = 0;
  var incorrect = 0;

  $(window).click(function(e) {

    var $target     = $(event.target);
    var isTile      = $target.hasClass('tile');
    var tileIsEmpty = $target.text() === '';

    if ($target.hasClass('play-button')) {
        $target.removeClass('play-button');
        $target.addClass('pause-button');
        $target.html('&#10073;&#10073;');

        if (board.grid[0][0] == 0) {
          board.createBoard();
          boardView.renderBoard(board.grid);
        } else {
          return;
        }
    } else if ($target.hasClass('pause-button')) {
        $target.removeClass('pause-button');
        $target.addClass('play-button');
        $target.html('&#9658;');
    } else if ($target.hasClass('selected')) {
        $target.removeClass('selected');
    } else if (isTile && tileIsEmpty) {
        $('.selected').removeClass('selected');
        $target.addClass('selected');

        var row  = $target.parent().attr('class').slice(-1);
        var col  = $target.attr('class')[9];
        tile = board.grid[row][col];
    } else if ($('.selected') && $target.hasClass('num')) {
        var input = $target.text();

        if(tile == input) {
          $('.selected').removeClass('incorrect');
          $('.selected').text(input);
          $('.selected').addClass('full');
          points+=1;
          $('#points').text(points);
        } else {
          $('.selected').addClass('incorrect');
          incorrect+=1;
          points-=1;
          $('#points').text(points);
          $('#incorrect').text(incorrect);
        }

        $('.selected').removeClass('selected');

        if (boardView.isFull()) {
          $('*').fadeOut();
        }      
    } else {
        $('.selected').removeClass('selected');
    }
  });

});

