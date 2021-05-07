import {
  evaluateDraw,
  printDraw,
  drawCards,
  printDeck,
  shuffleArray,
} from '../shuffler/functions';
import { fullDeck, card } from '../suites';
import config from '../shuffler/config/config.json';
export class Dealer {
  private static _instance: Dealer;
  private readonly initialDeck: card[];
  private constructor() {
    this.initialDeck = [...fullDeck];
  }
  public static getInstance() {
    return this._instance || (this._instance = new this());
  }
  private static printDeck(deck: card[]) {
    printDeck(deck);
  }
  private static shuffleArray(deck: card[]): card[] {
    return shuffleArray(deck);
  }
  private static drawCards(deck: card[]) {
    return drawCards(deck);
  }
  private static printDraw(deck: card[]) {
    printDraw(deck);
  }
  private static evaluateDraw(draw: card[]) {
    return evaluateDraw(draw);
  }
  public play() {
    const initialDeck = [...this.initialDeck];
    const newDeck = [...this.initialDeck];
    let i = 0;
    while (i < config.noShuffles) {
      shuffle(i, newDeck);
      i++;
    }

    function shuffle(i: number, newdeck: Array<any>) {
      setTimeout(function () {
        console.clear();
        console.log('---Lets Play---\n');
        Dealer.printDeck(initialDeck);
        console.log('---Shuffling Cards---\n');
        Dealer.shuffleArray(newdeck);
        Dealer.printDeck(newdeck); // Add tasks to do
        if (i === config.noShuffles - 1) {
          console.log('---Drawing Cards---\n');
          const draw = Dealer.drawCards(newDeck);
          Dealer.printDraw(draw);
          console.log('\n---Draw Evaluation---\n');
          console.log(Dealer.evaluateDraw(draw));
          console.log('\n');
        }
      }, 80 * i);
    }
  }
}
