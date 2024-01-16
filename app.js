require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const recipesRouter = require("./Routes/recipes");
const signupRouter = require("./Routes/signup");
const signinRouter = require("./Routes/signin");
app.use("/recipes", recipesRouter);
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);

app.listen(3001, () => console.log("Server Started"));

// Environment variable changed
