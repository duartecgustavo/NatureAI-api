import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Dicas } from "../entity/Dicas";

const repositoryDicas = AppDataSource.getRepository(Dicas);

export const createDicas = async (req: Request, res: Response) => {
  try {
    const dicasData = req.body;

    const savedDicas = await repositoryDicas.save(dicasData);

    return res.json(savedDicas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};
export const getDicas = async (req: Request, res: Response) => {
  try {
    const dicas = await repositoryDicas.find();
    return res.json(dicas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};
