import openDb from "../configDB.js";

export const insertContact = async (contact) => {
  try {
    const db = await openDb();
    await db.run(
      "INSERT INTO contacts (first_name, last_name, phone_number) VALUES (?,?,?)",
      [contact.first_name, contact.last_name, contact.phone_number]
    );
    console.log("Contact insert succesfully!");
  } catch (error) {
    console.error("Error to insert contact", error.message);
  }
};

export const showContacts = async () => {
  try {
    const db = await openDb();
    const contacts = await db.all("SELECT * FROM contacts");
    return contacts;
  } catch (error) {
    console.error("Error to show contacts!", error.message);
  }
};

export const deleteContact = async (id) => {
  try {
    const db = await openDb();
    //Verify if the contact exist or match
    const contact = await db.get("SELECT * FROM contacts WHERE id=?", [id]);
    if (!contact) {
      console.log("Contact hasn't been found!", id);
      return false;
    }
    //Deleting contact
    const contactToDelete = await db.run("DELETE FROM contacts WHERE id=?", [
      id,
    ]);
    console.log("Contact excluded succesfully!");
    return contactToDelete.changes > 0;
  } catch (error) {
    console.error("Error to delete product", error.message);
  }
};

export const editContact = async (contact) => {
  try {
    const db = await openDb();
    await db.run(
      "UPDATE contacts SET first_name=?, last_name=?, phone_number=? WHERE id=?",
      [contact.first_name, contact.last_name, contact.phone_number, contact.id]
    );
    console.log("Product updated succesfully!");
  } catch (error) {
    console.error("Error to update", error.message);
  }
};

export const findContactByName = async (first_name) => {
  try {
    const db = await openDb();
    const query = `SELECT * FROM contacts WHERE first_name LIKE ?`;
    const people = await db.all(query, [`%${first_name}%`]); // Busca em qualquer posição
    return people;
  } catch (error) {
    console.error("Error to search people!", error.message);
  }
};

export const findContactById = async (id) => {
  try {
    const db = await openDb();
    const contact = await db.get("SELECT * FROM contacts WHERE id=?", [id]);
    return contact;
  } catch (error) {
    console.error("Error to found people by ID", error.message);
  }
};
