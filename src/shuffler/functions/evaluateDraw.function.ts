import { card } from '../../suites';
import * as PokerEvaluator from 'poker-evaluator';
export const evaluateDraw = (draw: card[]) => {
  const evalDeck = draw.map((card) => card.evaluatorCode);
  return `Hand Name: ${
    PokerEvaluator.evalHand(evalDeck).handName
  }\nHand Rank: ${PokerEvaluator.evalHand(evalDeck).handRank}\nHand Value: ${
    PokerEvaluator.evalHand(evalDeck).value
  }`;
};
