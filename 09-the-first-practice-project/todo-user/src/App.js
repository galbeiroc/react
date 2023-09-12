import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";
import ErrorModal from "./components/UI/ErrorModal/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleUsers = (userInput) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...userInput, id: Math.random().toString() },
    ]);
  };

  const handleModal = (isShowed) => {
    console.log(isShowed);
    setShowModal(isShowed);
  };

  return (
    <>
      <AddUser handleUsers={handleUsers} handleModal={handleModal} />
      {users.length > 0 && <UserList users={users} />}
      {showModal && (
        <ErrorModal
          message="Something went wrong"
          title="An error ocurred"
          handleModal={handleModal}
        />
      )}
    </>
  );
}

export default App;
