import { card } from '../../suites';
import { getColoredText } from './getColoredText.function';
export const printDraw = (deck: card[]) => {
  const deckString = deck.reduce((c, card, i) => {
    return c + getColoredText(`|${card.symbol} ${card.kind}|`, card.suiteColor);
  }, '');
  console.log(deckString);
};
