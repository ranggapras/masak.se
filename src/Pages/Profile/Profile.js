import { useQuery } from "@apollo/client";
import React from "react";
import { getUserProfileById } from "../../Models/User";
import { useState } from "react";
import { storage } from "../../Configs/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

const Profile = () => {
  const { data } = useQuery(getUserProfileById);
  const [imgUrl, setImgUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    const storageRef = ref(storage, `user/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setImgUrl(downloadURL);
      });
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Profile;
