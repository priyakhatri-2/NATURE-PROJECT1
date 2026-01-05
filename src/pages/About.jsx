import React, { useEffect, useState } from "react";
import "./About.css";


const About = () => {
  const [quote, setQuote] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/")
      .then((res) => res.json())
      .then((data) => setQuote(data.quotes[0].quote));
  }, []);

  return (

    <>
    
    <div className="page">
      <h2>Motivation</h2>
      <p className="quote">{quote}</p>

      <div className="counter">
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>

    </>
   
  );
};

export default About;
