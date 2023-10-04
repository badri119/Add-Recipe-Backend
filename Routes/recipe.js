import { Router } from "express";
import { recipes } from "./recipes.js";
import { db } from "./firebase.js";

const router = Router();

// console.log(db);

// // const snapshot = await db.collection("users").get();
// // snapshot.forEach((doc) => {
// //   console.log(doc.id, "=>", doc.data());
// // });

router.get("/", (req, res) => {
  res.send({ recipes });
});

router.post("/", (req, res) => {
  res.send("Recipe Added");
});

router.put("/", (req, res) => {
  res.send("Recipe Modified");
});

router.delete("/", (req, res) => {
  res.send("Recipe Deleted");
});

export const recipe = router;
