import { Request } from "express";
import { describe, it, expect } from "vitest";
import {
  AddOrderExistingCustomerParams,
  AddOrderExistingCustomerRequestBody
} from "../../../../../../v1/controllers/orders-controller/util/types/order-types";
import { parseAddOrderExistingCustomerRequest } from "../../../../../../v1/controllers/orders-controller/util/add-order-existing-customer/parse-add-order-existing-customer-request";

type emptyObject = Record<string, never>;

describe("Order Controller Util Function: Parse Add Order Existing Customer Request", () => {
  it("Should return an object with page attribute with a number on passing correct request object", () => {
    const testObj = {
      params: {
        customer_id: "1"
      },
      body: {
        orders: {
          type: "object",
          employee_id: 1,
          order_date: new Date("2023/12/1"),
          required_date: new Date("2023/12/1"),
          shipped_date: new Date("2023/12/1"),
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
          discount: 1
        }
      }
    };

    const variableToTest = parseAddOrderExistingCustomerRequest(
      testObj as unknown as Request<AddOrderExistingCustomerParams, emptyObject, AddOrderExistingCustomerRequestBody>
    );
    expect(variableToTest).toStrictEqual({
      params: {
        customer_id: 1
      },
      requestBody: {
        orders: {
          employee_id: 1,
          order_date: new Date("2023/12/1"),
          required_date: new Date("2023/12/1"),
          shipped_date: new Date("2023/12/1"),
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
          product_id: 1,
          unit_price: 1,
          quantity: 1,
          discount: 1
        }
      }
    });
  });

  it("Should return error object with 'MissingCustomerId' when request object doesn't have page attribute", () => {
    const testObj = {
      params: {
        test: "1"
      }
    };

    const variableToTest = parseAddOrderExistingCustomerRequest(
      testObj as unknown as Request<AddOrderExistingCustomerParams, emptyObject, AddOrderExistingCustomerRequestBody>
    );
    expect(variableToTest).toStrictEqual({
      error: "MissingCustomerId"
    });
  });

  it("Should return error object with 'CustomerIdIsNotAValidNumber' when page number in request object is less than 1", () => {
    const testObj = {
      params: {
        customer_id: "0"
      }
    };

    const variableToTest = parseAddOrderExistingCustomerRequest(
      testObj as unknown as Request<AddOrderExistingCustomerParams, emptyObject, AddOrderExistingCustomerRequestBody>
    );
    expect(variableToTest).toStrictEqual({
      error: "CustomerIdIsNotAValidNumber"
    });
  });

  it("Should return error object with 'CustomerIdIsNotAValidNumber' when page number in request object is not a number", () => {
    const testObj = {
      params: {
        customer_id: "test"
      }
    };

    const variableToTest = parseAddOrderExistingCustomerRequest(
      testObj as unknown as Request<AddOrderExistingCustomerParams, emptyObject, AddOrderExistingCustomerRequestBody>
    );
    expect(variableToTest).toStrictEqual({
      error: "CustomerIdIsNotAValidNumber"
    });
  });

  it("Should return error object with 'MissingRequestBodyData' when body in request object is missing", () => {
    const testObj = {
      params: {
        customer_id: "1"
      }
    };

    const variableToTest = parseAddOrderExistingCustomerRequest(
      testObj as unknown as Request<AddOrderExistingCustomerParams, emptyObject, AddOrderExistingCustomerRequestBody>
    );
    expect(variableToTest).toStrictEqual({
      error: "MissingRequestBodyData"
    });
  });

  it("Should return error object with 'MissingRequestBodyData' when some data in request body is missing", () => {
    const testObj = {
      params: {
        customer_id: "1"
      },
      body: {
        orders: {
          type: "object",
          employee_id: 1,
          order_date: new Date("2023/12/1"),
          required_date: new Date("2023/12/1"),
          shipped_date: new Date("2023/12/1"),
          ship_via: 1,
          freight: 1,
          ship_name: "Hello",
          ship_address: "Hello",
          ship_city: "Hello",
          ship_region: "Hello",
          ship_postal_code: "Hello",
          ship_country: "Hello"
        }
      }
    };

    const variableToTest = parseAddOrderExistingCustomerRequest(
      testObj as unknown as Request<AddOrderExistingCustomerParams, emptyObject, AddOrderExistingCustomerRequestBody>
    );
    expect(variableToTest).toStrictEqual({
      error: "MissingRequestBodyData"
    });
  });
});
