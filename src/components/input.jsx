import React from "react";
import { useState } from "react";
import { motion } from "react";

const Input = ({ handleChange, handleChangePosition }) => {
  const changeValue = (e) => {
    handleChange(e.target.value);
  };

  const changePosition = (e) => {
    handleChangePosition(e.target.value);
  };
  return (
    <div className="grid grid-cols-2 gap-5">
      <input
        className="border border-gray-900 rounded-full px-3"
        type="text"
        placeholder="Neree bic"
        onChange={changeValue}
      />
      <input
        className="border border-gray-900 rounded-full px-3"
        type="text"
        placeholder="Ajilaa bic"
        onChange={changePosition}
      />
    </div>
  );
};

export default Input;
