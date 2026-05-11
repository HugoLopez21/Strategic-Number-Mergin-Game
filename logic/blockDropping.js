// Game logic for block dropping mechanics and gravity simulation

import { speedConfig, gridConfig } from "../constants/gameConfig";
import { randomChoice } from "./targetLogic";
const {rows, columns} = gridConfig;


/**
 * Iterate the board starting from the last rows and changes the cells
 * @param {*} board 
 * @returns 
 */
export function applyGravityLogic(board) {
    const boardCopy = board.map(row => [...row]); 
    let moved = false;
    const rows = board.length;
    const columns = board[0].length;

    for (let y = rows - 1; y > 0; y--) {
        for (let x = 0; x < columns; x++) {
            // if the actual cell is  empy and the top has num
            if (boardCopy[y][x] === null && boardCopy[y - 1][x] !== null) {
                boardCopy[y][x] = boardCopy[y - 1][x];
                boardCopy[y - 1][x] = null;
                moved = true;
            }
        }
    }
    return { updatedBoard: boardCopy, moved };
}


export function getGravitySpeed(score){
    const {speedList, min} = speedConfig;
    let speed = Math.floor(score / 100);
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


