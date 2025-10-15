import { Link } from "expo-router";
import { Pressable, Text, View, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

interface SportsNavigationCardProps {
    href: string;
    icon: string;
    title: string;
    subtitle: string;
    color?: string;
}

const SportsNavigationCard = ({ href, icon, title, subtitle, color = '#059669' }: SportsNavigationCardProps) => {
    return (
        <Link href={href} asChild>
            <Pressable style={[styles.sportCard, { backgroundColor: color }]}>
                <Text style={styles.sportIcon}>{icon}</Text>
                <View style={styles.sportTextContainer}>
                    <Text style={styles.sportTitle}>{title}</Text>
                    <Text style={styles.sportSubtitle}>{subtitle}</Text>
                </View>
                <Entypo name="chevron-right" size={24} color="white" style={styles.chevron} />
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    sportIcon: {
        fontSize: 40,
        marginRight: 15,
    },
    sportTextContainer: {
        flex: 1,
    },
    sportTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    sportSubtitle: {
        fontSize: 14,
        color: 'black',
        marginTop: 2,
    },
    sportCard: {
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    chevron: {
        marginLeft: 10,
    },
});

export default SportsNavigationCard;