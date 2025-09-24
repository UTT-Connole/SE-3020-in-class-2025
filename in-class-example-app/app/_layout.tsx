import { Stack } from "expo-router";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider initialTheme="green">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#f4511e" },
        }}
      />
      ;
    </ThemeProvider>
  );
}
