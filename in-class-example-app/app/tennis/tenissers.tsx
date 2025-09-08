import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const tennisPlayers = [
    { id: '1', name: 'Roger Federer', country: 'Switzerland' },
    { id: '2', name: 'Serena Williams', country: 'USA' },
    { id: '3', name: 'Rafael Nadal', country: 'Spain' },
    { id: '4', name: 'Novak Djokovic', country: 'Serbia' },
];

export default function TennisPlayersPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Famous Tennis Players</Text>
            <FlatList
                data={tennisPlayers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.playerCard}>
                        <Text style={styles.playerName}>{item.name}</Text>
                        <Text style={styles.playerCountry}>{item.country}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
    playerCard: { padding: 12, marginBottom: 10, backgroundColor: '#f0f0f0', borderRadius: 8 },
    playerName: { fontSize: 18, fontWeight: '600' },
    playerCountry: { fontSize: 16, color: '#555' },
})