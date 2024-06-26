import { getCats } from "../../lib/api/external-apis/cats";
import { getCategories, getCategoryDetails } from "../../lib/api/internal-apis/categories";
import {
  updateCustomer,
  getCustomerCountryDistribution,
  getCustomerDetails,
  getCustomers,
  getAllCustomerIDs
} from "../../lib/api/internal-apis/customers";
import { addEmployees, getEmployees, getEmployeesById } from "../../lib/api/internal-apis/employees";
import { getOrderDetails, getOrders } from "../../lib/api/internal-apis/orders";
import { getProductDetails, getProducts } from "../../lib/api/internal-apis/products";
import { getRegionById } from "../../lib/api/internal-apis/regions";
import { getTotalRevenue } from "../../lib/api/internal-apis/revenue";
import { getSupplierDetails, getSuppliers } from "../../lib/api/internal-apis/suppliers";
import { getEmployeeTerritories, getTerritoriesById } from "../../lib/api/internal-apis/territories";
import { createEmployeeZodSchema } from "../../lib/util/schemas/employee-zod-schema";
import { updateCustomerZodSchema } from "../../lib/util/schemas/update-customer-zod-schema";
/* import { ResolverContext } from "../../lib/util/types/context-resolver-types"; */

interface QueryPaginationArgs {
  page: number;
}

interface CustomerMutationArgs {
  id: string;
  accessToken: string;
  customerUserInput: updateCustomerZodSchema;
}

interface CreateEmployeeMutationArgs {
  accessToken: string;
  createEmployeeInput: createEmployeeZodSchema;
}

export const resolvers = {
  Query: {
    getOrders: (_: unknown, args: QueryPaginationArgs) => getOrders(args.page),
    getOrderDetails: (_: unknown, args: { id: number }) => getOrderDetails(args.id),
    getTotalRevenue: () => getTotalRevenue(),
    getEmployees: (_: unknown, args: QueryPaginationArgs) => getEmployees(args.page),
    getCustomers: (_: unknown, args: QueryPaginationArgs) => getCustomers(args.page),
    getCustomerDetails: (_: unknown, args: { id: string }) => getCustomerDetails(args.id),
    getCustomerCountryDistribution: () => getCustomerCountryDistribution(),
    getAllCustomerIDs: (_: unknown, args: { accessToken: string }) => getAllCustomerIDs(args.accessToken),
    getProducts: (_: unknown, args: QueryPaginationArgs) => getProducts(args.page),
    getCategories: (_: unknown, args: QueryPaginationArgs) => getCategories(args.page),
    getSuppliers: (_: unknown, args: QueryPaginationArgs) => getSuppliers(args.page),
    getEmployeeTerritories: (_: unknown, args: { page: number }) => getEmployeeTerritories(args.page),
    getCats: (_: unknown, args: { getDog: boolean }) => getCats(args.getDog)
  },
  Order: {
    customer: (parent: { customer_id: string }) => getCustomerDetails(parent.customer_id),
    employee: (parent: { employee_id: number }) => getEmployeesById(parent.employee_id)
  },
  OrderDetail: {
    product: (parent: { product_id: number }) => getProductDetails(parent.product_id)
  },
  EmployeeTerritory: {
    employee: (parent: { employee_id: number }) => getEmployeesById(parent.employee_id),
    territory: (parent: { territory_id: number }) => getTerritoriesById(parent.territory_id)
  },
  Product: {
    supplier: (parent: { supplier_id: number }) => getSupplierDetails(parent.supplier_id),
    category: (parent: { category_id: number }) => getCategoryDetails(parent.category_id)
  },
  Territory: {
    region: (parent: { region_id: number }) => getRegionById(parent.region_id)
  },
  Mutation: {
    updateCustomer: (_: unknown, args: CustomerMutationArgs) =>
      updateCustomer(args.id, args.accessToken, args.customerUserInput),
    createEmployee: (_: unknown, args: CreateEmployeeMutationArgs) =>
      addEmployees(args.accessToken, args.createEmployeeInput)
  }
};
