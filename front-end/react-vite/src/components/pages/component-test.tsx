import { updateTitle } from "@/lib/util/update-title";
import { Card, CardContent } from "../ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useQuery } from "@tanstack/react-query";
import { getOrderData } from "@/lib/api/graphql/internal-apis/orders";
import { Skeleton } from "../ui/skeleton";

export const ComponentTest = () => {
  updateTitle("Component Test");

  const { data, isLoading, error } = useQuery({
    queryKey: ["responseData"],
    queryFn: () => getOrderData(1)
  });

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {isLoading && <Skeleton className="w-72 h-40" />}
      {error && <div>That's not good...</div>}
      {data?.getOrders?.order && (
        <Card>
          <CardContent>
            <Table>
              <TableCaption>Testing a component.</TableCaption>
              <TableHeader>
                <TableRow>
                  {Object.keys(data.getOrders.order[0] as object).map((key) => (
                    <TableHead className="capitalize">{key.toLowerCase()}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.getOrders.order.map((orderEntry) => (
                  <TableRow>
                    {Object.values(orderEntry as object).map((value) => (
                      <TableCell>{value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
