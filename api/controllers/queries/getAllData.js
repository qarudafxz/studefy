import { db } from "../../sqlServer.js";

export const fetchAllData = async (req, res) => {
	const query = "SELECT * FROM tbl_students";
	try {
		db.query(query, (err, result) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ message: "Server error" });
			}
			return res
				.status(200)
				.json({ data: result, message: "Data fetched successfully" });
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Server error" });
	}
};

export const addStudent = async (req, res) => {
	const {
		student_id,
		student_program,
		student_name,
		student_age,
		student_address,
		student_contact_number,
	} = req.body;
	const query = `INSERT INTO tbl_students (student_id, program, name, age, address, contact_number) VALUES ('${student_id}', '${student_program}', '${student_name}', '${student_age}', '${student_address}', '${student_contact_number}');`;
	try {
		db.query(query, (err, result) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ message: "Server error" });
			}
			return res
				.status(200)
				.json({ data: result, message: "New student inserted" });
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Server error" });
	}
};

export const updateStudent = async (req, res) => {
	const { id } = req.params;
	const {
		student_id,
		student_program,
		student_name,
		student_age,
		student_address,
		student_contact_number,
	} = req.body;

	const query = `UPDATE tbl_students SET student_id = '${student_id}', program = '${student_program}', name = '${student_name}', age = '${student_age}', address = '${student_address}', contact_number = '${student_contact_number}' WHERE id = ${id};`;

	try {
		db.query(query, (err, result) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ message: "Server error" });
			}
			return res.status(200).json({ data: result, message: "Student updated" });
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Server error" });
	}
};

export const deleteStudent = async (req, res) => {
	const { id } = req.params;
	const query = `DELETE FROM tbl_students WHERE id = ${id}`;

	try {
		db.query(query, (err, result) => {
			if (err) {
				console.error(err);
				return res.status(500).json({ err, message: "Server Error" });
			}

			return res.status(200).json({ message: "Student successfully deleted" });
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ err, message: "Server Error" });
	}
};
