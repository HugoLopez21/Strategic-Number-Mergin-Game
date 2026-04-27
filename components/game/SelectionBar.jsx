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
    const {selectedBlocks, board} = useGameContext();
    const selectedNums = selectedBlocksToNums(board, selectedBlocks);
    const sum = selectedNums.reduce((prev, num) =>{
        return prev + num;
    },0)
    return (
        <View style={selectionStyles.combination}>
            <Text>SELECTION:</Text>
            {selectedNums.map(num => {
                return <Text style={selectionStyles.num}>{num} + </Text>
            })}
            <Text style={selectionStyles.num}>={sum} </Text>
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