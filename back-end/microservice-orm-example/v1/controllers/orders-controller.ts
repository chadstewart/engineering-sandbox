import { Request, Response, NextFunction } from "express";
import { orders, orderDetails, addOrderExistingCustomer, addOrderNewCustomer } from "../../models/orders";
import { addOrdersExistingCustomerZodSchema, addOrdersNewCustomerZodSchema } from "../../util/schemas/add-orders-zod-schema";

export async function getOrders (req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if(isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if(isPageNumberNaN) {
    res.status(400).json({
      status: "failed",
      error: "orders/'page' must be a number"
    });

    return next();
  }

  const data = await orders(page);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
};

export async function getOrderDetails (req: Request, res: Response, next: NextFunction) {
  let orderId = 0;

  const isOrderIdInRoute = req.params.order_id;
  if(isOrderIdInRoute) orderId = Number(req.params.order_id);

  const isOrderIdNaN = Number.isNaN(orderId);
  if(isOrderIdNaN) {
    res.status(400).json({
      status: "failed",
      error: "orders/'order_id' must be a number"
    });

    return next();
  }

  const data = await orderDetails(orderId);

  res.status(200).json({
    status: "success",
    data: data
  });

  return next();
};

export async function addOrderAddNewCustomer (req: Request, res: Response, next: NextFunction) {
  try {
    const validRequestBody = await addOrdersNewCustomerZodSchema.parse(req.body);

    const data = addOrderNewCustomer(validRequestBody);
  
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
};

export async function addOrderAddExistingCustomer (req: Request, res: Response, next: NextFunction) {
  try {
    const validRequestBody = await addOrdersExistingCustomerZodSchema.parse(req.body);

    const data = addOrderExistingCustomer(validRequestBody, req.params.customer_id);
  
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
};