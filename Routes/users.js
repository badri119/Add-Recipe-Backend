import express from "express";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("These are your users");
});

router.post("/", (req, res) => {
  res.send("user created");
});

router.put("/", (req, res) => {
  res.send("user updated");
});

router.delete("/", (req, res) => {
  res.send("user deleted");
});

export const user = router;
