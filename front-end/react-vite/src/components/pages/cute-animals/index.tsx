import { useMutation, useQuery } from "@tanstack/react-query";
import { getCats } from "@/lib/api/graphql/internal-apis/cats";
import { useEffect, useState } from "react";
import { updateTitle } from "@/lib/util/update-title";
import CuteAnimalsContent from "./cute-animals";

const CuteAnimals = () => {
  updateTitle("Cute Animals");

  const [getDog, setGetDog] = useState(false);

  const {
    data: queryData,
    isLoading: queryLoading,
    refetch: refetchQuery,
    isRefetching: queryReFetching,
    error: queryError,
    isRefetchError: queryRefetchError
  } = useQuery({
    queryKey: ["responseData"],
    queryFn: () => getCats(getDog)
  });

  const {
    mutate,
    isPending: mutationPending,
    error: mutationError
  } = useMutation({
    mutationFn: () => getCats(getDog),
    onSuccess: (data) =>
      setCats((prevState) => {
        if (prevState?.getCats && data?.getCats) {
          const newState = {
            ...prevState
          };

          newState.getCats?.push(...data.getCats);

          return newState;
        }

        return prevState;
      })
  });

  const [cats, setCats] = useState<typeof queryData>();
  const [refreshes, setRefreshes] = useState(1);

  useEffect(() => {
    setCats(queryData);
  }, [queryData]);

  useEffect(() => {
    setCats({});
    refetchQuery();
    setRefreshes(1);
  }, [refetchQuery, getDog]);

  const handleClickButton = () => {
    mutate();
    setRefreshes((prevState) => prevState + 1);
  };

  return (
    <CuteAnimalsContent
      content={cats}
      queryError={queryError}
      queryRefetchError={queryRefetchError}
      queryLoading={queryLoading}
      queryReFetching={queryReFetching}
      mutationPending={mutationPending}
      mutationError={mutationError}
      refreshes={refreshes}
      getDog={getDog}
      setGetDog={setGetDog}
      handleClickButton={handleClickButton}
    />
  );
};

export default CuteAnimals;
