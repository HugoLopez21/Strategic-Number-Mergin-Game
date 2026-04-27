import React from "react";
import {View, Text } from 'react-native';
import { useGameContext } from "../../context/context";
import { infoStyles } from "../../styles/components/InfoDisplayStyles";
export const SpeedDisplay = () =>{
    const {speed} = useGameContext();
    return (
        <View style={infoStyles.box}>
            <Text style={infoStyles.label}>SPEED:</Text> 
            <Text style={infoStyles.value}>{speed / 1000} seconds</Text>
        </View>
    )
}
