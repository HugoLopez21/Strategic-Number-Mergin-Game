import React, { useContext } from "react";
import { View, Text } from "react-native";
import { useGameContext } from "../../context/context";
import { gameOverStyles } from "../../styles/screens/GameOverScreenStyles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const GameOverScreen = () =>{
    const {score} = useGameContext();
    const navigation = useNavigation();
    const handleReturnMenu = () =>{
        navigation.navigate("Menu");
    }
    return (
        <View style={ gameOverStyles.container}>
            <Text style={gameOverStyles.title}>
                Game Over!
            </Text>
            <Text style={gameOverStyles.score}>
                Your score: {score}
            </Text>
            <TouchableOpacity 
                style={gameOverStyles.button} 
                onPress={handleReturnMenu}>
                <Text style={gameOverStyles.buttonText}> 
                    Return to menu
                </Text>
            </TouchableOpacity>
        </View>
    )
}

