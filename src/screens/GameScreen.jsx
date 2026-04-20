import React from "react";
import { Board } from "../../components/game/Board";
import { PenaltyIndicator } from "../../components/game/PenaltyIndicator";
import { infoDisplay } from "../../components/game/infoDisplay";
import { SelectionBar } from "../../components/game/SelectionBar";

const GameScreen = () =>{
    return (
        <>
            <Board/>
            <PenaltyIndicator/>
            <InfoDisplay/>
            <SelectionBar/>
        </>
    )
}

export default GameScreen;