import { prisma } from "../services/database";
import { prismaPaginationHelper } from "../util/pagination-helper";
import { ROW_LIMIT } from "../util/row-limit";

export const employeeFromTerritories = async (page = 1, territoryId = 1) => {
  const { skip, take } = prismaPaginationHelper(page);
  const queryData = await prisma.employee_territories.findMany({
    select: {
      employees: {
        select: {
          first_name: true,
          last_name: true,
          title: true,
          hire_date: true,
          notes: true,
          home_phone: true,
          photo: true
        }
      },
      territories: {
        select: {
          territory_description: true,
          region: {
            select: {
              region_description: true
            }
          }
        }
      }
    },
    where: {
      territory_id: `${territoryId}`
    },
    skip,
    take
  });

  interface queryResponse {
    total_rows: bigint;
  }

  const countQuery = await prisma.$queryRaw<queryResponse[]>`
    Select
      COUNT ( 
        employees.employee_id
      )
    AS
      total_rows
    From
      employee_territories
    LEFT JOIN
      employees on employees.employee_id=employee_territories.employee_id
    LEFT JOIN
      territories on employee_territories.territory_id=territories.territory_id
    LEFT JOIN
      region on territories.region_id=region.region_id
    WHERE
      employee_territories.territory_id::int=${territoryId}::int`;

  // BigInt to Int conversion @.@
  const totalRows = Number(`${countQuery[0].total_rows}`);

  const totalPages = Math.ceil(totalRows / ROW_LIMIT);
  const data = {
    queryData,
    totalRows,
    totalPages
  };
  return data;
};

export const territories = async (page = 1) => {
  const { skip, take } = prismaPaginationHelper(page);
  const queryData = await prisma.territories.findMany({
    skip,
    take
  });
  const totalRows = await prisma.territories.count();
  const totalPages = Math.ceil(totalRows / ROW_LIMIT);
  const data = {
    queryData,
    totalRows,
    totalPages
  };
  return data;
};

export const territoriesById = async (territoryId = "") => {
  const queryData = await prisma.territories.findMany({
    where: {
      territory_id: `${territoryId}`
    }
  });
  const data = {
    queryData
  };
  return data;
};
