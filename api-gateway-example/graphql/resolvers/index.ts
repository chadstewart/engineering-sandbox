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
    getOrders: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getOrderDetails: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getEmployees: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getCustomers: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getCustomerDetails: async (_: any, args: { id: string }, context: ResolverContext) => null,
    getProducts: async(_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getCategories: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getSuppliers: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => null,
    getEmployeeTerritories: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => null
  },
  Order: {
    customer: async (parent: { customer_id: string }, context: ResolverContext) => null,
    employee: async (parent: { employee_id: number }, context: ResolverContext) => null
  },
  OrderDetail: {
    order: async (parent: { order_id: number }, context: ResolverContext) => null,
    product: async (parent: { product_id: number }, context: ResolverContext) => null
  },
  EmployeeTerritory: {
    employee: async (parent: { employee_id: number }, context: ResolverContext) => null,
    territory: async (parent: { territory_id: number }, context: ResolverContext) => null
  },
  Product: {
    supplier: async (parent: { supplier_id: number }, context: ResolverContext) => null,
    category: async (parent: { category_id: number }, context: ResolverContext) => null
  },
  Territory: {
    region: async (parent: { region_id: number }, context: ResolverContext) => null
  },
  Mutation: {
    updateCustomer: async (_: any, args: CustomerMutationArgs, context: ResolverContext) => null,
    createEmployee: async (_: any, args: CreateEmployeeMutationArgs, context: ResolverContext) => null
  }
};