import { Text, View, ActivityIndicator } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import useStar1warsFilmData from '@/hooks/useStarwarsFilmData';


const StarWarsScreen = () => {
    const { id } = useLocalSearchParams();
    const {data} = useStar1warsFilmData(id);

    return (
        <View>
            <Text>Star Wars Episode 5 Content Here</Text>
            {!data && (<ActivityIndicator size="large" color="#0000ff" />)}
            {data && (<View>
                <Text>Title: {data.title}</Text>
                <Text>Director: {data.director}</Text>
                <Text>Release Date: {data.release_date}</Text>
            </View>
            )}
        </View>
    )
}
export default StarWarsScreen