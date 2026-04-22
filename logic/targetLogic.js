

function getTargetNumber(board){
    let startPoint = null
    let discardedCoords = []
    const adjacencyLength = Math.floor(Math.random() * 3) + 1
    const adjacencyChain = []
    while (startPoint === null){
        const { y, x } = getRandomCoordinate();
        
        if (discardedCoords.some(coord => coord.y === y && coord.x === x)) {
            continue; 
        }        
        
        if (typeof board[y][x] === "number"){
            
            if (getAdjacency(y,x, board).length > 0){
                startPoint = {y,x}
                console.log(y, x)
            }
        }   
        discardedCoords.push({y,x})
    }
    
    adjacencyChain.push(startPoint)
    let i = 0
    while (i < adjacencyLength ) {
        const { y, x } = adjacencyChain[i];
        const available = getAdjacency(y, x, board)
            .filter(coord => !discardedCoords.some(c => c.y === coord.y && c.x === coord.x));

        if (available.length === 0) break;

        adjacencyChain.push(available[randomChoice(available.length)]);
        i++;
    }

    console.log("adjacency:")
    console.log(adjacencyChain)
    const targetNumber = adjacencyChain.reduce((acc, coord) =>{
        const {y,x} = coord;
        return acc + board[y][x]
    }, 0)
    console.log(targetNumber)
    return targetNumber;
}



const getAdjacency = (y,x, board) =>{
    const nearbyCoords = getNearbyCoords(y,x)
    let availableAdjacencyCoords = []
    nearbyCoords.forEach(({y,x}) => {
        if (typeof board[y][x] === "number"){
            availableAdjacencyCoords.push({y,x})
            
        }
    })
    return availableAdjacencyCoords
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
    //Row
    const y = Math.floor(Math.random() *  rows)

    //Column
    const x = Math.floor(Math.random() * columns)

    return {y, x};
}


const randomChoice = (max) =>{
    return Math.floor(Math.random() * max)
}