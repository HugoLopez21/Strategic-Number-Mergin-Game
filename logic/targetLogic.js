//Game logic for choose the target number of the game


import {gridConfig} from '../constants/gameConfig'
const {rows, columns} = gridConfig;


/**
 * Generate a objective number based on one of the adjacents cells
 * @param {Array<Array>} board - Board matrix.
 * @returns {number}
 */

export function getTargetNumber(board){
    //Pick a random coordinate and check if 
    // it's a number and has at least one other number around it
    let startPoint = null;
    let discardedCoords = [];
    
    while (startPoint === null){
        const { y, x } = getRandomCoordinate();
        
        if (discardedCoords.some(coord => coord.y === y && coord.x === x)) {
            continue; 
        }        
        
        if (typeof board[y][x] === "number"){
            
            if (getAdjacency(y,x, board).length > 0){
                startPoint = {y,x};
            }
        }   
        discardedCoords.push({y,x})
    };
    
    const adjacencyLength = Math.floor(Math.random() * 3) + 1;
    const adjacencyChain = [];
    adjacencyChain.push(startPoint);
    let i = 0;

    /*
        Starting from the selected coordinate as the starting point, 
        randomly select how many adjacent cells will be part of the sum, 
        then traverse the surrounding cells to add them to the list
    */ 
    while (i < adjacencyLength ) {

        const { y, x } = adjacencyChain[i];
        const available = getAdjacency(y, x, board)
            .filter(coord => !discardedCoords.some(c => c.y === coord.y && c.x === coord.x));

        if (available.length === 0) break;

        adjacencyChain.push(available[randomChoice(available.length)]);
        i++;
    }

    const targetNumber = adjacencyChain.reduce((prev, coord) =>{
        const {y,x} = coord;
        return prev + board[y][x];
    }, 0);
    return targetNumber;
}


/**
 * Check the nearby coords in search of a block with a number
 * @returns {Array<Array>} array with the coords of cell availables
 */

export const getAdjacency = (y,x, board) =>{
    const nearbyCoords = getNearbyCoords(y,x);
    let availableAdjacencyCoords = [];
    nearbyCoords.forEach(({y,x}) => {
        if (typeof board[y][x] === "number"){
            availableAdjacencyCoords.push({y,x});
            ;
        }
    });
    return availableAdjacencyCoords;
}

function getNearbyCoords(y, x) {
    return [
        { y: y-1, x: x-1 }, 
        { y: y-1, x: x }, 
        { y: y-1, x: x+1 },
        { y: y, x: x-1 },                     
        { y: y, x: x+1 },
        { y: y+1, x: x-1 }, 
        { y: y+1, x: x }, 
        { y: y+1, x: x+1 },
    ].filter(coord => 
        coord.y >= 0 && coord.y < rows &&
        coord.x >= 0 && coord.x < columns
    );
}
const getRandomCoordinate = () =>{
    const y = randomChoice(rows);
    const x = randomChoice(columns);
    return {y, x};
};


export const randomChoice = (max, min = null) =>{
    if(min === null)
        return Math.floor(Math.random() * max);
    else
        return Math.floor(Math.random() * max) + min;
};