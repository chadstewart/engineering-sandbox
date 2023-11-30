import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getCats } from "@/lib/api/graphql/internal-apis/cats";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../atoms/button/button";
import { useEffect, useState } from "react";

const MAX_REFRESH = 5;

const Cats = () => {
  const [refreshes, setRefreshes] = useState(0);
  
  const { data: queryData, isLoading: queryLoading, error: queryError } = useQuery({
    queryKey: ["responseData"],
    queryFn: () => getCats(false)
  });
  
  const { mutate, isPending: mutationPending, error: mutationError } = useMutation({
    mutationFn: () => getCats(false),
    onSuccess: data => setCats(prevState => {
      if(prevState?.getCats && data?.getCats) return {
        ...prevState,
        getCats: [
          ...prevState.getCats,
          ...data.getCats
        ]
      }
    })
  });

  const [cats, setCats] = useState<typeof queryData>();

  useEffect(() => {
    setCats(queryData);
  }, [queryData]);

  const handleClick = () => {
    mutate();
    setRefreshes(prevState => prevState + 1);
  };

  return (
    <div className="flex justify-center gap-4 flex-col p-4">
      <div className="flex flex-wrap gap-6 justify-center">
        {queryLoading &&
          <>
            <Card className="min-w-[250px]">
              <CardHeader>
                <Skeleton className="w-[100px] h-[20px] rounded-full"  />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-[100px] h-[200px] rounded-full"  />
              </CardContent>
            </Card>
            <Card className="min-w-[250px]">
              <CardHeader>
                <Skeleton className="w-[100px] h-[20px] rounded-full"  />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-[100px] h-[200px] rounded-full"  />
              </CardContent>
            </Card>
            <Card className="min-w-[250px]">
              <CardHeader>
                <Skeleton className="w-[100px] h-[20px] rounded-full"  />
              </CardHeader>
              <CardContent>
                <Skeleton className="w-[100px] h-[200px] rounded-full"  />
              </CardContent>
            </Card>
          </>
        }
        {cats?.getCats &&
          cats.getCats.map((cat, index) =>
            <Card key={index} className="max-w-[250px]">
              <CardHeader>
                This is a test.
              </CardHeader>
              <CardContent>
                <img src={cat?.url ? cat.url : undefined} alt={`Cutie #${index + 1}`} />
              </CardContent>
            </Card>
        )}
        {queryError && 
          <div>
            Well that's not good...
          </div>
        }
      </div>
      {cats?.getCats && 
        <Button onClick={handleClick} disabled={mutationError || refreshes >= MAX_REFRESH ? true : false}>
          {mutationPending && <Skeleton className="w-[50px] h-[20px] rounded-full"  />}
          {mutationError && "Well that's not good"}
          {!mutationError && !mutationPending && refreshes < MAX_REFRESH && "Get more cuties!"}
          {refreshes >= MAX_REFRESH && "That's enough cuties!"}
        </Button>
      }
    </div>
  );
};

export default Cats;