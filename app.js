require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const recipesRouter = require("./Routes/recipes");
app.use("/recipes", recipesRouter);

app.listen(3000, () => console.log("Server Started"));
