import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

const QuickLinksSection = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Quick Links</Text>

      <View style={styles.quickLinksContainer}>
        <Link href="/concerts/hozier" asChild>
          <Pressable style={styles.quickLinkButton}>
            <Text style={styles.quickLinkText}>🎵 Hozier</Text>
          </Pressable>
        </Link>

        <Link href="/swapi/swapi" asChild>
          <Pressable style={styles.quickLinkButton}>
            <Text style={styles.quickLinkText}>Star Wars API</Text>
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
});

export default QuickLinksSection;
