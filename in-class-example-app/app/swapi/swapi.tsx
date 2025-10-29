import {View, Text, ActivityIndicator} from "react-native";
import {useEffect, useState} from "react";

import {fetch} from 'expo/fetch'
const SWAPI_BASE_URL = "https://swapi.dev/api/";

const SwapiScreen = () => {

    const [data, setData] = useState(null);
    const fetchData = async () => {
        const response = await fetch(`${SWAPI_BASE_URL}people/1/`);
        const data = await response.json();
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log(data);
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <View>
                <Text>SWAPI Screen</Text>
            {!data ? (
                <View>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                <View>
                    <Text>Name: {data.name}</Text>
                    <Text>Height: {data.height}</Text>
                    <Text>Mass: {data.mass}</Text>
                    <Text>Hair Color: {data.hair_color}</Text>
                </View>
            )}
        </View>
    )
};

export default SwapiScreen;