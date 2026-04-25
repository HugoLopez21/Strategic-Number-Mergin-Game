import React from "react";
import {View, Text, Button } from 'react-native'
import { useGameContext } from "../../context/context";
import { useNavigation } from "@react-navigation/native";
export const MenuScreen = () =>{
    const { initGame } = useGameContext();
    const navigation = useNavigation();

    const handleStart = () => {
        initGame();
        navigation.navigate("Game");
    }

    return (
        <View>
            <Button title="Play" onPress={handleStart} />
        </View>
    )
}

