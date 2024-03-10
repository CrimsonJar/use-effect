import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/UserList.css";
type User = {
  id: number;
  name: string;
};
type UserListProps = {
  users: User[];
  onClick: (user: User) => void;
  selectedUser: User | null;
};

const UsersList = (props: UserListProps) => {
  const { users, selectedUser, onClick } = props;
  // console.log("users", selectedUser);

  const handleUserClick = (user: User) => {
    onClick(user);
  };

  return (
    <div className='UserList'>
      <ul>
        {users.map((user: any) => (
          <li
            key={user.id}
            onClick={() => handleUserClick(user)}
            className={user === selectedUser ? "selected" : ""}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {};

export default UsersList;
