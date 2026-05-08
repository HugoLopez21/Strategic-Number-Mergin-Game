import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useGameContext } from "../../context/context";
import { useNavigation } from "@react-navigation/native";
import { menuStyles } from "../../styles/screens/MenuScreenStyles";
import { LeaderboardScreen } from "./LeaderboardScreen";

export const MenuScreen = () => {
    const { initGame, saveUsername } = useGameContext();
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [rulesVisible, setRulesVisible] = useState(false);

    const handleStart = () => {
        if(username.trim() === '') return;
        initGame();
        saveUsername(username);
        navigation.navigate("Game");
    }

    return (
        <View style={menuStyles.container}>
            <Text style={menuStyles.title}>NUMERGE</Text>

            <TextInput
                style={menuStyles.input}
                placeholder="Enter your username"
                placeholderTextColor="#a0a0a0"
                value={username}
                onChangeText={setUsername}
            />

            <TouchableOpacity style={menuStyles.button} onPress={handleStart}>
                <Text style={menuStyles.buttonText}>PLAY</Text>
            </TouchableOpacity>

            <TouchableOpacity style={menuStyles.rulesButton} onPress={() => setRulesVisible(true)}>
                <Text style={menuStyles.rulesButtonText}>HOW TO PLAY</Text>
            </TouchableOpacity>

            <LeaderboardScreen/>

            <Modal visible={rulesVisible} transparent animationType="fade">
                <View style={menuStyles.modalOverlay}>
                    <View style={menuStyles.modalContainer}>
                        <Text style={menuStyles.modalTitle}>HOW TO PLAY</Text>
                        <ScrollView>
                            <Text style={menuStyles.modalText}>🎯 Match the target number by selecting adjacent blocks.</Text>
                            <Text style={menuStyles.modalText}>🔗 Select between 2 and 4 blocks forming a chain.</Text>
                            <Text style={menuStyles.modalText}>↔️ Blocks can be adjacent horizontally, vertically or diagonally.</Text>
                            <Text style={menuStyles.modalText}>❌ 3 wrong moves = penalty: new blocks drop in all columns.</Text>
                            <Text style={menuStyles.modalText}>💀 Game over if any column reaches the top.</Text>
                            <Text style={menuStyles.modalText}>⚡ Speed increases every 100 points.</Text>
                        </ScrollView>
                        <TouchableOpacity style={menuStyles.button} onPress={() => setRulesVisible(false)}>
                            <Text style={menuStyles.buttonText}>CLOSE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}