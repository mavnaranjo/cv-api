import { Router, Request, Response } from "express";

import languages from "./languages";

const router = Router();

router.get("/languages", (req: Request, res: Response) => {
  res.json(languages);
});

export default router;