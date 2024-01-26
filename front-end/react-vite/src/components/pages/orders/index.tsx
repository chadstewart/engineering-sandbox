import { updateTitle } from "@/lib/util/update-title";
import { useQuery } from "@tanstack/react-query";
import { getOrderData } from "@/lib/api/graphql/internal-apis/orders";
import { useEffect } from "react";
import { ordersPageRoute } from "@/router/orders";
import OrdersContent from "./orders-content";
import { useAuth0 } from "@auth0/auth0-react";

const Orders = () => {
  updateTitle("Orders");

  const { getAccessTokenSilently } = useAuth0();

  const { page } = ordersPageRoute.useParams();

  const { data, isLoading, error, refetch, isRefetching, isRefetchError } = useQuery({
    queryKey: ["responseData"],
    queryFn: async () => getOrderData(Number(page), `${await getAccessTokenSilently()}`)
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <OrdersContent
      content={data}
      isLoading={isLoading}
      error={error}
      isRefetching={isRefetching}
      isRefetchError={isRefetchError}
      page={page}
    />
  );
};

export default Orders;
