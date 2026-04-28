import { speedConfig, gridConfig } from "../constants/gameConfig";
import { randomChoice } from "./targetLogic";
const {rows, columns} = gridConfig;

export function gravityDrop(board, speed){
    let moved = true;
    while(moved){
        moved = false;
        for(let y = rows-1; y> 0; y--){
            for (let x = 0; x< columns;x++){
                let currentCell = board[y][x];
                let topCell = board[y-1][x];
                if (currentCell === null && 
                    typeof topCell === "number"){
                    moved = true;
                    board[y][x] = topCell;
                    board[y-1][x] = null;
                };
            };
        };
    };
    return board;
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
    board = gravityDrop(board, speed);
    if(isPenalty){
        board[0].forEach((x, index) => {
            if( x != null) return;
            else{
            board[0][index] = Math.floor(Math.random() * 9) + 1;
            }
        })
        board = gravityDrop(board, speed);
    }
    
    return board;
}

export function dropRandomBlock(board, speed){
    board[0][randomChoice(8)] = randomChoice(9,1);
    board = gravityDrop(board, speed);
    return board;
}


