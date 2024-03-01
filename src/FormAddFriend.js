import Button from "./Button";

export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👯 Friend Name</label>
      <input type="text"></input>

      <label>🖼️ Image URL</label>
      <input type="text"></input>

      <Button>Add</Button>
    </form>
  );
}
