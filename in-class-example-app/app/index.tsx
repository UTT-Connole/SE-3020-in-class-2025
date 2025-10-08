import { Button, Pressable, ScrollView, Text, View } from "react-native";
import {
  Orientation,
  addOrientationChangeListener,
  removeOrientationChangeListener,
  unlockAsync,
} from "expo-screen-orientation";
import { useEffect, useState } from "react";

import Entypo from "@expo/vector-icons/Entypo";
import GreenText from "../components/GreenText";
import { Link } from "expo-router";

let brokenCount = 0;

export default function Index() {
  const [count, setCount] = useState(0);
  const [orientation, setOrientation] = useState(Orientation.PORTRAIT_UP);

  const updateCount = () => {
    console.log(brokenCount);
    brokenCount++;
    console.log(brokenCount);
    setCount(count + 1);
    console.log("update count");
  };

  useEffect(() => {
    console.log("Component mounted");
    unlockAsync();

    const subscription = addOrientationChangeListener((event) => {
      console.log(event);
      console.log("Orientation changed");
      setOrientation(event.orientationInfo.orientation);
    });

    return () => {
      console.log("Component unmounted");
      removeOrientationChangeListener(subscription);
    };
  }, []);

  useEffect(() => {
    console.log("count changed");
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
      <Link href="/discgolf/frolfers" asChild>
        <Pressable>
          <Text>FROLFING</Text>
        </Pressable>
      </Link>

      <Link href="/sf-symbols/sf" asChild>
        <Pressable>
          <Text>SF Symbols</Text>
        </Pressable>
      </Link>

      {count > 10 && <Text>Count is greater than 10</Text>}

      <Button title="Increment" onPress={() => updateCount()} />

      <GreenText text="Blue" altColor="blue" />
      <Text>Hello Picklers</Text>
      <Text style={{ color: "green", fontWeight: "bold" }}>
        Yes, we're really called that
      </Text>
      <Button title="Press me" />

      <ScrollView>
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

        <Pressable onPress={() => alert("Alerted")}>
          <Text>Pressable Child</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </Pressable>

        <GreenText altColor="yellow" text="boring" />
        <GreenText> This is a child node </GreenText>
        <GreenText>
          <View>
            <Text>grandchild node</Text>
          </View>
          <Text> This is a child node </Text>
        </GreenText>
        <GreenText />
        <Text style={{ marginTop: 10 }}>
          Picklers are people who love playing pickleball, a fun and fast-paced
          sport.
        </Text>
        <Text style={{ marginTop: 10 }}>
          Pickleball combines elements of tennis, badminton, and ping-pong.
        </Text>
        <Text style={{ marginTop: 10 }}>
          Picklers enjoy friendly competition, staying active, and being part of
          a welcoming community.
        </Text>
        <Text style={{ marginTop: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec
          dictum urna erat ut erat. Suspendisse potenti. Etiam euismod, urna eu
          tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna erat ut
          erat.
        </Text>
        <Text style={{ marginTop: 10 }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Text>
        <Text style={{ marginTop: 10 }}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </Text>
        <Text style={{ marginTop: 10 }}>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </Text>
        <Text style={{ marginTop: 10 }}>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur.
        </Text>
      </ScrollView>
    </View>
  );
}
