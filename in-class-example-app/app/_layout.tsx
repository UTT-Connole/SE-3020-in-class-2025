import { Stack } from "expo-router";
import { ThemeProvider } from "@/contexts/themeContext";
import ThemedStatusBar from "@/components/ThemedStatusBar";

export default function RootLayout() {
  return (

    <ThemeProvider>
      <ThemedStatusBar />
      <Stack 
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
        }}  
      />
    </ThemeProvider>
  )
}
