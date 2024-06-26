import { Request, Response, NextFunction } from "express";
import {
  customers,
  customerDetails,
  updateCustomer,
  customerCountryDistribution,
  allCustomerIDs
} from "../../models/customers";
import { updateCustomerZodSchema } from "../../util/schemas/update-customer-zod-schema";

export async function getCustomers(req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if (isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if (isPageNumberNaN) {
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
}

export async function getCustomerDetails(req: Request, res: Response, next: NextFunction) {
  let customerId = "";

  const isCustomerIdInRoute = req.params.customer_id;
  if (isCustomerIdInRoute) customerId = req.params.customer_id;

  const isCustomerIdNotAValue = customerId.length === 0;
  if (isCustomerIdNotAValue) {
    res.status(400).json({
      status: "failed",
      error: "customers/details/'customer_id' must have a value"
    });

    return next();
  }

  const data = await customerDetails(customerId);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}

export async function updateCustomerById(req: Request, res: Response, next: NextFunction) {
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    example: {
                      company_name: "Hello",
                      contact_name: "Hello",
                      contact_title: "Hello",
                      address: "Hello",
                      city: "Hello",
                      region: "Hello",
                      postal_code: "Hello",
                      country: "Hello",
                      phone: "Hello",
                      fax: "Hello"
                    }    
                }
            }
        } 
    */
  let customerId = "";

  const isCustomerIdInRoute = req.params.customer_id;
  if (isCustomerIdInRoute) customerId = req.params.customer_id;

  const isCustomerIdNotAValue = customerId.length === 0;
  if (isCustomerIdNotAValue)
    return res.status(400).json({
      status: "failed",
      error: "customers/'customer_id' must have a value"
    });

  try {
    await updateCustomerZodSchema.parse(req.body);
    const data = await updateCustomer(customerId, req.body);

    res.status(200).json({
      status: "success",
      data: data
    });

    return next();
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "The request body is not what was expected."
    });

    return next();
  }
}

export async function getCustomerCountryDistribution(req: Request, res: Response, next: NextFunction) {
  const data = await customerCountryDistribution();

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}

export async function getAllCustomerIDs(req: Request, res: Response, next: NextFunction) {
  const data = await allCustomerIDs();

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
}
