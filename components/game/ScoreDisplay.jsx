import React from "react";
import {View, Text } from 'react-native';
import { useGameContext } from "../../context/context";
import { infoStyles } from "../../styles/components/InfoDisplayStyles";

export const ScoreDisplay = () =>{
    const {score} = useGameContext();
    return(
        <View style={infoStyles.box}>
            <Text style={infoStyles.label}>SCORE:</Text> 
            <Text style={infoStyles.value}>{score}</Text>
        </View>
    )
}

