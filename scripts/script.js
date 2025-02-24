import * as hangman from './hangman.js';
import * as categories from './categories.js';

/* categorias */
const astronomia = document.getElementById('astronomia');
const geografia = document.getElementById('geografia');
const historia_mundial = document.getElementById('historia_mundial');
const mitos_leyendas = document.getElementById('mitos_leyendas');
const filosofia = document.getElementById('filosofia');
const ciencia = document.getElementById('ciencia');

/* ventana */
const container_letters = document.querySelector('.container_letters');
const container_spaces = document.querySelector('.container_spaces');
let category_name = document.getElementById('category_name');

const abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let word = '';
let errors = 0;
let score = 0;
let hits = 0;

const genRandomWord = (category) => {
    word = '';
    let randomNr = Math.floor(Math.random() * category.length);
    word = category[randomNr];
    genSpaces(word);
}

const drawStickman = () => {
    if (errors === 1) {
        hangman.drawNoose();
    } else if (errors === 2) {
        hangman.drawHead();
    } else if (errors === 3) {
        hangman.drawEyesLeftOk();
        hangman.drawEyesRightOk();
        hangman.drawSmileOk();
    } else if (errors === 4) {

        hangman.drawBody();
    } else if (errors === 5) {
        hangman.drawArmLeft();
    } else if (errors === 6) {
        hangman.drawArmRight();
    } else if (errors === 7) {
        hangman.drawLegLeft();
    } else if (errors === 8) {
        hangman.drawLegRight();
    }
    else if (errors === 9) {
        hangman.drawSmileOk('clear')
        hangman.drawSmileDead();
        hangman.drawEyesLeftOk('clear');
        hangman.drawEyesRightOk('clear');
        hangman.drawEyesLeftDead();
        hangman.drawEyesRightDead();
    }
}

const calculateScore = () => {
    if (word.length == hits) {
        alert('Ganaste!');
    }
    if (errors > 8) {
        alert('Ahorcado');
        alert('La palabra era: ' + word);
    }
}

// Verifica que la letra seleccionada se encuentra en los espacios de la palabra aleatoria.
const gameLogic = (letter, letterDiv) => {
    const spaces = document.querySelectorAll('.spaces');
    let i = 0;

    if (hits < word.length && errors <= 8) {
        if (letterDiv.getAttribute("class") != "error" && letterDiv.getAttribute("class") != "correct") {

            if (letterDiv != undefined) {
                //mostrar letras ocultas
                if (word.includes(letter)) {
                    spaces.forEach((space) => {
                        if (space.innerHTML == letter) {
                            space.setAttribute('class', '');
                        }
                        if (space.innerHTML.includes(letter)) {
                            hits++;
                            console.log('hit: ' + hits);
                            console.log('letter: ' + word.length)
                        }
                    })
                    letterDiv.setAttribute('class', 'correct');



                }
                else {
                    if (letterDiv.getAttribute("class") != 'correct') {
                        letterDiv.setAttribute('class', 'error');
                    }
                    if (i < 1) {
                        errors++;
                        drawStickman();
                        i++;
                    }
                }
            }
            calculateScore();
        }
    }
}

// Selecciona una palabra aleatoria.
const genSpaces = (randomWord) => {
    for (let i = 0; i < randomWord.length; i++) {
        let newSpace = document.createElement('div');
        let container_newSpace = document.createElement('div');

        container_newSpace.setAttribute('class', 'container_newSpace');

        newSpace.setAttribute('class', 'spaces');
        newSpace.setAttribute('id', `space_${i}`);

        newSpace.innerHTML = randomWord.slice(i, i + 1);

        container_spaces.append(container_newSpace);
        container_newSpace.append(newSpace);
    }
}

// Genera el abecedario por pantalla.
const genLetters = () => {
    abecedario.forEach((letter) => {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'letters');
        newDiv.setAttribute('id', `letter_${letter}`);
        newDiv.innerHTML = letter;
        container_letters.append(newDiv);
        newDiv.addEventListener('click', () => gameLogic(letter, newDiv));
    })
    handleCategoryWindow('close');
}

// teclado abecedario
document.addEventListener('keydown', function (event) {
    const letters = document.querySelectorAll('.letters');
    const key = event.key;
    let letterDiv;

    for (let i = 0; i < letters.length; i++) {
        if (letters[i].innerHTML == key) {
            letterDiv = letters[i];
        }
    }

    gameLogic(key, letterDiv);
});

//ventana seleccion de categorias
const categoryWindow = document.querySelector('#categoryWindow');

const handleCategoryWindow = (action) => {
    if (action == 'close') {
        categoryWindow.style.display = "none";
    }
    else if (action == 'open') {
        categoryWindow.style.display = "flex";
    }
}

const btnViewCategories = document.getElementById('btnViewCategories');
btnCloseSelect.addEventListener('click', () => handleCategoryWindow('close'));
btnViewCategories.addEventListener('click', () => handleCategoryWindow('open'));

astronomia.addEventListener('click', () => startGame(categories.astronomia));
geografia.addEventListener('click', () => startGame(categories.geografia));
historia_mundial.addEventListener('click', () => startGame(categories.historia_mundial));
mitos_leyendas.addEventListener('click', () => startGame(categories.mitos_leyendas));
filosofia.addEventListener('click', () => startGame(categories.filosofia));
ciencia.addEventListener('click', () => startGame(categories.ciencia));

// Genera el juego.
const startGame = (category) => {
    resetGame();

    genLetters();
    genRandomWord(category.list);

    category_name.innerHTML = category.name;

    hangman.clearCanvas();
    hangman.drawBase();
}

const resetGame = () => {
    const container_newSpace = document.querySelectorAll('.container_newSpace');
    const letters = document.querySelectorAll('.letters');
    const error = document.querySelectorAll('.error');
    const correct = document.querySelectorAll('.correct');

    word = '';
    errors = 0;
    hits = 0;
    if (container_newSpace) {
        container_newSpace.forEach((space) => {
            space.remove();
            space.setAttribute('class', '')
        })
    }
    if (letters) {
        letters.forEach((letter) => {
            letter.remove();
            letter.setAttribute('class', '')
        })
    } if (error) {
        error.forEach((err) => {
            err.remove();
        })
    } if (correct) {
        correct.forEach((corr) => {
            corr.remove();
        })
    }

}

