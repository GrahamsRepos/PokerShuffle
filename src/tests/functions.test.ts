import { expect } from 'chai';
import { shuffleArray, evaluateDraw, drawCards } from '../shuffler/functions';
import { fullDeck } from '../suites';
import { hand } from './testData';

describe('Deck Config', function () {
  const CardSet = new Set(fullDeck);
  context('Deck Hash 52 Unique Cards', function () {
    it('should return 52', function () {
      expect(fullDeck.length === CardSet.size && CardSet.size === 52).to.equal(
        true,
      );
    });
  });
});

describe('Deck Shuffle', function () {
  const newDeck = [...fullDeck];
  context('Shuffled Deck not Equal to Original Deck', function () {
    it('should return true', function () {
      expect(
        JSON.stringify(shuffleArray(newDeck)) !== JSON.stringify(fullDeck),
      ).to.equal(true);
    });
  });
  context('Shuffled Deck has 52 cards', function () {
    it('should return true', function () {
      expect(newDeck.length === 52).to.equal(true);
    });
  });
});

describe('Draw has 5 cards', function () {
  const newDeck = [...fullDeck];
  context(
    'The draw produces 5 cards like specified in the config file',
    function () {
      it('should return true', function () {
        expect(drawCards(newDeck).length === 5).to.equal(true);
      });
    },
  );
});

describe('The draw evaluation function is implemented propperly', function () {
  context('Returns expected hand evaluation', function () {
    it('should return true', function () {
      expect(evaluateDraw(hand as any)).to.equal(
        'Hand Name: high card\n' + 'Hand Rank: 1187\n' + 'Hand Value: 5283',
      );
    });
  });
});
