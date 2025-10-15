
import { View, Text,StyleSheet } from "react-native";
      
const HeaderSection = () => {
    return(
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🏆 Sports Hub</Text>
        <Text style={styles.headerSubtitle}>Your Athletic Community</Text>
      </View>
    )
}

const styles = StyleSheet.create({
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
})

export default HeaderSection;