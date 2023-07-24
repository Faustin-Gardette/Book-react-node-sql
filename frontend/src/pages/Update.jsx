import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    descr: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Modifier le livre</h1>
      <input
        type="text"
        placeholder="Titre"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="descr"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Prix"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Couverture"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Modifier</button>
    </div>
  );
};

export default Update;
