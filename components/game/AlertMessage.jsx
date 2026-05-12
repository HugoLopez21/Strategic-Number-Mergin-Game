import React, { useEffect } from "react"
import { useGameContext } from "../../context/context"
import { Text, View } from "react-native";
import { messageStyles } from "../../styles/components/MessageStyles";
export const AlertMessage = () =>{
    const {alertMessage, setAlertMessage} = useGameContext();
    useEffect(() =>{
        setTimeout( () =>{
            setAlertMessage(null)
        }, 2000)
        
    },[alertMessage])
    
    if (alertMessage !== null){
        return (
            <View style={messageStyles.container}>
                <View style={messageStyles.alertBox}>
                    <Text style={messageStyles.text}>{alertMessage}</Text>
                </View>
            </View>
        );
    }
}