// Please implement exercise logic here
let body = document.querySelector("body");

// Please implement exercise logic here
const numberOfCardsX = 4;
const numberOfCardsY = 4;
numberOfCardsTotal = numberOfCardsX * numberOfCardsY;

const gameContainer = document.createElement("div");
gameContainer.className = "gameContainer";

const card = document.createElement("card");
card.className = "card";

const cardFront = document.createElement("div");
cardFront.className = "cardFront";

const cardBack = document.createElement("div");
cardBack.className = "cardBack";

/*Card images
const cardA = document.createElement("img");
cardA.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
cardA.onclick = function () {
  cardA.src = "Assets/Flat-Playing-Cards-Set/Clubs/A.png";
};
*/

const cardImgBack = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";

const cardImgA = "Assets/Flat-Playing-Cards-Set/Clubs/A.png";

/*
const card2 = document.createElement("img");
card2.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
card2.onclick = function () {
  card2.src = "Assets/Flat-Playing-Cards-Set/Clubs/2.png";
};
*/

const cardImg2 = "Assets/Flat-Playing-Cards-Set/Clubs/2.png";

/*
card3 = document.createElement("img");
card3.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
card3.onclick = function () {
  card3.src = "Assets/Flat-Playing-Cards-Set/Clubs/3.png";
};
*/

const cardImg3 = "Assets/Flat-Playing-Cards-Set/Clubs/3.png";

/*
card4 = document.createElement("img");
card4.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
card4.onclick = function () {
  card4.src = "Assets/Flat-Playing-Cards-Set/Clubs/4.png";
};
*/

const cardImg4 = "Assets/Flat-Playing-Cards-Set/Clubs/4.png";

/*
card5 = document.createElement("img");
card5.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
card5.onclick = function () {
  card5.src = "Assets/Flat-Playing-Cards-Set/Clubs/5.png";
};
*/

const cardImg5 = "Assets/Flat-Playing-Cards-Set/Clubs/5.png";

/*
card6 = document.createElement("img");
card6.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
card6.onclick = function () {
  card6.src = "Assets/Flat-Playing-Cards-Set/Clubs/6.png";
};
*/

const cardImg6 = "Assets/Flat-Playing-Cards-Set/Clubs/6.png";

/*
card7 = document.createElement("img");
card7.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
card7.onclick = function () {
  card7.src = "Assets/Flat-Playing-Cards-Set/Clubs/7.png";
};
*/

const cardImg7 = "Assets/Flat-Playing-Cards-Set/Clubs/7.png";

/*
card8 = document.createElement("img");
card8.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
card8.onclick = function () {
  card8.src = "Assets/Flat-Playing-Cards-Set/Clubs/8.png";
};
*/

const cardImg8 = "Assets/Flat-Playing-Cards-Set/Clubs/8.png";

/*
card9 = document.createElement("img");
card9.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
card9.onclick = function () {
  card9.src = "Assets/Flat-Playing-Cards-Set/Clubs/9.png";
};
*/

const cardImg9 = "Assets/Flat-Playing-Cards-Set/Clubs/9.png";

/*
card10 = document.createElement("img");
card10.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
card10.onclick = function () {
  card10.src = "Assets/Flat-Playing-Cards-Set/Clubs/10.png";
};
*/

const cardImg10 = "Assets/Flat-Playing-Cards-Set/Clubs/10.png";

/*
cardJ = document.createElement("img");
cardJ.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
cardJ.onclick = function () {
  cardJ.src = "Assets/Flat-Playing-Cards-Set/Clubs/J.png";
};
*/

const cardImgJ = "Assets/Flat-Playing-Cards-Set/Clubs/J.png";

/*
cardQ = document.createElement("img");
cardQ.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
cardQ.onclick = function () {
  cardQ.src = "Assets/Flat-Playing-Cards-Set/Clubs/Q.png";
};
*/

const cardImgQ = "Assets/Flat-Playing-Cards-Set/Clubs/Q.png";

/*
cardK = document.createElement("img");
cardK.src = "Assets/Flat-Playing-Cards-Set/Back Covers/Pomegranate.png";
cardK.onclick = function () {
  cardK.src = "Assets/Flat-Playing-Cards-Set/Clubs/K.png";
};
*/

const cardImgK = "Assets/Flat-Playing-Cards-Set/Clubs/K.png";

const cardImageList = [
  cardImgA,
  cardImg2,
  cardImg3,
  cardImg4,
  cardImg5,
  cardImg6,
  cardImg7,
  cardImg8,
  cardImg9,
  cardImg10,
  cardImgJ,
  cardImgQ,
  cardImgK,
];

//Game container for all the cards
body.appendChild(gameContainer);
numberOfPairs = (numberOfCardsX * numberOfCardsY) / 2;

//Adding and randomising card positions
let cardImagesUsed = [];
for (i = 0; i < numberOfPairs; i++) {
  cardImagesUsed.push(cardImageList[i]);
  cardImagesUsed.push(cardImageList[i]);

  function removeElement(array, cardAdded) {
    let index = array.indexOf(cardAdded);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let card1;
let card2;
let card3;
let card4;
let card5;
let card6;
let card7;
let card8;
let card9;
let card10;
let card11;
let card12;
let card13;
let card14;
let card15;
let card16;

const cardListIndex = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
];

for (i = 0; i < cardImagesUsed.length; i++) {
  //Add card to game container, add random card from cards used list
  cardListIndex[i] = document.createElement("img");
  cardListIndex[i].id = `card${i + 1}`;
  cardListIndex[i].src = cardImgBack;
  cardListIndex[i].alt = cardImagesUsed[i];
  cardListIndex[i].onclick = function () {
    console.log(`card${i + 1}`);
    cardListIndex[i].src = `card${i + 1}`.alt;

    //Remove card used
    removeElement(cardImagesUsed, cardImagesUsed[i]);
  };
  gameContainer.appendChild(cardListIndex[i]);
}
