import { updateTitle } from "@/lib/util/update-title";
import { useQuery } from "@tanstack/react-query";
import { getOrderData } from "@/lib/api/graphql/internal-apis/orders";
import { Skeleton } from "../ui/skeleton";
import { GraphQlDataTable } from "../organisms/graphql-data-table/graphql-data-table";
import { ordersPageRoute } from "@/router/router";
import { useEffect } from "react";
import { NavUrl } from "../molecules/pagination-nav/pagination-nav-types";

const Orders = () => {
  updateTitle("Orders");

  const orderNavUrl: NavUrl = "/orders/details/$page";

  const { page } = ordersPageRoute.useParams();

  const { data, isLoading, error, refetch, isRefetching, isRefetchError } = useQuery({
    queryKey: ["responseData"],
    queryFn: () => getOrderData(Number(page))
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {(isLoading || isRefetching) && <Skeleton className="w-72 h-40" />}
      {(error || isRefetchError) && <div>That's not good...</div>}
      {!isRefetching && data?.getOrders?.order && (
        <GraphQlDataTable
          tableCaption="A list of current orders"
          responseObject={data.getOrders.order as object[]}
          currentPage={Number(page)}
          totalPages={data?.getOrders?.totalPages}
          navUrl={orderNavUrl}
        />
      )}
    </div>
  );
};

export default Orders;
