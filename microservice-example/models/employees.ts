import { client } from "../services/database";
import { addPagination } from "../util/pagination-helper";
import { createEmployeeZodSchema } from "../util/schemas/employee-zod-schema";
import { totalPaginationPages } from "../util/total-pagination-pages";

export const employees = async (page = 1) => {
  const { inputtedRowLimit, offsetForQuery } = addPagination(page);
  const databaseQuery =
  `Select
      employee_id,
      first_name,
      last_name,
      title
      hire_date,
      photo
    From
      employees
    LIMIT $1 OFFSET $2;`;
  const databaseQueryValues = [inputtedRowLimit, offsetForQuery];
  const queryData = await client.query(databaseQuery, databaseQueryValues);
  const totalPages = await totalPaginationPages("employee_id", "employees");
  const data = {
    ...queryData,
    totalPages
  };
  return data;
};

export const createEmployee = async (reqBody: any) => {
  try {
    const createEmployeeSchema = await createEmployeeZodSchema.parse(reqBody);

    const {
      last_name,
      first_name,
      title,
      title_of_courtesy,
      birth_date,
      hire_date,
      address,
      city,
      region,
      postal_code,
      country,
      home_phone,
      extension,
      photo,
      notes,
      reports_to,
      photo_path,
      territory_id
    } = createEmployeeSchema;

    const mostRecentEmployeeIdQuery = 
    `SELECT
      employee_id
    FROM
      employees
    ORDER BY
      employee_id DESC
    LIMIT 1;`;

    const employeeIdToAdd = (await client.query(mostRecentEmployeeIdQuery)).rows[0].employee_id + 1;
    
    const databaseQuery = 
    `BEGIN;
    INSERT INTO
      employees (employee_id, last_name, first_name, title, title_of_courtesy, birth_date, hire_date, address, city, region, postal_code, country, home_phone, extension, photo, notes, reports_to, photo_path)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18);
    INSERT INTO
      employee_territories (employee_id, territory_id)
    VALUES ($19, $20);
    END;`;
    const databaseQueryValues = [
      last_name,
      first_name,
      title,
      title_of_courtesy,
      birth_date,
      hire_date,
      address,
      city,
      region,
      postal_code,
      country,
      home_phone,
      extension,
      photo,
      notes,
      reports_to,
      photo_path,
      employeeIdToAdd,
      territory_id
    ];
    const queryData = await client.query(databaseQuery, databaseQueryValues);
    return queryData;
  } catch (error) {
    throw error;
  }
};