import Layout from "../../components/Layout";
import "./register.css";

export default function Register() {
  return (
    <Layout>
      <div className="backspace">
        <div className="form-container">
          <p className="name-container">Register</p>
          <form action="submit" className="form">
            <label>Name</label>
            <input type="text" placeholder="Name" className="inputRegister" />
            <label>Email</label>
            <input type="email" placeholder="Email" className="inputRegister" />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className="inputRegister"
            />
          </form>
          <button className="buttonActivate">SUBMIT</button>
        </div>
      </div>
    </Layout>
  );
}
