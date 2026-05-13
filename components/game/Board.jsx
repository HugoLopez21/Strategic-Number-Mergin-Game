// Board and blocks component on the screen

import React, { useEffect, useRef, useCallback } from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { useGameContext } from "../../context/context";
import { boardStyles } from "../../styles/components/BoardStyles";
import { globalStyles } from "../../styles/globalStyles";
import { numbersMap, gridConfig } from "../../constants/gameConfig";
import { dropRandomBlock } from "../../logic/blockDropping";
import { useIsFocused } from '@react-navigation/native';

export const Board = () =>{
    const isFocused = useIsFocused();
    const { 
        board, 
        speed, 
        dropNewBlock, 
        applyGravity, 
        isGameOver,
        addSelectedBlock,
        removeBlock,
        selectedBlocks,
    } = useGameContext();
    const addSelectedBlockCb = useCallback(addSelectedBlock, []);
    const removeBlockCb = useCallback(removeBlock, []);
    useEffect(() => {
        // The block move 1 position in the interval of the speed / the numbers of rows of the grid
        if (isGameOver || !isFocused) return;
    
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
    }, [speed, isGameOver, isFocused]);
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
                                    removeBlock={removeBlockCb}
                                    addSelectedBlock={addSelectedBlockCb}
                                    isClicked={selectedBlocks.some(c => c.y === y && c.x === x)}
                                />
                            )
                        })}
                    </View>
                )
            })}
        </View>
    )
}



export const Block = React.memo((props) =>{
    const {addSelectedBlock, removeBlock, isClicked} = props;
    // Check if the block is clicked
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
});

