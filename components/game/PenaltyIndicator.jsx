import React from "react";
import {View, Text } from 'react-native';
import { useGameContext } from "../../context/context";
import { penaltyStyles } from "../../styles/components/PenaltyStyles";
export const PenaltyIndicator = () =>{
    const {penalties} = useGameContext();
    return(
        <View style={penaltyStyles.container}>
            <Text style={penaltyStyles.label}>WRONG:</Text>
            {[0,1,2].map(i => (
                <View 
                    key={i} 
                    style={[penaltyStyles.dot, i < penalties && penaltyStyles.dotActive]}
                />
            ))}
        </View>
    )
}

