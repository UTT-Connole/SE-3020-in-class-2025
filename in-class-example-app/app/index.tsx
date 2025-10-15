import { Button, Pressable, ScrollView, Text, View, StyleSheet } from "react-native";
import {
  Orientation,
  addOrientationChangeListener,
  removeOrientationChangeListener,
  unlockAsync,
} from "expo-screen-orientation";
import { useEffect, useState } from "react";

import Entypo from "@expo/vector-icons/Entypo";
import GreenText from "../components/GreenText";
import { Link } from "expo-router";

let brokenCount = 0;

export default function Index() {
  const [count, setCount] = useState(0);
  const [orientation, setOrientation] = useState(Orientation.PORTRAIT_UP);

  const updateCount = () => {
    console.log(brokenCount);
    brokenCount++;
    console.log(brokenCount);
    setCount(count + 1);
    console.log("update count");
  };

  useEffect(() => {
    console.log("Component mounted");
    unlockAsync();

    const subscription = addOrientationChangeListener((event) => {
      console.log(event);
      console.log("Orientation changed");
      setOrientation(event.orientationInfo.orientation);
    });

    return () => {
      console.log("Component unmounted");
      removeOrientationChangeListener(subscription);
    };
  }, []);

  useEffect(() => {
    console.log("count changed");
  }, [count]);

  if (count > 15) {
    console.log("Count exceeded 15");
  }

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🏆 Sports Hub</Text>
        <Text style={styles.headerSubtitle}>Your Athletic Community</Text>
      </View>

      <ScrollView style={styles.scrollContent} contentContainerStyle={styles.scrollContainer}>
        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Broken Count</Text>
            <Text style={styles.statValue}>{brokenCount}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Count</Text>
            <Text style={styles.statValue}>{count}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Orientation</Text>
            <Text style={styles.statValueSmall}>{orientation}</Text>
          </View>
        </View>

        {count > 10 && (
          <View style={styles.alertBanner}>
            <Text style={styles.alertText}>🔥 Count milestone reached!</Text>
          </View>
        )}

        {/* Main Action Button */}
        <Pressable style={styles.primaryButton} onPress={() => updateCount()}>
          <Text style={styles.primaryButtonText}>⚡ Increment Counter</Text>
        </Pressable>

        {/* Sports Navigation Cards */}
        <Text style={styles.sectionTitle}>Explore Sports</Text>
        
        <Link href="/discgolf/frolfers" asChild>
          <Pressable style={[styles.sportCard, styles.discGolfCard]}>
            <Text style={styles.sportIcon}>🥏</Text>
            <Text style={styles.sportTitle}>Disc Golf</Text>
            <Text style={styles.sportSubtitle}>Frolfers Community</Text>
            <Entypo name="chevron-right" size={24} color="white" style={styles.chevron} />
          </Pressable>
        </Link>

        <Link href="/picklers?count=5" asChild>
          <Pressable style={[styles.sportCard, styles.pickleballCard]}>
            <Text style={styles.sportIcon}>🏓</Text>
            <Text style={styles.sportTitle}>Pickleball</Text>
            <Text style={styles.sportSubtitle}>Join the Picklers</Text>
            <Entypo name="chevron-right" size={24} color="white" style={styles.chevron} />
          </Pressable>
        </Link>

        <Link href="/tennis/tenissers" asChild>
          <Pressable style={[styles.sportCard, styles.tennisCard]}>
            <Text style={styles.sportIcon}>🎾</Text>
            <Text style={styles.sportTitle}>Tennis</Text>
            <Text style={styles.sportSubtitle}>Tennis Players</Text>
            <Entypo name="chevron-right" size={24} color="white" style={styles.chevron} />
          </Pressable>
        </Link>

        {/* Quick Links Section */}
        <Text style={styles.sectionTitle}>Quick Links</Text>
        
        <View style={styles.quickLinksContainer}>
          <Link href="/concerts/hozier" asChild>
            <Pressable style={styles.quickLinkButton}>
              <Text style={styles.quickLinkText}>🎵 Hozier</Text>
            </Pressable>
          </Link>

          <Link href="/sf-symbols/sf" asChild>
            <Pressable style={styles.quickLinkButton}>
              <Text style={styles.quickLinkText}>📱 SF Symbols</Text>
            </Pressable>
          </Link>

          <Link href="/picklers?answer=42" asChild>
            <Pressable style={styles.quickLinkButton}>
              <Text style={styles.quickLinkText}>❓ Answer 42</Text>
            </Pressable>
          </Link>
        </View>

        {/* About Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>About Our Community</Text>
          <Text style={styles.aboutText}>
            Welcome to the ultimate sports community app! Whether you're into pickleball, 
            tennis, disc golf, or other activities, we bring athletes together.
          </Text>
          <Text style={styles.aboutText}>
            Join friendly competitions, stay active, and be part of a welcoming community 
            of sports enthusiasts from all backgrounds.
          </Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#1e3a8a',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#93c5fd',
    textAlign: 'center',
    marginTop: 5,
  },
  scrollContent: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  statValueSmall: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  alertBanner: {
    backgroundColor: '#fef3c7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  alertText: {
    color: '#92400e',
    fontWeight: '600',
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#1e3a8a',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#1e3a8a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
    marginTop: 10,
  },
  sportCard: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  discGolfCard: {
    backgroundColor: '#059669',
  },
  pickleballCard: {
    backgroundColor: '#dc2626',
  },
  tennisCard: {
    backgroundColor: '#7c3aed',
  },
  sportIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  sportTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  sportSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    position: 'absolute',
    left: 75,
    bottom: 18,
  },
  chevron: {
    marginLeft: 'auto',
  },
  quickLinksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 30,
  },
  quickLinkButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  quickLinkText: {
    color: '#475569',
    fontWeight: '600',
  },
  aboutSection: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 22,
    marginBottom: 10,
  },
});
