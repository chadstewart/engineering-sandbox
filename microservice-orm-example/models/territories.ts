import { prisma } from "../services/database";
import { prismaPaginationHelper } from "../util/pagination-helper";

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
      },
    },
    where: {
      territory_id: `${territoryId}`
    },
    skip,
    take
  });
  const totalRows = await prisma.employees.count();
  const data = {
    queryData,
    totalRows
  };
  return data;
};