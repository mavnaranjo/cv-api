import { Router, Request, Response } from "express";

import studies from "./studies";

const router = Router();

router.get("/studies", (req: Request, res: Response) => {
  res.json(studies);
});

export default router;