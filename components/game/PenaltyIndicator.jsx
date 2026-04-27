import React from "react";
import {View, Text } from 'react-native';
import { useGameContext } from "../../context/context";
export const PenaltyIndicator = () =>{
    const {penalties} = useGameContext();

    return(
        <View>
            <Text>{penalties}</Text>
        </View>
    )
}

