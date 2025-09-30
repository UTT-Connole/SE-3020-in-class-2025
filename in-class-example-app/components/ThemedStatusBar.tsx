
import { StatusBar } from "expo-status-bar";
import {useTheme} from "@/contexts/themeContext";

const ThemedStatusBar = () => {
  const { contextTheme } = useTheme();

  let StatusBarStyle = 'dark';
  if (contextTheme === 'red') {
    StatusBarStyle = 'light';
  }

    return (
        <StatusBar style={StatusBarStyle} />
    );
};

export default ThemedStatusBar;