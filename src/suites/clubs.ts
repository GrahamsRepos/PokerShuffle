export interface ClubCard{
    readonly suite:'clubs',
    readonly suiteColor:string,
    readonly symbol:"♣",
    readonly cardUnicode:string,
    readonly kind:string
}

const suiteName:'clubs' = 'clubs'
const suiteColor:string = '\x1b[34m'
const suiteSymbol:"♣" = "♣"

export const clubsSuite:ClubCard[] = [
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃑",
        kind:'A'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃒",
        kind:'2'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃓",
        kind:'3'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃔",
        kind:'4'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃕",
        kind:'5'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃖",
        kind:'6'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃗",
        kind:'7'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃘",
        kind:'8'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃙",
        kind:'9'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃊",
        kind:'10'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃋",
        kind:'J'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃍",
        kind:'Q'
    },
    {
        suite:suiteName,
        symbol:suiteSymbol,
        suiteColor:suiteColor,
        cardUnicode:"🃎",
        kind:'K'
    }
]