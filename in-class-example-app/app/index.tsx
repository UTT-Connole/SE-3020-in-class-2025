import { Text, View, Button, Pressable} from "react-native";
import {useState} from "react";
import GreenText from "../components/GreenText";
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from 'expo-router';


export default function Index() {

  const alertMe = () => alert("Hello from alertMe!");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GreenText text="Blue" altColor="blue"/>
      <Text>Hello Picklers</Text>
      <Text style={{color: 'green', fontWeight: 'bold'}}>
        Yes, we're really called that
      </Text>
      <Button title="Press me"/>

      <Link href="/picklers" asChild>
        <Pressable>
        <Text>Picklers</Text>
        </Pressable>
      </Link>

      <Pressable onPress={() => alert('Alerted')}>
        <Text>Pressable Child</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </Pressable>

      <GreenText altColor="yellow" text="boring"/>
      <GreenText> This is a child node </GreenText>
      <GreenText >
        <View><Text>grandchild node</Text></View>
        <Text> This is a child node </Text>
      </GreenText>
      <GreenText />
      <Text style={{marginTop: 10}}>
        Picklers are people who love playing pickleball, a fun and fast-paced sport.
      </Text>
      <Text style={{marginTop: 10}}>
        Pickleball combines elements of tennis, badminton, and ping-pong.
      </Text>
      <Text style={{marginTop: 10}}>
        Picklers enjoy friendly competition, staying active, and being part of a welcoming community.
      </Text>
      
    </View>
  );
}
