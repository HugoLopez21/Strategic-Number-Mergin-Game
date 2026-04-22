function matchScore(targetScore, selectedNums){
    const playerSum = selectedNums.reduce((prev, num) =>{
        return prev + num;
    }, 0);
    
    return playerSum === targetScore ? true : false;
    
}
