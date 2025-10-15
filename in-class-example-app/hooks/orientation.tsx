import { useEffect, useState } from "react";
import {
    Orientation,
  addOrientationChangeListener,
  removeOrientationChangeListener,
  unlockAsync,
} from "expo-screen-orientation";

const useOrientation = () => {
  const [orientation, setOrientation] = useState(Orientation.PORTRAIT_UP);

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

    return orientation;
}

export default useOrientation;  