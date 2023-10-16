const player1Btn = document.querySelector(".btn-1");
const player2Btn = document.querySelector(".btn-2");
const restBtn = document.querySelector(".restBtn");
const dicesImages = document.querySelector(".dices-images");
const player1Value = document.querySelector(".value-one");
const player2Value = document.querySelector(".value-two");
const Text = document.querySelector(".Text");
const images = ["./images/value-one-dice.png", "./images/value-two-dice.png","./images/value-three-dice.png",
  "./images/value-four-dice.png", "./images/value-five-dice.png",  "./images/value-six-dice.png",
];
const winnerScore = 30;
let player1Score = 0;
let player2Score = 0;

const setDefaultImage = () => {
  const img = document.createElement("images");
  img.setAttribute("src", images[0]);
  dicesImages.innerHTML = "";
  dicesImages.appendChild(img);
  player1Value.textContent = 0;
  player2Value.textContent = 0;
  player1Score = 0;
  player2Score = 0;
  Text.textContent = "Let’s play dices game";
  Text.classList.remove("winner");

  player1Btn.classList.remove("btn-color");
  player2Btn.classList.remove("btn-color");
  player1Btn.disabled = false;
  player2Btn.disabled = false;
};

//Functions for handle
const Dice1 = () => {
  const randomNum = Math.floor(Math.random() * images.length);
  const img = document.createElement("img");
  img.setAttribute("src", images[randomNum]);
  dicesImages.innerHTML = "";
  dicesImages.appendChild(img);
  let printvalue1 = randomNum + 1;
  player1Score += printvalue1;
  if (player1Score >= winnerScore) {
    Text.textContent =
      "Winner Congratulations Player 1!";
    Text.classList.add("winner");
    player1Value.textContent = player1Score;
    player1Btn.disabled = true;
    player2Btn.disabled = true;
  } else {
    player1Value.textContent = player1Score;
    Text.textContent = "player-2 to play";
    player2Btn.classList.remove("btn-color");
    player1Btn.classList.add("btn-color");
    player1Btn.disabled = true;
    player2Btn.disabled = false;
  }
};

// ! Function to handle player button 2
const Dice2 = () => {
  const randomNum = Math.floor(Math.random() * images.length);
  const img = document.createElement("img");
  img.setAttribute("src", images[randomNum]);
  dicesImages.innerHTML = "";
  dicesImages.appendChild(img);
  let printvalue2 = randomNum + 1;
  player2Score += printvalue2;
  if (player2Score >= winnerScore) {
    Text.textContent =
      "Winner Congratulations Player 2";
    Text.classList.add("winner");
    player2Value.textContent = player2Score;

    // ? disable both player btn
    player1Btn.disabled = true;
    player2Btn.disabled = true;
  } else {
    player2Value.textContent = player2Score;
    Text.textContent = "Player-1 to play";
    player1Btn.classList.remove("btn-color");
    player2Btn.classList.add("btn-color");
    player1Btn.disabled = false;
    player2Btn.disabled = true;
  }
};
player1Btn.addEventListener("click", Dice1);
player2Btn.addEventListener("click", Dice2);
restBtn.addEventListener("click", setDefaultImage);
