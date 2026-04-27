import React from "react";
import { ScoreDisplay, SpeedDisplay, TargetNumber } from "./ScoreDisplay";
import { View } from "react-native-web";
export const InfoDisplay = () =>{
    return (
        <>
            <View>
                <ScoreDisplay/>
                <SpeedDisplay/>
                <TargetNumber/>
            </View>
            
        </>
    )
}

