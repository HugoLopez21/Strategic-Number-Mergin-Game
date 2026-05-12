import React, { useEffect } from "react"
import { useGameContext } from "../../context/context"
import { Text } from "react-native";
import { infoStyles } from "../../styles/components/InfoDisplayStyles";
export const AlertMessage = () =>{
    const {alertMessage, setAlertMessage} = useGameContext();
    useEffect(() =>{
        setTimeout( () =>{
            setAlertMessage(null)
        }, 2000)
        
    },[alertMessage])
    if (alertMessage !== null){
        return <Text style={infoStyles.value}>{alertMessage}</Text>
    }
}