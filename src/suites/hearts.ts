export interface HeartCard {
  readonly suite: 'hearts';
  readonly suiteColor: string;
  readonly symbol: '♥';
  readonly cardUnicode: string;
  readonly kind: string;
  readonly evaluatorCode: string;
}
const suiteName: 'hearts' = 'hearts';
const suiteColor: string = '\x1b[31m';
const suiteSymbol: '♥' = '♥';
export const heartsSuite: HeartCard[] = [
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂱',
    kind: 'A',
    evaluatorCode: 'ah',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂲',
    kind: '2',
    evaluatorCode: '2h',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂳',
    kind: '3',
    evaluatorCode: '3h',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂴',
    kind: '4',
    evaluatorCode: '4h',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂵',
    kind: '5',
    evaluatorCode: '5h',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂶',
    kind: '6',
    evaluatorCode: '6h',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂷',
    kind: '7',
    evaluatorCode: '7h',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂸',
    kind: '8',
    evaluatorCode: '8h',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂹',
    kind: '9',
    evaluatorCode: '9h',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂺',
    kind: '10',
    evaluatorCode: 'th',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂻',
    kind: 'J',
    evaluatorCode: 'jh',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂽',
    kind: 'Q',
    evaluatorCode: 'qh',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂾',
    kind: 'K',
    evaluatorCode: 'kh',
  },
];
