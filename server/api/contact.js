import express from 'express';
import handler from "../handlers/contactHandler.js";

const router = express.Router();

router.post("", handler);

export default router;

