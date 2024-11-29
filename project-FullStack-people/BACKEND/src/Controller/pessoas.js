import { openDb } from "../cfgDB.js";

export const insertPeople = async (people) => {
  try {
    const db = await openDb();
    await db.run(" INSERT INTO pessoas (nome, cpf, idade) VALUES (?,?,?)", [
      people.nome,
      people.cpf,
      people.idade,
    ]);
    console.log("People insert succesfully!");
  } catch (error) {
    console.error("Error to insert people!");
  }
};

export const deletePeople = async (id) => {
  try {
    const db = await openDb();
    //Verify if the people exist
    const people = await db.get("SELECT * FROM pessoas WHERE id=?", [id]);
    if (!people) {
      console.log("People hasnt been found!", id);
      return false;
    }

    //Deleting people
    const peopleToDelete = await db.run("DELETE FROM pessoas WHERE id=?", [id]);
    return peopleToDelete.changes > 0;
  } catch (error) {
    console.error("Error to delete people", error.message);
    throw error;
  }
};

export const updatePeople = async (people) => {
  try {
    const db = await openDb();
    await db.run("UPDATE pessoas SET nome=?, cpf=?, idade=? WHERE id=?", [
      people.nome,
      people.cpf,
      people.idade,
      people.id,
    ]);
  } catch (error) {
    console.error("Error to update", error.message);
  }
};

export const searchPeople = async (nome) => {
  try {
    const db = await openDb();
    const query = `
  SELECT * FROM pessoas 
  WHERE ' ' || nome || ' ' LIKE ?`; //Add spaces before and after the name, to not return names that exist inside other names (Ex: Ana inside JuliANA)
    const people = await db.all(query, [`% ${nome} %`]);
    return people;
  } catch (error) {
    console.error("Error to search people", error.message);
  }
};

export const showPeople = async () => {
  try {
    const db = await openDb();
    const peoples = await db.all("SELECT * FROM pessoas");
    return peoples;
  } catch (error) {
    console.error("Error to shown people", error.message);
  }
};
