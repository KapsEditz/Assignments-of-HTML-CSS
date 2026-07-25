import { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function RegistrationForm() {

  const { bgColor, changeColor } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const [submittedData, setSubmittedData] = useState([]);

  function handleChange(e) {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {

    e.preventDefault();

    setSubmittedData([...submittedData, formData]);

    setFormData({
      name: "",
      email: "",
      mobile: ""
    });
  }

  return (
    <div
      className="form-container"
      style={{ backgroundColor: bgColor }}
    >

      <h2>Registration Form</h2>

      <button onClick={changeColor}>
        Change Background
      </button>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>

      </form>

      <h3>Registered Users</h3>

      {
        submittedData.map((user, index) => (

          <div className="card" key={index}>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Mobile : {user.mobile}</p>
          </div>

        ))
      }

    </div>
  );
}
