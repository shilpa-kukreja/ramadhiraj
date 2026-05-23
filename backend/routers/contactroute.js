import express from "express";
import { createContact } from "../controllers/contactcontroller.js";

const router = express.Router();

// POST CONTACT
router.post("/", createContact);

export default router;