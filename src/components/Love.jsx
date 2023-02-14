import React, { useState } from "react";
import "./love.css";

const Love = () => {
  const [yourName, setYourName] = useState("");
  const [parterName, setPartnerName] = useState("");
  const [love, setLove] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setYourName(e.target[0].value);
    setPartnerName(e.target[1].value);
    let generateLove = Math.floor(Math.random() * (100 - 30) + 30);
    setLove(generateLove);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <div className="container">
      <div>
        {love > 1 && (
          <img src="./assets/heart-with-cupid-arrow-icon.webp" alt="" />
        )}
        {love > 1 ? (
          <h1>{`Your Love is: ${love}%`}</h1>
        ) : (
          <h1>Happy Valentine's Day💘</h1>
        )}
        {love < 50 && love > 1 && <h3>Tips: Give some gift🎁</h3>}
        {love > 50 && love <= 60 && <h3>Tips: Average, give some time💑</h3>}
        {love > 60 && love <= 90 && <h3>Tips: Good, keep it up🚀</h3>}
        {love > 90 && <h3>Tips: Happy Valentine's Day💘</h3>}
      </div>
      <div className="formContainer">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Enter your name:</label>
            <input required minLength={3} type="text" />
          </div>
          <div>
            <label htmlFor="">Enter your partner name:</label>
            <input required minLength={3} type="text" />
          </div>
          <div>
            <button type="submit">
              Check Now
              <img src="/assets/finding-love-icon.webp" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Love;
