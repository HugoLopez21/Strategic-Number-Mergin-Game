import { speedConfig } from "../constants/gameConfig";

function gravityDrop(board, speed){
    let moved = true;
    while(moved){
        moved = false;
        for(let y = rows-1; y> 0; y--){
            for (let x = 0; x< columns;x++){
                let currentCell = board[y][x]
                let topCell = board[y-1][x]
                if (currentCell === null && 
                    typeof topCell === "number"){
                    moved = true;
                    board[y][x] = topCell;
                    board[y-1][x] = null;
                }
            }
        }
    }
    return board
}


function getGravitySpeed(score){
    const {speedList, min} = speedConfig;
    let speed = Math.floor(score/ 100);
    if (speed >= speedList.length ) return min;
    else return speedList[speed] * 1000;
}


function dropNewBlocks(isPenalty, sumedBlocks, board, score ){
    sumedBlocks.forEach(coord => {
        const x = coord;
        if(typeof board[0][x] != null) continue;
        else{
            board[0][x] = Math.floor(Math.random() * 9) + 1;
        }
    });
    speed = getGravitySpeed(score);
    gravityDrop(board, speed);
    
    if(isPenalty){
        board[0].forEach(x => {
            if(typeof x != null) continue;
            else{
            board[0][x] = Math.floor(Math.random() * 9) + 1;
            }
        })
        gravityDrop(board, speed);
    }
    
}


