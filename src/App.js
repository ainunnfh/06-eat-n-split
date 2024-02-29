import FormAddFriend from "./FormAddFriend";
import FriendLists from "./FriendLists";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendLists />

        <FormAddFriend />
        <button className="button">Add Friend</button>
      </div>
    </div>
  );
}
