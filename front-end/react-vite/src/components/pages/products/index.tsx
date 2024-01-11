import { updateTitle } from "@/lib/util/update-title";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getProductData } from "@/lib/api/graphql/internal-apis/products";
import { productsPageRoute } from "@/router/products";
import ProductsContent from "./products-content";

const Products = () => {
  updateTitle("Products");

  const { page } = productsPageRoute.useParams();

  const { data, isLoading, error, refetch, isRefetching, isRefetchError } = useQuery({
    queryKey: ["responseData"],
    queryFn: () => getProductData(Number(page))
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <ProductsContent
      content={data}
      isLoading={isLoading}
      error={error}
      isRefetching={isRefetching}
      isRefetchError={isRefetchError}
      page={page}
    />
  );
};

export default Products;
