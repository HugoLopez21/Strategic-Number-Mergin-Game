import { numbersMap } from "../constants/gameConfig";

export function matchScore(targetScore, playerSum){
    return playerSum === targetScore ? true : false;
    
}

export function getSum(selectedNums){
    const playerSum = selectedNums.reduce((prev, num) =>{
        return prev + num;
    }, 0);
    return playerSum;
}

export function getScore(selectedNums){
    const score = selectedNums.reduce((prev, num)=>{
        return prev + numbersMap[num].score;
    },0)
    return score;
}


export function selectedBlocksToNums(board, selectedBlocks){
    let numsList = []
    selectedBlocks.forEach(coord => {
        const {y,x} = coord;
        const num = board[y][x];
        numsList.push(num)
    });
    return numsList;
}

export function isPenalty(numPenalties){
    return numPenalties < 3 ? false : true;
}