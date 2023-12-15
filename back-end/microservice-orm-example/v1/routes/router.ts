import express from "express";
import {
  getOrders,
  getOrderDetails,
  addOrderAddNewCustomer,
  addOrderAddExistingCustomer
} from "../controllers/orders-controller";
import { addEmployee, getEmployeeById, getEmployees } from "../controllers/employees-controller";
import {
  getEmployeesByTerritories,
  getTerritories,
  getTerritoriesDetails
} from "../controllers/territories-controller";
import { getProducts, getProductDetails } from "../controllers/products-controller";
import {
  getCustomerCountryDistribution,
  getCustomerDetails,
  getCustomers,
  updateCustomerById
} from "../controllers/customers-controller";
import { getUSStates } from "../controllers/us-states-controller";
import { getCategories, getCategoryDetails } from "../controllers/categories-controller";
import { getSupplierDetails, getSuppliers } from "../controllers/suppliers-controller";
import { getRegionDetails } from "../controllers/regions-controller";
import { getTotalRevenue } from "../controllers/revenue-controller";

const router = express.Router();

//Orders
router.get("/orders/:page?", getOrders);
router.get("/orders/details/:order_id?", getOrderDetails);
router.post("/orders", addOrderAddNewCustomer);
router.post("/orders/:customer_id", addOrderAddExistingCustomer);

//Revenue
router.get("/revenue/total", getTotalRevenue);

//Products
router.get("/products/:page?", getProducts);
router.get("/products/details/:product_id?", getProductDetails);

//Customers
router.get("/customers/:page?", getCustomers);
router.get("/customers/details/:customer_id?", getCustomerDetails);
router.put("/customers/:customer_id", updateCustomerById);
router.get("/customers/distribution/country", getCustomerCountryDistribution);

//Categories
router.get("/categories/:page?", getCategories);
router.get("/categories/details/:category_id?", getCategoryDetails);

//Employees
router.get("/employees/:page?", getEmployees);
router.get("/employees/details/:employee_id?", getEmployeeById);
router.post("/employees", addEmployee);

//Suppliers
router.get("/suppliers/:page?", getSuppliers);
router.get("/suppliers/details/:suppliers_id?", getSupplierDetails);

//US States
router.get("/states/:page?", getUSStates);

//Regions
router.get("/regions/details/:region_id?", getRegionDetails);

//Territories
router.get("/territories/:page?", getTerritories);
router.get("/territories/details/:territory_id?", getTerritoriesDetails);
router.get("/territories/employees/:territory_id?/:page?", getEmployeesByTerritories);

export default router;
