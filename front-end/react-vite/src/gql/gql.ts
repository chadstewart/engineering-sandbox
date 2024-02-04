/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query GetCats($getDog: Boolean) {\n      getCats(getDog: $getDog) {\n        url\n        width\n        height\n      }\n    }": types.GetCatsDocument,
    "\n      query GetCustomerData($page: Int) {\n        getCustomers(page: $page) {\n          customer {\n            company_name\n            contact_name\n            contact_title\n            city\n            region\n          }\n          totalPages\n        }\n      }\n    ": types.GetCustomerDataDocument,
    "\n      mutation UpdateCustomer($updateCustomerId: ID!, $accessToken: String!, $customerUserInput: CustomerUserInput) {\n        updateCustomer(id: $updateCustomerId, accessToken: $accessToken, customerUserInput: $customerUserInput) {\n          customer_id\n        }\n      }\n    ": types.UpdateCustomerDocument,
    "\n      query getAllCustomerIDs($accessToken: String!) {\n        getAllCustomerIDs(accessToken: $accessToken)\n      }\n    ": types.GetAllCustomerIDsDocument,
    "\n      query GetHomeData {\n        getOrders {\n          totalRows\n        }\n        getTotalRevenue {\n          total_revenue\n        }\n        getProducts {\n          totalRows\n        }\n        getCustomers {\n          totalRows\n        }\n        getCustomerCountryDistribution {\n          country\n          customerCount\n        }\n      }\n    ": types.GetHomeDataDocument,
    "\n      query GetOrderData($page: Int) {\n        getOrders(page: $page) {\n          order {\n            order_date\n            shipped_date\n            ship_name\n            ship_country\n            ship_city\n            ship_address\n          }\n          totalPages\n        }\n      }\n    ": types.GetOrderDataDocument,
    "\n      query GetProductData($page: Int) {\n        getProducts(page: $page) {\n          product {\n            unit_price\n            units_in_stock\n            units_on_order\n            discontinued\n          }\n          totalPages\n        }\n      }\n    ": types.GetProductDataDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetCats($getDog: Boolean) {\n      getCats(getDog: $getDog) {\n        url\n        width\n        height\n      }\n    }"): (typeof documents)["\n    query GetCats($getDog: Boolean) {\n      getCats(getDog: $getDog) {\n        url\n        width\n        height\n      }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetCustomerData($page: Int) {\n        getCustomers(page: $page) {\n          customer {\n            company_name\n            contact_name\n            contact_title\n            city\n            region\n          }\n          totalPages\n        }\n      }\n    "): (typeof documents)["\n      query GetCustomerData($page: Int) {\n        getCustomers(page: $page) {\n          customer {\n            company_name\n            contact_name\n            contact_title\n            city\n            region\n          }\n          totalPages\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation UpdateCustomer($updateCustomerId: ID!, $accessToken: String!, $customerUserInput: CustomerUserInput) {\n        updateCustomer(id: $updateCustomerId, accessToken: $accessToken, customerUserInput: $customerUserInput) {\n          customer_id\n        }\n      }\n    "): (typeof documents)["\n      mutation UpdateCustomer($updateCustomerId: ID!, $accessToken: String!, $customerUserInput: CustomerUserInput) {\n        updateCustomer(id: $updateCustomerId, accessToken: $accessToken, customerUserInput: $customerUserInput) {\n          customer_id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query getAllCustomerIDs($accessToken: String!) {\n        getAllCustomerIDs(accessToken: $accessToken)\n      }\n    "): (typeof documents)["\n      query getAllCustomerIDs($accessToken: String!) {\n        getAllCustomerIDs(accessToken: $accessToken)\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetHomeData {\n        getOrders {\n          totalRows\n        }\n        getTotalRevenue {\n          total_revenue\n        }\n        getProducts {\n          totalRows\n        }\n        getCustomers {\n          totalRows\n        }\n        getCustomerCountryDistribution {\n          country\n          customerCount\n        }\n      }\n    "): (typeof documents)["\n      query GetHomeData {\n        getOrders {\n          totalRows\n        }\n        getTotalRevenue {\n          total_revenue\n        }\n        getProducts {\n          totalRows\n        }\n        getCustomers {\n          totalRows\n        }\n        getCustomerCountryDistribution {\n          country\n          customerCount\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetOrderData($page: Int) {\n        getOrders(page: $page) {\n          order {\n            order_date\n            shipped_date\n            ship_name\n            ship_country\n            ship_city\n            ship_address\n          }\n          totalPages\n        }\n      }\n    "): (typeof documents)["\n      query GetOrderData($page: Int) {\n        getOrders(page: $page) {\n          order {\n            order_date\n            shipped_date\n            ship_name\n            ship_country\n            ship_city\n            ship_address\n          }\n          totalPages\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query GetProductData($page: Int) {\n        getProducts(page: $page) {\n          product {\n            unit_price\n            units_in_stock\n            units_on_order\n            discontinued\n          }\n          totalPages\n        }\n      }\n    "): (typeof documents)["\n      query GetProductData($page: Int) {\n        getProducts(page: $page) {\n          product {\n            unit_price\n            units_in_stock\n            units_on_order\n            discontinued\n          }\n          totalPages\n        }\n      }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;