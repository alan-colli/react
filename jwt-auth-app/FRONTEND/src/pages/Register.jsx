import { useState } from "react";
import Layout from "../components/Layout";

function Register() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="min-h-screen flex justify-center items-center">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="bg-gray-200 flex h-[40vh] justify-start space-y-12 items-center flex-col flex w-[90vw] rounded-md"
        >
          <h2 className="mt-6">Register</h2>
          <div className="space-x-2">
            <label>Email:</label>
            <input
              type="email"
              className="border-2"
              onChange={(e) => onChange(e)}
              value={values.email}
              placeholder="test@email.com"
              required
            />
          </div>
          <div className="space-x-2">
            <label>Password:</label>
            <input
              type="password"
              className="border-2"
              onChange={(e) => onChange(e)}
              value={values.password}
              placeholder="password"
              required
            />
          </div>
          <button
            className="bg-black text-gray-200 rounded-md border-gray-200 border-2 w-24 "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
