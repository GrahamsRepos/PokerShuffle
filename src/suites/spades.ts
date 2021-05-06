export interface SpadeCard {
  readonly suite: 'spades';
  readonly suiteColor: string;
  readonly symbol: '♠';
  readonly cardUnicode: string;
  readonly kind: string;
  readonly evaluatorCode: string;
}
const suiteName: 'spades' = 'spades';
const suiteColor: string = '\x1b[34m';
const suiteSymbol: '♠' = '♠';
export const spadesSuite: SpadeCard[] = [
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂡',
    kind: 'A',
    evaluatorCode: 'as',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂢',
    kind: '2',
    evaluatorCode: '2s',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂣',
    kind: '3',
    evaluatorCode: '3s',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂤',
    kind: '4',
    evaluatorCode: '4s',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂥',
    kind: '5',
    evaluatorCode: '5s',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂦',
    kind: '6',
    evaluatorCode: '6s',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂧',
    kind: '7',
    evaluatorCode: '7s',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂨',
    kind: '8',
    evaluatorCode: '8s',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂩',
    kind: '9',
    evaluatorCode: '9s',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂪',
    kind: '10',
    evaluatorCode: 'ts',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂫',
    kind: 'J',
    evaluatorCode: 'js',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂭',
    kind: 'Q',
    evaluatorCode: 'qs',
  },
  {
    suite: suiteName,
    symbol: suiteSymbol,
    suiteColor: suiteColor,
    cardUnicode: '🂮',
    kind: 'K',
    evaluatorCode: 'ks',
  },
];
