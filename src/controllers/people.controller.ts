import { Request, Response } from "express";
import { Person } from "../protocols";
import * as personServices from "../services/people.service";

export async function getRandomPerson(req: Request, res: Response) {
  const randomPerson: Person[] = await personServices.randomPersonService();
  return res.status(200).send(randomPerson);
}