import { create } from 'zustand';
import {getPlayerSum, isPenalty, matchScore, selectedBlocksToNums} from '../logic/scoringLogic'
import {getGravitySpeed, gravityDrop, dro, dropBlocks} from '../logic/blockDropping'
import { initializeBoard, gameOver } from '../logic/boardLogic';
import { getTargetNumber, getAdjacency } from '../logic/targetLogic';
export const useGameContext = create((set) => ({
    score: 0,
    isGameOver: false,
    speed: 5000,
    selectedBlocks: [],
    board: [],
    targetNumber: 0,
    penalties: 0,

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

    addSelectedBlock: (coords) =>  {

        const {selectedBlocks} = get();
        let isAdjacent = null
        if(selectedBlocks.length > 0){
            isAdjacent = getAdjacency(selectedBlocks.at(-1), coords );
        };

        if (isAdjacent || selectedBlocks.length === 0){
            const newSelectedBlocks = [...selectedBlocks, coords];
            set({ selectedBlocks: newSelectedBlocks });
        };
        
        
    },

    removeBlock: (coords) =>{
        const {selectedBlocks} = get();
        const newSelectedBlocks = selectedBlocks.filter(currCoords => {
            return currCoords !== coords;
        })
        set({ selectedBlocks: newSelectedBlocks });
    },

    addPenalty: () =>{
        const {penalties} = get();
        let newPenalties = null;
        if(isPenalty(penalties)){ 
            newPenalties = 0
        }else{
            newPenalties = penalties + 1
        }
        set({penalties: newPenalties})
        
    },

    confirmMove: () =>{
        const {
                selectedBlocks, 
                addPenalty,
                targetNumber, 
                addScore,
                board,
                score,
            } = get();

        const selectedNums = selectedBlocksToNums(board, selectedBlocks)
        const moveResult = matchScore(targetNumber, selectedNums);
        if (moveResult){
            const newBoard = 
                dropBlocks(false, selectedBlocks, board, score);
            addScore(getScore(selectedNums));
            set({board: newBoard})
        }else{
            const newBoard = 
                dropBlocks(true, selectedBlocks, board, score);
            set({board: newBoard})
        }
        
    },

    initGame: () =>{
        
    },

    endGame: () =>{

    }

    
}));