import { Router } from "express";
import { founding_date, sample_users, user_id } from "./data.js";

const user = sample_users.find((user) => user.id === user_id);

const router = Router();

router.get("/", (req, res) => {
  res.send(user.sample_books);
});

router.get("/readers", (req, res) => {
  res.send(user.sample_readers);
});

router.get("/user", (req, res) => {
  res.send(user_id);
});

router.get("/name", (req, res) => {
  res.send(user.name);
});

router.get("/foundingDate", (req, res) => {
  res.send(founding_date);
});

export default router;
