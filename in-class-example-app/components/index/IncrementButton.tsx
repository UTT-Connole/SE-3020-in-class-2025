import { Pressable, Text, StyleSheet } from "react-native";

interface IncrementButtonProps {
  onPress: () => void;
}

const IncrementButton = ({ onPress }: IncrementButtonProps) => {
  return (
    <Pressable style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>⚡ Increment Counter</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
});

export default IncrementButton;
