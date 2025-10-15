import { View, Text, StyleSheet } from "react-native";

interface StatsSectionProps {
    brokenCount: number;
    count: number;
    orientation: string;
}

const StatsSection = ({brokenCount, count, orientation}: StatsSectionProps) => {
        return(

                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Broken Count</Text>
                        <Text style={styles.statValue}>{brokenCount}</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Count</Text>
                        <Text style={styles.statValue}>{count}</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statLabel}>Orientation</Text>
                        <Text style={styles.statValueSmall}>{orientation}</Text>
                    </View>
                </View>
        )
}

const styles = StyleSheet.create({

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  statValueSmall: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
})

export default StatsSection;