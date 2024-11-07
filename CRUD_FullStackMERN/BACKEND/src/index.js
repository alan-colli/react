import app from "./app.js";
import loaders from "./loaders/index.js";

loaders.start();

app.listen(3333, () => console.log("Server is running on port 3333"));
