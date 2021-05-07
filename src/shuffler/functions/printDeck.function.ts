import { card } from '../../suites';
import { getColoredText } from './getColoredText.function';
export const printDeck = (deck: card[]) => {
  const deckString = deck.reduce((c, card, i) => {
    if ((i + 1) % 13 === 0 && i !== 0) {
      return c + getColoredText(`${card.cardUnicode}\n`, card.suiteColor);
    } else {
      return c + getColoredText(`${card.cardUnicode} `, card.suiteColor);
    }
  }, '');
  console.log(deckString);
};
