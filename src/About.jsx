import React, { useState } from "react";

const About = () => {
  const [number, setNumber] = useState(0);
  const add = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={add}>+</button>
    </>
  );
};

export default About;
