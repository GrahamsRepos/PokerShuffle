import { fullDeck } from '../suites';
import {
  getColoredText,
  shuffleArray,
  printDeck,
  drawCards,
  printDraw,
  evaluateDraw,
} from '../shuffler/functions';

console.log('---Lets Play---\n');
printDeck([...fullDeck]);
console.log('---Shuffling Cards---\n');
const shuffledDeck = shuffleArray(fullDeck);
printDeck(shuffledDeck);
console.log('---Drawing Cards---\n');
const draw = drawCards(shuffledDeck);
printDraw(draw);
console.log('\n---Draw Evaluation---\n');
evaluateDraw(draw);
console.log('\n');
