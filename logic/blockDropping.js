// Game logic for block dropping mechanics and gravity simulation

import { speedConfig, gridConfig } from "../constants/gameConfig";
import { randomChoice } from "./targetLogic";
const {rows, columns} = gridConfig;


/**
 * Iterate the selected row of the board matrix and interchange the values
 * in case of the cell above is a number and the one below is null
 * @param {Array<Array>} board - Board Matrix
 * @param {int} rowPos - current row position
 * @returns {Array<Array>} modified board
 */
export function applyGravityStep(board, rowPos){
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

//Generates random numbers in all of the cells of the first row
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
    const col = randomChoice(8);
    if (board[0][col] !== null) {
        return board; 
    }
    board[0][col] = randomChoice(9,1);
    return board;
}


