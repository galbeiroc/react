import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const handleUsers = (userInput) => {
    setUsers((prevUsers) => [...prevUsers, userInput]);
  };

  return (
    <div>
      <AddUser handleUsers={handleUsers} />
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}

export default App;
