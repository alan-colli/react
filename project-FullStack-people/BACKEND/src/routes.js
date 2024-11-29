import { Router } from "express";
import {
  showPeople,
  insertPeople,
  deletePeople,
  updatePeople,
  searchPeople,
} from "./Controller/pessoas.js";

const routes = Router();

routes.get("/health", (req, res) => {
  return res.status(200).json({ message: "Health!" });
});

routes.post("/pessoas", async (req, res) => {
  const { nome, cpf, idade } = req.body;

  //Validação de campos
  if (!nome || !cpf || !idade) {
    return res.status(400).json({ message: "All informations are required!" });
  }

  try {
    const people = { nome, cpf, idade };
    await insertPeople(people);
    res.status(201).json({ message: "People inserted succesfully!" });
  } catch (error) {
    res.status(500).json({ message: "People not inserted!" });
  }
});

routes.delete("/pessoas/:id", async (req, res) => {
  const { id } = req.params;
  //Certify that the ID is a integer number
  const idAsNumber = parseInt(id, 10);
  console.log("ID received: ", idAsNumber);
  //Verify if the ID is valid
  if (!id || isNaN(idAsNumber)) {
    res.status(500).json({ message: "Invalid ID" });
  }
  //Deleting
  try {
    const deletingPeople = await deletePeople(idAsNumber);
    if (deletingPeople) {
      res.status(200).json({ Message: "people deleted succesfully!" });
    } else {
      res.status(404).json({ Message: "People not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ Message: "Error deleting people", error: error.message });
  }
});

routes.put("/pessoas/:id", async (req, res) => {
  const { id } = req.params; //ID coming from the URL
  const idAsNumber = parseInt(id, 10); //Converting to intenger

  if (!idAsNumber) {
    //checking the ID
    return res.status(400).json({ message: "You need an ID" });
  }

  const updatingPeople = req.body;

  try {
    await updatePeople({ id: idAsNumber, ...updatingPeople });
    res.status(200).json({ message: "People updated!" });
  } catch (error) {
    res.status(500).json({ message: "Can't updated people!" });
  }
});

routes.get("/pessoas", async (req, res) => {
  try {
    let pessoas = await showPeople();
    res.json(pessoas);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error to show people!", error: error.message });
  }
});

routes.get("/pessoas/search", async (req, res) => {
  const { nome } = req.query;
  try {
    const results = await searchPeople(nome || "");
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error to search people!" });
  }
});

export default routes;
