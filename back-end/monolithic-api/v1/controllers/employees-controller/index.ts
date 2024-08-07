import { Request, Response, NextFunction } from "express";
import { createEmployee, employees, employeesFromId } from ".../../../models/employees";
import { createEmployeeZodSchema } from "../../../util/schemas/employee-zod-schema";
import { handleGetEmployeesRequest } from "./util/get-employees/handle-get-employee-request";
import { parseGetEmployeesRequest } from "./util/get-employees/parse-get-employees-request";
import { GetEmployeesParams } from "./util/types/employee-types";

export async function getEmployees(req: Request<GetEmployeesParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetEmployeesRequest(parseGetEmployeesRequest(req), employees, req.path);
  const employeesResponse = rest;
  res.status(statusCode).json(employeesResponse);
  return next();
}

export async function getEmployeeById(req: Request, res: Response, next: NextFunction) {
  let employeeId = 0;

  const isEmployeeIdInRoute = req.params.employee_id;
  if (isEmployeeIdInRoute) employeeId = Number(req.params.employee_id);

  const isEmployeeIdIsNaN = Number.isNaN(employeeId) || employeeId === 0;
  if (isEmployeeIdIsNaN) {
    res.status(400).json({
      status: "failed",
      error: "employees/'employeeId' must be a number"
    });

    return next();
  }

  const data = await employeesFromId(employeeId);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}

export async function addEmployee(req: Request, res: Response, next: NextFunction) {
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    example: {
                      last_name: "Hello",
                      first_name: "Hello",
                      title: "Hello",
                      title_of_courtesy: "Hello",
                      birth_date: "2023/12/1",
                      hire_date: "2023/12/1",
                      address: "Hello",
                      city: "Hello",
                      region: "Hello",
                      postal_code: "Hello",
                      country: "Hello",
                      home_phone: "Hello",
                      extension: "Boo",
                      photo: "Hello",
                      notes: "Hello",
                      reports_to: 1,
                      photo_path: "Hello",
                      territory_id: "06897"
                    }    
                }
            }
        } 
    */
  try {
    const addEmployeesReqBody = createEmployeeZodSchema.parse(req.body);

    const data = await createEmployee(addEmployeesReqBody);

    res.status(201).json({
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
}
