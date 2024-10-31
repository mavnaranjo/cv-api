import { Router, Request, Response } from "express";

import me from "./me";

const router = Router();

router.get("/me", (req: Request, res: Response) => {
  let person = { ...me };

  person.image = req.app.locals.url + me.image;

  res.json(person);
});

export default router;