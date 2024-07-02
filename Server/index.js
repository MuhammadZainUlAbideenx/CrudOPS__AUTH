import express from "express";
import Connection from "./Connection.js";
import Routes from "./Routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", Routes);
Connection();
app.listen(PORT, console.log(`Server is live on PORT ${PORT}`));
