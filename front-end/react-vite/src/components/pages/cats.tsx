import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getCats } from "@/lib/api/graphql/internal-apis/cats";

const Cats = () => {
  const { data } = useQuery({
    queryKey: ["responseData"],
    queryFn: getCats
  });

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {data?.getCats && data.getCats.map((cat, index) =>
      <Card key={index} className="min-w-[250px]">
        <CardHeader>
          This is a test.
        </CardHeader>
        <CardContent>
          <img src={cat?.url ? cat.url : undefined} alt={`Cute Cat #${index + 1}`} />
        </CardContent>
      </Card>
      )}
    </div>
  );
};

export default Cats;