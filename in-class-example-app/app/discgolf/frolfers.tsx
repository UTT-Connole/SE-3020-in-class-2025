import { ScrollView, StyleSheet, Text } from "react-native";
import { ThemeProvider, useTheme } from "../../contexts/ThemeContext";

import CoolButton from "../../components/CoolButton";
import FrolferMain from "@/components/FrolferMain";

const FrolfersContent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Frolfers</Text>

      <CoolButton
        theme={theme}
        onPress={() => {
          setTheme("green");
        }}
      />
      <CoolButton
        theme={theme}
        onPress={() => {
          setTheme("blue");
        }}
      />
      <CoolButton
        theme={theme}
        onPress={() => {
          setTheme("red");
        }}
      />

      <FrolferMain coolButtonOnPress={() => setTheme("yellow")} />
    </ScrollView>
  );
};

const Frolfers = () => {
  return (
    <ThemeProvider initialTheme="green">
      <FrolfersContent />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 16,
    color: "#2e7d32",
  },
});
export default Frolfers;
