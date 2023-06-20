export const connectSQL = (db) => {
	db.connect((err) => {
		if (err) {
			throw err;
		}
		console.log("Connected to database");
	});
};
