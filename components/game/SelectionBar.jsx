//Component to show on the screen the sum of the selected blocks

import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { useGameContext } from "../../context/context";
import { selectedBlocksToNums } from "../../logic/scoringLogic";
import { selectionStyles } from "../../styles/components/SelectionBarStyles";
import { numbersMap } from "../../constants/gameConfig";

export const SelectionBar = () =>{
    return(
        <View style={selectionStyles.container}>
            <SelectedCombination/>
            <ConfirmMoveButton/>
        </View>
    )
}


const SelectedCombination = () =>{
    const {selectedBlocks, board, currentSum} = useGameContext();
    const selectedNums = selectedBlocksToNums(board, selectedBlocks);
    return (
        <View style={selectionStyles.combination}>
            <Text style={selectionStyles.numText}>SELECTION:</Text>
            {selectedNums.map((num, index) => (
                <View key={index} style={[selectionStyles.miniBlock, {backgroundColor: numbersMap[num]?.color}]}>
                    <Text style={selectionStyles.miniBlockText}>{num}</Text>
                </View>
            ))}
            <Text style={selectionStyles.numText}>= {currentSum} </Text>
        </View>
        
    )
}


const ConfirmMoveButton = () =>{
    const {confirmMove} = useGameContext();
    return(
        <TouchableOpacity style={selectionStyles.confirmButton} onPress={confirmMove}>
            <Text style={selectionStyles.confirmText}>CONFIRM MOVE</Text>
        </TouchableOpacity>
    )
}