import { Pressable,Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import CoolButton from '../../components/CoolButton';
import FrolferMain from '@/components/FrolferMain';
import  { useTheme} from '@/contexts/themeContext';


const Frolfers = () => {

    const { contextTheme, changeTheme } = useTheme();

    const frolfersStyle = {...styles.title, color: contextTheme};
    return (

        <ScrollView contentContainerStyle={styles.container}>
             <Text style={frolfersStyle}>Frolfers</Text>
             <Text style={{color: contextTheme}}>Your current theme is: {contextTheme} </Text>


             <CoolButton  onPress={() => {changeTheme('green')}}/>
             <CoolButton  onPress={() => {changeTheme('blue')}}/>
             <CoolButton  onPress={() => {changeTheme('red')}}/>

        <FrolferMain coolButtonOnPress={() => changeTheme('yellow')}/>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f0f8ff',
        alignItems: 'center',
    },
    title: {

        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 16,
        color: 'purple',
    },
});
export default Frolfers;