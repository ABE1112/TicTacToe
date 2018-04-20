function startGame () {
  for (var i = 1; i <= 9; i++) {
    clearBox(i)
  }
  document.win = null
  document.turn = 'X'
  setMessage(document.turn + ' Turn')
}

function nextMove (square) {
  if (document.win != null) {
    setMessage(document.turn + ' Game Won')
  } else if (square.innerText === '') {
    square.innerText = document.turn
    switchTurn()
  } else {
    setMessage('Pick another square')
  }
}

function switchTurn () {
  if (winner(document.turn)) {
    setMessage('Congrats ' + document.turn + ' You won')
    document.win = document.turn
  } else if (document.turn === 'X') {
    document.turn = 'O'
    setMessage('Its ' + document.turn + ' turn')
  } else {
    document.turn = 'X'
    setMessage('Its ' + document.turn + ' turn')
  }
}

function setMessage (msg) {
  document.getElementById('message').innerText = msg
}

// Declaring the winner

function winner (move) {
  var result = false
  if (checkRow(1, 2, 3, move) ||
       checkRow(4, 5, 6, move) ||
       checkRow(7, 8, 9, move) ||
       checkRow(1, 4, 7, move) ||
       checkRow(2, 5, 8, move) ||
       checkRow(3, 6, 9, move) ||
       checkRow(1, 5, 9, move) ||
       checkRow(3, 5, 7, move)) {
    result = true
  }
  return result
}

function checkRow (a, b, c, move) {
  var result = false
  if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
    result = true
  }
  return result
}

function getBox (number) {
  return document.getElementById('s' + number).innerText
}

function clearBox (number) {
  document.getElementById('s' + number).innerText = ''
}
