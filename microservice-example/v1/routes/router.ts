import express from "express";
const router = express.Router();

import { getOrders, getOrderDetails, addOrderAddNewCustomer, addOrderAddExistingCustomer } from "../controllers/orders-controller";
import { addEmployee, getEmployees } from "../controllers/employees-controller";
import { getEmployeesByTerritories } from "../controllers/territories-controller";
import { getProducts, getProductDetails } from "../controllers/products-controller";
import { getCustomerDetails, getCustomers, updateCustomerById } from "../controllers/customers-controller";
import { getUSStates } from "../controllers/us-states-controller";

//Orders
router.get("/orders/:page?", getOrders);
router.get("/orders/details/:order_id?", getOrderDetails);
router.post("/orders", addOrderAddNewCustomer);
router.post("/orders/:customer_id", addOrderAddExistingCustomer);

//Products
router.get("/products/:page?", getProducts);
router.get("/products/details/:product_id?", getProductDetails);

//Customers
router.get("/customers/:page?", getCustomers);
router.get("/customers/details/:customer_id?", getCustomerDetails);
router.put("/customers/:customer_id", updateCustomerById);

//Employees
router.get("/employees/:page?", getEmployees);
router.post("/employees", addEmployee);

//US States
router.get("/states/:page?", getUSStates);

//Territories
router.get("/territories/employees/:territory_id?/:page?", getEmployeesByTerritories);

export default router;