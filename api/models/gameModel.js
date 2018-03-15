'use strict';

exports.play = (deckList, iterations) => {
  let results = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for (let i = 0; i < iterations; i++) {
    console.log(i);
    results = playGame(deckList, results, iterations);
  }

  return results;
};

const draw = (gameState, cards = 1) => {
  if (cards > gameState.deck.length) {
    return gameState;
  }
  for (let i = 0; i < cards; i++) {
    gameState.hand.push(gameState.deck.pop());
  }
};

const playGame = (deck, results, iterations) => {
  let gameState = initializeGameState(deck);

  //draw 7
  gameState = draw(gameState, 7);
  //16 loop
  //play turn
  for (let i = 0; i < 16; i++) {
    gameState = playTurn(gameState);
  }

  return gameState.manaSpentByTurn;
};

const playTurn = (gameState) => {
  let statesToEval = [];
  gameState = draw(gameState);
  let landOptions = findLandOptions(gameState);
  landOptions.forEach((land) => {
    let possibleLandState = playLand(copyState(gameState), land);
    let spellOptions = findSpellOptions(possibleLandState);
    spellOptions.forEach((option) => {
      let possibleGameState = copyState(possibleLandState);
      option.forEach((spell) => {
        possibleGameState = cast(possibleGameState, spell);
      });
      statesToEval.push(possibleGameState);
    });
  });
  gameState = evaluateBestState(statesToEval);
  return gameState;
};

const shuffle = (deck) => {
  let shuffledDeck = [];
  let cardsInDeck = deck.length;
  for (let i = 0; i < cardsInDeck; i++) {
    let cardIndex = Math.floor(Math.random() * (cardsInDeck - i));
    shuffledDeck.push(...deck.splice(cardIndex, 1));
  }
  return shuffledDeck;
};

//COPY & GAME STATE SECTION

const copyField = (field) => {
  return field.map(copyCard);
};

const copyHand = (hand) => {
  return hand.map(copyCard);
};

const copyCard = (card) => {
  return { ...card };
};

const copyState = (gameState) => {
  return {
    field: copyField(gameState.field),
    hand: copyHand(gameState.hand),
    plains: gameState.plains,
    islands: gameState.islands,
    swamps: gameState.swamps,
    mountains: gameState.mountains,
    forests: gameState.forests
  };
};

const initializeGameState = (deck) => {
  return {
    deck: shuffle(deck),
    field: [],
    hand: [],
    manaSpentByTurn: [],
    plains: 0,
    islands: 0,
    swamps: 0,
    mountains: 0,
    forests: 0
  };
};

//SPELL SECTION

const findSpellOptions = (gameState) => {
  //find the pool of eligible spells
  let spellPool = getSpellPool(gameState);
  //try to cast everything in the pool
  if (castAll(manaPool, spellPool)) {
    //set in play to castable.slice()
    //set castable to []
    return gameState;
  }
  //try 1 spell solutions
  //try 2 spell solutions
  //try -1 spell solutions
  return gameState;
};

const castAll = (manaPool, spellPool) => {
  return Object.keys(manaPool).every((key) =>{
    let total = spells.reduce((accumulator, spell) => accumulator + spell[key], 0);
    return total <= manaPool[key];
  });
};
