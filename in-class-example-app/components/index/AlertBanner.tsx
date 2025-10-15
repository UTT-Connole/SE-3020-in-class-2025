import { View, Text, StyleSheet } from "react-native";

const AlertBanner = () => {
  return (
    <View style={styles.alertBanner}>
      <Text style={styles.alertText}>🔥 Count milestone reached!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default AlertBanner;
