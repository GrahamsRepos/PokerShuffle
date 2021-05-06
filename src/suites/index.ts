import {ClubCard,clubsSuite} from './clubs'
import {DiamondCard,diamondsSuite} from "./diamonds"
import {HeartCard,heartsSuite} from './hearts'
import {SpadeCard,spadesSuite} from './spades'

export type card = ClubCard|DiamondCard|HeartCard|SpadeCard

export const fullDeck:card[] = [...clubsSuite,...diamondsSuite,...spadesSuite,...heartsSuite]
