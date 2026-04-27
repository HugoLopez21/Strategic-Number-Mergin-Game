import React from "react";
import { Board } from "../../components/game/Board";
import { PenaltyIndicator } from "../../components/game/PenaltyIndicator";
import { InfoDisplay } from "../../components/game/InfoDisplay";
import { SelectionBar } from "../../components/game/SelectionBar";
import { View } from "react-native-web";

export const GameScreen = () =>{
    return (
        <View>
            <Board/>
            <PenaltyIndicator/>
            <InfoDisplay/>
            <SelectionBar/>
        </View>
    )
}

