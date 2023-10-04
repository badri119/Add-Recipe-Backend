import express from "express";
import { recipe } from "./Routes/recipe.js";
import { user } from "./Routes/users.js";

const recipeRoute = recipe;
const userRoute = user;

const app = express();
const port = 3000;

app.use("/recipe", recipeRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send("These are the users");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
