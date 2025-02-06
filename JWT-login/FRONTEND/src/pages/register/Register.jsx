import { useState } from "react";
import Layout from "../../components/Layout";
import "./register.css";

export default function Register() {
  const [inputChange, setInputChanges] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Doesnt let the page restart
    console.log("O formulário foi enviado!");
  };

  return (
    <Layout>
      <div className="backspace">
        <div className="form-container">
          <p className="name-container">Register</p>
          <form action="submit" className="form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              className="inputRegister"
              onChange={(e) =>
                setInputChanges({ ...inputChange, name: e.target.value })
              }
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              className="inputRegister"
              onChange={(e) =>
                setInputChanges({ ...inputChange, email: e.target.value })
              }
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className="inputRegister"
              onChange={(e) =>
                setInputChanges({ ...inputChange, password: e.target.value })
              }
            />
          </form>
          <button className="buttonActivate">SUBMIT</button>
        </div>
      </div>
    </Layout>
  );
}
