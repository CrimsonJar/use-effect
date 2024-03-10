import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/UserList.css";
import UserProfile from "./UserProfile";
type User = {
  id: number;
  name: string;
};
type DetailsProps = {
  selectedUser: User | null;
};
type currentUser = {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
};
// {
//     "id": 1,
//     "name": "Dorthy McClure Sr.",
//     "avatar": "https://i.pravatar.cc/300",
//     "details": {
//         "city": "Sipesfort",
//         "company": "Hilll LLC",
//         "position": "Regional Identity Supervisor"
//     }
// }
const Details = (props: DetailsProps) => {
  console.log("props", props);
  const { selectedUser } = props;
  const [userData, setUserData] = useState<currentUser>();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${selectedUser?.id}.json`
      );
      setUserData(result.data);
      console.log(result);
    };
    fetchData();
  }, [selectedUser]);
  //   return <div className='UserProfile'>{userData?.name}</div>;
  return (
    <>
      <UserProfile userData={userData} />
    </>
  );
};

Details.propTypes = {};

export default Details;
