import { Skeleton } from "../../ui/skeleton";
import { GraphQlDataTable } from "../../organisms/graphql-data-table/graphql-data-table";
import { NavUrl } from "../../molecules/pagination-nav/pagination-nav-types";
import { GetProductDataQuery } from "@/gql/graphql";

interface ProductsContentProps {
  content: GetProductDataQuery | undefined;
  isLoading: boolean;
  isRefetching: boolean;
  isRefetchError: boolean;
  error: Error | null;
  page: string;
}

const ProductsContent = ({
  content: data,
  isLoading,
  isRefetching,
  isRefetchError,
  error,
  page
}: ProductsContentProps) => {
  const productsNavUrl: NavUrl = "/products/details/$page";

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

export default ProductsContent;
