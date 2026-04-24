export function matchScore(targetScore, selectedNums){
    const playerSum = selectedNums.reduce((prev, num) =>{
        return prev + num;
    }, 0);
    
    return playerSum === targetScore ? true : false;
    
}


export function isPenalty(numPenalties){
    return numPenalties < 3 ? false : true;
}