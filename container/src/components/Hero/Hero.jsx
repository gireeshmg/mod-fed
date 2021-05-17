import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Hero.style.css";

const Hero = ({ title }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "DATA_UPDATE", payload: { name: document.getElementById("data1").value } });
  };

  return (
    <div className="hero">
      <h2>Hero component - {title} </h2>
      <h3>Store data: {data.name}</h3>
      <form onSubmit={onFormSubmit}>
        <input type="text" id="data1" />
        <button>Click me</button>
      </form>
    </div>
  );
};

export default Hero;
