import { SFSymbol, SymbolView, SymbolViewProps } from "expo-symbols";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SymbolView
        name="airpods.chargingcase"
        style={styles.symbol}
        type="hierarchical"
      />
      <SymbolView
        name="person.2.badge.gearshape"
        style={styles.symbol}
        type="hierarchical"
        animationSpec={{
          effect: { direction: "up", type: "bounce" },
          repeating: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  symbol: {
    width: 50,
    height: 50,
    margin: 5,
  },
});
