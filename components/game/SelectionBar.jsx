import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { useGameContext } from "../../context/context";
import { selectedBlocksToNums } from "../../logic/scoringLogic";

export const SelectionBar = () =>{
    return(
        <View>
            <SelectedCombination/>
            <ConfirmMoveButton/>
        </View>
    )
}


const SelectedCombination = () =>{
    const {selectedBlocks, borad} = useGameContext();
    const selectedNums = selectedBlocksToNums(board, selectedBlocks);
    const sum = selectedNums.reduce((prev, num) =>{
        return prev + num;
    },0)
    return (
        <View>
            <Text>SELECTION:</Text>
            {selectedNums.map(num => {
                return <Text>{num} + </Text>
            })}
            <Text>={sum} </Text>
        </View>
        
    )
}


const ConfirmMoveButton = () =>{
    const {confirmMove} = useGameContext();
    return(
        <TouchableOpacity onPress={confirmMove}>
            <Text>CONFIRM MOVE</Text>
        </TouchableOpacity>
    )
}