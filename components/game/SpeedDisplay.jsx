import React from "react";
import {View, Text } from 'react-native';
import { useGameContext } from "../../context/context";

export const SpeedDisplay = () =>{
    const {speed} = useGameContext();
    return (
        <View>
            <Text>
                SPEED: {speed / 1000}
            </Text>
        </View>
    )
}
