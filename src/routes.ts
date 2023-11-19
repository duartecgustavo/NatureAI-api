import { Request, Response, Router } from "express";
import {
  getDicas,
  createDicas
} from "./controller/UserController";
const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "API UP" });
});
routes.get("/home", (request: Request, response: Response) => {
  return response.json({ message: "API UP" });
});

routes.get("/dicas", getDicas);

routes.post("/dicas", createDicas);

export default routes;
