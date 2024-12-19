import { Router } from "express";
import {
  deleteContact,
  editContact,
  findContactById,
  findContactByName,
  insertContact,
  showContacts,
} from "./controller/contacts.js";

const routes = Router();

routes.get("/health", (req, res) => {
  return res.status(200).json({ message: "Health" });
});

routes.post("/contacts", async (req, res) => {
  console.log("Received body:", req.body); //Verify what are you receiving from body
  const { first_name, last_name, phone_number } = req.body;
  //Validation on data
  if (!first_name || !last_name || !phone_number) {
    return res.status(400).json({
      message: "First name, last name and phone number are requires!",
    });
  }
  try {
    const contact = { first_name, last_name, phone_number };
    await insertContact(contact);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error to insert contact!", error: error.message });
  }
});

routes.get("/contacts", async (req, res) => {
  try {
    let contacts = await showContacts();
    res.json(contacts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error to show products!", error: error.message });
  }
});

routes.delete("/contacts/:id", async (req, res) => {
  const { id } = req.params;
  const idAsNumber = parseInt(id, 10);
  console.log("ID received: ", idAsNumber); //make sure that the id is a number

  if (!id || isNaN(idAsNumber)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const wasDeleted = await deleteContact(idAsNumber);
    if (wasDeleted) {
      res.status(200).json({ message: "Contact excluded succesfully!" });
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting data", error: error.message });
  }
});

routes.put("/contacts/:id", async (req, res) => {
  const { id } = req.params;
  const idAsNumber = parseInt(id, 10);
  console.log("ID receive: ", idAsNumber);

  if (!idAsNumber) {
    return res.status(400).json({ message: "You need an ID" });
  }

  const updatedContact = req.body;

  try {
    await editContact({ id: idAsNumber, ...updatedContact });
    res.status(200).json({ message: "Contact updated succesfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error to update", error: error.message });
  }
});

routes.get("/contacts/search", async (req, res) => {
  const { first_name } = req.query;
  try {
    const results = await findContactByName(first_name || "");
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error to search contact by name!" });
  }
});

routes.get("/contacts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await findContactById(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching contact by ID", error: error.message });
  }
});
export default routes;
