import { create } from 'zustand';
import {isPenalty, matchScore, selectedBlocksToNums} from '../logic/scoringLogic'
import {getGravitySpeed, dropBlocks, gravityDrop} from '../logic/blockDropping'
import { initializeBoard, checkGameOver } from '../logic/boardLogic';
import { getTargetNumber, getAdjacency } from '../logic/targetLogic';
import { getScore } from '../logic/scoringLogic';
import { checkAdjacency } from '../logic/adjacencyLogic';
export const useGameContext = create((set, get) => ({
    score: 0,
    isGameOver: false,
    speed: 5000,
    selectedBlocks: [],
    board: [],
    targetNumber: 0,
    penalties: 0,
    prevSum: 0,
    
    setCurrentSum: (isClicked, coords) =>{
        console.log(isClicked)
        const {prevSum, board,} = get();
        const {y,x} = coords;
        const num = board[y][x];
        const newSum = isClicked ? prevSum + num : prevSum - num
        set({prevSum: newSum})
    },

    addScore: (points) => {
        const newScore = get().score + points;
        const newSpeed =  getGravitySpeed(newScore);
        set({ score: newScore, speed: newSpeed });
    },

    setTargetNumber: () =>{
        const {board, targetNumber} = get();
        const newTargetNumber = getTargetNumber(board);
        set({targetNumber: newTargetNumber});
    },

    addSelectedBlock: (coords, isClicked) =>  {

        const {selectedBlocks, setCurrentSum,} = get();
        let isAdjacent = null;
        if(selectedBlocks.length > 0){
            const prevCoords = selectedBlocks.at(-1);
            isAdjacent = checkAdjacency(prevCoords, coords)
        };
    
        if (isAdjacent || selectedBlocks.length === 0){
            const newSelectedBlocks = [...selectedBlocks, coords];
            setCurrentSum(isClicked,coords);
            set({ selectedBlocks: newSelectedBlocks});
        };
    },

    removeBlock: (coords, isClicked) =>{
        const {selectedBlocks, setCurrentSum} = get();
        const newSelectedBlocks = selectedBlocks.filter(currCoords => {
            return currCoords === coords;
        })
        setCurrentSum(isClicked,coords);
        set({ selectedBlocks: newSelectedBlocks });

    },

    addPenalty: () =>{
        const {penalties, board, isGameOver} = get();
        let newPenalties = null;
        let setIsGameOver = false;
        if(isPenalty(penalties)){ 
            setIsGameOver = checkGameOver(board);
            newPenalties = 0;
        }else{
            newPenalties = penalties + 1;
        }
        set({penalties: newPenalties, isGameOver : setIsGameOver});
        
    },

    confirmMove: () =>{
        const {
                selectedBlocks, 
                addPenalty,
                targetNumber, 
                addScore,
                board,
                score,
                prevSum,
                penalties,
            } = get();

        const selectedNums = selectedBlocksToNums(board, selectedBlocks);
        const moveResult = matchScore(targetNumber, prevSum);
        if (moveResult){
            const newBoard = 
                dropBlocks(selectedBlocks, false, board, score);
            
            addScore(getScore(selectedNums));
            set({board: newBoard, selectedBlocks: [], prevSum: 0});
        }else{
            addPenalty();
            const newBoard = 
                dropBlocks(selectedBlocks, isPenalty(penalties), board, score);
            set({board: newBoard, selectedBlocks: [], prevSum: 0});
        }
        
    },

    initGame: () =>{
        const newBoard = initializeBoard();
        const newTarget = getTargetNumber(newBoard);
        set({board: newBoard, targetNumber: newTarget});
    },

    endGame: () =>{
        const {
            board, 
            score, 
            isGameOver, 
            speed, 
            selectedBlocks, 
            targetNumber, 
            penalties
        } = get();
        set({
            board: [],
            score: 0, 
            isGameOver: true, 
            speed: 5000, 
            selectedBlocks: [], 
            targetNumber: 0,
            penalties: 0,
        })
    }
    

    
}));