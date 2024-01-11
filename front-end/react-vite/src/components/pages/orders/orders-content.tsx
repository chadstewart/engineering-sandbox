import { Skeleton } from "../../ui/skeleton";
import { GraphQlDataTable } from "../../organisms/graphql-data-table/graphql-data-table";
import { NavUrl } from "@/components/molecules/pagination-nav/pagination-nav-types";
import { GetOrderDataQuery } from "@/gql/graphql";

interface OrdersContentProps {
  content: GetOrderDataQuery | undefined;
  isLoading: boolean;
  error: Error | null;
  isRefetching: boolean;
  isRefetchError: boolean;
  page: string;
}

const OrdersContent = ({ content: data, isLoading, error, isRefetching, isRefetchError, page }: OrdersContentProps) => {
  const orderNavUrl: NavUrl = "/orders/details/$page";

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

export default OrdersContent;
