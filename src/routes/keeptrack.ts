import { Router, Request, Response } from "express";
import { MOCK_PROJECTS } from "../MockProjects";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  // req.query._page
  res.send(JSON.stringify(MOCK_PROJECTS));
});

router.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).send({ msg: "Bad Request ID" });
  const project = MOCK_PROJECTS.find((prj) => prj.id === id);
  if (!project) res.sendStatus(404);
  return res.send(project);
});

router.put("/:id", (req: Request, res: Response) => {
  console.log("OK");
  return res.send(req.body);
});
