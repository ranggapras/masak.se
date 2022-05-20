import { useQuery } from "@apollo/client";
import React from "react";
import { getUserProfileById } from "../../Models/User";
import { useState } from "react";
import { storage } from "../../Configs/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Logo from "../../Assets/logo.svg";
import { useCookies } from "react-cookie";

const Profile = () => {
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
  const [cookies] = useCookies(["idUser"]);
  const { data } = useQuery(getUserProfileById, {
    variables: { id: cookies.idUser },
  });
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <img
          src={data?.user[0].photo}
          className="img rounded-circle"
          alt="profil"
        />
        <input type="file" />
        <input type={"text"} value={data?.user[0].username} />
        <input type={"text"} value={data?.user[0].name} />
        <input type={"number"} value={data?.user[0].phonenumber} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Profile;
