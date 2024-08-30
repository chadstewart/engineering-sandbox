import { Request } from "express";
import { describe, it, expect } from "vitest";
import { parseGetOrderDetailsRequest } from "../../../../../../v1/controllers/orders-controller/util/get-order-details/parse-get-order-details-request";
import { GetOrderDetailsParams } from "../../../../../../v1/controllers/orders-controller/util/types/order-types";

describe("Order Controller Util Function: Parse Get Order Details Request", () => {
  it("Should return an object with page attribute with a number on passing correct request object", () => {
    const testObj = {
      params: {
        order_id: "1"
      }
    };

    const variableToTest = parseGetOrderDetailsRequest(testObj as unknown as Request<GetOrderDetailsParams>);
    expect(variableToTest).toStrictEqual({
      order_id: 1
    });
  });

  it("Should return error object with 'MissingOrderId' when request object doesn't have page attribute", () => {
    const testObj = {
      params: {
        test: "1"
      }
    };

    const variableToTest = parseGetOrderDetailsRequest(testObj as unknown as Request<GetOrderDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "MissingOrderId"
    });
  });

  it("Should return error object with 'OrderIdIsNotAValidNumber' when page number in request object is less than 1", () => {
    const testObj = {
      params: {
        order_id: "0"
      }
    };

    const variableToTest = parseGetOrderDetailsRequest(testObj as unknown as Request<GetOrderDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "OrderIdIsNotAValidNumber"
    });
  });

  it("Should return error object with 'OrderIdIsNotAValidNumber' when page number in request object is not a number", () => {
    const testObj = {
      params: {
        order_id: "test"
      }
    };

    const variableToTest = parseGetOrderDetailsRequest(testObj as unknown as Request<GetOrderDetailsParams>);
    expect(variableToTest).toStrictEqual({
      error: "OrderIdIsNotAValidNumber"
    });
  });
});
