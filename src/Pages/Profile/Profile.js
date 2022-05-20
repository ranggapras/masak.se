import { useQuery, useMutation } from "@apollo/client";
import React, { useRef, useEffect } from "react";
import { getUserProfileById, updateUserProfile } from "../../Models/User";
import { useState } from "react";
import { storage } from "../../Configs/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useCookies } from "react-cookie";
import Button from "../../Elements/Button/Button";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [updateProfile] = useMutation(updateUserProfile);

  const [imgUrl, setImgUrl] = useState();

  const refFile = useRef();
  const refUsername = useRef();
  const refName = useRef();
  const refPhoneNumber = useRef();

  const choose = () => {
    refFile.current.click();
  };

  const handleFile = (e) => {
    e.preventDefault();
    const file = e.target?.files[0];
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

  const submit = () => {
    updateProfile({
      variables: {
        id: cookies.idUser,
        photo: imgUrl,
        username: refUsername.current.value,
        name: refName.current.value,
        phoneNumber: refPhoneNumber.current.value,
      },
    }).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    setImgUrl(data?.user[0].photo);
  }, [data]);

  return (
    <div className="container mt-5">
      <form className="form d-flex flex-column align-items-center">
        <img
          src={imgUrl}
          className="img rounded-circle"
          alt="profil"
          style={{ width: "15rem", height: "15rem", objectFit: "cover" }}
        />
        <input
          onChange={handleFile}
          type="file"
          style={{ display: "none" }}
          ref={refFile}
        />
        <Button
          onClick={() => choose()}
          type="button"
          style={{ width: "7.5rem" }}
        >
          Pilih Foto
        </Button>
        <div className="d-flex flex-column" style={{ width: "20vw" }}>
          <div className="input-group mt-5 mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              ref={refName}
              placeholder="Nama"
              defaultValue={data?.user[0].name}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              ref={refUsername}
              placeholder="Username"
              defaultValue={data?.user[0].username}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              id="phone"
              className="form-control"
              ref={refPhoneNumber}
              placeholder="No Handphone"
              defaultValue={data?.user[0].phoneNumber}
            />
          </div>
        </div>
        <Button onClick={() => submit()}>Simpan</Button>
      </form>
    </div>
  );
};

export default Profile;
