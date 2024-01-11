import { updateTitle } from "@/lib/util/update-title";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getCustomerData } from "@/lib/api/graphql/internal-apis/customers";
import { customersPageRoute } from "@/router/customers";
import CustomersContent from "./customers-content";

const Customers = () => {
  updateTitle("Products");

  const { page } = customersPageRoute.useParams();

  const { data, isLoading, error, refetch, isRefetching, isRefetchError } = useQuery({
    queryKey: ["responseData"],
    queryFn: () => getCustomerData(Number(page))
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <CustomersContent
      content={data}
      isLoading={isLoading}
      error={error}
      isRefetching={isRefetching}
      isRefetchError={isRefetchError}
      page={page}
    />
  );
};

export default Customers;
