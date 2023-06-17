import express from "express";
import fs from "fs";

const router = express.Router();

//creating a api endpoint for inserting data in xml file
router.post("/insert", (req, res) => {
	//these are the parameters being extracted from the request body from frontend
	const { id, program, name } = req.body;

	try {
		//defining the path of the xml file
		const path = "D:\\IT106_ACTIVITY\\student.xml";

		//going to open the file for inserting later
		fs.readFile(path, "utf-8", (err, data) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ message: "Error opening xml file" });
			}
			//creating a variable to store the data to be inserted in the xml file
			const insertData = data.replace(
				"</students>",
				`<student id="${id}">
      <programid>${program}</programid>
      <name>${name}</name>
      </student>
    </students>`
			);

			//for insertion, we need to write the data in the xml file
			fs.writeFile(path, insertData, "utf-8", (err) => {
				if (err) {
					console.error(err);
					return res.status(500).json({ message: "Error writing to xml file" });
				}
				return res
					.status(200)
					.json({ message: "New data inserted in the xml file" });
			});
		});
	} catch (err) {
		console.log(err);
		res.status(500).send("Server error");
		return;
	}
});

//count the number of records in the xml file
router.get("/count", async (req, res) => {
	try {
		const path = "D:\\IT106_ACTIVITY\\student.xml";

		fs.readFile(path, "utf-8", (err, data) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ message: "Error opening xml file" });
			}
			const count = data.split("<student").length - 2;
			return res.status(200).json({ count });
		});
	} catch (err) {
		console.log(err);
		res.status(500).send("Server error");
		return;
	}
});

//extract the last node of the xml
router.get("/last", async (req, res) => {
	try {
		const path = "D:\\IT106_ACTIVITY\\student.xml";

		fs.readFile(path, "utf-8", (err, data) => {
			if (err) {
				return res.status(500).json({ message: "Error opening xml file" });
			}

			const lastNode =
				data.split("</student>")[data.split("</student>").length - 2];
			return res.status(200).json({ lastNode });
		});
	} catch (err) {
		console.log(err);
		res.status(500).send("Server error");
		return;
	}
});
export { router as insertNewDataRouter };