import { create } from 'zustand';

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
        const newSpeed = getGravitySpeed(newScore);
        set({ score: newScore, speed: newSpeed });
    },

    addSelectedBlock: (coords) =>  {

        const {selectedBlocks} = get();
        let isAdjacent = null
        if(selectedBlocks.length > 0){
            isAdjacent = checkAdjacency(selectedBlocks.at(-1), coords );
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
    }
 
}));