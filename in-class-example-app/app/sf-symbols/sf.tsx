import { SFSymbol, SymbolView, SymbolViewProps } from "expo-symbols";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SymbolView
        name="trash.circle"
        style={styles.symbol}
        type="monochrome"
      />
      <SymbolView
        name="trash.circle"
        style={styles.symbol}
        type="palette"
      />
      <SymbolView
        name="trash.circle.fill"
        style={styles.symbol}
        type="hierarchical"
      />
      <SymbolView
        name="trash.circle"
        style={styles.symbol}
        type="hierarchical"
      />
      <SymbolView
        name="flame"
        style={styles.symbol}
        type="hierarchical"
        animationSpec={{
          effect: { direction: "up", type: "pulse" },
          repeating: true,
        }}
      />
      <SymbolView
        name="car.top.door.front.left.and.front.right.and.rear.left.open.fill"
        style={styles.symbol}
        type="hierarchical"
        animationSpec={{
          effect: { direction: "up", type: "pulse" },
          repeating: true,
        }}
      />
      <SymbolView
        name="trash"
        style={styles.symbol}
        type="multicolor"
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
