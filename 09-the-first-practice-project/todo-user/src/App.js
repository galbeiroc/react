import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleUsers = (userInput) => {
    setUsers((prevUsers) => [...prevUsers, userInput]);
  };

  const handleModal = (isShowed) => {
    console.log(isShowed);
    setShowModal(isShowed);
  }

  return (
    <div>
      <AddUser handleUsers={handleUsers} handleModal={handleModal} />
      {users.length > 0 && <UserList users={users} />}
      {showModal && <ErrorModal handleModal={handleModal} />}
    </div>
  );
}

export default App;
