function startNewGame() {
  if (players[0].name == '' || players[1].name == '') {
    nameCheckElement.innerText = 'Please enter valid names for both players!';
    return;
  }
  activePlayerName.textContent = players[activePlayer].name;
  activeGameArea.style.display = 'block';
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    if (activePlayer === 1) {
      activePlayer = 0;
    }
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add(players[activePlayer].class, 'disabled');
  switchPlayer();
}
