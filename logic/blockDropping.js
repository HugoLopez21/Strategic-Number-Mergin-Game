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


