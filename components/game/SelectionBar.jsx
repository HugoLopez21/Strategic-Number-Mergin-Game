import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { useGameContext } from "../../context/context";
import { selectedBlocksToNums } from "../../logic/scoringLogic";
import { selectionStyles } from "../../styles/components/SelectionBarStyles";

export const SelectionBar = () =>{
    return(
        <View style={selectionStyles.container}>
            <SelectedCombination/>
            <ConfirmMoveButton/>
        </View>
    )
}


const SelectedCombination = () =>{
    const {selectedBlocks, board, prevSum} = useGameContext();
    const selectedNums = selectedBlocksToNums(board, selectedBlocks);
    return (
        <View style={selectionStyles.combination}>
            <Text style={selectionStyles.numText}>SELECTION:</Text>
            {selectedNums.map(num => {
                return <Text style={selectionStyles.numText}>{num} +</Text>
            })}
            <Text style={selectionStyles.numText}>= {prevSum} </Text>
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