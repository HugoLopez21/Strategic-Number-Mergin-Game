import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { useGameContext } from "../../context/context";
import { boardStyles } from "../../styles/components/BoardStyles";
import { globalStyles } from "../../styles/globalStyles";
import { numbersMap, gridConfig } from "../../constants/gameConfig";
import { MotiView, AnimatePresence } from 'moti';

export const Board = () => {
    const { board, speed, updateBoard, applyGravity } = useGameContext();
    const gravityIntervalRef = useRef(null);
    const dropIntervalRef = useRef(null);

    useEffect(() => {
        const clear = () => {
            if (dropIntervalRef.current) clearInterval(dropIntervalRef.current);
            if (gravityIntervalRef.current) clearInterval(gravityIntervalRef.current);
        };
        clear();

        dropIntervalRef.current = setInterval(() => {
            updateBoard();
        }, speed);

        gravityIntervalRef.current = setInterval(() => {
            applyGravity();
        }, speed / gridConfig.rows);

        return clear;
    }, [speed, updateBoard, applyGravity]);

    return (
        <View style={boardStyles.container}>
            {board.map((row, y) => {
                return (
                    <View key={y} style={boardStyles.row}>
                        {row.map((cell, x) => {
                            return (
                                <Block
                                    // Mantenemos la key y-x para la estructura de la celda
                                    key={`${y}-${x}`} 
                                    num={cell}
                                    coords={{ y, x }}
                                />
                            )
                        })}
                    </View>
                )
            })}
        </View>
    )
}

export const Block = ({ num, coords }) => {
    const { addSelectedBlock, selectedBlocks, removeBlock } = useGameContext();
    
    const isClicked = selectedBlocks.some(c => c.y === coords.y && c.x === coords.x);
    const isNum = num !== null;

    const clickBlock = () => {
        if (!isNum) return;
        if (!isClicked) {
            addSelectedBlock(coords, true);
        } else {
            removeBlock(coords, false);
        }
    }

    return (
        <MotiView
            // 1. Animación de entrada (cuando aparece un bloque nuevo)
            from={{ 
                opacity: 0, 
                scale: 0.5,
                translateY: -10 
            }}
            // 2. Animación de estado constante (moti vigila estos valores)
            animate={{ 
                opacity: 1, 
                scale: isClicked ? 1.1 : 1, // Se infla al tocarlo
                translateY: 0,
                // El color cambia suavemente cuando el número cambia o se borra
                backgroundColor: isNum 
                    ? numbersMap[num]?.color 
                    : "#1a1a1a", // Color de celda vacía
            }}
            // 3. Configuración de la suavidad
            transition={{
                type: 'spring',
                damping: 15,
                stiffness: 150,
                // Si es un cambio de color, que sea rápido, si es movimiento, más lento
                backgroundColor: { type: 'timing', duration: 200 }
            }}
            style={[
                boardStyles.block,
                isClicked && boardStyles.blockSelected
            ]}
        >
            <TouchableOpacity 
                onPress={clickBlock} 
                style={globalStyles.centeredText}
                activeOpacity={0.7}
            >
                {/* AnimatePresence permite que el texto aparezca/desaparezca suave */}
                <AnimatePresence>
                    {isNum && (
                        <MotiView
                            from={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                        >
                            <Text style={boardStyles.blockText}>{num}</Text>
                        </MotiView>
                    )}
                </AnimatePresence>
            </TouchableOpacity>
        </MotiView>
    )
}