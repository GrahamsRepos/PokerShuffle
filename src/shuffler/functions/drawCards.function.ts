import { card } from '../../suites';
import config from '../config/config.json';
export const drawCards = (deck: card[]) => {
  const draw = [];
  for (let i = 0; i < config.noCardsInHand; i++) {
    draw.push(deck[i]);
  }
  return draw;
};
