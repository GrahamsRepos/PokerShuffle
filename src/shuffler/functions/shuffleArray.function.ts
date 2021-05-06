//Fisher–Yates Shuffle - Compliments of https://bost.ocks.org/mike/shuffle/
export const shuffleArray = (arr:Array<any>)=>{
    for(let i = 0;i<=200;i++) {
        let m = arr.length, t, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = arr[m];
            arr[m] = arr[i];
            arr[i] = t;
        }
    }
    return arr;
}