import { Pressable, ScrollView, Text, View, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import HeaderSection from "../components/index/HeaderSection";
import StatsSection from "../components/index/StatsSection";
import useOrientation from "../hooks/orientation";
import useCount from "../hooks/count";
import SportsNavigationCard from "@/components/SportsNavigationCard";

export default function Index() {
  const { count, updateCount, brokenCount } = useCount();
  const orientation = useOrientation();

  return (
    <View style={styles.container}>
      <HeaderSection />

      <ScrollView style={styles.scrollContent} contentContainerStyle={styles.scrollContainer}>
        <StatsSection brokenCount={brokenCount} count={count} orientation={orientation} />

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


        <SportsNavigationCard 
          href='/discgolf/frolfers'
          icon={'🥏'}
          title="Disc Golf"
          subtitle="Frolfers Community"
        />
        <SportsNavigationCard 
          href='/picklers?count=5'
          icon={'🏓'}
          title="Pickleball"
          subtitle="Join the Picklers"
          />
        <SportsNavigationCard 
          href='/tennis/tenissers'
          icon={'🎾'}
          title="Tennis"
          subtitle="Tennis Players"
        />


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
  scrollContent: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
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
    color: 'black',
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
  sportTextContainer: {
    flex: 1,
  },
  sportTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  sportSubtitle: {
    fontSize: 14,
    color: 'black',
    marginTop: 2,
  },
  chevron: {
    marginLeft: 10,
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
