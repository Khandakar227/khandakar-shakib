//@ts-check
import { addSheetData } from "../lib/index.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export default function handler(req, res, next) {
  try {
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    addSheetData(req.body, [ip]).then((result) => {
      if (!result.error) {
        res
          .status(200)
          .json({ message: "Your'e message has been sent successfully" });
        return;
      }

      console.log("ERROR occured:", result.error.message);
      next(result.error);
    });
  } catch (error) {
    console.log("ERROR occured:", error.message);
    res.json({ ...error }).status(500);
  }
}
