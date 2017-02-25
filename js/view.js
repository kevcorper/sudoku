var BoardView = function() {
};

BoardView.prototype.renderBoard = function(grid, level) {
	var revealedTiles = 0;

	if (level == 'hard') {
		revealedTiles = 20;
	} else if (level == 'medium') {
		revealedTiles = 30;
	} else {
		revealedTiles = 40;
	}

	var num = 0;

	while (num < revealedTiles) {
		var row = Math.floor(Math.random() * 9);
		var col = Math.floor(Math.random() * 9);

		var tile = '.row-' + row + ' .col-' + col;

		if ($(tile).text() === '') {
			$(tile).text(grid[row][col]);
			$(tile).addClass('full');
			$(tile).addClass('given');
			num++;
		}
	}
}

BoardView.prototype.revealNumber = function(input, row, col) {
}

BoardView.prototype.revealX = function(row, col) {
}

BoardView.prototype.isFull = function() {
}

BoardView.prototype.finish = function() {
}