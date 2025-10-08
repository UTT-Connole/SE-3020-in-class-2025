import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import About from '../../components/About';
import Paragraph from '@/components/Paragraph';

export default function HozierPage() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={{ uri: 'https://via.placeholder.com/300x200?text=Hozier' }}
                    style={styles.artistImage}
                />
                <Text style={styles.artistName}>Hozier</Text>
                <Text style={styles.artistSubtitle}>Irish Singer-Songwriter</Text>
            </View>

            <About >
                <Paragraph color="#333" />
            </About>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Popular Songs</Text>
                <Text style={styles.songItem}>• Take Me to Church</Text>
                <Text style={styles.songItem}>• Someone New</Text>
                <Text style={styles.songItem}>• Cherry Wine</Text>
                <Text style={styles.songItem}>• Too Sweet</Text>
                <Text style={styles.songItem}>• Movement</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Albums</Text>
                <Text style={styles.albumItem}>Hozier (2014)</Text>
                <Text style={styles.albumItem}>Wasteland, Baby! (2019)</Text>
                <Text style={styles.albumItem}>Unreal Unearth (2023)</Text>
            </View>
        </ScrollView>
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