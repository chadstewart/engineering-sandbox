import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getCats } from "@/lib/api/graphql/internal-apis/cats";
import { Skeleton } from "../ui/skeleton";

const Cats = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["responseData"],
    queryFn: getCats
  });

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {isLoading &&
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
      {data?.getCats &&
        data.getCats.map((cat, index) =>
          <Card key={index} className="min-w-[250px]">
            <CardHeader>
              This is a test.
            </CardHeader>
            <CardContent>
              <img src={cat?.url ? cat.url : undefined} alt={`Cute Cat #${index + 1}`} />
            </CardContent>
          </Card>
      )}
      {error && 
        <div>
          Well that's not good...
        </div>
      }
    </div>
  );
};

export default Cats;