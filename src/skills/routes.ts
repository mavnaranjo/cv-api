import { Router, Request, Response } from "express";

import skills from "./skills";

const router = Router();

router.get("/skills", (req: Request, res: Response) => {
  res.json(skills);
});

export default router;