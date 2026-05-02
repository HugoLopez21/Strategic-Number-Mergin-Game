import React, { useContext } from "react";
import { View, Text } from "react-native-web";
import { useGameContext } from "../../context/context";
import { gameOverStyles } from "../../styles/screens/GameOverScreenStyles";
import { Touchable, TouchableOpacity } from "react-native";
export const GameOverScreen = () =>{
    const {score} = useGameContext();
    const handleReturnMenu = () =>{
        navigation.navigate("Menu");
    }
    return (
        <View style={ gameOverStyles.container}>
            <Text style={gameOverStyles.title}>
                Game Over!
            </Text>
            <text style={gameOverStyles.score}>
                Score: {score}
            </text>
            <TouchableOpacity style={gameOverStyles.button}>
                <Text 
                    style={gameOverStyles.buttonText} 
                    onPress={handleReturnMenu}> 
                    Return to menu
                </Text>
            </TouchableOpacity>
        </View>
    )
}

