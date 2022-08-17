import React from "react";
import classes from "./Parameter.module.css";

const Parameter = ({
  name,
  value,
  inputHandler,
  symbol,
  title,
  max = 1000000,
}) => {
  return (
    <div className={classes.param}>
      <label htmlFor={name} className={classes.label}>
        {title} {symbol !== "years" && symbol !== "%" ? symbol : ""}
        <span>{value.toLocaleString()}</span>{" "}
        {symbol === "years" || symbol === "%" ? symbol : ""}
      </label>
      <input
        className={classes.input}
        type="range"
        min="0"
        max={max}
        step="1"
        value={value}
        id={name}
        name={name}
        onInput={inputHandler}
      />
    </div>
  );
};

export default Parameter;
