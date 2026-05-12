import {React, useEffect, useState} from "react";
import { Board } from "../../components/game/Board";
import { PenaltyIndicator } from "../../components/game/PenaltyIndicator";
import { InfoDisplay } from "../../components/game/InfoDisplay";
import { SelectionBar } from "../../components/game/SelectionBar";
import { View } from "react-native";
import { colors } from "../../styles/globalStyles";
import { gameScreenStyles } from "../../styles/screens/GameScreenStyles";
import { useGameContext } from "../../context/context";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AlertMessage } from "../../components/game/AlertMessage";
export const GameScreen = () =>{
    const {isGameOver} = useGameContext();
    const navigation = useNavigation();

    useEffect(() => {
        if(isGameOver) {
            setTimeout(() =>{
                navigation.navigate('GameOver');
            }, 1000)
        }
    }, [isGameOver]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={gameScreenStyles.container}>
                <InfoDisplay/>
                <PenaltyIndicator/>
                <AlertMessage/>
                <Board/>
                <SelectionBar/>
            </SafeAreaView>
        </SafeAreaProvider>    
    )
}

