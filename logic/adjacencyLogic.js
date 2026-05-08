// game logic for check adjecency of selected blocks

/**
 * Check if the current coordinate is adjacent to any of the previously selected blocks.
 * It uses the absolute difference between coordinates to determine if the distance 
 * in any direction around the coords is 1 or less.
 * * @param {Array} selectedBlocks - List of already selected coordinates
 * @param {Object} currentCoord - The coordinate to validate {y, x}
 * @returns {boolean} - True if at least one selected block is within a 1-cell radius.
 */
export function checkAdjacency(selectedBlocks, currentCoord, ){
    const {y: currY, x: currX} = currentCoord;
    const adjacency = selectedBlocks.map(coord =>{
        const {y: prevY, x: prevX} = coord
        return Math.abs(prevY - currY) <= 1 && 
        Math.abs(prevX - currX) <= 1;
    })
    return adjacency.includes(true) ? true : false
}