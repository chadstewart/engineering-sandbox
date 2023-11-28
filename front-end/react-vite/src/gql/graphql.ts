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

export type Category = {
  __typename?: 'Category';
  category_id: Scalars['ID']['output'];
  category_name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
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
  photo: Scalars['String']['input'];
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
  photo?: Maybe<Scalars['String']['output']>;
  photo_path?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  reports_to?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  title_of_courtesy?: Maybe<Scalars['String']['output']>;
};

export type EmployeeTerritory = {
  __typename?: 'EmployeeTerritory';
  employee?: Maybe<Array<Maybe<Employee>>>;
  employee_id: Scalars['ID']['output'];
  territory?: Maybe<Array<Maybe<Territory>>>;
  territory_id: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmployee?: Maybe<Array<Maybe<Employee>>>;
  updateCustomer?: Maybe<Array<Maybe<Customer>>>;
};


export type MutationCreateEmployeeArgs = {
  authorization: Scalars['String']['input'];
  createEmployeeInput?: InputMaybe<CreateEmployeeInput>;
};


export type MutationUpdateCustomerArgs = {
  authorization: Scalars['String']['input'];
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
  discount?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Array<Maybe<Order>>>;
  order_id: Scalars['ID']['output'];
  product?: Maybe<Array<Maybe<Product>>>;
  product_id: Scalars['ID']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  unit_price?: Maybe<Scalars['Int']['output']>;
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
  unit_price?: Maybe<Scalars['Int']['output']>;
  units_in_stock?: Maybe<Scalars['Int']['output']>;
  units_on_order?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getCategories?: Maybe<Array<Maybe<Category>>>;
  getCustomerDetails?: Maybe<Array<Maybe<Customer>>>;
  getCustomers?: Maybe<Array<Maybe<Customer>>>;
  getEmployeeTerritories?: Maybe<Array<Maybe<EmployeeTerritory>>>;
  getEmployees?: Maybe<Array<Maybe<Employee>>>;
  getOrderDetails?: Maybe<Array<Maybe<OrderDetail>>>;
  getOrders?: Maybe<Array<Maybe<Order>>>;
  getProducts?: Maybe<Array<Maybe<Product>>>;
  getShipppers?: Maybe<Array<Maybe<Shipper>>>;
  getSuppliers?: Maybe<Array<Maybe<Supplier>>>;
};


export type QueryGetCategoriesArgs = {
  authorization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCustomerDetailsArgs = {
  authorization: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type QueryGetCustomersArgs = {
  authorization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetEmployeeTerritoriesArgs = {
  authorization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  territory_id: Scalars['String']['input'];
};


export type QueryGetEmployeesArgs = {
  authorization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetOrderDetailsArgs = {
  authorization: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type QueryGetOrdersArgs = {
  authorization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetProductsArgs = {
  authorization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetShipppersArgs = {
  authorization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSuppliersArgs = {
  authorization: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Region = {
  __typename?: 'Region';
  description?: Maybe<Scalars['String']['output']>;
  region_id: Scalars['ID']['output'];
};

export type Shipper = {
  __typename?: 'Shipper';
  company_name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  shipper_id: Scalars['ID']['output'];
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

export type Territory = {
  __typename?: 'Territory';
  description?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Array<Maybe<Region>>>;
  region_id?: Maybe<Scalars['ID']['output']>;
  territory_id: Scalars['ID']['output'];
};

export type GetOrdersQueryVariables = Exact<{
  authorization: Scalars['String']['input'];
}>;


export type GetOrdersQuery = { __typename?: 'Query', getOrders?: Array<{ __typename?: 'Order', order_id: string } | null> | null };


export const GetOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorization"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOrders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authorization"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorization"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order_id"}}]}}]}}]} as unknown as DocumentNode<GetOrdersQuery, GetOrdersQueryVariables>;