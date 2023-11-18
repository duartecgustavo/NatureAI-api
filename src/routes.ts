import { Request, Response, Router } from "express";
const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "API UP" });
});
routes.get("/home", (request: Request, response: Response) => {
  return response.json({ message: "API UP" });
});

export default routes;
