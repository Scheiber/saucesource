import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NewSauce.css";
import { AiOutlineSend } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

const API = process.env.REACT_APP_API_URL;

const buttonIcon = { verticalAlign: "top" };

const NewSauce = () => {
  const navigate = useNavigate();
  const [sauce, setSauce] = useState({
    id: "",
    name: "",
    description: "",
    scoville: "",
    is_organic: false,
    is_kosher: false,
    link: "",
    image: "",
  });

  const newForm = (event) => {
    setSauce({ ...sauce, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/sauces`, sauce)
      .then(() => {
        navigate("/sauces");
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const orgCheckBox = () => {
    setSauce({ ...sauce, is_organic: !sauce.is_organic });
  };

  const kosCheckBox = () => {
    setSauce({ ...sauce, is_kosher: !sauce.is_kosher });
  };

  return (
    <div>
      <h1>Add a Sauce</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={sauce.name}
          onChange={newForm}
          required
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          rows="5"
          cols="20"
          id="description"
          type="text"
          value={sauce.description}
          onChange={newForm}
          required
        />
        <br />

        <label htmlFor="scoville">Scoville Rating:</label>
        <input
          id="scoville"
          type="number"
          value={sauce.scoville}
          onChange={newForm}
          required
        />
        <br />

        <input
          type="checkbox"
          name="is_organic"
          onClick={orgCheckBox}
          id="is_organic"
        />
        <label htmlFor="is_organic">This hot sauce is organic</label>
        <br />

        <input
          type="checkbox"
          name="is_kosher"
          onClick={kosCheckBox}
          id="is_kosher"
        />
        <label htmlFor="is_kosher">This hot sauce is kosher</label>
        <br />

        <label htmlFor="link">Link:</label>
        <input
          id="link"
          type="url"
          pattern="https?://.+"
          value={sauce.link}
          onChange={newForm}
          required
        />
        <br />

        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="url"
          pattern="https?://.+"
          value={sauce.image}
          onChange={newForm}
          required
        />
        <br />

        <button className="submit-button" type="submit" value="Save">
          <AiOutlineSend style={buttonIcon} /> Submit
        </button>
        <Link to={`/sauces`}>
          <button className="cancel-button">
            <GiCancel style={buttonIcon} /> Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default NewSauce;
