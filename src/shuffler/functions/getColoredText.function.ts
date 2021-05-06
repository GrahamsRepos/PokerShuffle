
export const getColoredText = (text:string,colorAscii:string):string=>{
    return `${colorAscii}${text}\x1b[0m`
}