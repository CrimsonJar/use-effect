import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "./UsersList";

type User = {
  id: number;
  name: string;
};

type UserListContainerProps = {
  users: User[];
  selectedUser: User | null;
  onClick: (user: User) => void;
};

const UserListContainer = (props: UserListContainerProps) => {
  const { users, selectedUser, onClick } = props;
  const [fetchedUsers, setFetchedUsers] = useState<User[]>([]);

  const handleUserClick = (user: User) => {
    onClick(user);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
      );
      setFetchedUsers(result.data);
    };
    fetchData();
  }, []);

  return (
    <UsersList
      users={fetchedUsers}
      selectedUser={selectedUser}
      onClick={handleUserClick}
    />
  );
};

export default UserListContainer;
