import app from "./app.js";

import openDb from "./cfgDB.js";

//teste de conexão com a tabela
// (async () => {
//   try {
//     const db = await openDb();
//     console.log("DB is connected");

//     const tables = await db.all(
//       "SELECT name FROM sqlite_master WHERE type='table';"
//     );
//     console.log("Tables in the database:", tables);
//   } catch (error) {
//     console.error("Error", error.message);
//   }
// })();

app.listen(3008, () => console.log("Server is running!"));
