export function checkAdjacency(prevCoord, currentCoord){
    console.log(prevCoord, currentCoord)
    const adjacency = false;
    const {y: prevY, x: prevX} = prevCoord;
    const {y: currY, x: currX} = currentCoord;
    return Math.abs(prevY - currY) <= 1 && 
    Math.abs(prevX - currX) <= 1;
}