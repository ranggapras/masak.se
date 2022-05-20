import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addRecipe, getRecipeById } from "../../Models/Recipe";
import ReactQuill from "react-quill";
import { description, photo } from "./Default";
import { storage } from "../../Configs/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import "react-quill/dist/quill.snow.css";
import Button from "../../Elements/Button/Button";
import { useCookies } from "react-cookie";

const AddRecipe = () => {
  const location = useLocation();
  const [cookies] = useCookies(["idUser"]);
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  const navigate = useNavigate();
  const [getRecipe] = useLazyQuery(getRecipeById);
  const [form, setForm] = useState({
    idUser: cookies.idUser,
    photo: photo,
    description: description,
  });

  const [recipeAdd] = useMutation(addRecipe);

  const refFile = useRef();

  const choose = () => {
    refFile.current.click();
  };

  useEffect(() => {
    const defaultState = {
      idUser: cookies.idUser,
      photo: photo,
      title: "",
      description: description,
    };
    id ? getRecipe({ variables: { id: id } }) : setForm(defaultState);
  }, [id, getRecipe, cookies]);

  const handlePhoto = (e) => {
    e.preventDefault();
    console.log(e);
    const file = e.target?.files[0];
    const storageRef = ref(storage, `menu/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setForm({ ...form, photo: downloadURL });
      });
    });
  };

  const submit = () => {
    recipeAdd({
      variables: {
        object: {
          ...form,
        },
      },
    });
  };

  return (
    <div className="container mt-5">
      <div className="d-flex">
        <div className="d-flex flex-column">
          <div className="d-flex flex-column mb-5">
            <label for="title" class="form-label">
              Title Recipe
            </label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                id="title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img
              alt="Resep"
              src={form.photo}
              className="rounded-5"
              style={{ height: "20rem", width: "20rem", objectFit: "cover" }}
            />
            <input
              accept=".png, .jpg, .jpeg"
              type="file"
              style={{ display: "none" }}
              ref={refFile}
              onChange={handlePhoto}
            />
            <Button onClick={() => choose()} type="button">
              Pilih Foto
            </Button>
          </div>
        </div>
        <div style={{ width: "50vw", margin: "0 0 0 3rem" }}>
          <ReactQuill
            style={{ height: "50vh" }}
            theme="snow"
            value={form.description}
            onChange={(c) => setForm({ ...form, description: c })}
          />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-5">
        <Button
          onClick={() => navigate("/")}
          style={{ margin: "0 1.5rem 0 0" }}
        >
          Batal
        </Button>
        <Button onClick={() => submit()} style={{ margin: "0 0 0 1.5rem" }}>
          Simpan
        </Button>
      </div>
    </div>
  );
};

export default AddRecipe;
