import { Request, Response, NextFunction } from "express";
import { orders, orderDetails, addOrderExistingCustomer, addOrderNewCustomer } from "../../../models/orders";
import {
  addOrdersExistingCustomerZodSchema,
  addOrdersNewCustomerZodSchema
} from "../../../util/schemas/add-orders-zod-schema";
import { handleGetOrdersRequest } from "./util/get-orders/handle-get-orders-request";
import { parseGetOrdersRequest } from "./util/get-orders/parse-get-orders-request";
import { GetOrderDetailsParams, GetOrdersParams } from "./util/types/order-types";
import { handleGetOrderDetailsRequest } from "./util/get-order-details/handle-get-order-details-request";
import { parseGetOrderDetailsRequest } from "./util/get-order-details/parse-get-order-details-request";

export async function getOrders(req: Request<GetOrdersParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetOrdersRequest(parseGetOrdersRequest(req), orders, req.path);
  const orderResponse = rest;
  res.status(statusCode).json(orderResponse);
  return next();
}

export async function getOrderDetails(req: Request<GetOrderDetailsParams>, res: Response, next: NextFunction) {
  const { statusCode, ...rest } = await handleGetOrderDetailsRequest(parseGetOrderDetailsRequest(req), orderDetails);
  const orderDetailsResponse = rest;
  res.status(statusCode).json(orderDetailsResponse);
  return next();
}

export async function addOrderAddNewCustomer(req: Request, res: Response, next: NextFunction) {
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    example: {
                      orders: {
                        type: "object",
                        employee_id: 1,
                        order_date: "2023/12/1",
                        required_date: "2023/12/1",
                        shipped_date: "2023/12/1",
                        ship_via: 1,
                        freight: 1,
                        ship_name: "Hello",
                        ship_address: "Hello",
                        ship_city: "Hello",
                        ship_region: "Hello",
                        ship_postal_code: "Hello",
                        ship_country: "Hello"
                      },
                      order_details: {
                        type: "object",
                        product_id: 1,
                        unit_price: 1,
                        quantity: 1,
                        discount: 1,
                      },
                      customers: {
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
        } 
    */
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
      error: "The request body is not what was expected."
    });

    return next();
  }
}

export async function addOrderAddExistingCustomer(req: Request, res: Response, next: NextFunction) {
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    example: {
                      orders: {
                        type: "object",
                        employee_id: 1,
                        order_date: "2023/12/1",
                        required_date: "2023/12/1",
                        shipped_date: "2023/12/1",
                        ship_via: 1,
                        freight: 1,
                        ship_name: "Hello",
                        ship_address: "Hello",
                        ship_city: "Hello",
                        ship_region: "Hello",
                        ship_postal_code: "Hello",
                        ship_country: "Hello"
                      },
                      order_details: {
                        type: "object",
                        product_id: 1,
                        unit_price: 1,
                        quantity: 1,
                        discount: 1,
                      }
                    }
                }
            }
        } 
    */
  let customerId = "";

  const isCustomerIdInRoute = req.params.customer_id;
  if (isCustomerIdInRoute) customerId = req.params.customer_id;

  const isCustomerIdNotAValue = customerId.length === 0;
  if (isCustomerIdNotAValue) {
    res.status(400).json({
      status: "failed",
      error: "orders/'order_id' must be a number"
    });

    return next();
  }

  try {
    const validRequestBody = await addOrdersExistingCustomerZodSchema.parse(req.body);

    const data = addOrderExistingCustomer(validRequestBody, customerId);

    res.status(201).json({
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
