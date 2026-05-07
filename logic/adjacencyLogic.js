// game logic for check adjecency of selected blocks

export function checkAdjacency(selectedBlocks, currentCoord, ){
    const {y: currY, x: currX} = currentCoord;
    const adjacency = selectedBlocks.map(coord =>{
        const {y: prevY, x: prevX} = coord
        return Math.abs(prevY - currY) <= 1 && 
        Math.abs(prevX - currX) <= 1;
    })
    return adjacency.includes(true) ? true : false
}