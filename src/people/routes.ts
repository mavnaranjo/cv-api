import { Router, Request, Response } from "express";

import me from "./me";

const router = Router();

router.get("/me", (req: Request, res: Response) => {
  res.json(me);
});

export default router;