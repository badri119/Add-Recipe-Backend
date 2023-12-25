const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");
const verify = require("./verifyToken");
const User = require("../models/user");
//Getting all Recipes

router.get("/", verify, async (req, res) => {
  // res.send("Hello World!");
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Getting one recipe based on ID

router.get("/:postid", verify, async (req, res) => {
  try {
    const recipeid = await Recipe.findById(req.params.postid);
    res.json(recipeid);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//creating a recipe
router.post("/post", verify, async (req, res) => {
  // console.log(req.body.ingredients.split(","));
  const recipe = new Recipe({
    username: req.body.username,
    userid: req.body.userid,
    recipename: req.body.recipename,
    type: req.body.type,
    ingredients: req.body.ingredients.split(","),
    preparation: req.body.preparation.split(","),
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
router.patch("/:id", verify, async (req, res) => {
  try {
    const recipeId = req.params.id;
    const updatedData = req.body;
    // console.log(updatedData);
    const result = await Recipe.findByIdAndUpdate(recipeId, updatedData, {
      new: true,
    });
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(400).json({ message: "Could not edit recipe" });
  }
});

//deleting a recipe

router.delete("/:id", verify, async (req, res) => {
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
