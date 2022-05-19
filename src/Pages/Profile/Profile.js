import { useQuery } from "@apollo/client";
import React from "react";
import { getUserProfileById } from "../../Models/User";

const Profile = () => {
  const { data } = useQuery(getUserProfileById);

  return (
    <div className="container">
      <div className="row">asfafsa</div>
    </div>
  );
};

export default Profile;
