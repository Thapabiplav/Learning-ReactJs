import { number } from "prop-types";
import React, { useEffect, useState } from "react";

const UseEffect = () => {
  // useEffect(()=>{
  //   console.log("First time ")
  // },[])
  
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("second usestate types");
  }, [num]);
  return (
    <>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default UseEffect;
