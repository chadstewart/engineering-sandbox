import { Request, Response, NextFunction } from "express";
import { createEmployee, employees } from "../../models/employees";
import { createEmployeeZodSchema } from "../../util/schemas/employee-zod-schema";

export async function getEmployees (req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if(isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if(isPageNumberNaN) {
    res.status(400).json({
      status: "failed",
      error: "employees/'page' must be a number"
    });

    return next();
  }

  const data = await employees(page);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
};

export async function addEmployee (req: Request, res: Response, next: NextFunction) {
  try {
    const addEmployeesReqBody = createEmployeeZodSchema.parse(req.body);

    const data = await createEmployee(addEmployeesReqBody);
  
    res.status(200).json({
      status: "success",
      data: data
    });

    return next();
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error
    });

    return next();
  }
};