import React, { useState } from "react";
import "./App.css";
// import UserList from "./Components/UsersList";
import UserListContainer from "./Components/UsersListContainer";
import Details from "./Components/Details";
type User = {
  id: number;
  name: string;
};
function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const handleUserClick = (user: { id: number; name: string }) => {
    setSelectedUser(user);
  };

  return (
    <div className='App'>
      <header className='App-header'></header>
      <div className='body'>
        <UserListContainer
          selectedUser={selectedUser}
          users={users}
          onClick={handleUserClick}
        />
        {selectedUser && <Details selectedUser={selectedUser} />}
      </div>
    </div>
  );
}

export default App;
