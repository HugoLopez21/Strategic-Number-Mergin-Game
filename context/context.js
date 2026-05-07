import { create } from 'zustand';
import {isPenalty, isCorrectSum, selectedBlocksToNums} from '../logic/scoringLogic'
import {getGravitySpeed, dropBlocks, gravityDrop, dropRandomBlock, applyGravityStep} from '../logic/blockDropping'
import { initializeBoard, checkGameOver } from '../logic/boardLogic';
import { getTargetNumber, getAdjacency } from '../logic/targetLogic';
import { getScore } from '../logic/scoringLogic';
import { checkAdjacency } from '../logic/adjacencyLogic';
import { gridConfig } from '../constants/gameConfig';
export const useGameContext = create((set, get) => ({
    score: 0,
    isGameOver: false,
    speed: 5000,
    selectedBlocks: [],
    board: [],
    targetNumber: 0,
    penalties: 0,
    currentSum: 0,
    
    setCurrentSum: (isClicked, coords) =>{
        const {currentSum, board,} = get();
        const {y,x} = coords;
        const num = board[y][x];
        const newSum = isClicked ? currentSum + num : currentSum - num
        set({currentSum: newSum})
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
        
        if(selectedBlocks.length > 0 && selectedBlocks.length < 4){
            const prevCoords = selectedBlocks.at(-1);
            isAdjacent = checkAdjacency(selectedBlocks, coords)
        };
    
        if (isAdjacent || selectedBlocks.length === 0){
            const isAdjacentToFirst = selectedBlocks.length > 0 && checkAdjacency([selectedBlocks.at(0)], coords);
            const newSelectedBlocks = isAdjacentToFirst 
                ? [coords, ...selectedBlocks]
                : [...selectedBlocks, coords];
            setCurrentSum(isClicked,coords);
            set({ selectedBlocks: newSelectedBlocks});
        };
    },

    removeBlock: (coords, isClicked) =>{
        const {selectedBlocks, setCurrentSum} = get();
        const isSame = (a, b) => a && b && a.x === b.x && a.y === b.y;

        const first = selectedBlocks.at(0);
        const last = selectedBlocks.at(-1);

        if (!isSame(first, coords) && !isSame(last, coords)) {
            return;
        }
        const newSelectedBlocks = selectedBlocks.filter(currCoords => {
            return !(currCoords.y === coords.y && currCoords.x === coords.x);
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

    dropNewBlock: () =>{
        const {board, speed} = get();
        const updatedBoard = dropRandomBlock(board)
        set({board : updatedBoard});
    },

    applyGravity: () => {
        const { board, isGameOver } = get();
        const boardCopy = board.map(row => [...row]);
        let moved = false;
        for (let y = gridConfig.rows - 1; y > 0; y--) {
            for (let x = 0; x < gridConfig.columns; x++) {
                if (boardCopy[y][x] === null && boardCopy[y - 1][x] !== null) {
                    boardCopy[y][x] = boardCopy[y - 1][x];
                    boardCopy[y - 1][x] = null;
                    moved = true;
                }
            }
        }

        if (moved) {
            set({ board: boardCopy });
        }
        if (checkGameOver(boardCopy)) {
            set({ isGameOver: true });
        }
    },

    confirmMove: () =>{
        const {
                selectedBlocks, 
                addPenalty,
                targetNumber, 
                addScore,
                board,
                score,
                currentSum,
                penalties,
                setTargetNumber,
            } = get();
        
        const selectedNums = selectedBlocksToNums(board, selectedBlocks);

        //Añadir mensaje en pantalla indicando que no se puede realizar un movimiento con menos de 2 bloques
        if(selectedNums.length < 2) return console.log('turno no ejecutado')
        
            const moveResult = isCorrectSum(targetNumber, currentSum);
        if (moveResult){
            const newBoard = 
                dropBlocks(selectedBlocks, false, board, score);
        
            addScore(getScore(selectedNums));
            setTargetNumber();
            set({board: newBoard, selectedBlocks: [], currentSum: 0});
        }else{
            addPenalty();
            const newBoard = 
                dropBlocks(selectedBlocks, isPenalty(penalties), board, score);
            set({board: newBoard, selectedBlocks: [], currentSum: 0});
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