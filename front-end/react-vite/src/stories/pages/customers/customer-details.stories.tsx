import CustomerDetails from "@/components/pages/customers/details/customers-content";

const storyConfig = {
  title: "Design System/Pages/Customer/Add Customer"
};

export default storyConfig;

const testData = {
  getCustomers: {
    customer: [
      {
        company_name: "Alfreds Futterkiste",
        contact_name: "Maria Anders",
        contact_title: "Sales Representative",
        city: "Berlin",
        region: null
      },
      {
        company_name: "Ana Trujillo Emparedados y helados",
        contact_name: "test",
        contact_title: "Owner",
        city: "México D.F.",
        region: null
      },
      {
        company_name: "test",
        contact_name: "Antonio Moreno",
        contact_title: "Owner",
        city: "México D.F.",
        region: null
      },
      {
        company_name: "Around the Horn",
        contact_name: "Thomas Hardy",
        contact_title: "Sales Representative",
        city: "London",
        region: null
      },
      {
        company_name: "Berglunds snabbköp",
        contact_name: "Christina Berglund",
        contact_title: "Order Administrator",
        city: "Luleå",
        region: null
      },
      {
        company_name: "Blauer See Delikatessen",
        contact_name: "Hanna Moos",
        contact_title: "Sales Representative",
        city: "Mannheim",
        region: null
      },
      {
        company_name: "Blondesddsl père et fils",
        contact_name: "Frédérique Citeaux",
        contact_title: "Marketing Manager",
        city: "Strasbourg",
        region: null
      },
      {
        company_name: "Bólido Comidas preparadas",
        contact_name: "Martín Sommer",
        contact_title: "Owner",
        city: "Madrid",
        region: null
      },
      {
        company_name: "Bon app'",
        contact_name: "Laurence Lebihan",
        contact_title: "Owner",
        city: "Marseille",
        region: null
      },
      {
        company_name: "Bottom-Dollar Markets",
        contact_name: "Elizabeth Lincoln",
        contact_title: "Accounting Manager",
        city: "Tsawassen",
        region: "BC"
      },
      {
        company_name: "B's Beverages",
        contact_name: "Victoria Ashworth",
        contact_title: "Sales Representative",
        city: "London",
        region: null
      },
      {
        company_name: "Cactus Comidas para llevar",
        contact_name: "Patricio Simpson",
        contact_title: "Sales Agent",
        city: "Buenos Aires",
        region: null
      },
      {
        company_name: "Centro comercial Moctezuma",
        contact_name: "Francisco Chang",
        contact_title: "Marketing Manager",
        city: "México D.F.",
        region: null
      },
      {
        company_name: "Chop-suey Chinese",
        contact_name: "Yang Wang",
        contact_title: "Owner",
        city: "Bern",
        region: null
      },
      {
        company_name: "Comércio Mineiro",
        contact_name: "Pedro Afonso",
        contact_title: "Sales Associate",
        city: "Sao Paulo",
        region: "SP"
      },
      {
        company_name: "Consolidated Holdings",
        contact_name: "Elizabeth Brown",
        contact_title: "Sales Representative",
        city: "London",
        region: null
      },
      {
        company_name: "Drachenblut Delikatessen",
        contact_name: "Sven Ottlieb",
        contact_title: "Order Administrator",
        city: "Aachen",
        region: null
      },
      {
        company_name: "Du monde entier",
        contact_name: "Janine Labrune",
        contact_title: "Owner",
        city: "Nantes",
        region: null
      },
      {
        company_name: "Eastern Connection",
        contact_name: "Ann Devon",
        contact_title: "Sales Agent",
        city: "London",
        region: null
      },
      {
        company_name: "Ernst Handel",
        contact_name: "Roland Mendel",
        contact_title: "Sales Manager",
        city: "Graz",
        region: null
      },
      {
        company_name: "Familia Arquibaldo",
        contact_name: "Aria Cruz",
        contact_title: "Marketing Assistant",
        city: "Sao Paulo",
        region: "SP"
      },
      {
        company_name: "FISSA Fabrica Inter. Salchichas S.A.",
        contact_name: "Diego Roel",
        contact_title: "Accounting Manager",
        city: "Madrid",
        region: null
      },
      {
        company_name: "Folies gourmandes",
        contact_name: "Martine Rancé",
        contact_title: "Assistant Sales Agent",
        city: "Lille",
        region: null
      },
      {
        company_name: "Folk och fä HB",
        contact_name: "Maria Larsson",
        contact_title: "Owner",
        city: "Bräcke",
        region: null
      },
      {
        company_name: "Frankenversand",
        contact_name: "Peter Franken",
        contact_title: "Marketing Manager",
        city: "München",
        region: null
      }
    ],
    totalPages: 4
  }
};

export const AddCustomerStory = () => (
  <CustomerDetails
    content={testData}
    isLoading={false}
    error={null}
    isRefetchError={false}
    isRefetching={false}
    page="1"
  />
);
