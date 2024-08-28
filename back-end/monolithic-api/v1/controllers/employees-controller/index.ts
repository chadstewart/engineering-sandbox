import { Request, Response, NextFunction } from "express";
import { createEmployee, employees, employeesFromId } from ".../../../models/employees";
import { handleGetEmployeesRequest } from "./util/get-employees/handle-get-employee-request";
import { parseGetEmployeesRequest } from "./util/get-employees/parse-get-employees-request";
import { AddEmployeeParams, GetEmployeeByIdParams, GetEmployeesParams } from "./util/types/employee-types";
import { parseGetEmployeeByIdRequest } from "./util/get-employee-by-id/parse-get-employee-by-id-request";
import { handleGetEmployeeByIdRequest } from "./util/get-employee-by-id/handle-get-employee-by-id-request";
import { handleAddEmployeeRequest } from "./util/add-employee/handle-add-employee-request";
import { parseAddEmployeeRequest } from "./util/add-employee/parse-add-employee-request";

export async function getEmployees(req: Request<GetEmployeesParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetEmployeesRequest(parseGetEmployeesRequest(req), employees, req.path);
  const employeesResponse = rest;
  res.status(statusCode).json(employeesResponse);
  return next();
}

export async function getEmployeeById(req: Request<GetEmployeeByIdParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetEmployeeByIdRequest(parseGetEmployeeByIdRequest(req), employeesFromId);
  const employeesByIdResponse = rest;
  res.status(statusCode).json(employeesByIdResponse);
  return next();
}

export async function addEmployee(req: Request<AddEmployeeParams>, res: Response, next: NextFunction) {
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
  const { statusCode, ...rest } = await handleAddEmployeeRequest(parseAddEmployeeRequest(req), createEmployee);
  const addEmployeeResponse = rest;
  res.status(statusCode).json(addEmployeeResponse);
  next();
}
