import express from "express";
import {
  getSection, updateSection
} from "../controllers/sectionController.js";
const router = express.Router();

router.get("/:type", getSection);
router.put("/:type", updateSection)

export default router;
