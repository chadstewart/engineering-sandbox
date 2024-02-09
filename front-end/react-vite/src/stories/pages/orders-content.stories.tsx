import OrdersContent from "@/components/pages/orders/orders-content";

const storyConfig = {
  title: "Design System/Pages/Orders"
};

export default storyConfig;

const testData = {
  getOrders: {
    order: [
      {
        order_date: "1996-07-04T00:00:00.000Z",
        shipped_date: "1996-07-16T00:00:00.000Z",
        ship_name: "Vins et alcools Chevalier",
        ship_country: "France",
        ship_city: "Reims",
        ship_address: "59 rue de l'Abbaye"
      },
      {
        order_date: "1996-07-05T00:00:00.000Z",
        shipped_date: "1996-07-10T00:00:00.000Z",
        ship_name: "Toms Spezialitäten",
        ship_country: "Germany",
        ship_city: "Münster",
        ship_address: "Luisenstr. 48"
      },
      {
        order_date: "1996-07-08T00:00:00.000Z",
        shipped_date: "1996-07-12T00:00:00.000Z",
        ship_name: "Hanari Carnes",
        ship_country: "Brazil",
        ship_city: "Rio de Janeiro",
        ship_address: "Rua do Paço, 67"
      },
      {
        order_date: "1996-07-08T00:00:00.000Z",
        shipped_date: "1996-07-15T00:00:00.000Z",
        ship_name: "Victuailles en stock",
        ship_country: "France",
        ship_city: "Lyon",
        ship_address: "2, rue du Commerce"
      },
      {
        order_date: "1996-07-09T00:00:00.000Z",
        shipped_date: "1996-07-11T00:00:00.000Z",
        ship_name: "Suprêmes délices",
        ship_country: "Belgium",
        ship_city: "Charleroi",
        ship_address: "Boulevard Tirou, 255"
      },
      {
        order_date: "1996-07-10T00:00:00.000Z",
        shipped_date: "1996-07-16T00:00:00.000Z",
        ship_name: "Hanari Carnes",
        ship_country: "Brazil",
        ship_city: "Rio de Janeiro",
        ship_address: "Rua do Paço, 67"
      },
      {
        order_date: "1996-07-11T00:00:00.000Z",
        shipped_date: "1996-07-23T00:00:00.000Z",
        ship_name: "Chop-suey Chinese",
        ship_country: "Switzerland",
        ship_city: "Bern",
        ship_address: "Hauptstr. 31"
      },
      {
        order_date: "1996-07-12T00:00:00.000Z",
        shipped_date: "1996-07-15T00:00:00.000Z",
        ship_name: "Richter Supermarkt",
        ship_country: "Switzerland",
        ship_city: "Genève",
        ship_address: "Starenweg 5"
      },
      {
        order_date: "1996-07-15T00:00:00.000Z",
        shipped_date: "1996-07-17T00:00:00.000Z",
        ship_name: "Wellington Importadora",
        ship_country: "Brazil",
        ship_city: "Resende",
        ship_address: "Rua do Mercado, 12"
      },
      {
        order_date: "1996-07-16T00:00:00.000Z",
        shipped_date: "1996-07-22T00:00:00.000Z",
        ship_name: "HILARION-Abastos",
        ship_country: "Venezuela",
        ship_city: "San Cristóbal",
        ship_address: "Carrera 22 con Ave. Carlos Soublette #8-35"
      },
      {
        order_date: "1996-07-17T00:00:00.000Z",
        shipped_date: "1996-07-23T00:00:00.000Z",
        ship_name: "Ernst Handel",
        ship_country: "Austria",
        ship_city: "Graz",
        ship_address: "Kirchgasse 6"
      },
      {
        order_date: "1996-07-18T00:00:00.000Z",
        shipped_date: "1996-07-25T00:00:00.000Z",
        ship_name: "Centro comercial Moctezuma",
        ship_country: "Mexico",
        ship_city: "México D.F.",
        ship_address: "Sierras de Granada 9993"
      },
      {
        order_date: "1996-07-19T00:00:00.000Z",
        shipped_date: "1996-07-29T00:00:00.000Z",
        ship_name: "Ottilies Käseladen",
        ship_country: "Germany",
        ship_city: "Köln",
        ship_address: "Mehrheimerstr. 369"
      },
      {
        order_date: "1996-07-19T00:00:00.000Z",
        shipped_date: "1996-07-30T00:00:00.000Z",
        ship_name: "Que Delícia",
        ship_country: "Brazil",
        ship_city: "Rio de Janeiro",
        ship_address: "Rua da Panificadora, 12"
      },
      {
        order_date: "1996-07-22T00:00:00.000Z",
        shipped_date: "1996-07-25T00:00:00.000Z",
        ship_name: "Rattlesnake Canyon Grocery",
        ship_country: "USA",
        ship_city: "Albuquerque",
        ship_address: "2817 Milton Dr."
      },
      {
        order_date: "1996-07-23T00:00:00.000Z",
        shipped_date: "1996-07-31T00:00:00.000Z",
        ship_name: "Ernst Handel",
        ship_country: "Austria",
        ship_city: "Graz",
        ship_address: "Kirchgasse 6"
      },
      {
        order_date: "1996-07-24T00:00:00.000Z",
        shipped_date: "1996-08-23T00:00:00.000Z",
        ship_name: "Folk och fä HB",
        ship_country: "Sweden",
        ship_city: "Bräcke",
        ship_address: "Åkergatan 24"
      },
      {
        order_date: "1996-07-25T00:00:00.000Z",
        shipped_date: "1996-08-12T00:00:00.000Z",
        ship_name: "Blondel père et fils",
        ship_country: "France",
        ship_city: "Strasbourg",
        ship_address: "24, place Kléber"
      },
      {
        order_date: "1996-07-26T00:00:00.000Z",
        shipped_date: "1996-07-31T00:00:00.000Z",
        ship_name: "Wartian Herkku",
        ship_country: "Finland",
        ship_city: "Oulu",
        ship_address: "Torikatu 38"
      },
      {
        order_date: "1996-07-29T00:00:00.000Z",
        shipped_date: "1996-08-06T00:00:00.000Z",
        ship_name: "Frankenversand",
        ship_country: "Germany",
        ship_city: "München",
        ship_address: "Berliner Platz 43"
      },
      {
        order_date: "1996-07-30T00:00:00.000Z",
        shipped_date: "1996-08-02T00:00:00.000Z",
        ship_name: "GROSELLA-Restaurante",
        ship_country: "Venezuela",
        ship_city: "Caracas",
        ship_address: "5ª Ave. Los Palos Grandes"
      },
      {
        order_date: "1996-07-31T00:00:00.000Z",
        shipped_date: "1996-08-09T00:00:00.000Z",
        ship_name: "White Clover Markets",
        ship_country: "USA",
        ship_city: "Seattle",
        ship_address: "1029 - 12th Ave. S."
      },
      {
        order_date: "1996-08-01T00:00:00.000Z",
        shipped_date: "1996-08-02T00:00:00.000Z",
        ship_name: "Wartian Herkku",
        ship_country: "Finland",
        ship_city: "Oulu",
        ship_address: "Torikatu 38"
      },
      {
        order_date: "1996-08-01T00:00:00.000Z",
        shipped_date: "1996-08-30T00:00:00.000Z",
        ship_name: "Split Rail Beer & Ale",
        ship_country: "USA",
        ship_city: "Lander",
        ship_address: "P.O. Box 555"
      },
      {
        order_date: "1996-08-02T00:00:00.000Z",
        shipped_date: "1996-08-06T00:00:00.000Z",
        ship_name: "Rattlesnake Canyon Grocery",
        ship_country: "USA",
        ship_city: "Albuquerque",
        ship_address: "2817 Milton Dr."
      }
    ],
    totalPages: 34
  }
};

export const OrdersStory = () => (
  <OrdersContent
    content={testData}
    isLoading={false}
    error={null}
    isRefetching={false}
    isRefetchError={false}
    page="1"
  />
);
