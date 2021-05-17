import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  console.log(data);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "DATA_UPDATE", payload: { name: document.getElementById("data").value } });
  };
  return (
    <header>
      <h2>Header component - {title}</h2>
      <h3>Store data: {data.name}</h3>
      <form onSubmit={onFormSubmit}>
        <input type="text" id="data" />
        <button>Click me</button>
      </form>
    </header>
  );
};

export default Header;
