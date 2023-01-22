function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  }
  else if (argMoveId == 2) {
    return 'papier';
  }
  else if (argMoveId == 3) {
    return 'nożyce';
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else if (randomNumber == 3) {
  computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + argPlayerMove);

console.log('moves:', argComputerMove, argPlayerMove);

function displayResult (argComputerMove, argPlayerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Komputer wygrywa!');
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
    printMessage('Jest remis!');
  } else if ( argComputerMove == 'kamień' && argPlayerMove == 'Nieznany ruch') {
    printMessage('Nieznany ruch!');
  }

  if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Komputer wygrywa!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
    printMessage('Jest remis!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'Nieznany ruch') {
    printMessage('Nieznany ruch!');
  }

  if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Komputer wygrywa');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage('Jest remis');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'Nieznany ruch') {
    printMessage('Nieznany ruch');
  }
}
 displayResult(argComputerMove, argPlayerMove);

