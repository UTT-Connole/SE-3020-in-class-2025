import { useState } from "react";

let brokenCount = 0;
const useCount = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    console.log(brokenCount);
    brokenCount++;
    console.log(brokenCount);
    setCount(count + 1);
    console.log("update count");
  };

  return {count, updateCount, brokenCount}
}

export default useCount;