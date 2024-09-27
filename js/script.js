const words = [
  { left: "Vermelho", right: "Red" },
  { left: "Azul", right: "Blue" },
  { left: "Verde", right: "Green" },
  { left: "Amarelo", right: "Yellow" },
  { left: "Preto", right: "Black" }
];

let selectedWord = null;
let connections = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createWordElement(word, side) {
  const div = document.createElement('div');
  div.textContent = word;
  div.className = 'word';
  div.dataset.word = word;
  div.dataset.side = side;
  div.addEventListener('click', () => handleWordClick(div));
  return div;
}

function handleWordClick(element) {
  if (element.dataset.side === 'left') {
    if (selectedWord) {
      selectedWord.classList.remove('selected');
    }
    selectedWord = element;
    element.classList.add('selected');
  } else if (selectedWord && element.dataset.side === 'right') {
    connectWords(selectedWord, element);
    selectedWord.classList.remove('selected');
    selectedWord = null;
  }
}

function connectWords(leftWord, rightWord) {
  const existingConnection = connections.find(c => c.left === leftWord || c.right === rightWord);
  if (existingConnection) {
    removeLine(existingConnection.line);
    connections = connections.filter(c => c !== existingConnection);
  }

  const line = createLine(leftWord, rightWord);
  connections.push({ left: leftWord, right: rightWord, line: line });
}

function createLine(leftWord, rightWord) {
  const svg = document.getElementById('lines');
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  const leftRect = leftWord.getBoundingClientRect();
  const rightRect = rightWord.getBoundingClientRect();
  const containerRect = document.querySelector('.game-container').getBoundingClientRect();

  const x1 = leftRect.right - containerRect.left;
  const y1 = leftRect.top - containerRect.top + leftRect.height / 2;
  const x2 = rightRect.left - containerRect.left;
  const y2 = rightRect.top - containerRect.top + rightRect.height / 2;

  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', '#3498db');
  line.setAttribute('stroke-width', '2');

  svg.appendChild(line);
  return line;
}

function removeLine(line) {
  line.remove();
}

function showMessage(text,gifURL) {
  const message = document.getElementById('modalMessage');
  message.innerHTML = `<img src="${gifURL}" alt="Gif de Parabéns" style="max-width: 100%; height: auto;"><br>${text}`;

  const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
  resultModal.show();
}

function checkMatches() {
  let correctMatches = 0;
  
  connections.forEach(connection => {
    const leftWord = connection.left.dataset.word;
    const rightWord = connection.right.dataset.word;
    
    if (words.find(w => w.left === leftWord && w.right === rightWord)) {
      correctMatches++;
    } else {
      
    }
  });
  
  if (correctMatches === words.length) {
    showMessage("<h2>Parabéns! Você acertou todos os pares corretamente!</h2>", "https://i.pinimg.com/originals/a5/da/be/a5dabea9202dcfef09cb11340fd86192.gif");
  } else {
    showMessage(`<h2>Você acertou ${correctMatches} de ${words.length} pares. Continue tentando!</h2>`, "https://media2.giphy.com/media/ykaNntbZ3hfsWotKmA/200w.gif?cid=6c09b952rgyq8urfin03gndu49rlmgebwgjefbjhb9g4e2gl&ep=v1_gifs_search&rid=200w.gif&ct=g");
  }
}

function resetGame() {
  connections.forEach(connection => {
    removeLine(connection.line);
    connection.left.classList.remove('selected');
    connection.right.classList.remove('selected');
  });
  connections = [];
  selectedWord = null;
  initializeGame();
}

function initializeGame() {
  const leftColumn = document.getElementById('leftColumn');
  const rightColumn = document.getElementById('rightColumn');
  
  leftColumn.innerHTML = '';
  rightColumn.innerHTML = '';

  const shuffledWords = shuffle([...words]);

  shuffledWords.forEach(pair => {
    leftColumn.appendChild(createWordElement(pair.left, 'left'));
  });

  shuffle(shuffledWords).forEach(pair => {
    rightColumn.appendChild(createWordElement(pair.right, 'right'));
  });
}

const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');

submitButton.addEventListener('click', checkMatches);
resetButton.addEventListener('click', resetGame);

initializeGame();