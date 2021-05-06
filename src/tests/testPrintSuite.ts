import {fullDeck} from "../suites"
import {getColoredText,shuffleArray} from "../shuffler/functions"

const cardSuitesString = shuffleArray(fullDeck).reduce((c,card,i)=>{
    if((i+1)%13===0 && i!==0) {
        return c + getColoredText(`|${card.symbol} ${card.kind}|\n`, card.suiteColor)
    }else{
        return c + getColoredText(`|${card.symbol} ${card.kind}|`, card.suiteColor)
    }
},'')

console.log(cardSuitesString);