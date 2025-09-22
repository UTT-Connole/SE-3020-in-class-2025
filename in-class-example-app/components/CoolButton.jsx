import { Pressable, Text } from "react-native";
import React from "react";


const CoolButton = ({theme, onPress}) => {

    return(
            <Pressable
            style={{backgroundColor: theme}}
            onPress={() => {onPress()}}>

                <Text style={{color:'white', fontSize:20, padding:10}}>FROLFING</Text>
            </Pressable>

    )
}

export default CoolButton;