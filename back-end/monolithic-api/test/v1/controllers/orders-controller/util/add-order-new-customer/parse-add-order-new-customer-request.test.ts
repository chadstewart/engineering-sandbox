import { Request } from "express";
import { describe, it, expect } from "vitest";
import { parseAddOrderNewCustomerRequest } from "../../../../../../v1/controllers/orders-controller/util/add-order-new-customer/parse-add-order-new-customer-request";
import { AddOrderNewCustomerRequestBody } from "../../../../../../v1/controllers/orders-controller/util/types/order-types";

describe("Order Controller Util Function: Parse Add Order New Customer Request", () => {
  const baseObj = {
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
      discount: 1
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
  };

  type emptyObject = Record<string, never>;

  it("Should return an object with page attribute with a number on passing correct request object", () => {
    const testObj = {
      body: { ...baseObj }
    };

    const variableToTest = parseAddOrderNewCustomerRequest(
      testObj as unknown as Request<emptyObject, emptyObject, AddOrderNewCustomerRequestBody>
    );
    expect(variableToTest).toStrictEqual({
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
    });
  });

  it("Should return error object with 'MissingParams' when one of the object's params are incorrect", () => {
    const testObj = {
      body: {
        ...baseObj,
        customers: {
          ...baseObj.customers,
          company_name: 3
        }
      }
    };

    const variableToTest = parseAddOrderNewCustomerRequest(
      testObj as unknown as Request<emptyObject, emptyObject, AddOrderNewCustomerRequestBody>
    );
    expect(variableToTest).toStrictEqual({
      error: "MissingRequestBodyData"
    });
  });

  it("Should return error object with 'MissingParams' when request object is missing params", () => {
    const testObj = {
      body: {}
    };

    const variableToTest = parseAddOrderNewCustomerRequest(
      testObj as unknown as Request<emptyObject, emptyObject, AddOrderNewCustomerRequestBody>
    );
    expect(variableToTest).toStrictEqual({
      error: "MissingRequestBodyData"
    });
  });
});
