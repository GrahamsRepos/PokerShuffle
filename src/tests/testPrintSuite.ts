import { fullDeck } from '../suites';
import {
  getColoredText,
  shuffleArray,
  printDeck,
  drawCards,
  printDraw,
  evaluateDraw,
} from '../shuffler/functions';

const doShuffle = (deck: Array<any>) => {
  let newDeck = [...deck];
  let i = 0;
  while (i < 100) {
    shuffle(i, newDeck);
    i++;
  }

  function shuffle(i: number, newdeck: Array<any>) {
    setTimeout(function () {
      console.clear();
      console.log('---Lets Play---\n');
      printDeck(deck);
      console.log('---Shuffling Cards---\n');
      shuffleArray(newdeck);
      printDeck(newdeck); // Add tasks to do
      if (i === 99) {
        console.log('---Drawing Cards---\n');
        const draw = drawCards(newDeck);
        printDraw(draw);
        console.log('\n---Draw Evaluation---\n');
        evaluateDraw(draw);
        console.log('\n');
      }
    }, 50 * i);
  }
};

doShuffle(fullDeck);
