// Board and blocks component on the screen

import React, { useEffect, useRef } from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { useGameContext } from "../../context/context";
import { boardStyles } from "../../styles/components/BoardStyles";
import { globalStyles } from "../../styles/globalStyles";
import { numbersMap, gridConfig } from "../../constants/gameConfig";
import { dropRandomBlock } from "../../logic/blockDropping";
export const Board = () =>{
    const { board, speed, dropNewBlock, applyGravity} = useGameContext();
    const gravityIntervalRef = useRef(null);
    const dropIntervalRef = useRef(null);
        useEffect(() => {
            const gravityInterval = setInterval(() => {
                applyGravity();
            }, speed / gridConfig.rows);

            const dropInterval = setInterval(() => {
                dropNewBlock();
            }, speed);

            return () => {
                clearInterval(gravityInterval);
                clearInterval(dropInterval);
            };
        }, [speed]);
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



export const Block = (props) =>{
    const { addSelectedBlock, selectedBlocks, removeBlock, setCurrentSum} = useGameContext();
    const isClicked = selectedBlocks.some(c => c.y === props.coords.y && c.x === props.coords.x);
    const clickBlock = () =>{
        if(!isClicked){
            addSelectedBlock(props.coords, true);
        }else{
            removeBlock(props.coords, false);
        }
        
    }
    const isNum = props.num !== null;
    return (
        <TouchableOpacity 
            onPress={clickBlock} 
            style={[
                globalStyles.centeredText,
                boardStyles.block, 
                isNum ? {backgroundColor: numbersMap[props.num]?.color} : boardStyles.blockEmpty, 
                isClicked && boardStyles.blockSelected 
            ]}
        >
            <View>
                <Text style={boardStyles.blockText}>{props.num}</Text>
            </View>
        </TouchableOpacity>
    )
}

