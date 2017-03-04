$(document).ready(function() {

  var boardView = new BoardView();
  var board     = new Board();

  var points    = 0;
  var incorrect = 0;

  var tile

  var seconds = 0, minutes = 0, hours = 0; 
  var secs, mins, hrs; 
  var timerStarted = false;
  var isPaused = false;

  var startTime = function() {
    if (!isPaused) {
      if ( seconds === 60 ) {seconds = 0; minutes++;}

      if ( minutes < 10 ) {mins = '0' + minutes + ' : ';} 
      else {mins = minutes + ': ';}

      if ( minutes === 60 ) {minutes = 0; hours++;} 

      if (hours < 10) {hrs = '0' + hours + ' : ';} 
      else {hrs = hours + ': ';}

      if (seconds < 10) {secs = '0' + seconds;} 
      else {secs = seconds}

      $('#timer').text(hrs + mins + secs); 

      seconds++; 
    }
  }


  $(window).click(function(e) {

    var $target     = $(event.target);
    var isTile      = $target.hasClass('tile') || $target.hasClass('notes');
    var tileIsEmpty = !($target.hasClass('full'));

    if ($target.hasClass('play-button')) {
        $target.removeClass('play-button');
        $target.addClass('pause-button');
        $target.html('&#10073;&#10073;');
        $('#right-content').css('pointer-events', 'auto');

        if (board.grid[0][0] == 0) {
          board.createBoard();
          boardView.renderBoard(board.grid, $('.selected-level').attr('id'));
        }

        $('.tile, .notes').css('color', 'black');
        $('.given').css('color', '#777');
        $('.level-button').css('pointer-events', 'none');

        if (!timerStarted) {
          setInterval(function() {startTime();}, 1000);
          timerStarted = true;
        }

        isPaused = false;
    } else if ($target.hasClass('pause-button')) {
        $target.removeClass('pause-button');
        $target.addClass('play-button');
        $target.html('&#9658;');
        $('.tile, .notes').css('color', '#cecece');
        $('#right-content').css('pointer-events', 'none');

        isPaused = true;
    } else if ($target.hasClass('level-button')) {
        $('.selected-level').removeClass('selected-level');
        $target.addClass('selected-level');
    } else if ($target.hasClass('selected')) {
        $target.removeClass('selected');
        $('.note-tile').removeClass('note-tile');
    } else if (isTile && tileIsEmpty) {
        $('.selected').removeClass('selected');
        $('.note-tile').removeClass('note-tile');

        var row = 0;
        var col = 0;

        if ($target.hasClass('notes')) {
          var parent = $target.parent();
          parent.addClass('selected');
          row  = parent.parent().attr('class').slice(-1);
          col  = parent.attr('class')[9];
        } else {
          $target.addClass('selected');
          row  = $target.parent().attr('class').slice(-1);
          col  = $target.attr('class')[9];
        }

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
          $('.selected').addClass('incorrect').delay(500).queue(function(){
              $(this).removeClass("incorrect").dequeue();
          });
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

    $(".tile").dblclick(function(e) {
      $('.note-tile').removeClass('note-tile');
      $target = $(event.target);

      if ($target.hasClass('notes')) {
        $target.parent().addClass('note-tile');
      } else {
        $target.addClass('note-tile');
      }
    });
  });

});

