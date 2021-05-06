import { card } from '../../suites';
import * as PokerEvaluator from 'poker-evaluator';
export const evaluateDraw = (draw: card[]) => {
  const evalDeck = draw.map((card) => card.evaluatorCode);
  console.log(`Hand Name: ${PokerEvaluator.evalHand(evalDeck).handName}`);
  console.log(`Hand Rank: ${PokerEvaluator.evalHand(evalDeck).handRank}`);
  console.log(`Hand Value: ${PokerEvaluator.evalHand(evalDeck).value}`);
};
