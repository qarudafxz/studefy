import express from "express";
import cors from "cors";

import { insertNewDataRouter } from "./controllers/insertNewData.js";

const port = 3001;

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

app.use("/api", insertNewDataRouter);

app.listen(port, () => console.log("Server is running on PORT " + port));
