export interface ClubCard {
  readonly suite: 'clubs';
  readonly suiteColor: string;
  readonly symbol: '♣';
  readonly cardUnicode: string;
  readonly kind: string;
  readonly evaluatorCode: string;
}

const suiteName: 'clubs' = 'clubs';
const suiteColor: string = '\x1b[34m';
const suiteSymbol: '♣' = '♣';

export const clubsSuite: ClubCard[] = [
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃑',
    kind: 'A',
    evaluatorCode: 'ac',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃒',
    kind: '2',
    evaluatorCode: '2c',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃓',
    kind: '3',
    evaluatorCode: '3c',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃔',
    kind: '4',
    evaluatorCode: '4c',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃕',
    kind: '5',
    evaluatorCode: '5c',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃖',
    kind: '6',
    evaluatorCode: '6c',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃗',
    kind: '7',
    evaluatorCode: '7c',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃘',
    kind: '8',
    evaluatorCode: '8c',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃙',
    kind: '9',
    evaluatorCode: '9c',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃊',
    kind: '10',
    evaluatorCode: 'tc',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃋',
    kind: 'J',
    evaluatorCode: 'jc',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃍',
    kind: 'Q',
    evaluatorCode: 'qc',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃎',
    kind: 'K',
    evaluatorCode: 'kc',
  },
];
