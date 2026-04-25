import React from "react";
import { Board } from "../../components/game/Board";
import { PenaltyIndicator } from "../../components/game/PenaltyIndicator";
import { InfoDisplay } from "../../components/game/InfoDisplay";
import { SelectionBar } from "../../components/game/SelectionBar";

export const GameScreen = () =>{
    return <Board/>
    // return (
    //     <>
    //         <Board/>
    //         <PenaltyIndicator/>
    //         <InfoDisplay/>
    //         <SelectionBar/>
    //     </>
    // )
}

