import { Text, View, Button, Pressable} from "react-native";
import {useEffect, useState} from "react";
import GreenText from "../components/GreenText";
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from 'expo-router';

import { unlockAsync,addOrientationChangeListener,removeOrientationChangeListener, Orientation } from "expo-screen-orientation";


let brokenCount = 0

export default function Index() {

  const [count, setCount] = useState(0);
  const [orientation, setOrientation] = useState(Orientation.PORTRAIT_UP);

  const updateCount = () => {
    console.log(brokenCount)
    brokenCount++;
    console.log(brokenCount)
    setCount(count + 1);
    console.log("update count")
  }

  useEffect(() => {
    console.log("Component mounted");
    unlockAsync();

    const subscription = addOrientationChangeListener((event) => {
      console.log(event)
      console.log("Orientation changed");
      setOrientation(event.orientationInfo.orientation);

    });

    return () => {
      console.log("Component unmounted");
      removeOrientationChangeListener(subscription);
    };
  }, []);

  useEffect(() => {
    console.log("count changed")
  }, [count]);

  if (count > 15) {
    console.log("Count exceeded 15");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Broken Count: {brokenCount} </Text>
      <Text>Count: {count} </Text>
      <Text>Orientation {orientation} </Text>


      {count > 10 && <Text>Count is greater than 10</Text>}

      <Button title="Increment" onPress={() => updateCount()} />


      <GreenText text="Blue" altColor="blue"/>
      <Text>Hello Picklers</Text>
      <Text style={{color: 'green', fontWeight: 'bold'}}>
        Yes, we're really called that
      </Text>
      <Button title="Press me"/>

      <Link href="/picklers?count=5" asChild>
        <Pressable>
        <Text>Picklers Count 5</Text>
        </Pressable>
      </Link>
      <Link href="/picklers?answer=42" asChild>
        <Pressable>
        <Text>Picklers Answer 42</Text>
        </Pressable>
      </Link>

      <Link href="/tennis/tenissers" asChild>
        <Pressable>
        <Text>Tennis Players</Text>
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
