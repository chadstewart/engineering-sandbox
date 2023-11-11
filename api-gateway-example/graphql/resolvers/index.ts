import { getCategories, getCategoryDetails } from "../../lib/api/internal-apis/categories";
import { getCustomerDetails, getCustomers } from "../../lib/api/internal-apis/customers";
import { getEmployees, getEmployeesById } from "../../lib/api/internal-apis/employees";
import { getOrderDetails, getOrders } from "../../lib/api/internal-apis/orders";
import { getProductDetails, getProducts } from "../../lib/api/internal-apis/products";
import { getSupplierDetails, getSuppliers } from "../../lib/api/internal-apis/suppliers";
import { getTerritories, getTerritoriesById } from "../../lib/api/internal-apis/territories";
import { createEmployeeZodSchema } from "../../lib/util/schemas/employee-zod-schema";
import { updateCustomerZodSchema } from "../../lib/util/schemas/update-customer-zod-schema";
import { ResolverContext } from "../../lib/util/types/context-resolver-types";

interface QueryPaginationArgs {
  page: number
}

interface CustomerMutationArgs {
  id: string
  customerUserInput: typeof updateCustomerZodSchema
}

interface CreateEmployeeMutationArgs {
  createEmployeeInput: typeof createEmployeeZodSchema
}

export const resolvers = {
  Query: {
    getOrders: (_: any, args: QueryPaginationArgs, context: ResolverContext) => getOrders(args.page),
    getOrderDetails: (_: any, args: { id: number }, context: ResolverContext) => getOrderDetails(args.id),
    getEmployees: (_: any, args: QueryPaginationArgs, context: ResolverContext) => getEmployees(args.page),
    getCustomers: (_: any, args: QueryPaginationArgs, context: ResolverContext) => getCustomers(args.page),
    getCustomerDetails: (_: any, args: { id: string }, context: ResolverContext) => getCustomerDetails(args.id),
    getProducts:(_: any, args: QueryPaginationArgs, context: ResolverContext) => getProducts(args.page),
    getCategories: (_: any, args: QueryPaginationArgs, context: ResolverContext) => getCategories(args.page),
    getSuppliers: (_: any, args: QueryPaginationArgs, context: ResolverContext) => getSuppliers(args.page),
    getEmployeeTerritories: (_: any, args: { page: number, territory_id: number}, context: ResolverContext) => getTerritories(args.page)
  },
  Order: {
    customer: (parent: { customer_id: string }, context: ResolverContext) => getCustomerDetails(parent.customer_id),
    employee: (parent: { employee_id: number }, context: ResolverContext) => getEmployeesById(parent.employee_id)
  },
  OrderDetail: {
    order: (parent: { order_id: number }, context: ResolverContext) => getOrderDetails(parent.order_id),
    product: (parent: { product_id: number }, context: ResolverContext) => getProductDetails(parent.product_id)
  },
  EmployeeTerritory: {
    employee: (parent: { employee_id: number }, context: ResolverContext) => getEmployeesById(parent.employee_id),
    territory: (parent: { territory_id: number }, context: ResolverContext) => getTerritoriesById(parent.territory_id)
  },
  Product: {
    supplier: (parent: { supplier_id: number }, context: ResolverContext) => getSupplierDetails(parent.supplier_id),
    category: (parent: { category_id: number }, context: ResolverContext) => getCategoryDetails(parent.category_id)
  },
  Territory: {
    region: (parent: { region_id: number }, context: ResolverContext) => null
  },
  Mutation: {
    updateCustomer: (_: any, args: CustomerMutationArgs, context: ResolverContext) => null,
    createEmployee: (_: any, args: CreateEmployeeMutationArgs, context: ResolverContext) => null
  }
};