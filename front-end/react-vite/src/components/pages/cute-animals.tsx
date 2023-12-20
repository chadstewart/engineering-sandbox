import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getCats } from "@/lib/api/graphql/internal-apis/cats";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../atoms/button/button";
import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { updateTitle } from "@/lib/util/update-title";

const MAX_REFRESH = 5;

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

  const handleClickSwitch = () => {
    setGetDog((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center gap-4 flex-col p-4">
      {!(queryError || queryRefetchError) && (
        <div className="flex justify-end gap-2">
          Cats
          <Switch checked={getDog} onClick={handleClickSwitch} />
          Dogs
        </div>
      )}
      <div className="flex flex-wrap gap-6 justify-center">
        {cats?.getCats &&
          cats.getCats.map((cat, index) => (
            <Card key={index} className="max-w-[250px]">
              <CardHeader>This is a test.</CardHeader>
              <CardContent>
                <img src={cat?.url ? cat.url : undefined} alt={`Cutie #${index + 1}`} />
              </CardContent>
            </Card>
          ))}
        {(queryLoading || queryReFetching || mutationPending) && (
          <>
            <Card className="min-w-[250px]">
              <CardHeader>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardContent>
            </Card>
            <Card className="min-w-[250px]">
              <CardHeader>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardContent>
            </Card>
            <Card className="min-w-[250px]">
              <CardHeader>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </CardContent>
            </Card>
          </>
        )}
        {(queryError || queryRefetchError) && <div>Well that's not good...</div>}
      </div>
      {cats?.getCats && (
        <Button onClick={handleClickButton} disabled={mutationError || refreshes >= MAX_REFRESH ? true : false}>
          {mutationPending && <Skeleton className="w-[50px] h-[20px] rounded-full" />}
          {mutationError && "Well that's not good"}
          {!mutationError && !mutationPending && refreshes < MAX_REFRESH && "Get more cuties!"}
          {!mutationPending && refreshes >= MAX_REFRESH && "That's enough cuties!"}
        </Button>
      )}
    </div>
  );
};

export default CuteAnimals;
