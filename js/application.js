$(document).ready(function() {

  var boardView = new BoardView();
  var board     = new Board();
  var tile      = null;
  var points    = 0;
  var incorrect = 0;

  $(window).click(function(e) {

    var $target     = $(event.target);
    var isTile      = $target.hasClass('tile');
    var tileIsEmpty = !($target.hasClass('full'));

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
        $('.note-tile').removeClass('note-tile');
    } else if (isTile && tileIsEmpty) {
        $('.selected').removeClass('selected');
        $('.note-tile').removeClass('note-tile');
        $target.addClass('selected');

        var row  = $target.parent().attr('class').slice(-1);
        var col  = $target.attr('class')[9];
        tile = board.grid[row][col];
    } else if ($('.note-tile').length == 1 && $target.hasClass('num')) {
        var input    = $target.text();
        var notes    = $('.note-tile').text();
        var numIndex = notes.indexOf(input);

        if (numIndex == -1) {
          $('.note-tile .notes').text(notes + input + ' ');
        } else {
          $('.note-tile .notes').text(notes.replace(input + ' ', ''));
        }  
    } else if ($('.selected').length == 1 && $target.hasClass('num')) {
        var input = $target.text();

        if(tile == input) {
          $('.selected').removeClass('incorrect');
          $('.selected').html(input);
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
        $('.note-tile').removeClass('note-tile');
    }

    $( ".tile" ).dblclick(function(e) {
      $('.note-tile').removeClass('note-tile');
      $target = $(event.target);
      $target.addClass('note-tile');
    });
  });

});

