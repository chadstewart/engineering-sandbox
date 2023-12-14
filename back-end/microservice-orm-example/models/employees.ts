import { prisma } from "../services/database";
import { prismaPaginationHelper } from "../util/pagination-helper";
import { ROW_LIMIT } from "../util/row-limit";
import { createEmployeeZodSchema } from "../util/schemas/employee-zod-schema";

export const employees = async (page = 1) => {
  const { skip, take } = prismaPaginationHelper(page);
  const queryData = await prisma.employees.findMany({
    select: {
      employee_id: true,
      first_name: true,
      last_name: true,
      title: true,
      photo: true
    },
    skip,
    take
  });
  const totalRows = await prisma.employees.count();
  const totalPages = Math.ceil(totalRows / ROW_LIMIT);
  const data = {
    queryData,
    totalRows,
    totalPages
  };
  return data;
};

export const employeesFromId = async (employeeId = 1) => {
  const queryData = await prisma.employees.findMany({
    select: {
      employee_id: true,
      first_name: true,
      last_name: true,
      title: true,
      photo: true
    },
    where: {
      employee_id: employeeId
    }
  });
  const data = {
    queryData
  };
  return data;
};

export const createEmployee = async (reqBody: unknown) => {
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

    const mostRecentEmployeeIdQuery = await prisma.employees.findMany({
      select: {
        employee_id: true
      },
      orderBy: {
        employee_id: "desc"
      }
    });

    const employeeIdToAdd = mostRecentEmployeeIdQuery[0].employee_id + 1;

    const queryData = await prisma.$transaction([
      prisma.employees.create({
        data: {
          employee_id: employeeIdToAdd,
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
          photo_path
        }
      }),
      prisma.employee_territories.create({
        data: {
          employee_id: employeeIdToAdd,
          territory_id
        }
      })
    ]);

    return queryData;
  } catch (error) {
    throw error;
  }
};
