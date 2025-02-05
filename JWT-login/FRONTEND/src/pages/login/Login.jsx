import Layout from "../../components/Layout";
import "./login.css";

export default function Login() {
  return (
    <Layout>
      <div className="backspace">
        <div className="form-container">
          <p className="name-container">Login</p>
          <form action="submit" className="form">
            <p>Email</p>
            <input type="email" placeholder="Email" className="input" />
            <p>Password</p>
            <input type="password" placeholder="Password" className="input" />
          </form>
          <button className="button">SUBMIT</button>
        </div>
      </div>
    </Layout>
  );
}
