import { useState } from "react";
import Layout from "../components/Layout";
import { onRegistration } from "../API/auth";

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

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await onRegistration(values);
      console.log(response);
      setError(false);
      setSucces("User has been created");
      setValues({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
      setSucces(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex justify-center items-center">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="bg-gray-200 flex h-[40vh] justify-start space-y-12 items-center flex-col w-[90vw] rounded-md"
        >
          <h2 className="mt-6">Register</h2>
          <div className="space-x-2">
            <label>Email:</label>
            <input
              type="email"
              className="border-2"
              onChange={(e) => onChange(e)}
              name="email"
              id="email"
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
              id="password"
              name="password"
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

          {error && <div className="text-red-600 font-bold">{error}</div>}
          {succes && (
            <div className="text-green-600 font-bold bg-white rounded-lg border-green-600 border-2">
              {succes}
            </div>
          )}
        </form>
      </div>
    </Layout>
  );
}

export default Register;
