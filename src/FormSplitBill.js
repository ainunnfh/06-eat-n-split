import React from "react";
import Button from "./Button";

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰Your expense</label>
      <input type="text"></input>
      <label>🧑‍🤝‍🧑X's expense</label>
      <input type="text" disabled></input>

      <label>💡Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split</Button>
    </form>
  );
};

export default FormSplitBill;
