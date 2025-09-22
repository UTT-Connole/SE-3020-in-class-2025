import { Pressable,Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import CoolButton from '../../components/CoolButton';
import FrolferMain from '@/components/FrolferMain';

const frolfImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'; // Example image

const Frolfers = () => {

    const [theme, setTheme] = useState('green') 
    return (
        <ScrollView contentContainerStyle={styles.container}>
             <Text style={styles.title}>Frolfers</Text>

             <CoolButton theme={theme} onPress={() => {setTheme('green')}}/>
             <CoolButton theme={theme} onPress={() => {setTheme('blue')}}/>
             <CoolButton theme={theme} onPress={() => {setTheme('red')}}/>

        <FrolferMain theme={theme} coolButtonOnPress={() => setTheme('yellow')}/>

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
        color: '#2e7d32',

    },
});
export default Frolfers;