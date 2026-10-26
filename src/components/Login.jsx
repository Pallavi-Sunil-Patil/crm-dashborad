import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post("http://localhost:5000/login", {
        name,
        password
      });

      
      if (res.data.success) {
        navigate("/dashboard");
      } else {
        alert("Invalid Credentials");
      }

    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  return (

    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>CRM Login</h2>

        <div className="input-group">

          <label>User Name</label>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </div>

        <div className="input-group">

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  );
}