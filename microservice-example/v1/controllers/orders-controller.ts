import { Request, Response, NextFunction } from "express";
import { orders, orderDetails, addOrderExistingCustomer, addOrderNewCustomer } from "../../models/orders";
import { addOrdersExistingCustomerZodSchema, addOrdersNewCustomerZodSchema } from "../../util/schemas/add-orders-zod-schema";

export async function getOrders (req: Request, res: Response, next: NextFunction) {
  let page = 1;

  const isPageNumberInRoute = req.params.page;
  if(isPageNumberInRoute) page = Number(req.params.page);

  const isPageNumberNaN = Number.isNaN(page);
  if(isPageNumberNaN) return res.status(400).json({
    status: "failed",
    error: "orders/'page' must be a number"
  });

  const data = await orders(page);

  return res.status(200).json({
    status: "success",
    data: data
  });
};

export async function getOrderDetails (req: Request, res: Response, next: NextFunction) {
  let orderId = 0;

  const isOrderIdInRoute = req.params.order_id;
  if(isOrderIdInRoute) orderId = Number(req.params.order_id);

  const isOrderIdNaN = Number.isNaN(orderId);
  if(isOrderIdNaN) return res.status(400).json({
    status: "failed",
    error: "orders/'order_id' must be a number"
  });

  const data = await orderDetails(orderId);

  const isRowsEmpty = data.rowCount === 0;
  if(isRowsEmpty) return res.status(200).json({
    status: "success",
    data: {
      message: "No rows were found"
    }
  });

  return res.status(200).json({
    status: "success",
    data: data
  });
};

export async function addOrderAddNewCustomer (req: Request, res: Response, next: NextFunction) {
  try {
    const validRequestBody = await addOrdersNewCustomerZodSchema.parse(req.body);

    const data = addOrderNewCustomer(validRequestBody);
  
    return res.status(201).json({
      status: "success",
      data: data
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      error
    });
  }
};

export async function addOrderAddExistingCustomer (req: Request, res: Response, next: NextFunction) {
  try {
    const validRequestBody = await addOrdersExistingCustomerZodSchema.parse(req.body);

    const data = addOrderExistingCustomer(validRequestBody, req.params.customer_id);
  
    return res.status(201).json({
      status: "success",
      data: data
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      error
    });
  }
};