import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const handleUsers = (userInput) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...userInput, id: Math.random().toString() },
    ]);
  };

  return (
    <>
      <AddUser handleUsers={handleUsers} />
      {users.length > 0 && <UserList users={users} />}
    </>
  );
}

export default App;
