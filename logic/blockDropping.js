function gravityDrop(board, speed){
    board[3][0] = 2;
    board[8][0] = null;
    console.table(board)
    for(let y = rows-1; y>= 0; y--){
        for (let x = 0; x< columns;x++){
            if (board[y][x] === null){
                for(let j = y; j> 0; j--){
                    if (board[j][x] === null){
                        if(board[j-1][x] != null){
                            board[j][x] = board[j-1][x];
                            board[j-1][x] = null;
                            j+=2;
                        }
                    }
                }
            }
        }
    }
    return board
}

function gravityDrop(board, speed){
    board[3][0] = 2;
    board[8][0] = null;
    console.table(board)
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


