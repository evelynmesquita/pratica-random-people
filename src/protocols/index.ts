export type Person = {
    id: number;
    firstName: string;
    lastName: string;
}

export type QueryResponse = {
    rows: Person[];
    rowCount: number;
}

export type CustomError = {
    type: string;
    message: string;
    stack: Error;
  };