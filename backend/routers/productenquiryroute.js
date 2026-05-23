import express from "express";

import {
  createProductEnquiry,
} from "../controllers/productenquirycontroller.js";

const router = express.Router();

// CREATE PRODUCT ENQUIRY
router.post("/", createProductEnquiry);

export default router;