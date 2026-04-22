import { gridConfig } from "../constants/gameConfig";
import {rows, columns } from gridConfig;
import { numbersMap } from "../constants/gameConfig";

function initializeBoard(){
    let board = []
    for (let y = 0; y < rows; y++){
        board.push([]);
        for (let x = 0; x < columns; x++){
            // fill de last 3 rows with random numbes from 1 to 9 
            if (y < (rows - 3)){
                board[y].push(x);
            }else{
                board[y].push(Math.floor(Math.random() * 9) + 1)
            }
        }
    }

    return board
}

