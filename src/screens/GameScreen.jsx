import React from "react";
import { Board } from "../../components/game/Board";
import { PenaltyIndicator } from "../../components/game/PenaltyIndicator";
import { InfoDisplay } from "../../components/game/InfoDisplay";
import { SelectionBar } from "../../components/game/SelectionBar";
import { View } from "react-native";
import { colors } from "../../styles/globalStyles";
import { gameScreenStyles } from "../../styles/screens/GameScreenStyles";

export const GameScreen = () =>{
    return (
        <View style={gameScreenStyles.container}>
            <InfoDisplay/>
            <PenaltyIndicator/>
            <Board/>
            <SelectionBar/>
        </View>
    )
}

