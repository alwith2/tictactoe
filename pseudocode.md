## create game board using js
create  3x3 grid
grid cells should display correct info {
    x and o
    display who won
    display if draw
}
createResetButton () {
createElement div
}
game flow {
    enable clicks
    track clicks 
    check if move is valid
    update game state
}

states {
    game starts when square clicked
    advance turn after each click
    currentPlayer = symbols (X, 0)
    create array for symbols
    innerHtml = currentPlayer

}

determine wins {
    create counter to count win combinations
    disable clicks after game over
}

determine tie {
    when turns = 9
    and no winning combination then display tie game
}

check for win(array of symbols) {
    logical operator to determine if win combination of symbols is true
}

reset game state {
    after win or tie determined
    set turn to 0 (clear board)
    make counter for space.length
    set spaces to '' in html
    
    
}
