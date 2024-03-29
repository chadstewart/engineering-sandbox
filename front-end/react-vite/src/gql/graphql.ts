/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cat = {
  __typename?: 'Cat';
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Category = {
  __typename?: 'Category';
  category_id: Scalars['ID']['output'];
  category_name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Photo>;
};

export type CategoryResponse = {
  __typename?: 'CategoryResponse';
  category?: Maybe<Array<Maybe<Category>>>;
  totalPages: Scalars['Int']['output'];
  totalRows: Scalars['Int']['output'];
};

export type CreateEmployeeInput = {
  address: Scalars['String']['input'];
  birth_date: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  extension: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  hire_date: Scalars['String']['input'];
  home_phone: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  notes: Scalars['String']['input'];
  photo: PhotoInput;
  photo_path: Scalars['String']['input'];
  postal_code: Scalars['String']['input'];
  region: Scalars['String']['input'];
  reports_to: Scalars['Int']['input'];
  territory_id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  title_of_courtesy: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  contact_title?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  customer_id: Scalars['ID']['output'];
  fax?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type CustomerCountryDistribution = {
  __typename?: 'CustomerCountryDistribution';
  country: Scalars['String']['output'];
  customerCount: Scalars['Int']['output'];
};

export type CustomerResponse = {
  __typename?: 'CustomerResponse';
  customer?: Maybe<Array<Maybe<Customer>>>;
  totalPages: Scalars['Int']['output'];
  totalRows: Scalars['Int']['output'];
};

export type CustomerUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  contact_title?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};

export type Employee = {
  __typename?: 'Employee';
  address?: Maybe<Scalars['String']['output']>;
  birth_date?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  employee_id: Scalars['ID']['output'];
  extension?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  hire_date?: Maybe<Scalars['String']['output']>;
  home_phone?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Photo>;
  photo_path?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  reports_to?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  title_of_courtesy?: Maybe<Scalars['String']['output']>;
};

export type EmployeeMutationResponse = {
  __typename?: 'EmployeeMutationResponse';
  address?: Maybe<Scalars['String']['output']>;
  birth_date?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  employee_id: Scalars['ID']['output'];
  extension?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  hire_date?: Maybe<Scalars['String']['output']>;
  home_phone?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Photo>;
  photo_path?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  reports_to?: Maybe<Scalars['Int']['output']>;
  territory_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  title_of_courtesy?: Maybe<Scalars['String']['output']>;
};

export type EmployeeResponse = {
  __typename?: 'EmployeeResponse';
  employee?: Maybe<Array<Maybe<Employee>>>;
  totalPages: Scalars['Int']['output'];
  totalRows: Scalars['Int']['output'];
};

export type EmployeeTerritory = {
  __typename?: 'EmployeeTerritory';
  employee?: Maybe<Array<Maybe<Employee>>>;
  employee_id: Scalars['Int']['output'];
  territory?: Maybe<Array<Maybe<Territory>>>;
  territory_id: Scalars['String']['output'];
};

export type EmployeeTerritoryResponse = {
  __typename?: 'EmployeeTerritoryResponse';
  employee_territory?: Maybe<Array<Maybe<EmployeeTerritory>>>;
  totalPages: Scalars['Int']['output'];
  totalRows: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmployee?: Maybe<EmployeeMutationResponse>;
  updateCustomer?: Maybe<Customer>;
};


export type MutationCreateEmployeeArgs = {
  accessToken: Scalars['String']['input'];
  createEmployeeInput?: InputMaybe<CreateEmployeeInput>;
};


export type MutationUpdateCustomerArgs = {
  accessToken: Scalars['String']['input'];
  customerUserInput?: InputMaybe<CustomerUserInput>;
  id: Scalars['ID']['input'];
};

export type Order = {
  __typename?: 'Order';
  customer?: Maybe<Array<Maybe<Customer>>>;
  customer_id: Scalars['ID']['output'];
  employee?: Maybe<Array<Maybe<Employee>>>;
  employee_id: Scalars['ID']['output'];
  freight?: Maybe<Scalars['Int']['output']>;
  order_date?: Maybe<Scalars['String']['output']>;
  order_id: Scalars['ID']['output'];
  required_date?: Maybe<Scalars['String']['output']>;
  ship_address?: Maybe<Scalars['String']['output']>;
  ship_city?: Maybe<Scalars['String']['output']>;
  ship_country?: Maybe<Scalars['String']['output']>;
  ship_name?: Maybe<Scalars['String']['output']>;
  ship_postal_code?: Maybe<Scalars['String']['output']>;
  ship_region?: Maybe<Scalars['String']['output']>;
  ship_via?: Maybe<Scalars['Int']['output']>;
  shipped_date?: Maybe<Scalars['String']['output']>;
};

export type OrderDetail = {
  __typename?: 'OrderDetail';
  order_date?: Maybe<Scalars['String']['output']>;
  order_id: Scalars['ID']['output'];
  product?: Maybe<Array<Maybe<Product>>>;
  product_id: Scalars['ID']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  shipped_date?: Maybe<Scalars['String']['output']>;
  unit_price?: Maybe<Scalars['String']['output']>;
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  order?: Maybe<Array<Maybe<Order>>>;
  totalPages: Scalars['Int']['output'];
  totalRows: Scalars['Int']['output'];
};

export type Photo = {
  __typename?: 'Photo';
  data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PhotoInput = {
  data?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Array<Maybe<Category>>>;
  category_id: Scalars['ID']['output'];
  discontinued?: Maybe<Scalars['String']['output']>;
  product_id: Scalars['ID']['output'];
  quantity_per_unit?: Maybe<Scalars['String']['output']>;
  reorder_level?: Maybe<Scalars['String']['output']>;
  supplier?: Maybe<Array<Maybe<Supplier>>>;
  supplier_id: Scalars['ID']['output'];
  unit_price?: Maybe<Scalars['String']['output']>;
  units_in_stock?: Maybe<Scalars['Int']['output']>;
  units_on_order?: Maybe<Scalars['Int']['output']>;
};

export type ProductResponse = {
  __typename?: 'ProductResponse';
  product?: Maybe<Array<Maybe<Product>>>;
  totalPages: Scalars['Int']['output'];
  totalRows: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllCustomerIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  getCategories?: Maybe<CategoryResponse>;
  getCats?: Maybe<Array<Maybe<Cat>>>;
  getCustomerCountryDistribution?: Maybe<Array<Maybe<CustomerCountryDistribution>>>;
  getCustomerDetails?: Maybe<Array<Maybe<Customer>>>;
  getCustomers?: Maybe<CustomerResponse>;
  getEmployeeTerritories?: Maybe<EmployeeTerritoryResponse>;
  getEmployees?: Maybe<EmployeeResponse>;
  getOrderDetails?: Maybe<Array<Maybe<OrderDetail>>>;
  getOrders?: Maybe<OrderResponse>;
  getProducts?: Maybe<ProductResponse>;
  getShipppers?: Maybe<ShipperResponse>;
  getSuppliers?: Maybe<SupplierResponse>;
  getTotalRevenue?: Maybe<Revenue>;
};


export type QueryGetAllCustomerIDsArgs = {
  accessToken: Scalars['String']['input'];
};


export type QueryGetCategoriesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCatsArgs = {
  getDog?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetCustomerDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCustomersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEmployeeTerritoriesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEmployeesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetOrderDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOrdersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetProductsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetShipppersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSuppliersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Region = {
  __typename?: 'Region';
  region_description?: Maybe<Scalars['String']['output']>;
  region_id: Scalars['ID']['output'];
};

export type Revenue = {
  __typename?: 'Revenue';
  total_revenue: Scalars['Int']['output'];
};

export type Shipper = {
  __typename?: 'Shipper';
  company_name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  shipper_id: Scalars['ID']['output'];
};

export type ShipperResponse = {
  __typename?: 'ShipperResponse';
  shipper?: Maybe<Array<Maybe<Shipper>>>;
  totalPages: Scalars['Int']['output'];
  totalRows: Scalars['Int']['output'];
};

export type Supplier = {
  __typename?: 'Supplier';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  contact_title?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  homepage?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  suppier_id: Scalars['ID']['output'];
};

export type SupplierResponse = {
  __typename?: 'SupplierResponse';
  supplier?: Maybe<Array<Maybe<Supplier>>>;
  totalPages: Scalars['Int']['output'];
  totalRows: Scalars['Int']['output'];
};

export type Territory = {
  __typename?: 'Territory';
  description?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Array<Maybe<Region>>>;
  region_id?: Maybe<Scalars['ID']['output']>;
  territory_id: Scalars['ID']['output'];
};

export type GetCatsQueryVariables = Exact<{
  getDog?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetCatsQuery = { __typename?: 'Query', getCats?: Array<{ __typename?: 'Cat', url?: string | null, width?: number | null, height?: number | null } | null> | null };

export type GetCustomerDataQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCustomerDataQuery = { __typename?: 'Query', getCustomers?: { __typename?: 'CustomerResponse', totalPages: number, customer?: Array<{ __typename?: 'Customer', company_name?: string | null, contact_name?: string | null, contact_title?: string | null, city?: string | null, region?: string | null } | null> | null } | null };

export type UpdateCustomerMutationVariables = Exact<{
  updateCustomerId: Scalars['ID']['input'];
  accessToken: Scalars['String']['input'];
  customerUserInput?: InputMaybe<CustomerUserInput>;
}>;


export type UpdateCustomerMutation = { __typename?: 'Mutation', updateCustomer?: { __typename?: 'Customer', customer_id: string } | null };

export type GetAllCustomerIDsQueryVariables = Exact<{
  accessToken: Scalars['String']['input'];
}>;


export type GetAllCustomerIDsQuery = { __typename?: 'Query', getAllCustomerIDs?: Array<string | null> | null };

export type GetHomeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeDataQuery = { __typename?: 'Query', getOrders?: { __typename?: 'OrderResponse', totalRows: number } | null, getTotalRevenue?: { __typename?: 'Revenue', total_revenue: number } | null, getProducts?: { __typename?: 'ProductResponse', totalRows: number } | null, getCustomers?: { __typename?: 'CustomerResponse', totalRows: number } | null, getCustomerCountryDistribution?: Array<{ __typename?: 'CustomerCountryDistribution', country: string, customerCount: number } | null> | null };

export type GetOrderDataQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetOrderDataQuery = { __typename?: 'Query', getOrders?: { __typename?: 'OrderResponse', totalPages: number, order?: Array<{ __typename?: 'Order', order_date?: string | null, shipped_date?: string | null, ship_name?: string | null, ship_country?: string | null, ship_city?: string | null, ship_address?: string | null } | null> | null } | null };

export type GetProductDataQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetProductDataQuery = { __typename?: 'Query', getProducts?: { __typename?: 'ProductResponse', totalPages: number, product?: Array<{ __typename?: 'Product', unit_price?: string | null, units_in_stock?: number | null, units_on_order?: number | null, discontinued?: string | null } | null> | null } | null };


export const GetCatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getDog"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getDog"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getDog"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<GetCatsQuery, GetCatsQueryVariables>;
export const GetCustomerDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCustomers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_title"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"region"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetCustomerDataQuery, GetCustomerDataQueryVariables>;
export const UpdateCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerUserInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_id"}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerMutation, UpdateCustomerMutationVariables>;
export const GetAllCustomerIDsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllCustomerIDs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCustomerIDs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}}]}]}}]} as unknown as DocumentNode<GetAllCustomerIDsQuery, GetAllCustomerIDsQueryVariables>;
export const GetHomeDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHomeData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOrders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalRows"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getTotalRevenue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total_revenue"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalRows"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getCustomers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalRows"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getCustomerCountryDistribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"customerCount"}}]}}]}}]} as unknown as DocumentNode<GetHomeDataQuery, GetHomeDataQueryVariables>;
export const GetOrderDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrderData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOrders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order_date"}},{"kind":"Field","name":{"kind":"Name","value":"shipped_date"}},{"kind":"Field","name":{"kind":"Name","value":"ship_name"}},{"kind":"Field","name":{"kind":"Name","value":"ship_country"}},{"kind":"Field","name":{"kind":"Name","value":"ship_city"}},{"kind":"Field","name":{"kind":"Name","value":"ship_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetOrderDataQuery, GetOrderDataQueryVariables>;
export const GetProductDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unit_price"}},{"kind":"Field","name":{"kind":"Name","value":"units_in_stock"}},{"kind":"Field","name":{"kind":"Name","value":"units_on_order"}},{"kind":"Field","name":{"kind":"Name","value":"discontinued"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetProductDataQuery, GetProductDataQueryVariables>;