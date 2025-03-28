import axios from "axios";
axios.defaults.withCredentials = true;

export async function onRegistration(registrationData) {
  return await axios.post(
    "http://localhost:5001/api/register",
    registrationData
  );
}
export async function onLogin(loginData) {
  return await axios.post("http://localhost:5001/api/login", loginData);
}

export async function onLogout() {
  return await axios.get("http://localhost:5001/api/logout");
}

export const fetchProtectedInfo = async () => {
  const token = localStorage.getItem("token");
  return await api.get("/protected", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
