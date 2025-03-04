import {
  getUserByEmail,
  postNewUser,
  putUserByEmail,
} from "../models/models.js";

export const getUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error to search user" });
  }
};

export const postUser = async (req, res) => {
  try {
    const { name, email, password_hash } = req.body;
    const post_user = await postNewUser(name, email, password_hash);
    return res
      .status(201)
      .json({ message: "User created successfully!", user: post_user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password_hash } = req.body;
    const put_user = await putUserByEmail(name, email, password_hash, id);
    if (!put_user) {
      return res.status(404).json({ message: "User not found!" });
    }
    return res
      .status(200)
      .json({ message: "User updated succesfully!", user: put_user });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};
