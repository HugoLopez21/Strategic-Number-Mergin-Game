// Game logic for the generation of the  intial board

import { filledRows, gridConfig,numbersMap  } from "../constants/gameConfig";
import { randomChoice } from "./targetLogic";
const {rows, columns } = gridConfig;

export function initializeBoard(){
    let board = []
    for (let y = 0; y < rows; y++){
        board.push([]);
        for (let x = 0; x < columns; x++){
            // fill de last 3 rows with random numbers from 1 to 9 
            if (y < (rows - filledRows)){
                board[y].push(null);
            }else{
                board[y].push(randomChoice(9,1));
            };
        };
    };

    return board;
}

export function checkGameOver(board){
    let isGameOver = false;
    board[0].forEach(cell => {
        if (cell != null) isGameOver = true;
    })
    return isGameOver;
}
