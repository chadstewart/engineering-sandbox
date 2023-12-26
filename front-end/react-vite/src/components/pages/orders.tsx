import { updateTitle } from "@/lib/util/update-title";
import { useQuery } from "@tanstack/react-query";
import { getOrderData } from "@/lib/api/graphql/internal-apis/orders";
import { Skeleton } from "../ui/skeleton";
import { GraphQlDataTable } from "../organisms/graphql-data-table/graphql-data-table";

export const Orders = () => {
  updateTitle("Orders");

  const { data, isLoading, error } = useQuery({
    queryKey: ["responseData"],
    queryFn: () => getOrderData(1)
  });

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {isLoading && <Skeleton className="w-72 h-40" />}
      {error && <div>That's not good...</div>}
      {data?.getOrders?.order && <GraphQlDataTable responseObject={data.getOrders.order as object[]} />}
    </div>
  );
};
