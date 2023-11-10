import { getCategories } from "../../lib/api/internal-apis/categories";
import { getCustomerDetails, getCustomers } from "../../lib/api/internal-apis/customers";
import { getEmployees } from "../../lib/api/internal-apis/employees";
import { getOrderDetails, getOrders } from "../../lib/api/internal-apis/orders";
import { getProducts } from "../../lib/api/internal-apis/products";
import { getSuppliers } from "../../lib/api/internal-apis/suppliers";
import { getTerritories } from "../../lib/api/internal-apis/territories";
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
    getOrderDetails: (_: any, args: { id: string }, context: ResolverContext) => getOrderDetails(args.id),
    getEmployees: (_: any, args: QueryPaginationArgs, context: ResolverContext) => getEmployees(args.page),
    getCustomers: (_: any, args: QueryPaginationArgs, context: ResolverContext) => getCustomers(args.page),
    getCustomerDetails: (_: any, args: { id: string }, context: ResolverContext) => getCustomerDetails(args.id),
    getProducts:(_: any, args: QueryPaginationArgs, context: ResolverContext) => getProducts(args.page),
    getCategories: (_: any, args: QueryPaginationArgs, context: ResolverContext) => getCategories(args.page),
    getSuppliers: (_: any, args: QueryPaginationArgs, context: ResolverContext) => getSuppliers(args.page),
    getEmployeeTerritories: (_: any, args: { page: number, territoryId: string}, context: ResolverContext) => getTerritories(args.territoryId, args.page)
  },
  Order: {
    customer: (parent: { customer_id: string }, context: ResolverContext) => null,
    employee: (parent: { employee_id: number }, context: ResolverContext) => null
  },
  OrderDetail: {
    order: (parent: { order_id: number }, context: ResolverContext) => null,
    product: (parent: { product_id: number }, context: ResolverContext) => null
  },
  EmployeeTerritory: {
    employee: (parent: { employee_id: number }, context: ResolverContext) => null,
    territory: (parent: { territory_id: number }, context: ResolverContext) => null
  },
  Product: {
    supplier: (parent: { supplier_id: number }, context: ResolverContext) => null,
    category: (parent: { category_id: number }, context: ResolverContext) => null
  },
  Territory: {
    region: (parent: { region_id: number }, context: ResolverContext) => null
  },
  Mutation: {
    updateCustomer: (_: any, args: CustomerMutationArgs, context: ResolverContext) => null,
    createEmployee: (_: any, args: CreateEmployeeMutationArgs, context: ResolverContext) => null
  }
};