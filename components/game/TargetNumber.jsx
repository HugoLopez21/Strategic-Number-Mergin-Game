import React from "react";
import {View, Text } from 'react-native';
import { useGameContext } from "../../context/context";

export const TargetNumber = () =>{
    const {targetNumber} = useGameContext();
    return (
        <View>
            <Text>
                TARGET: {targetNumber}
            </Text>
        </View>
    )
}

