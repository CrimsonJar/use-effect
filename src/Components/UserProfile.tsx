import React, { useEffect, useState } from "react";
import "./UserProfile.css";

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
const UserProfile = ({ userData }: { userData: currentUser | undefined }) => {
  const [userToShow, setUserToShow] = useState<currentUser | undefined>(
    userData
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setUserToShow((prevUser) => (userData ? userData : prevUser));
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [userData]);
  if (!userToShow || isLoading) {
    return <div className='loader'>Loading...</div>;
  }
  console.log("userData", userData);
  return (
    <div className='UserProfile'>
      <div className='avatar'>
        {/* <img src={userData.avatar} width={200} alt='' /> */}
        <img src={userToShow.avatar} alt='' />
      </div>
      <div className='profileItem'>
        <h3>{userToShow.name}</h3>
      </div>
      <div className='profileItem'>
        <h6>City: {userToShow.details.city}</h6>
      </div>
      <div className='profileItem'>
        <h6>Company: {userToShow.details.company}</h6>
      </div>
      <div className='profileItem'>
        <h6>Positiom: {userToShow.details.position}</h6>
      </div>
    </div>
  );
};

export default UserProfile;
