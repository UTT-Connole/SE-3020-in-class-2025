import { useEffect } from 'react';
import {View, Text} from 'react-native';
import { useLocalSearchParams } from 'expo-router';



const Picklers = () => {
  const {count, answer} = useLocalSearchParams();
  console.log(count);
  console.log(answer);

    useEffect(() => {
        console.log("Picklers component mounted");
        return () => {
            console.log("Picklers component unmounted");
        };
    }, []);

    return (
        <View>
            <Text>Picklers page</Text>
            <Text>Count: {count}</Text>
            <Text>Answer: {answer}</Text>
        </View>
    );
};

export default Picklers;