export const typeDefs = `#graphql
  type Order {
    order_id: ID!
    customer_id: ID!
    employee_id: ID!
    order_date: String
    required_date: String
    shipped_date: String
    ship_via: Int
    freight: Int
    ship_name: String
    ship_address: String
    ship_city: String
    ship_region: String
    ship_postal_code: String
    ship_country: String
    customer: [Customer]
    employee: [Employee]
  }

  type OrderResponse {
    order: [Order]
    totalRows: Int!
    totalPages: Int!
  }

  type OrderDetail {
    order_id: ID!
    product_id: ID!
    unit_price: String
    quantity: Int
    order_date: String
    shipped_date: String
    product: [Product]
  }

  type Revenue {
    total_revenue: Int!
  }

  type Shipper {
    shipper_id: ID!
    company_name: String
    phone: String
  }

  type ShipperResponse {
    shipper: [Shipper]
    totalRows: Int!
    totalPages: Int!
  }

  type Employee {
    employee_id: ID!
    last_name: String
    first_name: String
    title: String
    title_of_courtesy: String
    birth_date: String
    hire_date: String
    address: String
    city: String
    region: String
    postal_code: String
    country: String
    home_phone: String
    extension: String
    photo: String
    notes: String
    reports_to: Int
    photo_path: String
  }

  type EmployeeResponse {
    employee: [Employee]
    totalRows: Int!
    totalPages: Int!
  }

  type Customer {
    customer_id: ID!
    company_name: String
    contact_name: String
    contact_title: String
    address: String
    city: String
    region: String
    postal_code: String
    country: String
    phone: String
    fax: String
  }

  type CustomerResponse {
    customer: [Customer]
    totalRows: Int!
    totalPages: Int!
  }

  type CustomerCountryDistribution {
    country: String!
    customerCount: Int!
  }

  type Product {
    product_id: ID!
    supplier_id: ID!
    category_id: ID!
    quantity_per_unit: String
    unit_price: String
    units_in_stock: Int
    units_on_order: Int
    reorder_level: String
    discontinued: String
    supplier: [Supplier]
    category: [Category]
  }

  type ProductResponse {
    product: [Product]
    totalRows: Int!
    totalPages: Int!
  }

  type Category {
    category_id: ID!
    category_name: String
    description: String
    picture: String
  }

  type CategoryResponse {
    category: [Category]
    totalRows: Int!
    totalPages: Int!
  }

  type Supplier {
    suppier_id: ID!
    company_name: String
    contact_name: String
    contact_title: String
    address: String
    city: String
    region: String
    postal_code: String
    country: String
    phone: String
    fax: String
    homepage: String
  }

  type SupplierResponse {
    supplier: [Supplier]
    totalRows: Int!
    totalPages: Int!
  }

  type EmployeeTerritory {
    employee_id: Int!
    territory_id: String!
    employee: [Employee]
    territory: [Territory]
  }

  type EmployeeTerritoryResponse {
    employee_territory: [EmployeeTerritory]
    totalRows: Int!
    totalPages: Int!
  }

  type Territory {
    territory_id: ID!
    description: String
    region_id: ID
    region: [Region]
  }

  type Region {
    region_id: ID!
    region_description: String
  }

  type Cat {
    id: ID!
    width: Int
    height: Int
    url: String
  }

  input CustomerUserInput {
    contact_name: String
    contact_title: String
    address: String
    city: String
    region: String
    postal_code: String
    country: String
    phone: String
    fax: String
  }

  input CreateEmployeeInput {
    last_name: String!
    first_name: String!
    title: String!
    title_of_courtesy: String!
    birth_date: String!
    hire_date: String!
    address: String!
    city: String!
    region: String!
    postal_code: String!
    country: String!
    home_phone: String!
    extension: String!
    photo: String!
    notes: String!
    reports_to: Int!
    photo_path: String!
    territory_id: ID!
  }

  type Query {
    getOrders(page: Int): OrderResponse
    getOrderDetails(id: ID!): [OrderDetail]
    getTotalRevenue: Revenue
    getShipppers(page: Int): ShipperResponse
    getEmployees(page: Int): EmployeeResponse
    getCustomers(page: Int): CustomerResponse
    getCustomerDetails(id: ID!): [Customer]
    getCustomerCountryDistribution: [CustomerCountryDistribution]
    getProducts(page: Int): ProductResponse
    getCategories(page: Int): CategoryResponse
    getSuppliers(page: Int): SupplierResponse
    getEmployeeTerritories(page: Int): EmployeeTerritoryResponse
    getCats(getDog: Boolean): [Cat]
  }

  type Mutation {
    updateCustomer(id: ID!, customerUserInput: CustomerUserInput): [Customer]
    createEmployee(createEmployeeInput: CreateEmployeeInput): [Employee]
  }
`;
