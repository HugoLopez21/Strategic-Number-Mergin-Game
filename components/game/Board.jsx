import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { useGameContext } from "../../context/context";


export const Board = () =>{
    const { board } = useGameContext();
    return (
        <View>
            {board.map((row, y) =>{
                return (
                    <View key={y}>
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
    const { addSelectedBlock, removeBlock } = useGameContext();
    const clickBlock = () =>{
        const newIsCLicked = !isClicked
        setIsClicked(newIsCLicked)
        if(newIsCLicked){
            removeBlock(props.coords);
        }else{
            addSelectedBlock(props.coords);
        }
    }

    return (
        <TouchableOpacity onPress={clickBlock}>
            <View>
                <Text>{props.num}</Text>
            </View>
        </TouchableOpacity>
    )
}

