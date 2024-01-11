import { Skeleton } from "../../ui/skeleton";
import { GraphQlDataTable } from "../../organisms/graphql-data-table/graphql-data-table";
import { NavUrl } from "../../molecules/pagination-nav/pagination-nav-types";
import { GetCustomerDataQuery } from "@/gql/graphql";

interface CustomersContentProps {
  content: GetCustomerDataQuery | undefined;
  isLoading: boolean;
  error: Error | null;
  isRefetching: boolean;
  isRefetchError: boolean;
  page: string;
}

const CustomersContent = ({
  content: data,
  isLoading,
  error,
  isRefetching,
  isRefetchError,
  page
}: CustomersContentProps) => {
  const customersNavUrl: NavUrl = "/customers/details/$page";

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {(isLoading || isRefetching) && <Skeleton className="w-72 h-40" />}
      {(error || isRefetchError) && <div>That's not good...</div>}
      {!isRefetching && data?.getCustomers?.customer && (
        <GraphQlDataTable
          tableCaption="A list of products orders"
          responseObject={data.getCustomers?.customer as object[]}
          currentPage={Number(page)}
          totalPages={data?.getCustomers?.totalPages}
          navUrl={customersNavUrl}
        />
      )}
    </div>
  );
};

export default CustomersContent;
