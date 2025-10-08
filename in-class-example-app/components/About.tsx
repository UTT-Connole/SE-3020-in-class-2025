 import { View, Text, StyleSheet} from 'react-native';
 import Paragraph from './Paragraph';

export default function About({children}) {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    artistImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 16,
    },
    artistName: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    artistSubtitle: {
        fontSize: 16,
        color: '#666',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    songItem: {
        fontSize: 16,
        paddingVertical: 4,
        color: '#444',
    },
    albumItem: {
        fontSize: 16,
        paddingVertical: 4,
        color: '#444',
        fontWeight: '500',
    },
});