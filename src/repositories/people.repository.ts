import db from "../database/database.connections";
import { Person } from "protocols";

export async function randomPersonRepository() {
    const randomPerson = await db.query<Person>(
        `SELECT * FROM people ORDER BY RANDOM() LIMIT 1`
    )
    const { rows, rowCount } = randomPerson;
    return { rows, rowCount}
}