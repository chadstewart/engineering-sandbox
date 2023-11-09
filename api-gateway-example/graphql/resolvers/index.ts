import { getOrderDtails, getOrders } from "../../lib/api/internal-apis/orders";
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
    getOrderDetails: (_: any, args: { id: string }, context: ResolverContext) => getOrderDtails(args.id),
    getEmployees: (_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getCustomers: (_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getCustomerDetails: (_: any, args: { id: string }, context: ResolverContext) => null,
    getProducts:(_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getCategories: (_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getSuppliers: (_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getEmployeeTerritories: (_: any, args: QueryPaginationArgs, context: ResolverContext) => null
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