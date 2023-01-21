let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
  computerMove = 'kamień';
}
if (randomNumber == 2) {
  computerMove = 'papier';
}  
if (randomNumber == 3) {
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamień';
}
if (playerInput == '2') {
  playerMove = 'papier';
}
if (playerInput == '3') {
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier') {
  printMessage('Ty wygrywasz!');
}

if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Ty wygrywasz!');
}

if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Ty wygrywasz!');
}

if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage('Komputer wygrywa!');
}

if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage('Komputer wygrywa!');
}

if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Komputer wygrywa');
}

if (computerMove == 'kamień' && playerMove == 'kamień') {
  printMessage('Jest remis!');
}

if (computerMove == 'papier' && playerMove == 'papier') {
  printMessage('Jest remis!');
}

if (computerMove == 'nożyce' && playerMove == 'nożyce') {
  printMessage('Jest remis');
}

if (computerMove == 'kamień' && playerMove == 'Nieznany ruch') {
  printMessage('Nieznany ruch!');
}

if (computerMove == 'papier' && playerMove == 'Nieznany ruch') {
  printMessage('Nieznany ruch!');
}

if (computerMove == 'nożyce' && playerMove == 'Nieznany ruch') {
  printMessage('Nieznany ruch');
}