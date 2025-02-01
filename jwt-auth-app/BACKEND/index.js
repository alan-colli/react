import express from "express";
import config from "./src/constants/index.js";
import auth from "./src/routes/auth.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import "./src/middlewares/passport-middleware.js";
import cors from "cors";
import constants from "./src/constants/index.js";

const app = express();
app.use(cors({ origin: constants.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());

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
