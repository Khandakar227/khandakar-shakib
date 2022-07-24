import express from "express";
import { config } from "dotenv";
import cors from "cors";
import contact from "./api/contact.js";

const port = process.env.PORT || 8080;

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("*", (_, res) => {
    res.redirect("https://khandakar227.pages.dev")
});

app.use("/api/contact", contact);

//Server
app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});
