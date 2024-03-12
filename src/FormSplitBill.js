import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>💰Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) => setPaidByUser(+e.target.value)}
      ></input>
      <label>🧑‍🤝‍🧑{selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label>💡Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split</Button>
    </form>
  );
};

export default FormSplitBill;
