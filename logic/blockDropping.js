import { speedConfig, gridConfig } from "../constants/gameConfig";
import { randomChoice } from "./targetLogic";
const {rows, columns} = gridConfig;

export function gravityDropStep(board, rowPos){
    for (let x = 0; x< columns;x++){
        let currentCell = board[rowPos][x];
        let topCell = board[rowPos-1][x];
        if (currentCell === null && topCell !== null){
            board[rowPos][x] = topCell;
            board[rowPos-1][x] = null;
        };
    };
    return board
}


export function getGravitySpeed(score){
    const {speedList, min} = speedConfig;
    let speed = Math.floor(score/ 100);
    if (speed >= speedList.length ) return min;
    else return speedList[speed] * 1000;
}


export function dropBlocks(selectedBlocks, isPenalty, board, score ){
    

    const speed = getGravitySpeed(score);
    selectedBlocks.forEach(coord => {
        const {y, x} = coord;
        board[y][x] = null;
    })
    if(isPenalty){
        board[0].forEach((x, index) => {
            if( x != null) return;
            else{
            board[0][index] = randomChoice(9,1);
            }
        })
    }
    
    return board;
}

export function dropRandomBlock(board){
    board[0][randomChoice(8)] = randomChoice(9,1);
    return board;
}


