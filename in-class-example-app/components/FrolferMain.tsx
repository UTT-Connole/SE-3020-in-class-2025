
import { Text, StyleSheet, Image } from 'react-native';
import CoolButton from '../components/CoolButton';

import {useTheme} from '@/contexts/themeContext';

const frolfImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'; // Example image
const FrolferMain = (
    { coolButtonOnPress }: { coolButtonOnPress: () => void }
) => {

    const { contextTheme } = useTheme();

    return (
        <>

            <Text style={{color: contextTheme}}>Your current theme is: {contextTheme} </Text>
            <Image source={{ uri: frolfImage }} style={styles.image} />
            <Text style={styles.subtitle}>Welcome to the world of Disc Golf!</Text>
            <Text style={styles.text}>
                Disc golf, also known as "frolf," is a fun and challenging sport where players throw a disc at a target, typically a basket, using rules similar to golf. The goal is to complete each hole in the fewest throws possible.
            </Text>
            <Text style={styles.sectionTitle}>Why Play Disc Golf?</Text>
            <Text style={styles.text}>
                - Great outdoor activity{'\n'}
                - Easy to learn, hard to master{'\n'}
                - Affordable and accessible{'\n'}
                - Fun for all ages!
            </Text>
            <CoolButton onPress={coolButtonOnPress} />
            <Text style={styles.sectionTitle}>Getting Started</Text>
            <Text style={styles.text}>
                All you need is a disc and a local course. Grab some friends and start frolfing today!
            </Text>
        </>
    )

}

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
    image: {
        width: 320,
        height: 180,
        borderRadius: 12,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12,
        color: '#388e3c',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 18,
        marginBottom: 6,
        color: '#1976d2',
    },
    text: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default FrolferMain;