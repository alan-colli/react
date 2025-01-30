import express from "express";
import config from "./src/constants/index.js";
import auth from "./src/routes/auth.js";

const app = express();
const { PORT } = config;
app.use("/api", auth);

const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`App is running at ${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

appStart();
