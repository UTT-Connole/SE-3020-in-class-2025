import { Button, Pressable, View, Text } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Press Me" onPress={() => alert("Button Pressed!")} />
      <Pressable onPress={() => alert("Pressable Pressed!")}>
        <View
          style={{
            padding: 12,
            backgroundColor: "orange",
            borderRadius: 8,
          }}
        >
          <Text>Pressable Component</Text>
        </View>
      </Pressable>
    </View>
  );
}
