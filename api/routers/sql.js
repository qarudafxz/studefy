import express from "express";
import {
	fetchAllData,
	addStudent,
	updateStudent,
	deleteStudent,
	getLastStudent,
} from "../controllers/queries/getAllData.js";

const router = express.Router();

router.get("/all", fetchAllData);
router.get("/last_student", getLastStudent);
router.post("/insert", addStudent);
router.put("/update/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);

export { router as fetchDataRouter };
