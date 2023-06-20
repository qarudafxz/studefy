//this server is for the backend of interacting with SQL Server

import express from "express";
import cors from "cors";
import mysql from "mysql";

import { fetchDataRouter } from "./routers/sql.js";
import { connectSQL } from "./database/connectSQL.js";

const port = 3002;

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

app.use("/api", fetchDataRouter);

export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "ite106_final_proj",
});

try {
	connectSQL(db);
} catch (err) {
	console.log(err);
}

app.listen(port, () => console.log("Server is running on PORT " + port));
