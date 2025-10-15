import { View, Text, StyleSheet } from "react-native";

const AboutSection = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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

export default AboutSection;
