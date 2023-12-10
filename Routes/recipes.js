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
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Getting one recipe based on ID

router.get("/:postid", (req, res) => {
  res.send(req.params.postid);
});

//creating a recipe
router.post("/post", async (req, res) => {
  // console.log(req.body.ingredients.split(","));
  const recipe = new Recipe({
    userid: req.body.userid,
    recipename: req.body.recipename,
    ingredients: req.body.ingredients.split(","),
    preparation: req.body.preparations.split(","),
  });

  try {
    const newRecipe = await recipe.save();
    console.log(newRecipe);
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//modyfying a recipe
router.patch("/:id", (req, res) => {});

//deleting a recipe

router.delete("/:id", async (req, res) => {
  try {
    const recipeId = req.params.id;
    console.log(recipeId);

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    await Recipe.findByIdAndDelete(recipeId);
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
