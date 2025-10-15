import { View, Text, StyleSheet } from "react-native";
import SportsNavigationCard from "@/components/SportsNavigationCard";

const SportsSection = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Explore Sports</Text>

      <SportsNavigationCard
        href='/discgolf/frolfers'
        icon={'🥏'}
        title="Disc Golf"
        subtitle="Frolfers Community"
        color="#059669"
      />
      <SportsNavigationCard
        href='/picklers?count=5'
        icon={'🏓'}
        title="Pickleball"
        subtitle="Join the Picklers"
        color="#dc2626"
      />
      <SportsNavigationCard
        href='/tennis/tenissers'
        icon={'🎾'}
        title="Tennis"
        subtitle="Tennis Players"
        color="#7c3aed"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
    marginTop: 10,
  },
});

export default SportsSection;
