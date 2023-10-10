import { categories, categoriesGraphQL } from "../../models/categories";
import { customerDetails, customerDetailsGraphQL, customers, updateCustomer } from "../../models/customers";
import { createEmployee, employees, employeesFromIdGraphQL } from "../../models/employees";
import { orderDetailsGraphQL, orders, ordersGraphQL } from "../../models/orders";
import { productDetailsGraphQL, products } from "../../models/products";
import { regionsGraphQL } from "../../models/region";
import { supplier, supplierGraphQL } from "../../models/suppliers";
import { employeeTerritoriesGraphQL, territoriesGraphQL } from "../../models/territories";
import { checkResolverPerformance } from "../../util/performance-test";
import { createEmployeeZodSchema } from "../../util/schemas/employee-zod-schema";
import { updateCustomerZodSchema } from "../../util/schemas/update-customer-zod-schema";
import { ResolverContext } from "../../util/types/context-resolver-types";

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
    getOrders: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => await checkResolverPerformance(context, () => orders(args.page)),
    getOrderDetails: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => await checkResolverPerformance(context, () => orderDetailsGraphQL(args.page)),
    getEmployees: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => await checkResolverPerformance(context, () => employees(args.page)),
    getCustomers: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => await checkResolverPerformance(context, () => customers(args.page)),
    getCustomerDetails: async (_: any, args: { id: string }, context: ResolverContext) => await checkResolverPerformance(context, () => customerDetails(args.id)),
    getProducts: async(_: any, args: QueryPaginationArgs, context: ResolverContext) => await checkResolverPerformance(context, () => products(args.page)),
    getCategories: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => await checkResolverPerformance(context, () => categories(args.page)),
    getSuppliers: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => await checkResolverPerformance(context, () => supplier(args.page)),
    getEmployeeTerritories: async (_: any, args: QueryPaginationArgs, context: ResolverContext) => await checkResolverPerformance(context, () => employeeTerritoriesGraphQL(args.page))
  },
  Order: {
    customer: async (parent: { customer_id: string }, context: ResolverContext) => await checkResolverPerformance(context, () => customerDetailsGraphQL(parent.customer_id)),
    employee: async (parent: { employee_id: number }, context: ResolverContext) => await checkResolverPerformance(context, () => employeesFromIdGraphQL(parent.employee_id))
  },
  OrderDetail: {
    order: async (parent: { order_id: number }, context: ResolverContext) => await checkResolverPerformance(context, () => ordersGraphQL(parent.order_id)),
    product: async (parent: { product_id: number }, context: ResolverContext) => await checkResolverPerformance(context, () => productDetailsGraphQL(parent.product_id))
  },
  EmployeeTerritory: {
    employee: async (parent: { employee_id: number }, context: ResolverContext) => await checkResolverPerformance(context, () => employeesFromIdGraphQL(parent.employee_id)),
    territory: async (parent: { territory_id: number }, context: ResolverContext) => await checkResolverPerformance(context, () => territoriesGraphQL(parent.territory_id))
  },
  Product: {
    supplier: async (parent: { supplier_id: number }, context: ResolverContext) => await checkResolverPerformance(context, () => supplierGraphQL(parent.supplier_id)),
    category: async (parent: { category_id: number }, context: ResolverContext) => await checkResolverPerformance(context, () => categoriesGraphQL(parent.category_id))
  },
  Territory: {
    region: async (parent: { region_id: number }, context: ResolverContext) => await checkResolverPerformance(context, () => regionsGraphQL(parent.region_id))
  },
  Mutation: {
    updateCustomer: async (_: any, args: CustomerMutationArgs, context: ResolverContext) => await checkResolverPerformance(context, () => updateCustomer(args.id, args.customerUserInput)),
    createEmployee: async (_: any, args: CreateEmployeeMutationArgs, context: ResolverContext) => await checkResolverPerformance(context, () => createEmployee(args.createEmployeeInput))
  }
};