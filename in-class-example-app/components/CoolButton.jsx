import { Pressable, Text } from "react-native";
import React from "react";

import { useTheme } from "@/contexts/themeContext";

const CoolButton = ({onPress}) => {
    const { contextTheme } = useTheme();

    return(
            <Pressable
            style={{backgroundColor: contextTheme}}
            onPress={() => {onPress()}}>

                <Text style={{color:'white', fontSize:20, padding:10}}>FROLFING</Text>
            </Pressable>

    )
}

export default CoolButton;