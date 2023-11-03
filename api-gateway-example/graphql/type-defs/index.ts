export const typeDefs = `#graphql
  type Order {
    order_id: ID!
    customer_id: ID!
    employee_id: ID!
    order_date: String
    required_date: String
    shipped_date: String
    ship_via: String
    freight: Shipper
    ship_name: String
    ship_address: String
    ship_city: String
    ship_region: String
    ship_postal_code: String
    ship_country: String
    customer: [Customer]
    employee: [Employee]
  }

  type OrderDetail {
    order_id: ID!
    product_id: ID!
    unit_price: Int
    quantity: Int
    discount: Int
    order: [Order]
    product: [Product]
  }

  type Shipper {
    shipper_id: ID!
    company_name: String
    phone: String
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

  type Product {
    product_id: ID!
    supplier_id: ID!
    category_id: ID!
    quantity_per_unit: String
    unit_price: Int
    units_in_stock: Int
    units_on_order: Int
    reorder_level: String
    discontinued: String
    supplier: [Supplier]
    category: [Category]
  }

  type Category {
    category_id: ID!
    category_name: String
    description: String
    picture: String
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

  type EmployeeTerritory {
    employee_id: ID!
    territory_id: ID!
    employee: [Employee]
    territory: [Territory]
  }

  type Territory {
    territory_id: ID!
    description: String
    region_id: ID
    region: [Region]
  }

  type Region {
    region_id: ID!
    description: String
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
    getOrders(authorization: String!, page: Int): [Order]
    getOrderDetails(authorization: String!, page: Int): [OrderDetail]
    getShipppers(authorization: String!, page: Int): [Shipper]
    getEmployees(authorization: String!, page: Int): [Employee]
    getCustomers(authorization: String!, page: Int): [Customer]
    getCustomerDetails(authorization: String!, id: ID!): [Customer]
    getProducts(authorization: String!, page: Int): [Product]
    getCategories(authorization: String!, page: Int): [Category]
    getSuppliers(authorization: String!, page: Int): [Supplier]
    getEmployeeTerritories(authorization: String!, page: Int): [EmployeeTerritory]
  }

  type Mutation {
    updateCustomer(authorization: String!, id: ID!, customerUserInput: CustomerUserInput): [Customer]
    createEmployee(authorization: String!, createEmployeeInput: CreateEmployeeInput): [Employee]
  }
`;