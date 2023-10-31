const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");
//Getting all Recipes

router.get("/", async (req, res) => {
  // res.send("Hello World!");
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one recipe based on ID

router.get("/:postid", (req, res) => {
  res.send(req.params.postid);
});

//creating a recipe
router.post("/post", async (req, res) => {
  const recipe = new Recipe({
    recipename: req.body.name,
    ingredients: req.body.ingredients,
    preparation: req.body.preparation,
  });
  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//modyfying a recipe
router.patch("/postid", (req, res) => {});

//deleting a recipe

router.delete("/postid", (req, res) => {});

module.exports = router;
