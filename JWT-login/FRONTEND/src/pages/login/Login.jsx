import Layout from "../../components/Layout";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const [buttonActive, setButtonActive] = useState(false);
  const [inputChange, setInputChanges] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Doesnt let the page restart
    console.log("O formulário foi enviado!");
  };

  console.log(inputChange);
  return (
    <Layout>
      <div className="backspace">
        <div className="form-container">
          <label className="name-container">Login</label>
          <form action="submit" className="form" onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              type="email"
              placeholder="Email"
              className="inputLogin"
              onChange={(e) =>
                setInputChanges({ ...inputChange, email: e.target.value })
              }
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className="inputLogin"
              onChange={(e) =>
                setInputChanges({ ...inputChange, password: e.target.value })
              }
            />
          </form>
          <button
            className={buttonActive ? "buttonActivate" : "buttonDesactivate"}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </Layout>
  );
}
