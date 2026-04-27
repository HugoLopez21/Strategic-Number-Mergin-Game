import React from "react";
import {View, Text } from 'react-native';
import { useGameContext } from "../../context/context";
import { infoStyles } from "../../styles/components/InfoDisplayStyles";
export const TargetNumber = () =>{
    const {targetNumber} = useGameContext();
    return (
        <View style={[infoStyles.box, infoStyles.targetBox]}>
            <Text style={infoStyles.label}>TARGET:</Text> 
            <Text style={infoStyles.value}>{targetNumber}</Text>
        </View>
    )
}

