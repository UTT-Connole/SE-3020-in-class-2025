import { Stack } from "expo-router";
import { ThemeProvider } from "@/contexts/themeContext";

export default function RootLayout() {
  return (

    <ThemeProvider>

      <Stack 
        screenOptions={{
          headerStyle: { backgroundColor: '#f4511e' },
        }}  
      />
    </ThemeProvider>
  )
}
