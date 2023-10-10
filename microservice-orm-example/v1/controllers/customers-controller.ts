import { Request, Response, NextFunction } from "express";
import { customers, customerDetails, updateCustomer } from "../../models/customers";
import { updateCustomerZodSchema } from "../../util/schemas/update-customer-zod-schema";

export async function getCustomers (req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if(isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if(isPageNumberNaN) {
    res.status(400).json({
      status: "failed",
      error: "customers/'page' must be a number"
    });

    return next();
  }

  const data = await customers(page);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
};

export async function getCustomerDetails (req: Request, res: Response, next: NextFunction) {
  let customerId = "";

  const isCustomerIdInRoute = req.params.customer_id;
  if(isCustomerIdInRoute) customerId = req.params.customer_id;

  const isCustomerIdNotAValue = customerId.length === 0;
  if(isCustomerIdNotAValue) {
    res.status(400).json({
      status: "failed",
      error: "customers/'customerId' must have a value"
    });

    return next();
  }

  const data = await customerDetails(customerId);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
};

export async function updateCustomerById (req: Request, res: Response, next: NextFunction) {
  let customerId = "";

  const isCustomerIdInRoute = req.params.customer_id;
  if(isCustomerIdInRoute) customerId = req.params.customer_id;

  const isCustomerIdNotAValue = customerId.length === 0;
  if(isCustomerIdNotAValue) return res.status(400).json({
    status: "failed",
    error: "customers/'customerId' must have a value"
  });

  try {
      await updateCustomerZodSchema.parse(req.body);
      const data = await updateCustomer(customerId, req.body);
    
      res.status(204).json({
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