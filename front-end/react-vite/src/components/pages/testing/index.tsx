/* 

  Example query for building input pages:

  const { data, isLoading, error, refetch, isRefetching, isRefetchError } = useQuery({
    queryKey: ["responseData"],
    queryFn: async () => getOrderData(Number(page), `${await getAccessTokenSilently()}`)
  });

*/

const Testing = () => {
  return <div>This is a test!</div>;
};

export default Testing;
