import { QueryResponse } from "../protocols";
import * as personRepository from "../repositories/people.repository";
import * as errors from "../erros/erros"

export async function randomPersonService() {
  const { rows: list, rowCount }: QueryResponse =
    await personRepository.randomPersonRepository();
  if (rowCount < 1) throw errors.errorNotFound("Person");

  return list;
}