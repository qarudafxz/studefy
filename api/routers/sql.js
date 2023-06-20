import express from "express";
import { fetchAllData, addStudent } from "../controllers/queries/getAllData.js";

const router = express.Router();

router.get("/all", fetchAllData);
router.post("/insert", addStudent);

export { router as fetchDataRouter };
