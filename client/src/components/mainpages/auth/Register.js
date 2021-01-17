import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={registerSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={user.name}
          onChange={onChangeInput}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={user.email}
          onChange={onChangeInput}
        />

        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Password"
          value={user.password}
          onChange={onChangeInput}
        />

        <h2>Select your role from below(buyer/seller)</h2>
        <select name="role" onChange={onChangeInput}>
          <option value="0">buyer</option>
          <option value="1">seller</option>
        </select>

        <input
          type="number"
          name="zip"
          required
          autoComplete="on"
          placeholder="Enter Zip code"
          value={user.zip}
          onChange={onChangeInput}
        />

        <h2>Fill the following If you want to sell with us</h2>

        <input
          type="text"
          name="address"
          autoComplete="on"
          placeholder="Enter Address"
          value={user.address}
          onChange={onChangeInput}
        />

        <input
          type="text"
          name="business type"
          autoComplete="on"
          placeholder="Enter Business Type"
          value={user.business_type}
          onChange={onChangeInput}
        />

        <input
          type="text"
          name="business information"
          autoComplete="on"
          placeholder="Enter Business Information"
          value={user.business_information}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Register</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
