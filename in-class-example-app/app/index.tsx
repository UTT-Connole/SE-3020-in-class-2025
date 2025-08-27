import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
   // ...existing code...
      <Text>Welcome to My App!</Text>
      <Text>Changes you make will automatically reload.</Text>
// ...existing code...
    </View>
  );
}
