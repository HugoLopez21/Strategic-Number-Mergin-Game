import React from "react";
import {View, Text } from 'react-native';
import { useGameContext } from "../../context/context";



export const ScoreDisplay = () =>{
    const {score} = useGameContext();
    return(
        <View>
            <Text>
                SCORE: {score}
            </Text>
        </View>
    )
}

