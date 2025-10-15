import { ScrollView, View, StyleSheet } from "react-native";
import HeaderSection from "../components/index/HeaderSection";
import StatsSection from "../components/index/StatsSection";
import useOrientation from "../hooks/orientation";
import useCount from "../hooks/count";
import AlertBanner from "@/components/index/AlertBanner";
import IncrementButton from "@/components/index/IncrementButton";
import SportsSection from "@/components/index/SportsSection";
import QuickLinksSection from "@/components/index/QuickLinksSection";
import AboutSection from "@/components/index/AboutSection";

export default function Index() {
  const { count, updateCount, brokenCount } = useCount();
  const orientation = useOrientation();

  return (
    <View style={styles.container}>
      <HeaderSection />

      <ScrollView style={styles.scrollContent} contentContainerStyle={styles.scrollContainer}>
        <StatsSection brokenCount={brokenCount} count={count} orientation={orientation} />
        
        {count > 10 && <AlertBanner />}
        
        <IncrementButton onPress={updateCount} />
        
        <SportsSection />
        
        <QuickLinksSection />
        
        <AboutSection />

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  scrollContent: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
});
