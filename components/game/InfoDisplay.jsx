import React from "react";
import { ScoreDisplay } from "./ScoreDisplay";
import {SpeedDisplay} from "./SpeedDisplay";
import {TargetNumber} from "./TargetNumber";
import { View } from "react-native";
import { infoStyles } from "../../styles/components/InfoDisplayStyles";
export const InfoDisplay = () =>{
    return (
        <View style={infoStyles.container}>
            <ScoreDisplay/>
            <SpeedDisplay/>
            <TargetNumber/>
        </View>
    )
}

