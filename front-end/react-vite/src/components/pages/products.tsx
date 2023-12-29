import { updateTitle } from "@/lib/util/update-title";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { GraphQlDataTable } from "../organisms/graphql-data-table/graphql-data-table";
import { ordersPageRoute } from "@/router/router";
import { useEffect } from "react";
import { NavUrl } from "../molecules/pagination-nav/pagination-nav-types";
import { getProductData } from "@/lib/api/graphql/internal-apis/products";

const Products = () => {
  updateTitle("Products");

  const productsNavUrl: NavUrl = "/products/details/$page";

  const { page } = ordersPageRoute.useParams();

  const { data, isLoading, error, refetch, isRefetching, isRefetchError } = useQuery({
    queryKey: ["responseData"],
    queryFn: () => getProductData(Number(page))
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {(isLoading || isRefetching) && <Skeleton className="w-72 h-40" />}
      {(error || isRefetchError) && <div>That's not good...</div>}
      {!isRefetching && data?.getProducts?.product && (
        <GraphQlDataTable
          tableCaption="A list of products orders"
          responseObject={data.getProducts?.product as object[]}
          currentPage={Number(page)}
          totalPages={data?.getProducts?.totalPages}
          navUrl={productsNavUrl}
        />
      )}
    </div>
  );
};

export default Products;
