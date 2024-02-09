import ProductsContent from "@/components/pages/products/products-content";

const storyConfig = {
  title: "Design System/Pages/Products"
};

export default storyConfig;

const testData = {
  getProducts: {
    product: [
      {
        unit_price: "18",
        units_in_stock: 39,
        units_on_order: 0,
        discontinued: "1"
      },
      {
        unit_price: "19",
        units_in_stock: 17,
        units_on_order: 40,
        discontinued: "1"
      },
      {
        unit_price: "10",
        units_in_stock: 13,
        units_on_order: 70,
        discontinued: "0"
      },
      {
        unit_price: "22",
        units_in_stock: 53,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "21.35",
        units_in_stock: 0,
        units_on_order: 0,
        discontinued: "1"
      },
      {
        unit_price: "25",
        units_in_stock: 120,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "30",
        units_in_stock: 15,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "40",
        units_in_stock: 6,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "97",
        units_in_stock: 29,
        units_on_order: 0,
        discontinued: "1"
      },
      {
        unit_price: "31",
        units_in_stock: 31,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "21",
        units_in_stock: 22,
        units_on_order: 30,
        discontinued: "0"
      },
      {
        unit_price: "38",
        units_in_stock: 86,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "6",
        units_in_stock: 24,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "23.25",
        units_in_stock: 35,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "13",
        units_in_stock: 39,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "17.45",
        units_in_stock: 29,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "39",
        units_in_stock: 0,
        units_on_order: 0,
        discontinued: "1"
      },
      {
        unit_price: "62.5",
        units_in_stock: 42,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "9.2",
        units_in_stock: 25,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "81",
        units_in_stock: 40,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "10",
        units_in_stock: 3,
        units_on_order: 40,
        discontinued: "0"
      },
      {
        unit_price: "21",
        units_in_stock: 104,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "9",
        units_in_stock: 61,
        units_on_order: 0,
        discontinued: "0"
      },
      {
        unit_price: "4.5",
        units_in_stock: 20,
        units_on_order: 0,
        discontinued: "1"
      },
      {
        unit_price: "14",
        units_in_stock: 76,
        units_on_order: 0,
        discontinued: "0"
      }
    ],
    totalPages: 4
  }
};

export const ProductsStory = () => (
  <ProductsContent
    content={testData}
    isLoading={false}
    error={null}
    isRefetching={false}
    isRefetchError={false}
    page="1"
  />
);
