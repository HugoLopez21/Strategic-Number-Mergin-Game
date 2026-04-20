import React from "react";
import { ScoreDisplay, ScoreDisplay, TargetNumber } from "./ScoreDisplay";

const InfoDisplay = () =>{
    return (
        <>
            <ScoreDisplay/>
            <SpeedDisplay/>
            <TargetNumber/>
        </>
    )
}

export default InfoDisplay;