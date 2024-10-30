import { Router, Request, Response } from "express";

import jobs from "./jobs";

const router = Router();

router.get("/jobs", (req: Request, res: Response) => {
  res.json(jobs);
});

export default router;