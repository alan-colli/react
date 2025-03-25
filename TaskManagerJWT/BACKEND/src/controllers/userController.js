import { createUser } from "../models/userModels";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await createUser(name, email, password);
    res.json(user);
  } catch (error) {
    console.error(error);
  }
};
