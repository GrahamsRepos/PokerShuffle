export interface DiamondCard {
  readonly suite: 'diamonds';
  readonly suiteColor: string;
  readonly symbol: '◆';
  readonly cardUnicode: string;
  readonly kind: string;
  readonly evaluatorCode: string;
}
const suiteName: 'diamonds' = 'diamonds';
const suiteColor: string = '\x1b[31m';
const suiteSymbol: '◆' = '◆';
export const diamondsSuite: DiamondCard[] = [
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃁',
    kind: 'A',
    evaluatorCode: 'ad',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃂',
    kind: '2',
    evaluatorCode: '2d',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃃',
    kind: '3',
    evaluatorCode: '3d',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃄',
    kind: '4',
    evaluatorCode: '4d',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃅',
    kind: '5',
    evaluatorCode: '5d',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃆',
    kind: '6',
    evaluatorCode: '6d',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃇',
    kind: '7',
    evaluatorCode: '7d',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃈',
    kind: '8',
    evaluatorCode: '8d',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃉',
    kind: '9',
    evaluatorCode: '9d',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃊',
    kind: '10',
    evaluatorCode: 'td',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃋',
    kind: 'J',
    evaluatorCode: 'jd',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃍',
    kind: 'Q',
    evaluatorCode: 'qd',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🃎',
    kind: 'K',
    evaluatorCode: 'kd',
  },
];
