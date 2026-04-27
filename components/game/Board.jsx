import React, { useEffect } from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { useGameContext } from "../../context/context";
import { boardStyles } from "../../styles/components/BoardStyles";
import { globalStyles } from "../../styles/globalStyles";
import { numbersMap } from "../../constants/gameConfig";

export const Board = () =>{
    const { board, speed} = useGameContext();
    return (
        <View style={boardStyles.container}>
            {board.map((row, y) =>{
                return (
                    <View key={y} style={boardStyles.row}>
                        {row.map((cell, x) =>{
                            return (
                                <Block
                                    key={`${y}-${x}`} 
                                    num={board[y][x]}
                                    coords={{y,x}}
                                />
                            )
                        })}
                    </View>
                )
            })}
        </View>
    )
}



const Block = (props) =>{
    const [isClicked, setIsClicked] = useState(false);
    const { addSelectedBlock, removeBlock, setCurrentSum } = useGameContext();
    const clickBlock = () =>{
        const newIsClicked = !isClicked
        setIsClicked(newIsClicked)
        if(newIsClicked){
            addSelectedBlock(props.coords);
            setCurrentSum(newIsClicked, props.coords);
        }else{
            removeBlock(props.coords);
            setCurrentSum(newIsClicked, props.coords);
        }
    }
    const isNum = props.num !== null;
    return (
        <TouchableOpacity 
            onPress={clickBlock} 
            style={
                [
                    globalStyles.centeredText,
                    isClicked ? boardStyles.blockSelected : boardStyles.block,
                    boardStyles.block,
                    isNum ? {backgroundColor : numbersMap[props.num]?.color} : boardStyles.blockEmpty,
                ]}>
            <View>
                <Text style={boardStyles.blockText}>{props.num}</Text>
            </View>
        </TouchableOpacity>
    )
}

