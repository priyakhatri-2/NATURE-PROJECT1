import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0].q);
        setAuthor(data[0].a);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page">
      <p className="quote">"{quote}"</p>
      <p><b>- {author}</b></p>

      <div className="home-container">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="nature"
          className="home-img"
        />
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="nature"
          className="home-img"
        />
      </div>
    </div>
  );
};

export default Home;
